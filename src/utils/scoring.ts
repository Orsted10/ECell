const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

export const generateFounderScore = async (track: string, answers: { problem: string, build: string, past: string }) => {
  const prompt = `
You are an expert startup accelerator evaluator for "The Foundry". You are analyzing an applicant's "Startup DNA".
The applicant applied for the "${track}" track.

Here are their answers:
1. Problem they notice every day: "${answers.problem}"
2. What they would build with $10,000 in 30 days: "${answers.build}"
3. Past experience/built projects: "${answers.past}"

Evaluate their answers and give them a score out of 99 for:
1. Execution
2. Problem Solving
3. Leadership

Also, calculate an "overall" score (out of 99).
If they wrote very short, single-letter, or nonsensical answers, their scores should be extremely low (e.g., 10-20). 
If they wrote detailed, ambitious, and realistic answers, score them highly.

Return ONLY a valid JSON object matching this structure exactly, with no markdown or extra text:
{
  "overall": number,
  "breakdown": {
    "execution": number,
    "problemSolving": number,
    "leadership": number
  }
}
`;

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama3-8b-8192',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.2,
        response_format: { type: "json_object" }
      })
    });

    if (!response.ok) {
      throw new Error('Failed to fetch from Groq API');
    }

    const data = await response.json();
    const result = JSON.parse(data.choices[0].message.content);
    
    return {
      overall: result.overall || 50,
      breakdown: {
        execution: result.breakdown?.execution || 50,
        problemSolving: result.breakdown?.problemSolving || 50,
        leadership: result.breakdown?.leadership || 50
      }
    };
  } catch (error) {
    console.error('Error generating score via AI:', error);
    // Fallback to deterministic if API fails
    return fallbackGenerateScore(track, answers);
  }
};

const fallbackGenerateScore = (track: string, answers: { problem: string, build: string, past: string }) => {
  let baseScore = 60;
  const totalLength = answers.problem.length + answers.build.length + answers.past.length;
  if (totalLength < 10) baseScore = 20; // Penalize short answers
  else if (totalLength > 100) baseScore += 5;
  else if (totalLength > 300) baseScore += 10;
  else if (totalLength > 600) baseScore += 15;
  
  let execution = 70;
  let problemSolving = 70;
  let leadership = 70;
  
  const hash = track.split('').reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a }, 0);
  const variance = (hash % 10);
  const overall = Math.min(99, baseScore + (variance > 0 ? variance : 5));
  
  return {
    overall,
    breakdown: {
      execution: Math.min(99, execution + variance),
      problemSolving: Math.min(99, problemSolving + (variance % 3)),
      leadership: Math.min(99, leadership + (variance % 5))
    }
  };
};

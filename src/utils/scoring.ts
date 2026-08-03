export const generateFounderScore = (track: string, answers: { problem: string, build: string, past: string }) => {
  // In a real application, this would run through an LLM or complex NLP algorithm.
  // For the frontend demo, we will generate a deterministic but seemingly realistic score 
  // based on the length and track selected.
  
  let baseScore = 60;
  
  // Length of answers adds points
  const totalLength = answers.problem.length + answers.build.length + answers.past.length;
  if (totalLength > 100) baseScore += 5;
  if (totalLength > 300) baseScore += 10;
  if (totalLength > 600) baseScore += 15;
  
  // Track specific boosts (arbitrary for the "DNA" feeling)
  let execution = 70;
  let problemSolving = 70;
  let leadership = 70;
  
  switch(track) {
    case 'Founder':
      leadership += 20; problemSolving += 10;
      break;
    case 'Builder':
      execution += 25; problemSolving += 10;
      break;
    case 'Designer':
      problemSolving += 20; execution += 10;
      break;
    case 'Growth':
      execution += 15; leadership += 15;
      break;
    case 'Operations':
      execution += 20; leadership += 10;
      break;
    case 'AI Engineer':
      problemSolving += 25; execution += 10;
      break;
    default:
      execution += 10; problemSolving += 10; leadership += 10;
  }
  
  // Random variance between -5 and +5 based on the track string hash to make it feel unique per person
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

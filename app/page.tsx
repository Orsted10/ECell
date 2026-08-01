import Hero from "@/components/sections/Hero";
import Vision from "@/components/sections/Vision";
import WhatYouGet from "@/components/sections/WhatYouGet";
import Roadmap from "@/components/sections/Roadmap";
import Events from "@/components/sections/Events";
import Team from "@/components/sections/Team";
import JoinCommunity from "@/components/sections/JoinCommunity";
import Gallery from "@/components/sections/Gallery";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Vision />
      <WhatYouGet />
      <Roadmap />
      <Events />
      <Team />
      <JoinCommunity />
      <Gallery />
      <FAQ />
      <Contact />
    </main>
  );
}

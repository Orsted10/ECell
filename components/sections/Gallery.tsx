"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { staggerContainer, fadeUp } from "@/components/motion/variants";
import { RevealText } from "@/components/ui/RevealText";

const PHOTOS = [
  { src: "/gallery-1.png", alt: "Students brainstorming at night", aspect: "4/5" },
  { src: "https://picsum.photos/seed/ecell-campus/700/500", alt: "Campus collaboration", aspect: "7/5" },
  { src: "https://picsum.photos/seed/ecell-hackathon/600/800", alt: "Hackathon energy", aspect: "3/4" },
  { src: "/gallery-2.png", alt: "Startup pitch presentation", aspect: "3/4" },
  { src: "https://picsum.photos/seed/ecell-launch/700/600", alt: "Launch day celebration", aspect: "7/6" },
  { src: "https://picsum.photos/seed/ecell-mentor/600/700", alt: "Mentorship session", aspect: "6/7" },
];

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Different parallax speeds for the 3 columns
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      id="gallery"
      className="section-pad"
      style={{ background: "transparent" }}
    >
      <div className="container-wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          style={{ marginBottom: "5rem" }}
        >
          <RevealText text="Moments that built<br/>a movement." className="display-3" />
        </motion.div>

        {/* Parallax Masonry */}
        <div ref={containerRef} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="grid-cols-1 md:grid-cols-3 group/gallery">
          
          {/* Column 1 */}
          <motion.div style={{ y: shouldReduce ? 0 : y1, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[PHOTOS[0], PHOTOS[1]].map((photo, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/gallery:opacity-40 hover:!opacity-100" style={{ aspectRatio: photo.aspect }}>
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" />
              </div>
            ))}
          </motion.div>

          {/* Column 2 */}
          <motion.div style={{ y: shouldReduce ? 0 : y2, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[PHOTOS[2], PHOTOS[3]].map((photo, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/gallery:opacity-40 hover:!opacity-100" style={{ aspectRatio: photo.aspect }}>
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" />
              </div>
            ))}
          </motion.div>

          {/* Column 3 */}
          <motion.div style={{ y: shouldReduce ? 0 : y3, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[PHOTOS[4], PHOTOS[5]].map((photo, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/gallery:opacity-40 hover:!opacity-100" style={{ aspectRatio: photo.aspect }}>
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" />
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

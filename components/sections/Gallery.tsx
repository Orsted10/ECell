"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { staggerContainer, scaleIn, fadeUp } from "@/components/motion/variants";

// Using Picsum with descriptive seeds for authentic feel
const PHOTOS = [
  { src: "/gallery-1.png", alt: "Students brainstorming at night", aspect: "aspect-[4/5]" },
  { src: "/gallery-2.png", alt: "Startup pitch presentation", aspect: "aspect-[3/4]" },
  { src: "https://picsum.photos/seed/ecell-hackathon/600/800", alt: "Hackathon energy", aspect: "aspect-[3/4]" },
  { src: "https://picsum.photos/seed/ecell-campus/700/500", alt: "Campus collaboration", aspect: "aspect-[7/5]" },
  { src: "https://picsum.photos/seed/ecell-mentor/600/700", alt: "Mentorship session", aspect: "aspect-[6/7]" },
  { src: "https://picsum.photos/seed/ecell-launch/700/600", alt: "Launch day celebration", aspect: "aspect-[7/6]" },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="section-pad"
      style={{ borderTop: "1px solid var(--border-soft)", background: "var(--surface)" }}
    >
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          style={{ marginBottom: "3rem" }}
        >
          <motion.h2 variants={fadeUp} className="display-3" style={{ maxWidth: "22ch" }}>
            Moments that built a movement.
          </motion.h2>
        </motion.div>

        {/* Asymmetric masonry — CSS columns */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          style={{
            columns: "3",
            columnGap: "1rem",
          }}
          className="columns-1 sm:columns-2 md:columns-3"
        >
          {PHOTOS.map((photo, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              style={{
                breakInside: "avoid",
                marginBottom: "1rem",
                borderRadius: "14px",
                overflow: "hidden",
                position: "relative",
                cursor: "zoom-in",
              }}
            >
              <div
                style={{ position: "relative", width: "100%" }}
                className={photo.aspect}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLImageElement).style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => ((e.target as HTMLImageElement).style.transform = "scale(1)")}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

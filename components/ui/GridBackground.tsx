"use client";

export function GridBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* Continuous Atmospheric Radial Glows across the page */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "-10%",
          width: "80vw",
          height: "80vh",
          background: "radial-gradient(circle at 30% 30%, rgba(255, 77, 0, 0.15) 0%, rgba(255, 46, 0, 0.04) 45%, transparent 75%)",
          filter: "blur(90px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "35%",
          right: "-15%",
          width: "70vw",
          height: "70vh",
          background: "radial-gradient(circle at 70% 40%, rgba(0, 102, 255, 0.12) 0%, rgba(0, 198, 255, 0.03) 50%, transparent 75%)",
          filter: "blur(100px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "20%",
          width: "75vw",
          height: "75vh",
          background: "radial-gradient(circle at 40% 60%, rgba(255, 85, 0, 0.12) 0%, rgba(0, 102, 255, 0.05) 50%, transparent 80%)",
          filter: "blur(100px)",
        }}
      />

      {/* Hexagon / Honeycomb SVG Mesh (Continuous across all sections) */}
      <svg
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.16,
          maskImage: "radial-gradient(ellipse 95% 95% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 95% 95% at 50% 50%, black 30%, transparent 100%)",
        }}
      >
        <defs>
          <pattern
            id="hexagons-continuous"
            width="56"
            height="96"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M28 0 L56 16 L56 48 L28 64 L0 48 L0 16 Z M28 48 L56 64 L56 96 L28 112 L0 96 L0 64 Z"
              fill="none"
              stroke="rgba(255, 85, 0, 0.35)"
              strokeWidth="1"
            />
            <path
              d="M0 32 L28 48 M56 32 L28 48 M28 0 L28 48 M0 80 L28 96 M56 80 L28 96"
              fill="none"
              stroke="rgba(0, 102, 255, 0.22)"
              strokeWidth="0.75"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons-continuous)" />
      </svg>
    </div>
  );
}

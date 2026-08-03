import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, MeshDistortMaterial, Float, Sphere, ContactShadows, Lightformer } from '@react-three/drei';
import * as THREE from 'three';

// ── FULL-BACKGROUND Ocean Wave with atmospheric depth ──
const OceanWave = () => {
  const pointsRef = useRef<THREE.Points>(null);

  // Extremely dense grid for maximum wave aesthetic (100k+ particles)
  const SEG = 320;
  const SIZE_X = 240;   // Even wider
  const SIZE_Z = 140;   // Even deeper

  const { positions, sizes, count } = useMemo(() => {
    const pos = new Float32Array(SEG * SEG * 3);
    const sz = new Float32Array(SEG * SEG);
    let idx = 0;
    for (let i = 0; i < SEG; i++) {
      for (let j = 0; j < SEG; j++) {
        pos[idx++] = (i / SEG - 0.5) * SIZE_X;
        pos[idx++] = 0;
        pos[idx++] = (j / SEG - 0.5) * SIZE_Z;
        sz[i * SEG + j] = 0.12;
      }
    }
    return { positions: pos, sizes: sz, count: SEG * SEG };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const t = state.clock.getElapsedTime();

    let i = 0;
    for (let xi = 0; xi < SEG; xi++) {
      for (let zi = 0; zi < SEG; zi++) {
        const px = pos[i];
        const pz = pos[i + 2];

        const nx = px / SIZE_X;
        const nz = pz / SIZE_Z;

        // Main rolling wave — high amplitude, sweeps diagonally
        const wave1 = Math.sin(px * 0.12 + pz * 0.06 + t * 0.6) * 5.5;

        // Secondary cross-wave for the ridge criss-cross texture
        const wave2 = Math.cos(px * 0.06 - pz * 0.12 - t * 0.4) * 3.5;

        // Long slow swell — the whole ocean breathes
        const swell = Math.sin(px * 0.03 + t * 0.2) * 3.0;

        // Micro ripples
        const ripple = Math.sin(px * 0.3 + pz * 0.3 + t * 1.0) * 0.7;

        // Edge envelope — fade at left/right edges only, NOT front/back
        const edgeX = 1.0 - Math.pow(Math.abs(nx) * 1.85, 6);
        const envelope = Math.max(0, edgeX);

        // Bowl: rises steeply at the edges to wrap around the blob
        const bowl = Math.pow(Math.abs(nx), 1.3) * 10 + Math.pow(Math.abs(nz), 2.0) * 4;

        const waveHeight = (wave1 + wave2 + swell + ripple) * envelope;
        pos[i + 1] = waveHeight + bowl;

        i += 3;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    // Flat rotation so wave grid lies mostly horizontal across the full scene
    // Positioned centered — it's large enough to fill the background
    <points ref={pointsRef} position={[0, -14, -20]} rotation={[0.18, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.10}
        color="#c8c8d8"
        transparent
        opacity={0.55}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

// ── Organic Liquid Metal Blob ──
const MetallicBlob = () => {
  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={0.5}
      position={[0, -9.5, -2]}
    >
      <Sphere args={[6.5, 256, 256]}>
        <MeshDistortMaterial
          color="#000000"
          envMapIntensity={4}
          clearcoat={1}
          clearcoatRoughness={0}
          metalness={1}
          roughness={0.05}
          distort={0.18}
          speed={2}
        />
      </Sphere>
    </Float>
  );
};

export const BackgroundScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none bg-black">
      <Canvas camera={{ position: [0, 2, 12], fov: 60 }} dpr={[1, 2]}>
        <color attach="background" args={['#000000']} />

        {/* ── ATMOSPHERIC FOG ── This is what makes distant waves fade/blur exactly like your reference */}
        <fog attach="fog" args={['#000000', 18, 55]} />

        <ambientLight intensity={0.1} />
        <directionalLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
        <directionalLight position={[-10, 10, -10]} intensity={1.5} color="#e6f2ff" />
        <spotLight position={[0, 15, 0]} intensity={1.5} penumbra={1} color="#ffffff" />
        <pointLight position={[0, -10, 5]} intensity={1} color="#202020" />

        <OceanWave />
        <MetallicBlob />

        <ContactShadows position={[0, -13, -3]} opacity={0.6} scale={30} blur={3} far={15} />
        
        {/* Custom Lightformer Environment for massive, buttery sweeping liquid reflections */}
        <Environment resolution={512}>
          {/* Main sweeping top highlight */}
          <Lightformer form="rect" intensity={5} position={[0, 6, -10]} scale={[60, 2, 1]} target={[0, 0, 0]} />
          {/* Secondary sweeping highlight slightly offset */}
          <Lightformer form="rect" intensity={3} position={[0, -2, -10]} scale={[40, 0.5, 1]} target={[0, 0, 0]} />
          {/* Edge/rim wrap rings for that liquid glass border effect */}
          <Lightformer form="ring" intensity={4} scale={25} position={[-20, 0, -15]} target={[0, 0, 0]} />
          <Lightformer form="ring" intensity={4} scale={25} position={[20, 0, -15]} target={[0, 0, 0]} />
        </Environment>
      </Canvas>
    </div>
  );
};

"use client";
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

type Props = {
  title: string;
  items: string[];
  color?: string;
};

function SkillNode({ label, index, total, color }: { label: string; index: number; total: number; color: string }) {
  const ref = useRef<THREE.Group>(null!);
  const radius = 2.4 + (index % 3) * 0.15;
  const speed = 0.12 + (index % 5) * 0.02;
  const phase = (index / total) * Math.PI * 2;

  useFrame(({ clock }) => {
    const t = clock.elapsedTime * speed + phase;
    ref.current.position.set(
      Math.cos(t) * radius,
      Math.sin(t * 1.3) * 0.55,
      Math.sin(t) * radius
    );
  });

  return (
    <group ref={ref}>
      <mesh>
        <icosahedronGeometry args={[0.18, 1]} />
        <meshPhysicalMaterial color={color} roughness={0.2} metalness={0.6} emissive={color} emissiveIntensity={0.35} />
      </mesh>
      <Html center position={[0, -0.45, 0]} distanceFactor={9}>
        <span className="skill-orbit-label">{label}</span>
      </Html>
    </group>
  );
}

function Core({ title, color }: { title: string; color: string }) {
  const ref = useRef<THREE.Group>(null!);
  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.elapsedTime * 0.12;
  });
  return (
    <group ref={ref}>
      <mesh>
        <icosahedronGeometry args={[0.85, 4]} />
        <meshPhysicalMaterial color="#1a3a5c" roughness={0.18} metalness={0.65} clearcoat={1} emissive="#0d2a44" emissiveIntensity={0.45} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.92, 32, 32]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.22} />
      </mesh>
      <Html center position={[0, 0, 1.05]} distanceFactor={5.5}>
        <span className="skill-core-label">{title}</span>
      </Html>
    </group>
  );
}

export default function SkillsGlobe({ title, items, color = "#d2b75c" }: Props) {
  return (
    <div className="skills-globe">
      <div className="skills-globe-canvas">
        <Canvas dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }} camera={{ position: [0, 0.4, 7.2], fov: 42 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={1.05} />
            <hemisphereLight args={["#e4f5ff", "#101c32", 1.2]} />
            <pointLight position={[3, 4, 5]} intensity={28} color="#e9c87e" />
            <pointLight position={[-4, -2, 3]} intensity={18} color="#66c2e9" />
            <Stars radius={40} depth={30} count={400} factor={2.2} fade speed={0.15} />
            <Core title={title} color={color} />
            {items.map((item, i) => (
              <SkillNode key={item} label={item} index={i} total={items.length} color={color} />
            ))}
            <OrbitControls enableZoom={false} enablePan={false} enableDamping autoRotate autoRotateSpeed={0.35} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, Icosahedron } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

function FloatingShape({ position, color, shape = "sphere", scale = 1 }: { position: [number, number, number]; color: string; shape?: "sphere" | "torus" | "icosahedron"; scale?: number }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.2;
    ref.current.rotation.y = state.clock.elapsedTime * 0.3;
  });

  const Geom = shape === "torus" ? Torus : shape === "icosahedron" ? Icosahedron : Sphere;
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      {/* @ts-expect-error drei generic */}
      <Geom ref={ref} args={shape === "torus" ? [1, 0.35, 32, 100] : [1, 64, 64]} position={position} scale={scale}>
        <MeshDistortMaterial color={color} distort={0.4} speed={2} roughness={0.2} metalness={0.8} />
      </Geom>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 2]} className="!absolute inset-0">
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#7dd3fc" />
        <pointLight position={[-5, -3, 3]} intensity={2} color="#c084fc" />
        <pointLight position={[3, -2, -2]} intensity={1.5} color="#22d3ee" />
        <FloatingShape position={[-2.5, 1, 0]} color="#22d3ee" shape="icosahedron" scale={1.1} />
        <FloatingShape position={[2.5, -0.5, -1]} color="#c084fc" shape="sphere" scale={1.3} />
        <FloatingShape position={[0, 1.8, -2]} color="#f472b6" shape="torus" scale={0.9} />
        <FloatingShape position={[1.5, 1.5, 1]} color="#7dd3fc" shape="icosahedron" scale={0.5} />
      </Suspense>
    </Canvas>
  );
}

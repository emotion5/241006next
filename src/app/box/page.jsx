'use client';
// src/app/box/page.jsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function BoxPage() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}
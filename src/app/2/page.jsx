"use client";

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Sphere = () => {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} /> {/* 반지름 1, 세그먼트 32 */}
      <meshStandardMaterial color="blue" /> {/* 파란색 재질 */}
    </mesh>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight /> {/* 주변광 */}
      <pointLight position={[10, 10, 10]} /> {/* 포인트 광원 */}
      <Sphere /> {/* 스피어 컴포넌트 */}
    </>
  );
};

const App = () => {
  return (
    <Canvas style={{ width: '100%', height: '100vh' }}>
      <Scene /> {/* 씬 컴포넌트 */}
      <OrbitControls /> {/* 카메라 조작을 위한 컨트롤 */}
    </Canvas>
  );
};

export default App;
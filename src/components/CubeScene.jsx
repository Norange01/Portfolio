import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Box() {
  return (
    <mesh rotation={[0.5, 0.5, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#f2bac9" />
    </mesh>
  );
}

export default function CubeScene() {
  return (
    <Canvas style={{ height: '400px' }}>
      <ambientLight intensity={1} />
      <pointLight position={[0.8, 0.8, 0.8]} />
      <Box />
      <OrbitControls />
    </Canvas>
  );
}

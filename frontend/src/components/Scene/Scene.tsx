import { useFrame } from '@react-three/fiber';
import { useRef, ReactNode } from 'react';
import { Mesh } from 'three';

export enum Geometry {
  Box = 'box',
  Cylinder = 'cylinder',
  Sphere = 'sphere',
}

export enum Rotation {
  X = 'x',
  Y = 'y',
}

interface SceneProps {
  rotation: Rotation;
  children: ReactNode;
}

export function Scene({ children, rotation }: SceneProps) {
  const ref = useRef<Mesh>(null);
  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation[rotation] += 0.01;
  });
  return (
    <mesh ref={ref}>
      {children}
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}

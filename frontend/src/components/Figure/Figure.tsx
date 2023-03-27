import { Canvas } from '@react-three/fiber';
import { useRandomNumber } from '../../hooks';
import { FigureGeometry } from '../FigureGeometry/FigureGeometry';
import { Geometry, Rotation, Scene } from '../Scene/Scene';

export interface FigureProps {
  geometry: Geometry;
  rotation: Rotation;
  wait: number;
  size: number;
}

export function Figure({ geometry, rotation, wait, size }: FigureProps) {
  const { randomNumber } = useRandomNumber(wait);
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <pointLight position={[50, 50, 50]} />
      <Scene rotation={rotation}>
        <FigureGeometry geometry={geometry} size={size} randomNumber={randomNumber} />
      </Scene>
    </Canvas>
  );
}

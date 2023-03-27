import { Geometry } from "../Scene/Scene";

export interface FigureGeometryProps {
  geometry: Geometry;
  randomNumber: number;
  size: number;
}

export function FigureGeometry({geometry, randomNumber, size}: FigureGeometryProps) {
  const getFigureGeometry = (geometry: Geometry) => {
    switch (geometry) {
      case Geometry.Box:
        return <boxGeometry args={[randomNumber || size, 2, 2]} />;
      case Geometry.Cylinder:
        return <cylinderGeometry args={[1, 1, randomNumber || size]} />;
      case Geometry.Sphere:
        return <sphereGeometry args={[randomNumber ? 1 + (randomNumber * 0.1) : size, 32]} />;
      default:
        return null
    }
  };
  return getFigureGeometry(geometry)
}
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../../App';
import { Figure } from '../Figure/Figure';
import { Geometry, Rotation } from '../Scene/Scene';

interface FigureType {
  geometry: Geometry;
  rotation: Rotation;
  wait: number;
  size: number;
}

const figures: FigureType[] = [
  { geometry: Geometry.Box, rotation: Rotation.Y, wait: 3000, size: 2 },
  { geometry: Geometry.Cylinder, rotation: Rotation.X, wait: 1000, size: 2 },
  { geometry: Geometry.Sphere, rotation: Rotation.Y, wait: 1000, size: 1.5 },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: figures.map(({ geometry, rotation, wait, size }) => ({
      path: `/${geometry}`,
      element: (
        <Figure
          geometry={geometry}
          rotation={rotation}
          wait={wait}
          size={size}
        />
      ),
    })),
  },
  {path: '*', element: <App />}
]);

export function Router() {
  return <RouterProvider router={router} />;
}

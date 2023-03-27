import { Outlet } from 'react-router-dom';
import { Container, Geometry, RouterLink } from './components';

function App() {
  return (
    <>
      <RouterLinks />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

function RouterLinks() {
  const geometries: Geometry[] = [Geometry.Box, Geometry.Cylinder, Geometry.Sphere];
  return (
    <>
      {geometries.map((geometry) => (
        <RouterLink key={geometry} geometry={geometry} />
      ))}
    </>
  );
}

export default App;

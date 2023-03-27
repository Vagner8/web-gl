import { Link } from 'react-router-dom';
import { Geometry } from '../Scene/Scene';
import styles from './RouterLink.module.css';

interface RouterLinkProps {
  geometry: Geometry;
}

export function RouterLink({ geometry }: RouterLinkProps) {
  return (
    <Link to={`/${geometry}`} className={styles.RouterLink}>
      <button>{geometry}</button>
    </Link>
  );
}

import react from 'react';
import styles from './Header.module.css';
import { ReactComponent as Dogs } from '../assets/dogs.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - home">
          <Dogs />
        </Link>
        <Link className={styles.login} to="/login">
          Login / Criar
        </Link>
      </nav>
    </div>
  );
};
export default Header;

import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import Styles from './NavBar.module.scss';

const NavBar = () => (
  <header className={Styles.navbar}>
    <div className={Styles.brandLinksContainer}>
      <h1 className={Styles.brand}>Bookstore CMS</h1>
      <Link to="/" activeClassName={Styles.activeLink} exact>
        BOOKS
      </Link>
      <Link to="/categories" activeClassName={Styles.activeLink} exact>CATEGORIES</Link>
    </div>
    <div className={Styles.user}>
      <FaUserAlt />
    </div>
  </header>
);
export default NavBar;

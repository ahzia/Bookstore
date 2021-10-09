import {Link} from 'react-router-dom';

const NavBar = () => (
    <header >
    <ul>
      <li>
        <Link to="/">Books List</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
  </header>
);
export default NavBar;
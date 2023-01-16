import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <NavLink to='/'>HomePage</NavLink>
      <NavLink to='/pageOne'>Page One</NavLink>
      <NavLink to='/pageTwo'>Page Two</NavLink>
      <NavLink to='/pageThree'>Page Three</NavLink>
    </nav>
  );
};

export default Menu;

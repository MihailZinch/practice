import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from '../styles.js';
const { firstTextColor, secondTextColor, firstBackgroudColor } = colors;

const Menu = () => {
  return (
    <NavWrapper>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/pageOne'>Page One</NavLink>
        <NavLink to='/pageTwo'>Page Two</NavLink>
        <NavLink to='/pageThree'>Page Three</NavLink>
      </nav>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  font-size: 20px;
  background: ${firstBackgroudColor};
  padding: 20px;

  a {
    color:  ${firstTextColor};
    margin-left: 100px;
    font-weight: bold;

    &:hover {
      color: ${secondTextColor};
    }

    &.active {
      color: ${secondTextColor};
    }
  }
`;

export default Menu;

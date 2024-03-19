import styled from 'styled-components';
import hamburger from '../assets/hamburger.svg';

const StyledNav = styled.nav`
  color: #6070ff;
  display: flex;
  justify-content: flex-end;
  height: 48px;
  padding: 20px;

  img {
    height: 24px;
    width: 24px;
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <img src={hamburger} alt="menu" />
    </StyledNav>
  );
};

export default Nav;

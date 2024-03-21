import styled from 'styled-components';
import { useState, useEffect } from 'react';
import hamburger from '../assets/hamburger.svg';
import NavPopup from './navPopup';

const StyledNav = styled.nav`
  color: #6070ff;
  display: flex;
  justify-content: flex-end;
  height: 48px;
  padding: 20px;

  img {
    height: 24px;
    width: 24px;
    cursor: pointer;
  }
`;

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOverflow = () => {
      document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    };

    handleOverflow();

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleNavOpen = () => {
    setIsOpen(true);
  };

  const handleNavClose = () => {
    setIsOpen(false);
  };

  return (
    <StyledNav>
      <img onClick={handleNavOpen} src={hamburger} alt="menu" />
      {isOpen && <NavPopup handleNavClose={handleNavClose} />}
    </StyledNav>
  );
};

export default Nav;

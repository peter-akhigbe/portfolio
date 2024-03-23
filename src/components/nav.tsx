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

  .desktopNavLinks {
    display: flex;
    margin: auto;
    gap: 32px;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;

    a {
      color: #344563;
    }
  }
`;

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
      {isWideScreen ? (
        <ul className="desktopNavLinks">
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      ) : (
        <img onClick={handleNavOpen} src={hamburger} alt="menu" />
      )}
      {isOpen && <NavPopup handleNavClose={handleNavClose} />}
    </StyledNav>
  );
};

export default Nav;

import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

const StyledDiv = styled.div`
  #menuBtn {
    display: block;
    cursor: pointer;
  }

  #closeBtn {
    cursor: pointer;
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
    position: absolute;
    top: 2.5rem;
    right: 3rem;
  }

  #mobileNav {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(96, 112, 255, 0.9);
    backdrop-filter: blur(5px);
    z-index: 100;
    height: 100vh;
    width: 100vw;
    transition: height 0.35s;

    transform: translateY(-100%); /* Start the menu offscreen */
    animation: ${slideIn} 0.3s forwards; /* Apply the slide-in animation */
  }

  #mobileNav .container {
    padding: 1rem;
  }

  #mobileNav nav {
    display: flex;
    padding: 2rem;
  }

  #mobileNav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  #mobileNav a {
    display: block;
    margin: 1rem;
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
  }

  /* Add hover effect to close button */
  #closeBtn:hover {
    color: #a4aabc; /* Change color on hover */
  }
`;

interface NavPopupProps {
  handleNavClose: () => void;
}

const NavPopup = ({ handleNavClose }: NavPopupProps) => {
  const handleClose = () => {
    handleNavClose();
    // Add logic to trigger slide-out animation when closing
    const navMenu = document.getElementById('mobileNav');
    if (navMenu) {
      navMenu.style.animation = `${slideOut} 0.3s forwards`;
    }
  };

  return (
    <StyledDiv>
      <div id="mobileNav">
        <div className="container">
          <span onClick={handleClose} id="closeBtn">
            &times;
          </span>
          <nav>
            <ul className="mobileNavLinks">
              <li>
                <a onClick={handleClose} href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a onClick={handleClose} href="#about">
                  About
                </a>
              </li>
              <li>
                <a onClick={handleClose} href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </StyledDiv>
  );
};

export default NavPopup;

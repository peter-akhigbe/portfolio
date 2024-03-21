import styled from 'styled-components';

const StyledDiv = styled.div`
  /* overlay menu styles */
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
    background: rgba(96, 112, 255, 0.8);
    backdrop-filter: blur(5px);
    z-index: 100;
    height: 100vh;
    width: 100vw;
    transition: height 0.35s;
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
`;

interface NavPopupProps {
  handleNavClose: () => void;
}

const NavPopup = ({ handleNavClose }: NavPopupProps) => {
  return (
    <StyledDiv>
      <div id="mobileNav">
        <div className="container">
          <span onClick={() => handleNavClose()} id="closeBtn">
            &times;
          </span>
          <nav>
            <ul className="mobileNavLinks">
              <li>
                <a onClick={() => handleNavClose()} href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a onClick={() => handleNavClose()} href="#about">
                  About
                </a>
              </li>
              <li>
                <a onClick={() => handleNavClose()} href="#contact">
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

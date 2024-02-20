import styled from 'styled-components';
import background from '../assets/header-shapes-mobile.svg';

const StyledMain = styled.main`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: contain;
  height: 100vh;
`;

const Main = () => {
  return (
    <StyledMain>
      <h1>I’m Peter. Glad to see you!</h1>
      <p>
        I’m a software developer! I can help you build a product , feature or
        website Look through some of my work and experience! If you like what
        you see and have a project you need coded, don’t hesitate to contact me.
      </p>
      <p>LET’S CONNECT</p>
    </StyledMain>
  );
};

export default Main;

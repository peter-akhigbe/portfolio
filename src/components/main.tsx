import styled from 'styled-components';
import background from '../assets/headerBg.svg';
import Connect from './connect';

const StyledMain = styled.main`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: 100vw;
  background-position: center;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 200px 20px;

    h1 {
      font: 700 40px 'Poppins', sans-serif;
      line-height: 52px;
      color: #172b4d;
    }

    .connect,
    .logos {
      margin-right: auto;
    }
  }
`;

const Main = () => {
  return (
    <StyledMain>
      <div className="content">
        <h1>I’m Peter. Glad to see you!</h1>
        <p>
          I’m a software developer! I can help you build a product , feature or
          website Look through some of my work and experience! If you like what
          you see and have a project you need coded, don’t hesitate to contact
          me.
        </p>
        <Connect />
      </div>
    </StyledMain>
  );
};

export default Main;

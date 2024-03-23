import About from './components/about';
import ContactMe from './components/contactMe';
import Header from './components/header';
import Projects from './components/projects';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 100px;
`;

const App = () => {
  return (
    <StyledDiv>
      <Header />
      <Projects />
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '0 75px 0 0',
        }}>
        <About />
        <ContactMe />
      </div>
    </StyledDiv>
  );
};

export default App;

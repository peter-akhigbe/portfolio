import About from './components/about';
import ContactMe from './components/contactMe';
import Header from './components/header';
import Projects from './components/projects';
import styled from 'styled-components';
// import { useEffect, useState } from 'react';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 100px;
`;

const App = () => {
  // const [isWideScreen, setIsWideScreen] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsWideScreen(window.innerWidth > 500);
  //   };

  //   window.addEventListener('resize', handleResize);
  //   handleResize(); // Initial check

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);
  return (
    <StyledDiv>
      <Header />
      <Projects />
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '0 20% 0 0 / 0 10% 0 0',
        }}>
        <About />
        <ContactMe />
      </div>
      {/* {isWideScreen ? <h1>A</h1> : <h1>B</h1>} */}
    </StyledDiv>
  );
};

export default App;

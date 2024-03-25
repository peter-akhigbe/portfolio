import { useState } from 'react';
import Button from './button';
import Connect from './connect';
import styled from 'styled-components';

const StyledLi = styled.li`
  background-color: #f7f7f9;
  width: 303px;
  height: 66.72px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin: 10px;
  padding-left: 20px;
`;

const List = ({ children }: { children: string }) => {
  return <StyledLi>{children}</StyledLi>;
};

const StyledSkillDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 10px 0;
  cursor: pointer;

  .title {
    font-size: 20px;
    margin: 10px 0;
  }
`;

interface SkillProps {
  h3: string;
  list: string[];
  display: string | null;
  setDisplay: (value: string | null) => void;
}

const Skill = ({ h3, list, display, setDisplay }: SkillProps) => {
  const handleClick = () => {
    if (display === h3) {
      setDisplay(null);
    } else {
      setDisplay(h3);
    }
  };
  return (
    <div>
      <StyledSkillDiv onClick={handleClick}>
        <p className="title">{h3}</p>
        {display === h3 ? <p>&darr;</p> : <p>&rarr;</p>}
      </StyledSkillDiv>
      {display === h3 && (
        <ul>
          {list.map((item, index) => (
            <List key={index}>{item}</List>
          ))}
        </ul>
      )}
      <div
        style={{ background: '#DFE1E6', height: '1px', width: '100%' }}></div>
    </div>
  );
};

const StyledDiv = styled.div`
  padding: 100px 10vw;
  background-color: white;
  border-radius: 0 75px 0 0;
  display: flex;
  flex-direction: column;
  gap: 40px;

  .containerOne {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 142px 10vw;
    gap: 10vw;

    .containerOne,
    .containerTwo {
      width: 35vw;
    }
  }
`;

const About = () => {
  const [display, setDisplay] = useState<string | null>(null);
  const handleClick = () => {
    window.open(
      'https://docs.google.com/document/d/1DTyx-PLSL5BzOLnkDws85NF1EBbBS6DXMyICWriehSI/',
      '_blank',
    );
  };
  return (
    <StyledDiv id="about">
      <div className="containerOne">
        <h2>About Me</h2>
        <p>
          Experienced Full-Stack Developer with over 1-year of professional
          experience. Specializing in React, Node.js, and Ruby on Rails. Proven
          ability to transform business requirements into scalable and
          maintainable software solutions in remote environments.
        </p>
        <Connect />
        <Button text="Get my resume" onClick={handleClick} />
      </div>
      <div className="containerTwo">
        <Skill
          h3="Languages"
          list={['HTML', 'CSS', 'TypeScript', 'Ruby']}
          display={display}
          setDisplay={setDisplay}
        />
        <Skill
          h3="Frameworks"
          list={['React', 'Ruby on Rails', 'Jest']}
          display={display}
          setDisplay={setDisplay}
        />
        <Skill
          h3="Tools"
          list={['Git', 'GitHub', 'VS Code', 'Heroku']}
          display={display}
          setDisplay={setDisplay}
        />
      </div>
    </StyledDiv>
  );
};

export default About;

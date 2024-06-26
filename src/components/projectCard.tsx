import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Button from './button';
import JobDetails from './jobDetails';
import Skill from './skill';
import GithubInButton from '../assets/logos/githubInButton';
import SeeLiveIcon from '../assets/logos/seeLiveIcon';

const StyledDiv = styled.div`
  .container {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    border: 1px solid #dfe1e6;
    padding: 16px;
    border-radius: 16px;
    background-color: white;
    width: 80vw;
  }

  .textContainer {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  img {
    border-radius: 8px;
    transition: 1s;
  }

  img:hover {
    transform: scale(1.1);
    z-index: 2;
  }

  @media only screen and (min-width: 768px) {
    .container {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 3vw;
      border-radius: 24px;
      padding: 24px 2vw;
    }

    img {
      width: 50%;
      height: auto;
      border-radius: 8px;
    }

    .flip {
      flex-direction: row-reverse;
      justify-content: space-between;
    }
  }
`;

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 1);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
  width: 90vw;
  max-height: 90vh;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;

  img {
    border-radius: 8px;
    width: 100%;
  }

  .popup-close {
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    left: 90%;
    border: 1px solid #67798e;
    cursor: pointer;
    font-size: 30px;
    color: #67798e;
    z-index: 101;
    margin-bottom: -50px;
    background-color: #e8ecf0;
  }
`;

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  skills: string[];
  link?: string;
  source: string;
  index: number;
  jobDetails: {
    client: string;
    role: string;
    year: string;
  };
}

const ProjectCard = (props: ProjectCardProps) => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const { image, title, description, skills, link, index, source, jobDetails } =
    props;

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setShowPopup(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = showPopup ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showPopup]);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleSeeLiveClick = () => {
    window.open(link, '_blank');
  };

  const handleSeeSourceClick = () => {
    window.open(source, '_blank');
  };

  return (
    <StyledDiv>
      <div className={`container ${index % 2 === 0 ? null : 'flip'}`}>
        <img src={image} alt={title} />

        <div className="textContainer">
          <div>
            <h2>{title}</h2>
            <JobDetails
              client={jobDetails.client}
              role={jobDetails.role}
              year={jobDetails.year}
            />
          </div>

          <p>{description}</p>
          <ul>
            {skills.map((skill: string) => {
              return <Skill key={skill} skill={skill} />;
            })}
          </ul>
          <Button text="See Project" onClick={togglePopup} />
        </div>
      </div>

      {showPopup && (
        <Popup ref={popupRef}>
          <span className="popup-close" onClick={togglePopup}>
            &times;
          </span>
          <div>
            <h2>{title}</h2>
            <JobDetails
              client={jobDetails.client}
              role={jobDetails.role}
              year={jobDetails.year}
            />
          </div>
          <img src={image} alt={title} />
          <p>{description}</p>
          <ul>
            {skills.map((skill: string) => {
              return <Skill key={skill} skill={skill} />;
            })}
          </ul>
          <div>
            <Button
              text="See Source"
              icon={GithubInButton}
              onClick={handleSeeSourceClick}
            />
            <Button
              isEnabled={Boolean(link)}
              text="See Live"
              icon={SeeLiveIcon}
              onClick={handleSeeLiveClick}
            />
          </div>
        </Popup>
      )}
    </StyledDiv>
  );
};

export default ProjectCard;

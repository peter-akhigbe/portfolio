import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Button from './button';
import JobDetails from './jobDetails';
import Skill from './skill';
import GitHub from '../assets/logos/github in button.svg';
import SeeLiveIcon from '../assets/logos/see-live-icon.svg';

const StyledDiv = styled.div`
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

  img {
    border-radius: 8px;
  }
`;

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.95);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
  width: 80%;
  max-width: 500px;

  img {
    border-radius: 8px;
    width: 100%;
  }

  .popup-close {
    position: absolute;
    top: 0;
    right: 10px;
    cursor: pointer;
    font-size: 30px;
    color: #67798e;
  }
`;

interface ProjectCardProps {
  image: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  skills: string[];
  link: string;
  source: string;
  jobDetails: {
    client: string;
    role: string;
    year: string;
  };
}

const ProjectCard = (props: ProjectCardProps) => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  const {
    image,
    title,
    shortDescription,
    longDescription,
    skills,
    link,
    source,
    jobDetails,
  } = props;

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
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <JobDetails
        client={jobDetails.client}
        role={jobDetails.role}
        year={jobDetails.year}
      />
      <p>{shortDescription}</p>
      <ul>
        {skills.map((skill: string) => {
          return <Skill key={skill} skill={skill} />;
        })}
      </ul>
      <Button text="See Project" onClick={togglePopup} />

      {showPopup && (
        <Popup ref={popupRef}>
          <span className="popup-close" onClick={togglePopup}>
            &times;
          </span>

          <h2>{title}</h2>
          <JobDetails
            client={jobDetails.client}
            role={jobDetails.role}
            year={jobDetails.year}
          />
          <img src={image} alt={title} />
          <p>{longDescription}</p>
          <ul>
            {skills.map((skill: string) => {
              return <Skill key={skill} skill={skill} />;
            })}
          </ul>
          <Button
            text="See Live"
            logo={SeeLiveIcon}
            onClick={handleSeeLiveClick}
          />
          <Button
            isEnabled={false}
            text="See Source"
            logo={GitHub}
            onClick={handleSeeSourceClick}
          />
        </Popup>
      )}
    </StyledDiv>
  );
};

export default ProjectCard;

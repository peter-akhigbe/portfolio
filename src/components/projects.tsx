import styled from 'styled-components';
import projectsData from '../projectsData';
import ProjectCard from './projectCard';
import background from '../assets/contact-form-shapes-mobile.svg';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`;

const Projects = () => {
  return (
    <StyledDiv>
      {projectsData.map((project) => {
        return (
          <ProjectCard
            key={project.imgSrc}
            image={project.imgSrc}
            title={project.title}
            jobDetails={project.jobDetails}
            shortDescription={project.shortDescription}
            longDescription={project.longDescription}
            skills={project.skills}
            link="https://www.example.com"
            source="https://www.example.com"
          />
        );
      })}
      <img src={background} />'
    </StyledDiv>
  );
};

export default Projects;

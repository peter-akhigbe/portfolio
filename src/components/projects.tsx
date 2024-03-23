import styled from 'styled-components';
import projectsData from '../projectsData';
import ProjectCard from './projectCard';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`;

const Projects = () => {
  return (
    <StyledDiv id="portfolio">
      {projectsData.map((project, index) => {
        return (
          <ProjectCard
            index={index}
            key={project.imgSrc}
            image={project.imgSrc}
            title={project.title}
            jobDetails={project.jobDetails}
            description={project.description}
            skills={project.skills}
            link={project.link}
            source={project.source}
          />
        );
      })}
    </StyledDiv>
  );
};

export default Projects;

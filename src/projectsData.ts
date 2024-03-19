import One from './assets/projects/one.svg';
import Two from './assets/projects/two.svg';
import Three from './assets/projects/three.svg';
import Four from './assets/projects/four.svg';

const projectsData = [
  {
    title: 'Project 1',
    shortDescription: 'This is a project description',
    longDescription: 'This is a long project description',
    imgSrc: `${One}`,
    skills: ['React', 'TypeScript', 'Styled Components'],
    jobDetails: {
      client: 'Tonic',
      role: 'Frontend',
      year: '2023',
    },
  },
  // Add 3 projects here
  {
    title: 'Threads Clone',
    shortDescription: 'This is a project description',
    longDescription: 'This is a long project description',
    imgSrc: `${Two}`,
    skills: ['TypeScript', 'Next.js', 'Node.js'],
    jobDetails: {
      client: 'Personal',
      role: 'Full Stack',
      year: '2023',
    },
  },
  {
    title: 'Budget App',
    shortDescription: 'This is a project description',
    longDescription: 'This is a long project description',
    imgSrc: `${Three}`,
    skills: ['Ruby on Rails', 'PostgreSQL', 'JavaScript'],
    jobDetails: {
      client: 'Microverse',
      role: 'Full Stack',
      year: '2024',
    },
  },
  {
    title: 'E-commerce',
    shortDescription: 'This is a project description',
    longDescription: 'This is a long project description',
    imgSrc: `${Four}`,
    skills: ['React', 'Redux', 'Node.js'],
    jobDetails: {
      client: 'Tonic',
      role: 'Frontend',
      year: '2023',
    },
  },
];

export default projectsData;

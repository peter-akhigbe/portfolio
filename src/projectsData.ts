import One from './assets/projects/one.svg';
// import Two from './assets/projects/two.svg';
// import Three from './assets/projects/three.svg';
// import Four from './assets/projects/four.svg';
import budgetAppImage from './assets/projects/budgetApp.png';
import mDocImage from './assets/projects/mDoc.png';
import catalogOfMyThingsImage from './assets/projects/catalogOfMyThings.png';
import emojiInfoApp from './assets/projects/emojiInfoApp.png';

const projectsData = [
  {
    title: 'Emoji Info App',
    description: `Emoji Info App is a React and Redux-powered single-page application designed to display numeric data fetched from an external API. Users can filter through categories and view detailed information for each category. The project implements React Router for navigation, Redux for state management, and React Testing Library for testing. It's deployed online for easy access and showcases a clean and intuitive user interface.`,
    imgSrc: `${emojiInfoApp}`,
    skills: ['JavaScript', 'React', 'Redux Toolkit'],
    source: 'https://github.com/peter-akhigbe/react-capstone-project',
    link: 'https://react-capstone-emoji-website.onrender.com/',
    jobDetails: {
      client: 'Microverse',
      role: 'Full-Stack',
      year: '2023',
    },
  },
  {
    title: 'Budget App',
    description: `The Budget App project is about building a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.`,
    imgSrc: `${budgetAppImage}`,
    skills: ['JavaScript', 'Ruby on Rails', 'PostgreSQL'],
    source: 'https://github.com/peter-akhigbe/microverse-rails-capstone',
    link: 'https://budget-app-oemf.onrender.com',
    jobDetails: {
      client: 'Microverse',
      role: 'Full-Stack',
      year: '2023',
    },
  },
  {
    title: 'MDoc',
    description: `It's an online Doctor Reservation web application designed to provide users with the ability to reserve, view, and manage doctors and doctor appointment reservation . The system aims to streamline the process of finding and booking doctors from various locations`,
    imgSrc: `${mDocImage}`,
    skills: ['JavaScript', 'Ruby on Rails', 'PostgreSQL'],
    source: 'https://github.com/prg-04/MDoc',
    link: 'https://capstone-m-doc.onrender.com/',
    jobDetails: {
      client: 'Microverse',
      role: 'Full-Stack',
      year: '2024',
    },
  },
  {
    title: 'Catalog Of Things',
    description: `In this project, we create a console app that will help users to keep record of different types of things they own such as books, music albums, movies, and games. It is built based on the UML class diagram provided by Microverse. The data are to be stored in JSON files.`,
    imgSrc: `${catalogOfMyThingsImage}`,
    skills: ['Ruby', 'SQL'],
    source: 'https://github.com/bronnie313/ruby-capstone-project',
    jobDetails: {
      client: 'Microverse',
      role: 'Terminal',
      year: '2023',
    },
  },
];

export default projectsData;

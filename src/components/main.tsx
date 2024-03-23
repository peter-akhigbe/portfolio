import Connect from './connect';
import './main.css';

const Main = () => {
  return (
    <div className="mainContainer">
      <div className="content">
        <h1>Hey there, I'm Peter! 👋</h1>
        <p>
          As a seasoned software developer, I'm passionate about crafting
          digital solutions that make an impact. With a blend of creativity and
          technical expertise, I specialize in building products, features, and
          websites that exceed expectations.
        </p>
        <p>
          Take a peek at some of my work and experience below. If you're
          intrigued by what you see and have a project in mind, I'm just a
          message away. Let's collaborate and bring your ideas to life!
        </p>
        <Connect />
      </div>
    </div>
  );
};

export default Main;

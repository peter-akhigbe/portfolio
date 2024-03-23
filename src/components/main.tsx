import Connect from './connect';
import './main.css';

const Main = () => {
  return (
    <div className="mainContainer">
      <div className="content">
        <h1>I’m Peter. Glad to see you!</h1>
        <p>
          I’m a software developer! I can help you build a product , feature or
          website Look through some of my work and experience! If you like what
          you see and have a project you need coded, don’t hesitate to contact
          me.
        </p>
        <Connect />
      </div>
    </div>
  );
};

export default Main;

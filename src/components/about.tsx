import Button from './button';
import Connect from './connect';

const About = () => {
  const handleClick = () => {
    window.open('https://www.google.com/', '_blank');
  };
  return (
    <div>
      <div className="containerOne">
        <h2>About Me</h2>
        <p>
          Hello I’m a software developer! I can help you build a product ,
          feature or website. Look through some of my work and experience! If
          you like what you see and have a project you need coded, don’t
          hesitate to contact me.
        </p>
        <Connect />
        <Button text="Get my resume" onClick={handleClick} />
      </div>
      <div className="containerTwo"></div>
    </div>
  );
};

export default About;

import GitHub from '../assets/logos/GitHub_logo.svg';
import LinkedIn from '../assets/logos/LinkedIn_icon.svg';
import Medium from '../assets/logos/Medium_logo.svg';
// import Twitter from '../assets/logos/twitter';
import Twitter from '../assets/logos/Twitter_logo.svg';

const Connect = () => {
  return (
    <>
      <p style={{ color: '#7f8cff' }} className="connect">
        LET’S CONNECT
      </p>

      <div className="logos">
        <img src={GitHub} alt="GitHub logo" />
        <img src={LinkedIn} alt="LinkedIn logo" />
        <img src={Medium} alt="Medium logo" />
        <img src={Twitter} alt="Twitter logo" />
      </div>
    </>
  );
};

export default Connect;

import GitHub from '../assets/logos/GitHub_logo.svg';
import LinkedIn from '../assets/logos/LinkedIn_icon.svg';
import Medium from '../assets/logos/Medium_logo.svg';
import Twitter from '../assets/logos/Twitter_logo.svg';

const Connect = () => {
  const handleClickGithub = () => {
    window.open('https://github.com/peter-akhigbe', '_blank');
  };

  const handleClickLinkedin = () => {
    window.open('https://www.linkedin.com/in/peter-akhigbe/', '_blank');
  };

  const handleClickMedium = () => {
    window.open('https://medium.com/@akhigbe37', '_blank');
  };

  const handleClickTwitter = () => {
    window.open('https://twitter.com/peter_akhigbe_', '_blank');
  };
  return (
    <>
      <p style={{ color: '#7f8cff' }} className="connect">
        LET’S CONNECT
      </p>

      <div style={{ cursor: 'pointer' }} className="logos">
        <img onClick={handleClickGithub} src={GitHub} alt="GitHub logo" />
        <img onClick={handleClickLinkedin} src={LinkedIn} alt="LinkedIn logo" />
        <img onClick={handleClickMedium} src={Medium} alt="Medium logo" />
        <img onClick={handleClickTwitter} src={Twitter} alt="Twitter logo" />
      </div>
    </>
  );
};

export default Connect;

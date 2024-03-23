import Nav from './nav';
import Main from './main';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: white;
  width: 100vw;
  border-radius: 0 0 0 75px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Nav />
      <Main />
    </StyledHeader>
  );
};

export default Header;

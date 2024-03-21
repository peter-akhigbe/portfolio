import styled from 'styled-components';

const StyledLi = styled.li`
  background-color: #ebebff;
  color: #6070ff;
  border-radius: 8px;
  padding: 4px 12px;
  margin: 4px;
  display: inline-block;
`;

const Skill = ({ skill }: { skill: string }) => {
  return <StyledLi>{skill}</StyledLi>;
};

export default Skill;

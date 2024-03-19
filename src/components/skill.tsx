import styled from 'styled-components';

const StyledDiv = styled.li`
  background-color: #ebebff;
  color: #6070ff;
  border-radius: 8px;
  padding: 4px 12px;
  margin: 4px;
  display: inline-block;
`;

const Skill = ({ skill }: { skill: string }) => {
  return <StyledDiv>{skill}</StyledDiv>;
};

export default Skill;

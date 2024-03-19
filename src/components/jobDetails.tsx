import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  .dot {
    color: #c1c7d0;
    font-size: 32px;
  }
`;

interface JobDetailsProps {
  client: string;
  role: string;
  year: string;
}

const JobDetails = ({ client, role, year }: JobDetailsProps) => {
  return (
    <StyledDiv>
      <h3>{client}</h3>
      <div className="dot">•</div>
      <p>{role}</p>
      <div className="dot">•</div>
      <p>{year}</p>
    </StyledDiv>
  );
};

export default JobDetails;

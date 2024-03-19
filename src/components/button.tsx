import { useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 17px;
  line-height: 24px;
  padding: 12px 14px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
  color: #6070ff;
  border: 1px solid #7f8cff;
  background-color: white;
  width: fit-content;
  white-space: nowrap;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &:hover {
    background-color: #6070ff;
    color: white;
  }

  &:active {
    background-color: #2230d2;
    color: white;
  }

  &:disabled {
    border: 1px solid #c1c7d0;
    cursor: not-allowed;
    color: #5e6c84;

    &:hover {
      background-color: white;
    }
  }
`;

interface ButtonProps {
  text: string;
  icon?: React.FC<{ color?: string }>;
  isEnabled?: boolean;
  onClick: () => void;
}

const Button = ({ text, icon, isEnabled = true, onClick }: ButtonProps) => {
  const Icon = icon;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledButton
      onClick={onClick}
      disabled={!isEnabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div>
        <span>{text}</span>
        {icon && (
          <Icon
            color={isHovered ? 'white' : isEnabled ? '#6070FF' : '#5e6c84'}
          />
        )}
      </div>
    </StyledButton>
  );
};

export default Button;
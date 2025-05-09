import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../contexts/ThemeContext';

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 20px;
  background-color: var(--card-background);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  margin: 0 10px;

  &:hover {
    background-color: var(--hover-color);
  }
`;

const IconContainer = styled.div<{ isActive: boolean }>`
  padding: 5px;
  color: ${props => props.isActive ? 'var(--accent-color)' : 'var(--text-color)'};
  opacity: ${props => props.isActive ? 1 : 0.5};
`;

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleContainer onClick={toggleTheme}>
      <IconContainer isActive={theme === 'light'}>
        <FontAwesomeIcon icon={faSun} />
      </IconContainer>
      <IconContainer isActive={theme === 'dark'}>
        <FontAwesomeIcon icon={faMoon} />
      </IconContainer>
    </ToggleContainer>
  );
};

export default ThemeToggle;

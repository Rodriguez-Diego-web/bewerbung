import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoaderProps {
  isLoading: boolean;
}

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0% { transform: scale(0.95); opacity: 0.7; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(0.95); opacity: 0.7; }
`;

const LoaderOverlay = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
  transition: opacity 0.5s ease, visibility 0.5s ease;
  animation: ${props => (props.isVisible ? fadeIn : fadeOut)} 0.5s ease forwards;
`;

const LogoContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const LogoImage = styled.img`
  width: 100px;
  height: auto;
  z-index: 2;
  animation: ${pulse} 2s infinite ease-in-out;
`;

const Spinner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-top: 3px solid var(--accent-color);
  border-right: 3px solid var(--accent-color);
  border-radius: 50%;
  animation: ${rotate} 1.5s linear infinite;
`;

const LoadingText = styled.p`
  color: var(--text-color);
  font-size: 18px;
  font-weight: 500;
  margin-top: 20px;
  letter-spacing: 2px;
`;

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    <LoaderOverlay isVisible={isLoading}>
      <LogoContainer>
        <LogoImage src="/Logo.png" alt="Logo" />
        <Spinner />
      </LogoContainer>
      <LoadingText>LOADING...</LoadingText>
    </LoaderOverlay>
  );
};

export default Loader;

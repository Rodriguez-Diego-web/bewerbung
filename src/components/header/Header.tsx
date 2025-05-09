import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import ThemeToggle from '../common/ThemeToggle';

interface HeaderProps {
  toggleSidebar: () => void;
  isMobile: boolean;
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background-color: var(--primary-color);
  border-bottom: 1px solid var(--border-color);
`;

const SearchBar = styled.div`
  position: relative;
  flex: 1;
  max-width: 400px;
  
  input {
    width: 100%;
    padding: 8px 12px 8px 36px;
    border-radius: 20px;
    border: none;
    background-color: var(--secondary-color);
    color: var(--text-color);
    font-size: 14px;
    
    &:focus {
      outline: none;
      box-shadow: 0 0 0 1px var(--accent-color);
    }
    
    &::placeholder {
      color: #888;
    }
  }
  
  .search-icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #888;
    font-size: 14px;
  }
  
  @media (max-width: 768px) {
    max-width: 200px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLinkItem = styled.div<{ active?: boolean }>`
  color: ${props => props.active ? 'var(--accent-color)' : 'var(--text-color)'};
  font-size: 14px;
  font-weight: 500;
  padding-bottom: 3px;
  border-bottom: ${props => props.active ? '2px solid var(--accent-color)' : 'none'};
  cursor: pointer;
  
  &:hover {
    color: var(--accent-color);
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const BurgerMenuIcon = styled.div`
  display: none;
  cursor: pointer;
  color: var(--text-color);
  font-size: 20px;
  margin-right: 15px;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const Header: React.FC<HeaderProps> = ({ toggleSidebar, isMobile }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleNavigation = (path: string) => {
    navigate(path);
    if (isMobile) {
      toggleSidebar();
    }
  };
  
  return (
    <HeaderContainer>
      {isMobile && (
        <BurgerMenuIcon onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </BurgerMenuIcon>
      )}
      <SearchBar>
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input type="text" placeholder="Search" />
      </SearchBar>
      <RightSection>
        <ThemeToggle />
        <NavLinks>
          <NavLinkItem 
            active={location.pathname === '/projekte'} 
            onClick={() => handleNavigation('/projekte')}
          >
            Projekte
          </NavLinkItem>
          <NavLinkItem 
            active={location.pathname === '/entdecken'} 
            onClick={() => handleNavigation('/entdecken')}
          >
            Entdecken
          </NavLinkItem>
          <NavLinkItem 
            active={location.pathname === '/kontakt'} 
            onClick={() => handleNavigation('/kontakt')}
          >
            Kontakt
          </NavLinkItem>
        </NavLinks>
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;

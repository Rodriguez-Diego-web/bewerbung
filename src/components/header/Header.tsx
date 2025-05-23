import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useSearch } from '../../contexts/SearchContext';

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
  
  .clear-icon {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #888;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
      color: var(--text-color);
    }
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

const SearchResults = styled.div<{ show: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: var(--primary-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  margin-top: 8px;
  max-height: 400px;
  overflow-y: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  display: ${props => props.show ? 'block' : 'none'};
`;

const ResultItem = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid var(--border-color);
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: var(--secondary-color);
  }
`;

const ResultTitle = styled.div`
  font-weight: 500;
  margin-bottom: 4px;
  color: var(--text-color);
`;

const ResultDescription = styled.div`
  font-size: 12px;
  color: var(--text-light);
`;

const ResultType = styled.span`
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 10px;
  background-color: var(--accent-color);
  color: white;
  margin-left: 8px;
`;

const NoResults = styled.div`
  padding: 16px;
  text-align: center;
  color: var(--text-light);
`;

const Header: React.FC<HeaderProps> = ({ toggleSidebar, isMobile }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { searchTerm, setSearchTerm, searchResults, performSearch } = useSearch();
  const [showResults, setShowResults] = useState(false);
  
  useEffect(() => {
    // Verzögerung für die Suche implementieren (300ms)
    const timer = setTimeout(() => {
      performSearch(searchTerm);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [searchTerm, performSearch]);
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setShowResults(true);
  };
  
  const handleClearSearch = () => {
    setSearchTerm('');
    setShowResults(false);
  };
  
  const handleResultClick = (url: string) => {
    navigate(url);
    setShowResults(false);
  };
  
  // Beim Klick außerhalb der Suchergebnisse diese ausblenden
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.search-container')) {
        setShowResults(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  // Bei Routenwechsel Suchergebnisse ausblenden
  useEffect(() => {
    setShowResults(false);
  }, [location.pathname]);
  
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
      <div className="search-container" style={{ position: 'relative', flex: 1, maxWidth: '400px' }}>
        <SearchBar>
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input 
            type="text" 
            placeholder="Suchen..." 
            value={searchTerm}
            onChange={handleSearchChange}
            onFocus={() => searchTerm && setShowResults(true)}
          />
          {searchTerm && (
            <div className="clear-icon" onClick={handleClearSearch}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
          )}
        </SearchBar>
        
        <SearchResults show={showResults && searchResults.length > 0}>
          {searchResults.map(result => (
            <ResultItem key={`${result.type}_${result.id}`} onClick={() => handleResultClick(result.url)}>
              <ResultTitle>
                {result.title}
                <ResultType>{result.type === 'project' ? 'Projekt' : result.type === 'video' ? 'Video' : 'Profil'}</ResultType>
              </ResultTitle>
              <ResultDescription>{result.description}</ResultDescription>
            </ResultItem>
          ))}
        </SearchResults>
        
        {showResults && searchTerm && searchResults.length === 0 && (
          <SearchResults show={true}>
            <NoResults>Keine Ergebnisse gefunden</NoResults>
          </SearchResults>
        )}
      </div>
      <RightSection>
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

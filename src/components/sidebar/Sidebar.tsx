import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faFolderOpen, 
  faVideo, 
  faStar,
  faCompass,
  faBell,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  isMobile: boolean;
}

const SidebarContainer = styled.div<{ isOpen: boolean; isMobile: boolean }>`
  width: 200px;
  height: 100vh;
  background-color: var(--primary-color);
  border-right: 1px solid var(--border-color);
  padding: 20px 0;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  transition: transform 0.3s ease;
  
  @media (max-width: 768px) {
    width: 250px;
    transform: translateX(${props => props.isOpen ? '0' : '-100%'});
    box-shadow: ${props => props.isOpen ? '0 0 15px rgba(0, 0, 0, 0.5)' : 'none'};
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;

const LogoLink = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px 20px;
  font-weight: bold;
  font-size: 18px;
  color: var(--text-color);
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 10px;
  text-decoration: none;
  cursor: pointer;
  
  span {
    margin-left: 8px;
  }
`;

const CloseButton = styled.div`
  display: none;
  position: absolute;
  top: 20px;
  right: 20px;
  color: var(--text-color);
  font-size: 20px;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const NavItemContainer = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  color: ${props => props.active ? 'var(--accent-color)' : 'var(--text-color)'};
  background-color: ${props => props.active ? 'var(--hover-color)' : 'transparent'};
  transition: background-color 0.2s, color 0.2s;
  position: relative;
  cursor: pointer;
  
  &:hover {
    background-color: var(--hover-color);
  }
  
  .icon {
    width: 20px;
    margin-right: 10px;
    text-align: center;
  }
  
  .text {
    font-size: 14px;
  }
  
  .badge {
    background-color: var(--accent-color);
    color: white;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    position: absolute;
    right: 20px;
  }
`;

const ProfileItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  position: absolute;
  bottom: 20px;
  width: 100%;
  
  &:hover {
    background-color: var(--hover-color);
    cursor: pointer;
  }
  
  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 10px;
    background-color: #555;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
  }
  
  .name {
    font-size: 14px;
  }
`;

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar, isMobile }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleNavigation = (path: string) => {
    navigate(path);
    if (isMobile) {
      toggleSidebar();
    }
  };
  
  return (
    <>
      {isMobile && <Overlay isOpen={isOpen} onClick={toggleSidebar} />}
      <SidebarContainer isOpen={isOpen} isMobile={isMobile}>
        {isMobile && (
          <CloseButton onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseButton>
        )}
        <LogoLink onClick={() => handleNavigation('/')}>
          <FontAwesomeIcon icon={faHome} />
          <span>code.zone</span>
        </LogoLink>
        
        <NavItemContainer 
          active={location.pathname === '/'} 
          onClick={() => handleNavigation('/')}
        >
          <div className="icon">
            <FontAwesomeIcon icon={faHome} />
          </div>
          <div className="text">My Feed</div>
        </NavItemContainer>
        
        <NavItemContainer 
          active={location.pathname === '/projekte'} 
          onClick={() => handleNavigation('/projekte')}
        >
          <div className="icon">
            <FontAwesomeIcon icon={faFolderOpen} />
          </div>
          <div className="text">Projekte</div>
        </NavItemContainer>
        
        <NavItemContainer 
          active={location.pathname === '/videos'} 
          onClick={() => handleNavigation('/videos')}
        >
          <div className="icon">
            <FontAwesomeIcon icon={faVideo} />
          </div>
          <div className="text">Videos</div>
          <div className="badge">1</div>
        </NavItemContainer>
        
        <NavItemContainer 
          active={location.pathname === '/favorites'} 
          onClick={() => handleNavigation('/favorites')}
        >
          <div className="icon">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="text">Favorites</div>
        </NavItemContainer>
        
        <NavItemContainer 
          active={location.pathname === '/entdecken'} 
          onClick={() => handleNavigation('/entdecken')}
        >
          <div className="icon">
            <FontAwesomeIcon icon={faCompass} />
          </div>
          <div className="text">More to Discover</div>
        </NavItemContainer>
        
        <NavItemContainer 
          active={location.pathname === '/notifications'} 
          onClick={() => handleNavigation('/notifications')}
        >
          <div className="icon">
            <FontAwesomeIcon icon={faBell} />
          </div>
          <div className="text">Notifications</div>
          <div className="badge">3</div>
        </NavItemContainer>
        
        <ProfileItem>
          <div className="avatar">R</div>
          <div className="name">Robert J.</div>
        </ProfileItem>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;

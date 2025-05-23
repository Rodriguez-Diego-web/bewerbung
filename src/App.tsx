import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import RightSidebar from './components/sidebar/RightSidebar';
import Loader from './components/loader/Loader';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { SearchProvider } from './contexts/SearchContext';

// Import pages
import MyFeedPage from './pages/MyFeedPage';
import ProjectsPage from './pages/ProjectsPage';
import VideosPage from './pages/VideosPage';
// import FavoritesPage from './pages/FavoritesPage'; // Removed
import ContactPage from './pages/ContactPage';
import ProjectDetailPage from './pages/ProjectDetailPage'; // Import the ProjectDetailPage component

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: var(--primary-color);
`;

const MainContent = styled.main<{ isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: ${props => props.isMobile ? '0' : '200px'};
  min-width: 0;
`;

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 50;
  flex-shrink: 0;
`;

const ContentContainer = styled.div<{ isMobile: boolean }>`
  padding: ${props => props.isMobile ? '10px' : '20px'};
  /* margin: 0 auto; */ /* Entfernt für diagnostische Zwecke */
  width: 100%;
  max-width: 100%;
  flex: 1;
`;

// Wrapper component to use the theme hook
const AppContent: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();
  
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Initial loader - only show on page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Show loader for 2.5 seconds on initial load
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIfMobile);
      clearTimeout(timer);
    };
  }, []);
  
  return (
    <>
      <GlobalStyles theme={theme} />
      <Loader isLoading={isLoading} />
      <AppContainer>
        <Sidebar 
          isOpen={isMobile ? isSidebarOpen : true} 
          toggleSidebar={toggleSidebar}
          isMobile={isMobile}
        />
        <MainContent isMobile={isMobile}>
          <HeaderContainer>
            <Header 
              toggleSidebar={toggleSidebar} 
              isMobile={isMobile} 
            />
          </HeaderContainer>
          <ContentContainer isMobile={isMobile}>
            <Routes>
              <Route path="/" element={<MyFeedPage />} />
              <Route path="/projekte" element={<ProjectsPage />} />
              <Route path="/projekte/:projectId" element={<ProjectDetailPage />} />
              <Route path="/videos" element={<VideosPage />} />
              {/* <Route path="/favorites" element={<FavoritesPage />} /> */}{/* Removed */}
              <Route path="/kontakt" element={<ContactPage />} />
            </Routes>
          </ContentContainer>
        </MainContent>
        {!isMobile && <RightSidebar />}
      </AppContainer>
    </>
  );
};

function App() {
  return (
    <Router>
      <ThemeProvider>
        <SearchProvider>
          <AppContent />
        </SearchProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;

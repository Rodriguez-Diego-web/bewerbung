import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCode, faBook, faGlobe } from '@fortawesome/free-solid-svg-icons';

const PageContainer = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: var(--text-color);
`;

const FavoritesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FavoriteItem = styled.div`
  background-color: var(--secondary-color);
  border-radius: 8px;
  padding: 15px;
  display: flex;
  align-items: center;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateX(5px);
  }
`;

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  background-color: rgba(249, 115, 22, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  
  svg {
    color: var(--accent-color);
    font-size: 18px;
  }
`;

const ItemContent = styled.div`
  flex: 1;
  
  h3 {
    margin: 0 0 5px 0;
    font-size: 16px;
  }
  
  p {
    margin: 0;
    color: #aaa;
    font-size: 14px;
  }
`;

const CategoryTabs = styled.div`
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid var(--border-color);
`;

const Tab = styled.div<{ active?: boolean }>`
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
  color: ${props => props.active ? 'var(--accent-color)' : '#aaa'};
  border-bottom: ${props => props.active ? '2px solid var(--accent-color)' : 'none'};
  
  &:hover {
    color: ${props => props.active ? 'var(--accent-color)' : 'var(--text-color)'};
  }
`;

const FavoritesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState('all');
  
  const favorites = [
    {
      id: 1,
      title: 'Modern JavaScript Tutorial',
      description: 'The best resource for learning modern JavaScript',
      icon: faCode,
      category: 'tutorials'
    },
    {
      id: 2,
      title: 'React Documentation',
      description: 'Official React documentation and guides',
      icon: faBook,
      category: 'docs'
    },
    {
      id: 3,
      title: 'CSS-Tricks',
      description: 'Tips, tricks, and techniques on using CSS',
      icon: faGlobe,
      category: 'websites'
    },
    {
      id: 4,
      title: 'TypeScript Handbook',
      description: 'Complete guide to TypeScript features',
      icon: faBook,
      category: 'docs'
    },
    {
      id: 5,
      title: 'Frontend Masters',
      description: 'Advanced courses on frontend development',
      icon: faGlobe,
      category: 'websites'
    }
  ];
  
  const filteredFavorites = activeCategory === 'all' 
    ? favorites 
    : favorites.filter(fav => fav.category === activeCategory);

  return (
    <PageContainer>
      <PageTitle>Meine Favoriten</PageTitle>
      
      <CategoryTabs>
        <Tab 
          active={activeCategory === 'all'} 
          onClick={() => setActiveCategory('all')}
        >
          Alle
        </Tab>
        <Tab 
          active={activeCategory === 'websites'} 
          onClick={() => setActiveCategory('websites')}
        >
          Websites
        </Tab>
        <Tab 
          active={activeCategory === 'docs'} 
          onClick={() => setActiveCategory('docs')}
        >
          Dokumentationen
        </Tab>
        <Tab 
          active={activeCategory === 'tutorials'} 
          onClick={() => setActiveCategory('tutorials')}
        >
          Tutorials
        </Tab>
      </CategoryTabs>
      
      <FavoritesList>
        {filteredFavorites.map(favorite => (
          <FavoriteItem key={favorite.id}>
            <IconContainer>
              <FontAwesomeIcon icon={favorite.icon} />
            </IconContainer>
            <ItemContent>
              <h3>{favorite.title}</h3>
              <p>{favorite.description}</p>
            </ItemContent>
            <FontAwesomeIcon icon={faStar} style={{ color: 'var(--accent-color)' }} />
          </FavoriteItem>
        ))}
      </FavoritesList>
    </PageContainer>
  );
};

export default FavoritesPage;

import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTags, faFire, faUser } from '@fortawesome/free-solid-svg-icons';

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

const SearchContainer = styled.div`
  margin-bottom: 30px;
  position: relative;
  
  input {
    width: 100%;
    padding: 12px 20px 12px 45px;
    border-radius: 8px;
    border: none;
    background-color: var(--secondary-color);
    color: var(--text-color);
    font-size: 16px;
    
    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px var(--accent-color);
    }
    
    &::placeholder {
      color: #888;
    }
  }
  
  .search-icon {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #888;
    font-size: 18px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  margin: 30px 0 15px;
  color: var(--text-color);
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 10px;
    color: var(--accent-color);
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
`;

const TopicCard = styled.div`
  background-color: var(--secondary-color);
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-5px);
    background-color: var(--hover-color);
  }
  
  h3 {
    margin: 10px 0 5px;
    font-size: 16px;
  }
  
  p {
    margin: 0;
    color: #888;
    font-size: 13px;
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tag = styled.div`
  background-color: var(--secondary-color);
  color: var(--text-color);
  border-radius: 20px;
  padding: 8px 12px;
  font-size: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: var(--hover-color);
  }
  
  .tag-name {
    margin-right: 5px;
  }
  
  .tag-count {
    background-color: var(--accent-color);
    color: white;
    border-radius: 10px;
    padding: 2px 6px;
    font-size: 11px;
  }
`;

const ProfileCard = styled.div`
  background-color: var(--secondary-color);
  border-radius: 8px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-5px);
    background-color: var(--hover-color);
  }
  
  .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #555;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  h3 {
    margin: 0 0 5px 0;
    font-size: 16px;
  }
  
  p {
    margin: 0;
    color: #888;
    font-size: 13px;
    text-align: center;
  }
  
  .follow-button {
    background-color: var(--accent-color);
    color: white;
    border: none;
    border-radius: 20px;
    padding: 5px 15px;
    font-size: 13px;
    margin-top: 12px;
    cursor: pointer;
    
    &:hover {
      background-color: #e96400;
    }
  }
`;

const DiscoverPage: React.FC = () => {
  const topics = [
    { id: 1, name: 'JavaScript', count: '5.2K posts' },
    { id: 2, name: 'React', count: '3.8K posts' },
    { id: 3, name: 'TypeScript', count: '2.6K posts' },
    { id: 4, name: 'Web Design', count: '4.1K posts' }
  ];
  
  const tags = [
    { id: 1, name: 'nodejs', count: 245 },
    { id: 2, name: 'react', count: 532 },
    { id: 3, name: 'typescript', count: 328 },
    { id: 4, name: 'css', count: 487 },
    { id: 5, name: 'webdev', count: 896 },
    { id: 6, name: 'javascript', count: 1243 },
    { id: 7, name: 'frontend', count: 357 },
    { id: 8, name: 'coding', count: 582 }
  ];
  
  const people = [
    { id: 1, name: 'Sarah L.', title: 'Frontend Developer', initial: 'S' },
    { id: 2, name: 'Mike T.', title: 'Full Stack Engineer', initial: 'M' },
    { id: 3, name: 'Emma R.', title: 'UI/UX Designer', initial: 'E' },
    { id: 4, name: 'John D.', title: 'JavaScript Expert', initial: 'J' }
  ];

  return (
    <PageContainer>
      <PageTitle>Mehr entdecken</PageTitle>
      
      <SearchContainer>
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input type="text" placeholder="Suche nach Themen, Tags oder Personen..." />
      </SearchContainer>
      
      <SectionTitle>
        <FontAwesomeIcon icon={faFire} />
        Beliebte Themen
      </SectionTitle>
      <CardGrid>
        {topics.map(topic => (
          <TopicCard key={topic.id}>
            <h3>{topic.name}</h3>
            <p>{topic.count}</p>
          </TopicCard>
        ))}
      </CardGrid>
      
      <SectionTitle>
        <FontAwesomeIcon icon={faTags} />
        Trends
      </SectionTitle>
      <TagContainer>
        {tags.map(tag => (
          <Tag key={tag.id}>
            <span className="tag-name">#{tag.name}</span>
            <span className="tag-count">{tag.count}</span>
          </Tag>
        ))}
      </TagContainer>
      
      <SectionTitle>
        <FontAwesomeIcon icon={faUser} />
        Personen, denen du folgen könntest
      </SectionTitle>
      <CardGrid>
        {people.map(person => (
          <ProfileCard key={person.id}>
            <div className="avatar">{person.initial}</div>
            <h3>{person.name}</h3>
            <p>{person.title}</p>
            <button className="follow-button">Folgen</button>
          </ProfileCard>
        ))}
      </CardGrid>
    </PageContainer>
  );
};

export default DiscoverPage;

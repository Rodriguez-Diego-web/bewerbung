import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faPaintBrush, faVideo, faEllipsisH, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Project, getProjectsByCategory } from '../data/projectsData';
import { useNavigate } from 'react-router-dom';

const PageContainer = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const PageHeader = styled.div`
  margin-bottom: 30px;
`;

const PageTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 10px;
  color: var(--text-color);
  font-weight: 600;
`;

const PageDescription = styled.p`
  font-size: 16px;
  color: var(--text-color);
  opacity: 0.8;
  line-height: 1.6;
  max-width: 800px;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border-color);
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 8px 16px;
  background-color: ${props => props.active ? 'var(--accent-color)' : 'var(--card-background)'};
  color: ${props => props.active ? 'white' : 'var(--text-color)'};
  border: 1px solid ${props => props.active ? 'var(--accent-color)' : 'var(--border-color)'};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  font-size: 14px;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--accent-hover)' : 'var(--hover-color)'};
  }
  
  svg {
    margin-right: 8px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 25px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background-color: var(--card-background);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px var(--shadow-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px var(--shadow-color);
  }
`;

const ProjectImage = styled.div<{ imagePath?: string }>`
  height: 200px;
  background-color: ${props => props.imagePath ? 'transparent' : '#333'};
  background-image: ${props => props.imagePath ? `url(${props.imagePath})` : 'none'};
  background-size: cover;
  background-position: center;
  position: relative;
  
  .view-more {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 8px 15px;
    border-radius: 20px;
    opacity: 0;
    transition: opacity 0.3s ease;
    font-size: 14px;
    
    svg {
      margin-right: 5px;
    }
  }
  
  &:hover .view-more {
    opacity: 1;
  }
`;

const VideoThumbnail = styled.div`
  height: 200px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #111;
  
  video {
    max-height: 100%;
    max-width: 100%;
  }
  
  .play-button {
    position: absolute;
    background-color: rgba(249, 115, 22, 0.8);
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    cursor: pointer;
    
    &:hover {
      background-color: var(--accent-color);
    }
  }
`;

const ProjectInfo = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: var(--text-color);
`;

const ProjectDescription = styled.p`
  font-size: 14px;
  color: var(--text-color);
  opacity: 0.8;
  margin-bottom: 15px;
  flex: 1;
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: auto;
`;

const TechTag = styled.span`
  background-color: rgba(249, 115, 22, 0.1);
  color: var(--accent-color);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
`;

const CategoryIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: var(--accent-color);
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 50px 20px;
  color: var(--text-color);
  opacity: 0.7;
  
  h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 16px;
  }
`;

const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();
  
  const filteredProjects = getProjectsByCategory(activeCategory);
  
  const navigateToProjectDetail = (project: Project) => {
    navigate(`/projekte/${project.id}`);
  };
  
  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'website':
        return faGlobe;
      case 'ui-ux':
        return faPaintBrush;
      case 'avm-video':
        return faVideo;
      default:
        return faEllipsisH;
    }
  };
  
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Meine Projekte</PageTitle>
        <PageDescription>
          Eine Sammlung meiner Arbeiten in Web-Entwicklung, UI/UX Design und Multimedia-Projekten.
          Entdecke meine Fähigkeiten und Erfahrungen durch diese ausgewählten Projekte.
        </PageDescription>
      </PageHeader>
      
      <FilterContainer>
        <FilterButton 
          active={activeCategory === 'all'} 
          onClick={() => setActiveCategory('all')}
        >
          Alle Projekte
        </FilterButton>
        <FilterButton 
          active={activeCategory === 'website'} 
          onClick={() => setActiveCategory('website')}
        >
          <FontAwesomeIcon icon={faGlobe} />
          Websites
        </FilterButton>
        <FilterButton 
          active={activeCategory === 'ui-ux'} 
          onClick={() => setActiveCategory('ui-ux')}
        >
          <FontAwesomeIcon icon={faPaintBrush} />
          UI/UX Design
        </FilterButton>
        <FilterButton 
          active={activeCategory === 'avm-video'} 
          onClick={() => setActiveCategory('avm-video')}
        >
          <FontAwesomeIcon icon={faVideo} />
          AVM Videos
        </FilterButton>
        <FilterButton 
          active={activeCategory === 'other'} 
          onClick={() => setActiveCategory('other')}
        >
          <FontAwesomeIcon icon={faEllipsisH} />
          Andere
        </FilterButton>
      </FilterContainer>
      
      {filteredProjects.length > 0 ? (
        <ProjectsGrid>
          {filteredProjects.map((project: Project, index: number) => (
            <ProjectCard key={project.id} onClick={() => navigateToProjectDetail(project)}>
              {project.category === 'avm-video' && project.videoPath ? (
                <VideoThumbnail>
                  <video src={project.videoPath} muted />
                  <div className="play-button">
                    <FontAwesomeIcon icon={faVideo} />
                  </div>
                </VideoThumbnail>
              ) : (
                <ProjectImage imagePath={project.images.length > 0 ? project.images[0].path : undefined}>
                  <div className="view-more">
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                    Details anzeigen
                  </div>
                  <CategoryIcon>
                    <FontAwesomeIcon icon={getCategoryIcon(project.category)} />
                  </CategoryIcon>
                </ProjectImage>
              )}
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechTags>
                  {project.technologies.slice(0, 3).map((tech: string, index: number) => (
                    <TechTag key={index}>{tech}</TechTag>
                  ))}
                  {project.technologies.length > 3 && (
                    <TechTag>+{project.technologies.length - 3}</TechTag>
                  )}
                </TechTags>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      ) : (
        <EmptyState>
          <h3>Keine Projekte gefunden</h3>
          <p>In dieser Kategorie sind derzeit keine Projekte verfügbar.</p>
        </EmptyState>
      )}
    </PageContainer>
  );
};

export default ProjectsPage;

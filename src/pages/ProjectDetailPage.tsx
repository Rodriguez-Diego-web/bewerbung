import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowLeft, 
  faExternalLinkAlt, 
  faCalendar, 
  faGraduationCap, 
  faBuilding,
  faUser,
  faGlobe, 
  faPaintBrush, 
  faVideo, 
  faEllipsisH,
  faTags,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { Project, projects } from '../data/projectsData';

const PageContainer = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: var(--accent-color);
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
  padding: 10px 0;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateX(-5px);
  }
  
  svg {
    margin-right: 8px;
  }
  
  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 15px;
  }
`;

const ProjectHeader = styled.div`
  margin-bottom: 30px;
  position: relative;
  
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const ProjectHero = styled.div<{ $hasImage: boolean, $imageSrc?: string }>`
  height: ${props => props.$hasImage ? '350px' : '0'};
  background-color: ${props => props.$hasImage ? 'transparent' : '#222'};
  background-image: ${props => props.$imageSrc ? `url(${props.$imageSrc})` : 'none'};
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 30px;
  box-shadow: 0 5px 15px var(--shadow-color);
  position: relative;
  display: ${props => props.$hasImage ? 'block' : 'none'};
  transition: height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  opacity: ${props => props.$hasImage ? 1 : 0};
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%);
  }
  
  @media (max-width: 768px) {
    height: ${props => props.$hasImage ? '200px' : '0'};
    margin-bottom: 20px;
  }
`;

const ProjectTitle = styled.h1`
  font-size: 36px;
  margin-bottom: 15px;
  color: var(--text-color);
  font-weight: 600;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 10px;
  }
`;

const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 30px;
  font-size: 13px;
  font-weight: 500;
  
  svg {
    margin-right: 6px;
    font-size: 12px;
  }
  
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 4px 10px;
  }
`;

const ClientBadge = styled(Badge)`
  background-color: rgba(46, 204, 113, 0.15);
  color: #2ecc71;
`;

const AcademicBadge = styled(Badge)`
  background-color: rgba(52, 152, 219, 0.15);
  color: #3498db;
`;

const PersonalBadge = styled(Badge)`
  background-color: rgba(155, 89, 182, 0.15);
  color: #9b59b6;
`;

const CategoryBadge = styled(Badge)`
  background-color: rgba(249, 115, 22, 0.15);
  color: var(--accent-color);
`;

const YearBadge = styled(Badge)`
  background-color: rgba(250, 250, 250, 0.2);
  color: var(--text-secondary);
  border: 1px solid var(--border-color);
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  background-color: var(--accent-color);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  margin-top: 24px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(249, 115, 22, 0.2);
  
  &:hover {
    background-color: var(--accent-hover);
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(249, 115, 22, 0.25);
  }
  
  svg {
    margin-right: 10px;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding: 14px 20px;
  }
`;

const ProjectInfo = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const LeftColumn = styled.div``;

const RightColumn = styled.div`
  @media (max-width: 992px) {
    order: -1;
  }
`;

const InfoCard = styled.div`
  background-color: var(--card-background);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 2px 12px var(--shadow-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 20px var(--shadow-color);
  }
  
  @media (max-width: 768px) {
    padding: 20px;
    margin-bottom: 20px;
  }
`;

const InfoTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 20px;
  color: var(--text-color);
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 8px;
    color: var(--accent-color);
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 15px;
    padding-bottom: 10px;
  }
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const InfoItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  svg {
    color: var(--accent-color);
    margin-right: 12px;
    width: 18px;
    opacity: 0.8;
  }
  
  span {
    color: var(--text-color);
    font-size: 15px;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 14px;
    
    span {
      font-size: 14px;
    }
  }
`;

const ProjectDescription = styled.div`
  margin-bottom: 32px;
  line-height: 1.8;
  color: var(--text-color);
  font-size: 16px;
  
  p {
    margin-bottom: 16px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 24px;
  }
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const TechTag = styled.span`
  background-color: rgba(249, 115, 22, 0.1);
  color: var(--accent-color);
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 14px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(249, 115, 22, 0.2);
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    font-size: 13px;
    padding: 6px 12px;
  }
`;

const ImageGallery = styled.div`
  margin-top: 40px;
`;

const GalleryTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 24px;
  color: var(--text-color);
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 10px;
    color: var(--accent-color);
  }
  
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 16px;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 12px;
  }
`;

const GalleryImage = styled.div<{ src: string }>`
  width: 100%;
  height: 250px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 3px 10px var(--shadow-color);
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 20px var(--shadow-color);
    
    &::after {
      opacity: 1;
    }
  }
  
  @media (max-width: 768px) {
    height: 180px;
  }
`;

const LightboxOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: ${props => props.isOpen ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 40px;
  flex-direction: column;
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const LightboxImage = styled.img`
  max-width: 90%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 4px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.4);
`;

const LightboxClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 30px;
  cursor: pointer;
  z-index: 1001;
  
  &:hover {
    color: var(--accent-color);
  }
`;

const LightboxControls = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 0 20px;
  
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const LightboxButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  transition: background 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
`;

const LightboxCounter = styled.div`
  color: white;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.5);
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 14px;
`;

const NotFound = styled.div`
  text-align: center;
  padding: 100px 20px;
  
  h2 {
    font-size: 28px;
    margin-bottom: 15px;
    color: var(--text-color);
  }
  
  p {
    font-size: 18px;
    color: var(--text-color);
    opacity: 0.7;
    margin-bottom: 25px;
  }
  
  @media (max-width: 768px) {
    padding: 60px 20px;
    
    h2 {
      font-size: 24px;
    }
    
    p {
      font-size: 16px;
    }
  }
`;

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const numProjectId = parseInt(projectId || '', 10);
    const foundProject = projects.find(p => p.id === numProjectId);
    if (foundProject) {
      setProject(foundProject);
      console.log('Project Data for ID:', numProjectId, foundProject); // DEBUG
      console.log('Project Images Array:', foundProject.images); // DEBUG
      if (foundProject.images && foundProject.images.length > 0) {
        console.log('First Image Path for Hero:', foundProject.images[0]?.path); // DEBUG
      }
    } else {
      // Handle project not found, e.g., navigate to a 404 page or back
      navigate('/projekte'); 
    }
    
    // Scroll to top when project changes
    window.scrollTo(0, 0);
  }, [projectId, navigate]);
  
  const goBack = () => {
    navigate(-1); // Navigiert zur vorherigen Seite in der History
  };
  
  const openLightbox = (imagePath: string, index: number) => {
    setCurrentImage(imagePath);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  const goToPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!project) return;
    
    let newIndex = currentImageIndex - 1;
    if (newIndex < 0) newIndex = project.images.length - 1;
    
    setCurrentImageIndex(newIndex);
    setCurrentImage(project.images[newIndex].path);
  };
  
  const goToNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!project) return;
    
    let newIndex = currentImageIndex + 1;
    if (newIndex >= project.images.length) newIndex = 0;
    
    setCurrentImageIndex(newIndex);
    setCurrentImage(project.images[newIndex].path);
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
  
  const getCategoryName = (category: string) => {
    switch(category) {
      case 'website':
        return 'Website';
      case 'ui-ux':
        return 'UI/UX Design';
      case 'avm-video':
        return 'AVM Video';
      default:
        return 'Andere';
    }
  };
  
  const getProjectTypeIcon = (type?: string) => {
    switch(type) {
      case 'client':
        return faBuilding;
      case 'academic':
        return faGraduationCap;
      case 'personal':
        return faUser;
      default:
        return faEllipsisH;
    }
  };
  
  if (!project) {
    return (
      <PageContainer>
        <NotFound>
          <h2>Projekt nicht gefunden</h2>
          <p>Das gesuchte Projekt existiert nicht oder wurde entfernt.</p>
          <BackButton onClick={goBack}>
            <FontAwesomeIcon icon={faArrowLeft} />
            Zurück zur Projektübersicht
          </BackButton>
        </NotFound>
      </PageContainer>
    );
  }
  
  return (
    <PageContainer>
      <BackButton onClick={goBack}>
        <FontAwesomeIcon icon={faArrowLeft} />
        Zurück zur Projektübersicht
      </BackButton>
      
      <ProjectHero 
        $hasImage={project.images && project.images.length > 0} 
        $imageSrc={project.images[0]?.path} 
      />
      
      <ProjectHeader>
        <ProjectTitle>{project.title}</ProjectTitle>
        
        <BadgeContainer>
          {project.type === 'client' && (
            <ClientBadge>
              <FontAwesomeIcon icon={faBuilding} />
              Kundenprojekt
            </ClientBadge>
          )}
          {project.type === 'academic' && (
            <AcademicBadge>
              <FontAwesomeIcon icon={faGraduationCap} />
              Studienprojekt {project.semester && `(${project.semester})`}
            </AcademicBadge>
          )}
          {project.type === 'personal' && (
            <PersonalBadge>
              <FontAwesomeIcon icon={faUser} />
              Persönliches Projekt
            </PersonalBadge>
          )}
          
          <CategoryBadge>
            <FontAwesomeIcon icon={getCategoryIcon(project.category)} />
            {getCategoryName(project.category)}
          </CategoryBadge>
          
          {project.year && (
            <YearBadge>
              <FontAwesomeIcon icon={faCalendar} />
              {project.year}
            </YearBadge>
          )}
        </BadgeContainer>
        
        <ProjectDescription>
          <p>{project.description}</p>
        </ProjectDescription>
        
        {project.projectUrl && (
          <ProjectLink href={project.projectUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
            Projekt live ansehen
          </ProjectLink>
        )}
      </ProjectHeader>
      
      <ProjectInfo>
        <LeftColumn>
          {/* Video content removed as 'avm-video' category is deprecated */}
          
          {/* Image gallery */}
          {project.images.length > 0 && (
            <ImageGallery>
              <GalleryTitle>
                <FontAwesomeIcon icon={faVideo} />
                Projekt-Galerie
              </GalleryTitle>
              <GalleryGrid>
                {project.images.map((image, index) => (
                  <GalleryImage 
                    key={index}
                    src={image.path}
                    onClick={() => openLightbox(image.path, index)}
                  />
                ))}
              </GalleryGrid>
            </ImageGallery>
          )}
        </LeftColumn>
        
        <RightColumn>
          <InfoCard>
            <InfoTitle>
              <FontAwesomeIcon icon={faEllipsisH} />
              Projektdetails
            </InfoTitle>
            <InfoList>
              <InfoItem>
                <FontAwesomeIcon icon={getCategoryIcon(project.category)} />
                <span>Kategorie: {getCategoryName(project.category)}</span>
              </InfoItem>
              
              {project.type && (
                <InfoItem>
                  <FontAwesomeIcon icon={getProjectTypeIcon(project.type)} />
                  <span>Typ: {
                    project.type === 'client' ? 'Kundenprojekt' :
                    project.type === 'academic' ? 'Studienprojekt' :
                    'Persönliches Projekt'
                  }</span>
                </InfoItem>
              )}
              
              {project.semester && (
                <InfoItem>
                  <FontAwesomeIcon icon={faGraduationCap} />
                  <span>Semester: {project.semester}</span>
                </InfoItem>
              )}
              
              {project.year && (
                <InfoItem>
                  <FontAwesomeIcon icon={faCalendar} />
                  <span>Jahr: {project.year}</span>
                </InfoItem>
              )}
            </InfoList>
          </InfoCard>
          
          <InfoCard>
            <InfoTitle>
              <FontAwesomeIcon icon={faTags} />
              Verwendete Technologien
            </InfoTitle>
            <TechTags>
              {project.technologies.map((tech, index) => (
                <TechTag key={index}>{tech}</TechTag>
              ))}
            </TechTags>
          </InfoCard>
        </RightColumn>
      </ProjectInfo>
      
      {/* Lightbox for fullscreen images */}
      {lightboxOpen && project && project.images && project.images.length > 0 && (
        <LightboxOverlay isOpen={lightboxOpen} onClick={closeLightbox}>
          <LightboxImage src={currentImage} onClick={(e) => e.stopPropagation()} />
          <LightboxClose onClick={closeLightbox}>&times;</LightboxClose>
          
          {project.images.length > 1 && (
            <LightboxControls>
              <LightboxButton onClick={goToPrevImage}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </LightboxButton>
              <LightboxButton onClick={goToNextImage}>
                <FontAwesomeIcon icon={faChevronRight} />
              </LightboxButton>
            </LightboxControls>
          )}
          
          <LightboxCounter>
            {currentImageIndex + 1} / {project.images.length}
          </LightboxCounter>
        </LightboxOverlay>
      )}
    </PageContainer>
  );
};

export default ProjectDetailPage;

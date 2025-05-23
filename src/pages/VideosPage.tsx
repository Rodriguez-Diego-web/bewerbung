import React, { useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlay, 
  faPause, 
  faExpand, 
  faVolumeUp, 
  faVolumeMute,
  faTimes,
  faGraduationCap,
  faCalendarAlt,
  faBullseye,
  faPuzzlePiece,
  faCheckCircle,
  faTools,
  faUsers,
  faArrowRight,
  faLink,
  faInfo
} from '@fortawesome/free-solid-svg-icons';
import { videos } from '../data/videosData';
import { useNavigate } from 'react-router-dom';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

// Styled Components
const PageContainer = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  animation: ${fadeIn} 0.5s ease-out;
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 15px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const PageTitle = styled.h1`
  font-size: 28px;
  color: var(--text-color);
  margin: 0;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background-color: var(--accent-color);
    margin-top: 10px;
  }
`;



const VideosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 25px;
  margin-top: 20px;
  animation: ${slideUp} 0.5s ease-out;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const VideoCard = styled.div`
  background-color: var(--secondary-color);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const VideoThumbnail = styled.div<{ thumbnail: string }>`
  height: 180px;
  background-color: #333;
  background-image: ${props => props.thumbnail ? `url(${props.thumbnail})` : 'none'};
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 50%);
  }
`;

const PlayOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;
  z-index: 1;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
  
  .play-button {
    width: 60px;
    height: 60px;
    background-color: var(--accent-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s;
    opacity: 0.9;
    
    &:hover {
      transform: scale(1.1);
      opacity: 1;
    }
    
    svg {
      color: white;
      font-size: 24px;
      margin-left: 4px;
    }
  }
`;

const VideoInfo = styled.div`
  padding: 18px;
`;

const VideoTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 18px;
  color: var(--text-color);
  font-weight: 600;
  line-height: 1.4;
`;

const VideoDescription = styled.p`
  margin: 0 0 15px 0;
  font-size: 16px;
  color: var(--text-light);
  line-height: 1.5;
`;

const MetaInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 12px;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--text-light);
  
  svg {
    font-size: 12px;
    color: var(--accent-color);
  }
`;

// Nicht verwendete Komponente entfernt

// Nicht verwendete Komponente entfernt

// Nicht verwendete Komponente entfernt

const MetaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 15px;
  background-color: var(--secondary-color);
  padding: 10px 15px;
  border-radius: 8px;
`;

// Video Player Modal
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-out;
  overflow-y: hidden;
  padding: 30px 15px;
`;

const ModalContent = styled.div`
  width: 95%;
  max-width: 1200px;
  background-color: var(--main-color);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);
  animation: ${slideUp} 0.4s ease-out;
  display: grid;
  grid-template-columns: 45% 55%;
  max-height: 90vh;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    max-height: 100vh;
    border-radius: 0;
  }
`;

const VideoPlayerContainer = styled.div`
  width: 100%;
  background-color: black;
  aspect-ratio: 16 / 9;
  max-height: 50vh;
`;

const VideoElement = styled.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
  max-height: 90vh;
  cursor: pointer;
`;

const PlayerControls = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0) 100%);
`;

const ControlButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s;
  transition: opacity 0.3s;
  
  ${VideoPlayerContainer}:hover & {
    opacity: 1;
  }
`;

const PlayButton = styled(ControlButton)`
  background-color: var(--accent-color);
  
  &:hover {
    background-color: var(--accent-color-hover);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
  
  svg {
    font-size: 18px;
  }
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 5px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  cursor: pointer;
  position: relative;
  margin-bottom: 12px;
  
  &:hover {
    height: 8px;
  }
`;

const ProgressBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
`;

const ProgressFill = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: var(--accent-color);
  border-radius: 3px;
  transition: width 0.1s linear;
`;

const ControlsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const TimeDisplay = styled.div`
  color: white;
  font-size: 14px;
  opacity: 0.9;
  font-family: monospace;
  margin-left: 5px;
`;

const VideoDetailContainer = styled.div`
  padding: 20px;
  overflow-y: auto;
  height: 90vh;
  border-right: 1px solid var(--border-color);
  
  @media (max-width: 992px) {
    height: auto;
    max-height: 50vh;
    border-right: none;
    border-bottom: 1px solid var(--border-color);
  }
`;

const VideoDetailTitle = styled.h2`
  font-size: 24px;
  margin: 0 0 12px 0;
  font-weight: 600;
  color: var(--text-color);
`;

// Korrigiere die doppelte Deklaration
const DetailSection = styled.div`
  margin-bottom: 20px;
  background-color: var(--secondary-color);
  padding: 15px;
  border-radius: 8px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  margin: 0 0 10px 0;
  font-weight: 600;
  color: var(--text-color);
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    color: var(--accent-color);
  }
`;

const DetailText = styled.p`
  margin: 0 0 15px 0;
  font-size: 16px;
  color: var(--text-light);
  line-height: 1.6;
`;

const DetailsList = styled.ul`
  margin: 0;
  padding: 0 0 0 20px;
  list-style-type: none;
`;

const DetailItem = styled.li`
  position: relative;
  padding: 0 0 0 20px;
  margin-bottom: 8px;
  color: var(--text-light);
  font-size: 14px;
  line-height: 1.4;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 7px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--accent-color);
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ToolsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

const ToolTag = styled.div`
  padding: 6px 12px;
  border-radius: 6px;
  background-color: var(--secondary-color);
  color: var(--text-color);
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  
  svg {
    color: var(--accent-color);
    font-size: 12px;
  }
`;

const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 5px;
`;

const TeamMember = styled.div`
  padding: 4px 8px;
  border-radius: 4px;
  background-color: var(--main-color);
  color: var(--text-color);
  font-size: 13px;
`;

const RelatedProject = styled.div`
  margin-top: 20px;
  padding: 15px;
  border-radius: 8px;
  background-color: var(--secondary-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: var(--hover-color);
  }
`;

const RelatedProjectInfo = styled.div`
  flex: 1;
`;

const RelatedProjectTitle = styled.h4`
  margin: 0 0 5px 0;
  font-size: 16px;
  color: var(--text-color);
`;

const RelatedProjectType = styled.div`
  font-size: 14px;
  color: var(--text-light);
`;

const ViewRelatedButton = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--accent-color);
  font-size: 14px;
  font-weight: 500;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 25px;
  margin: 15px 0;
  flex: 1;
  overflow: hidden;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
    overflow-y: auto;
  }
`;

const Column = styled.div`
  overflow-y: auto;
`;

const NoVideosMessage = styled.div`
  text-align: center;
  margin: 50px 0;
  color: var(--text-light);
  
  h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 16px;
  }
`;

// Component
const VideosPage: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();
  
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleVideoClick = (id: number) => {
    setSelectedVideo(id);
    
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    // Start video playback after a short delay to allow modal to render
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(error => {
          console.error("Autoplay failed:", error);
          // Fallback if autoplay fails (common on mobile devices)
          setIsPlaying(false);
        });
        setIsPlaying(true);
      }
    }, 300);
  };
  
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  
  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };
  
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const videoDuration = videoRef.current.duration;
      setCurrentTime(current);
      setDuration(videoDuration);
      setProgress((current / videoDuration) * 100);
    }
  };
  
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const progressBar = e.currentTarget;
      const rect = progressBar.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = pos * videoRef.current.duration;
    }
  };
  
  // Format time in minutes:seconds
  const formatTime = (time: number): string => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  
  // Aktualisiert die tatsächliche Videodauer in der Datenquelle
  const updateVideoDuration = () => {
    if (videoRef.current && videoRef.current.duration) {
      const actualDuration = videoRef.current.duration;
      const formattedDuration = formatTime(actualDuration);
      console.log(`Tatsächliche Videodauer: ${formattedDuration}`);
      // Hier könnte man die tatsächliche Dauer in einer echten Anwendung
      // in die Datenbank speichern
    }
  };
  
  const closeModal = () => {
    setSelectedVideo(null);
    setIsPlaying(false);
    
    // Restore body scrolling when modal is closed
    document.body.style.overflow = 'auto';
  };
  
  const handleRelatedProjectClick = (projectId: number) => {
    closeModal();
    navigate(`/projects/${projectId}`);
  };
  
  // Get selected video data
  const selectedVideoData = selectedVideo !== null 
    ? videos.find(video => video.id === selectedVideo) 
    : null;
    
  // Get related project
  const relatedProject = selectedVideoData?.relatedProjectId 
    ? getRelatedProject(selectedVideoData.relatedProjectId) 
    : null;
    
  // Function to get related project data
  // Placeholder for actual implementation that would fetch from projectsData
  function getRelatedProject(projectId?: number) {
    if (!projectId) return null;
    
    // This would be replaced with actual project data lookup
    return {
      id: projectId,
      title: 'Related Project',
      type: 'Web App'
    };
  }

  // Video-Thumbnail Generator
  const generateThumbnail = (videoSrc: string, thumbnail: string) => {
    if (thumbnail) return thumbnail;
    
    // Generate a thumbnail from video (placeholder implementation)
    // In a real app, you might use a server-side function or a library
    return `https://via.placeholder.com/320x180/333333/FFFFFF?text=Video+Thumbnail`;
  };

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Meine Videos</PageTitle>
      </PageHeader>
      
      <VideosGrid>
        {videos.length > 0 ? (
          videos.map(video => (
            <VideoCard key={video.id} onClick={() => handleVideoClick(video.id)}>
              <VideoThumbnail thumbnail={generateThumbnail(video.videoUrl, video.thumbnailUrl)}>
                <PlayOverlay>
                  <div className="play-button">
                    <FontAwesomeIcon icon={faPlay} />
                  </div>
                </PlayOverlay>
              </VideoThumbnail>
              <VideoInfo>
                <VideoTitle>{video.title}</VideoTitle>
                <VideoDescription>{video.description}</VideoDescription>
                <MetaInfo>
                  <MetaItem>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    {video.date}
                  </MetaItem>
                </MetaInfo>
              </VideoInfo>
            </VideoCard>
          ))
        ) : (
          <NoVideosMessage>
            <h3>Keine Videos gefunden</h3>
            <p>Es gibt keine Videos.</p>
          </NoVideosMessage>
        )}
      </VideosGrid>
      
      {selectedVideo !== null && selectedVideoData && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <VideoDetailContainer>
              <CloseButton onClick={closeModal}>
                <FontAwesomeIcon icon={faTimes} />
              </CloseButton>
              <VideoDetailTitle>{selectedVideoData.title}</VideoDetailTitle>
              
              <DetailSection>
                <SectionTitle>
                  <FontAwesomeIcon icon={faInfo} />
                  Beschreibung
                </SectionTitle>
                <DetailText>{selectedVideoData.fullDescription}</DetailText>
              </DetailSection>
              
              <MetaContainer>
                {selectedVideoData.semester && (
                  <MetaItem>
                    <FontAwesomeIcon icon={faGraduationCap} />
                    {selectedVideoData.semester}
                  </MetaItem>
                )}
                <MetaItem>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  {selectedVideoData.date}
                </MetaItem>
              </MetaContainer>
              
              <TwoColumnLayout>
                <Column>
                  {selectedVideoData.goals && selectedVideoData.goals.length > 0 && (
                    <DetailSection>
                      <SectionTitle>
                        <FontAwesomeIcon icon={faBullseye} />
                        Ziele
                      </SectionTitle>
                      <DetailsList>
                        {selectedVideoData.goals.map((goal: string, index: number) => (
                          <DetailItem key={index}>{goal}</DetailItem>
                        ))}
                      </DetailsList>
                    </DetailSection>
                  )}
                  
                  {selectedVideoData.challenges && selectedVideoData.challenges.length > 0 && (
                    <DetailSection>
                      <SectionTitle>
                        <FontAwesomeIcon icon={faPuzzlePiece} />
                        Herausforderungen
                      </SectionTitle>
                      <DetailsList>
                        {selectedVideoData.challenges.map((challenge, index) => (
                          <DetailItem key={index}>{challenge}</DetailItem>
                        ))}
                      </DetailsList>
                    </DetailSection>
                  )}
                </Column>
                
                <Column>
                  {selectedVideoData.outcomes && selectedVideoData.outcomes.length > 0 && (
                    <DetailSection>
                      <SectionTitle>
                        <FontAwesomeIcon icon={faCheckCircle} />
                        Ergebnisse
                      </SectionTitle>
                      <DetailsList>
                        {selectedVideoData.outcomes.map((outcome, index) => (
                          <DetailItem key={index}>{outcome}</DetailItem>
                        ))}
                      </DetailsList>
                    </DetailSection>
                  )}
                  
                  {selectedVideoData.tools && selectedVideoData.tools.length > 0 && (
                    <DetailSection>
                      <SectionTitle>
                        <FontAwesomeIcon icon={faTools} />
                        Verwendete Tools
                      </SectionTitle>
                      <ToolsContainer>
                        {selectedVideoData.tools.map((tool, index) => (
                          <ToolTag key={index}>
                            {tool}
                          </ToolTag>
                        ))}
                      </ToolsContainer>
                    </DetailSection>
                  )}
                </Column>
              </TwoColumnLayout>
              
              {selectedVideoData.teamMembers && selectedVideoData.teamMembers.length > 0 && (
                <DetailSection>
                  <SectionTitle>
                    <FontAwesomeIcon icon={faUsers} />
                    Team
                  </SectionTitle>
                  <TeamContainer>
                    {selectedVideoData.teamMembers.map((member, index) => (
                      <TeamMember key={index}>
                        {member}
                      </TeamMember>
                    ))}
                  </TeamContainer>
                </DetailSection>
              )}
              
              {selectedVideoData.client && (
                <DetailSection>
                  <SectionTitle>
                    <FontAwesomeIcon icon={faLink} />
                    Kunde
                  </SectionTitle>
                  <DetailText>
                    {selectedVideoData.client}
                  </DetailText>
                </DetailSection>
              )}
              
              {relatedProject && (
                <DetailSection>
                  <SectionTitle>
                    <FontAwesomeIcon icon={faLink} />
                    Verwandtes Projekt
                  </SectionTitle>
                  <RelatedProject onClick={() => handleRelatedProjectClick(relatedProject.id)}>
                    <RelatedProjectInfo>
                      <RelatedProjectTitle>{relatedProject.title}</RelatedProjectTitle>
                      <RelatedProjectType>{relatedProject.type}</RelatedProjectType>
                    </RelatedProjectInfo>
                    <ViewRelatedButton>
                      Ansehen
                      <FontAwesomeIcon icon={faArrowRight} />
                    </ViewRelatedButton>
                  </RelatedProject>
                </DetailSection>
              )}
            </VideoDetailContainer>
            
            <VideoPlayerContainer>
              <VideoElement 
                ref={videoRef}
                src={selectedVideoData.videoUrl} 
                controls={false}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)} 
                onClick={handlePlayPause}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={updateVideoDuration}
                playsInline
              />
              <PlayerControls>
                <ProgressBarContainer onClick={handleProgressClick}>
                  <ProgressBackground />
                  <ProgressFill style={{ width: `${progress}%` }} />
                </ProgressBarContainer>
                <ControlsRow>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <PlayButton onClick={handlePlayPause}>
                      <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                    </PlayButton>
                    <ControlButton onClick={handleMute}>
                      <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
                    </ControlButton>
                    <TimeDisplay>{formatTime(currentTime)} / {formatTime(duration)}</TimeDisplay>
                  </div>
                  <ControlButton onClick={handleFullscreen}>
                    <FontAwesomeIcon icon={faExpand} />
                  </ControlButton>
                </ControlsRow>
              </PlayerControls>
            </VideoPlayerContainer>
          </ModalContent>
        </ModalOverlay>
      )}
    </PageContainer>
  );
};

export default VideosPage;

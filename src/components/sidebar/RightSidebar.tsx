import React from 'react';
import styled from 'styled-components';
import { IconType, IconBaseProps } from 'react-icons'; 
import { FaYoutube, FaLink, FaQuestionCircle, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'; 
import { FaLinkedin, FaGithub, FaBehance } from 'react-icons/fa'; 
import { profileData } from '../../data/profileData'; 

// Wrapper-Komponente für Icons
interface IconRendererProps {
  Icon: IconType | undefined; // Erlaube undefined, um den Fallback besser zu handhaben
  [key: string]: any; // Für zusätzliche Props wie 'style'
}

const IconRenderer = ({ Icon, ...rest }: IconRendererProps) => {
  if (!Icon) { 
    return null;
  }
  // Stärkere Typumwandlung, um TS2322/TS2769 zu beheben
  const IconComponent = Icon as unknown as React.FunctionComponent<IconBaseProps>; 
  return <IconComponent {...rest} />;
};

const SidebarContainer = styled.aside`
  width: 320px;
  padding: 25px;
  background-color: var(--sidebar-bg);
  border-left: 1px solid var(--border-color);
  height: calc(100vh - 70px); 
  overflow-y: auto;
  color: var(--text-color-secondary);
  font-size: 0.9rem;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--accent-color-secondary);
    border-radius: 3px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

const Section = styled.div`
  margin-bottom: 30px;
  padding: 20px;
  background-color: var(--content-bg);
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-color-primary);
  margin-bottom: 18px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border-color-light);
  display: flex;
  align-items: center;
`;

const ProSection = styled(Section)`
  background: linear-gradient(145deg, var(--accent-color), var(--accent-color-secondary));
  color: #fff;
  text-align: center;
`;

const ProTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

const ProText = styled.p`
  font-size: 0.95rem;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const ProFeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 15px;
  text-align: left;
  li {
    margin-bottom: 10px;
    font-size: 0.9rem;
    &:before {
      content: '✨';
      margin-right: 8px;
    }
  }
`;

const Button = styled.button`
  background-color: #fff;
  color: var(--accent-color);
  border: none;
  padding: 12px 25px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);

  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 12px;
  a {
    color: var(--text-color-secondary);
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: color 0.2s ease;
    font-weight: 500;

    svg {
      margin-right: 10px;
      color: var(--accent-color);
      font-size: 1.2em;
    }

    &:hover {
      color: var(--accent-color-secondary);
    }
  }
`;

const QuestionText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-color-primary);
  margin-bottom: 20px;
  text-align: center;
`;

const AnswerButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const AnswerButton = styled(Button)`
  background-color: var(--accent-color-secondary);
  color: #fff;
  &:hover {
    background-color: var(--accent-color);
  }
  &.no {
    background-color: var(--border-color-light);
    color: var(--text-color-secondary);
    &:hover {
      background-color: var(--border-color);
    }
  }
`;

const platformIcons: { [key: string]: IconType } = { 
  linkedin: FaLinkedin,
  github: FaGithub,
  behance: FaBehance,
  youtube: FaYoutube,
  website: FaLink,
  question: FaQuestionCircle, // Hinzugefügt für direkte Verwendung
  check: FaCheckCircle,     // Hinzugefügt für direkte Verwendung
  times: FaTimesCircle,     // Hinzugefügt für direkte Verwendung
};

const RightSidebar = () => {
  const { socialLinks } = profileData;

  const quickLinks = [
    {
      id: 'github_profile',
      name: 'Mein GitHub Profil',
      url: socialLinks.find(link => link.platform.toLowerCase() === 'github')?.url || '#',
      icon: 'github'
    },
    {
      id: 'behance_profile',
      name: 'Mein Behance Portfolio',
      url: socialLinks.find(link => link.platform.toLowerCase() === 'behance')?.url || '#',
      icon: 'behance'
    },
    {
      id: 'latest_project',
      name: 'Neuestes Web-Projekt',
      url: '#', 
      icon: 'website' 
    },
    {
      id: 'youtube_channel',
      name: 'Mein YouTube Kanal',
      url: '#', 
      icon: 'youtube'
    }
  ];

  return (
    <SidebarContainer>
      <ProSection>
        <ProTitle>Dozing Pro</ProTitle>
        <ProText>Schalte exklusive Features über mich frei – 100% Augenzwinkern garantiert!</ProText>
        <ProFeatureList>
          <li>☕ Meister im Kaffee kochen</li>
          <li>😂 Unerschütterlicher Optimismus</li>
          <li>💡 Kreative Ideen am laufenden Band</li>
          <li>⏰ Deadline-Dompteur (meistens)</li>
        </ProFeatureList>
        <Button onClick={() => alert('Feature freigeschaltet: Du hast Humor! 😉')}>Mehr erfahren</Button>
      </ProSection>

      <Section>
        <SectionTitle>Official Channels</SectionTitle>
        <LinkList>
          {socialLinks.map(link => {
            const IconToShow = platformIcons[link.platform.toLowerCase()] || FaLink;
            return (
              <LinkItem key={link.id}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <IconRenderer Icon={IconToShow} /> {link.platform}
                </a>
              </LinkItem>
            );
          })}
        </LinkList>
      </Section>

      <Section>
        <SectionTitle>Meine Links</SectionTitle>
        <LinkList>
          {quickLinks.map(link => {
            const IconToShow = platformIcons[link.icon.toLowerCase()] || FaLink;
            return (
              <LinkItem key={link.id}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <IconRenderer Icon={IconToShow} /> {link.name}
                </a>
              </LinkItem>
            );
          })}
        </LinkList>
      </Section>

      <Section>
        <SectionTitle><IconRenderer Icon={platformIcons.question} style={{ marginRight: '8px' }} /> Die alles entscheidende Frage</SectionTitle>
        <QuestionText>
          Nehmt ihr mich als Praktikant auf, um gemeinsam Großartiges zu schaffen?
        </QuestionText>
        <AnswerButtonsContainer>
          <AnswerButton onClick={() => alert('Fantastische Wahl! Melde dich bei mir.')}><IconRenderer Icon={platformIcons.check} style={{ marginRight: '5px' }}/> Ja, unbedingt!</AnswerButton>
          <AnswerButton className="no" onClick={() => alert('Schade, aber vielleicht beim nächsten Mal?')}><IconRenderer Icon={platformIcons.times} style={{ marginRight: '5px' }}/> Ähm, nein.</AnswerButton>
        </AnswerButtonsContainer>
      </Section>

    </SidebarContainer>
  );
};

export default RightSidebar;

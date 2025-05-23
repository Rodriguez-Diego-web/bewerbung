import React from 'react';
import styled from 'styled-components';
import { IconType, IconBaseProps } from 'react-icons'; 
import { FaQuestionCircle, FaCheckCircle, FaRocket, FaGlobeAmericas, FaStar, FaTimes, FaFilm } from 'react-icons/fa'; 
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; 
import { profileData, SocialLink } from '../../data/profileData'; 

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
  padding: 20px 15px;
  background-color: var(--primary-color);
  border-left: 1px solid var(--border-color-dark, rgba(255, 255, 255, 0.1));
  height: 100vh;
  overflow-y: auto;
  color: var(--text-color-on-dark-secondary, #adb5bd); /* Default text color for dark bg */
  font-size: 0.9rem;
  position: sticky;
  top: 0px; /* Stick to the very top */

  &::-webkit-scrollbar {
    width: 5px; 
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--accent-color-secondary);
    border-radius: 3px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

// Section: Styling for dark cards
const Section = styled.div`
  margin-bottom: 25px;
  padding: 18px;
  background-color: var(--card-bg-dark, #2C2C2E); /* Match video card background */
  border-radius: 10px;
  border: 1px solid var(--card-border-dark, rgba(255, 255, 255, 0.08)); /* Subtle border for dark cards */
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;

  &:hover {
    // transform: translateY(-2px); 
    // box-shadow: 0 3px 8px rgba(0,0,0,0.05); 
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.0rem;
  font-weight: 600;
  color: var(--text-color-on-dark-primary, #ffffff); /* Text color for dark bg */
  margin-bottom: 18px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
    color: var(--accent-color); 
    font-size: 1.3em;
  }
`;

const ProSection = styled(Section)`
  text-align: left;
  // Potentially: border-left: 3px solid var(--accent-color);
  // background-color: var(--accent-color-darker-bg, #3a3a3e); // Slightly different bg for pro section if desired
`;

const ProText = styled.p`
  font-size: 0.85rem;
  margin-bottom: 12px;
  line-height: 1.7;
  color: var(--text-color-on-dark-secondary, #adb5bd); /* Text color for dark bg */
`;

const ProFeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 15px 0; 
  li {
    margin-bottom: 6px; 
    font-size: 0.85rem;
    color: var(--text-color-on-dark-secondary, #adb5bd); /* Text color for dark bg */
    display: flex; 
    align-items: center;
    &:before {
      content: ''; 
      // display: inline-block;
      // width: 16px; 
      // height: 16px;
      // background-image: url('path/to/icon.svg'); 
      margin-right: 8px;
    }
  }
`;

const Button = styled.button`
  background-color: var(--accent-color); // Accent color remains the same
  color: #fff; // White text on accent is fine
  border: none;
  padding: 8px 18px; 
  border-radius: 18px;
  font-weight: 500; 
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-block;
  text-align: center;

  svg {
    margin-right: 6px;
    vertical-align: middle;
  }

  &:hover {
    filter: brightness(90%);
    transform: translateY(-1px);
  }
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 8px; 
  &:last-child {
    margin-bottom: 0;
  }
  a {
    color: var(--text-color-on-dark-secondary, #adb5bd); /* Link text color for dark bg */
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 8px 5px; 
    border-radius: 6px; 
    transition: color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
    font-weight: 500;
    font-size: 0.9rem; 

    .link-text {
      opacity: 0.8; // Slightly more opaque for dark bg
      transition: opacity 0.2s ease;
    }

    svg {
      margin-right: 12px;
      color: var(--accent-color); // Keep accent for icons on dark bg
      font-size: 1.5em;
      transition: color 0.2s ease;
      flex-shrink: 0; 
    }

    &:hover {
      background-color: var(--content-bg-dark-hover, rgba(255,255,255,0.05)); /* Hover for dark cards */
      color: var(--accent-color-light, var(--accent-color)); /* Link hover color on dark */
      svg {
        color: var(--accent-color-light, var(--accent-color));
      }
      .link-text {
        opacity: 1;
      }
    }
  }
`;

const QuestionText = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-color-on-dark-primary, #ffffff); /* Text color for dark bg */
  margin-bottom: 20px;
  text-align: center;
`;

const AnswerButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px; 
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 8px;
  font-size: 0.9rem;
  color: var(--text-color-on-dark-secondary, #adb5bd); 
`;

const sectionTitleIcons = {
  pro: FaRocket, 
  official: FaGlobeAmericas, 
  fun: FaQuestionCircle, 
  backstage: FaFilm
};

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

// Map string icon names to actual IconType components
const iconMap: { [key: string]: IconType } = {
  faLinkedin: FaLinkedin,
  faGithub: FaGithub,
  faInstagram: FaInstagram,
  // Add other icons here if needed from profileData
};

const RightSidebar = () => {
  const { socialLinks } = profileData; 

  const officialChannels = socialLinks.filter(link => 
    ['linkedin', 'github', 'instagram'].includes(link.platform.toLowerCase())
  );

  const deineWhatsAppNummer = "4917641673111"; // User's WhatsApp number

  const handleErfahreMehrClick = () => {
    // Spaß-Funktion für den "Erfahre mehr"-Button
    alert('Praktikum gratis - Diego Pro für nur 0,99€! 😉 War nur ein Spaß!');
  };

  const handleWhatsAppJaClick = () => {
    const nachricht = encodeURIComponent("Praktikumsanfrage auf deiner Webseite: JA! Ich bin interessiert.");
    window.open(`https://wa.me/${deineWhatsAppNummer}?text=${nachricht}`, '_blank');
  };

  const handleWhatsAppNeinClick = () => {
    const nachricht = encodeURIComponent("Praktikumsanfrage auf deiner Webseite: Nein, danke. (Feedback: ...)");
    window.open(`https://wa.me/${deineWhatsAppNummer}?text=${nachricht}`, '_blank');
  };

  return (
    <SidebarContainer>
      <ProSection>
        <SectionTitle>
          <IconRenderer Icon={sectionTitleIcons.pro} /> Diego Pro
        </SectionTitle>
        <ProText>
          Schalte exklusive Features über mich frei – nur 0,99 cent!
        </ProText>
        <ProFeatureList>
          {/* Could add specific icons here if desired */}
          <li>- Meister im Redbull trinken</li>
          <li>- KI ist voll mein Ding </li>
          <li>- Kreative Ideen am laufenden Band</li>
          <li>- Deadline-Dompteur (meistens)....(immer)</li>
        </ProFeatureList>
        <Button onClick={handleErfahreMehrClick}><IconRenderer Icon={FaStar} /> Mehr erfahren</Button>
      </ProSection>

      <Section>
        <SectionTitle>
          <IconRenderer Icon={sectionTitleIcons.official} /> Official Channels
        </SectionTitle>
        <LinkList>
          {officialChannels.map((link: SocialLink) => ( 
            <LinkItem key={link.platform}> 
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <IconRenderer Icon={iconMap[link.icon]} style={{ marginRight: '8px' }} /> {/* Use iconMap here */}
                {capitalize(link.platform)} 
              </a>
            </LinkItem>
          ))}
        </LinkList>
      </Section>

      <Section>
        <SectionTitle>
          <IconRenderer Icon={sectionTitleIcons.backstage} /> Diego Backstage
        </SectionTitle>
        <List>
          <ListItem>👩‍🏫 Lieblingslehrerin: Nicole Slink</ListItem>
          <ListItem>👨‍🏫 Lieblingslehrer: Ralf Schreier</ListItem>
          <ListItem>🎨 Lieblingsfach: AVM</ListItem>
          <ListItem>🥤 Lieblingsgetränk: Red Bull Acai</ListItem>
          <ListItem>⚡️ Kann 5 Dosen Red Bull am Tag beim Programmieren trinken.</ListItem>
          <ListItem>✨ Guter Code muss auch gut aussehen.</ListItem>
          <ListItem>⌨️ Lieblings-Shortcut: Cmd + Z</ListItem>
          <ListItem>🇪🇸 Plant, zurück nach Spanien zu gehen. +- 10 Jahre</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>
          <IconRenderer Icon={sectionTitleIcons.fun} /> Alsoooooo ? 
        </SectionTitle>
        <QuestionText>Praktikum bei euch ? </QuestionText>
        <AnswerButtonsContainer>
          <Button onClick={handleWhatsAppJaClick}><IconRenderer Icon={FaCheckCircle} /> Ja!</Button>
          <Button className="no" onClick={handleWhatsAppNeinClick}><IconRenderer Icon={FaTimes} /> Nein!</Button>
        </AnswerButtonsContainer>
      </Section>
    </SidebarContainer>
  );
};

export default RightSidebar;

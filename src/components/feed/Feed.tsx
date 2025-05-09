import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faPaperPlane, faUserAstronaut, faComments, faBullseye, faChartLine, faMagic } from '@fortawesome/free-solid-svg-icons';

// Animationen (können erweitert/angepasst werden)
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const slideInLeft = keyframes`
  from { transform: translateX(-100px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const slideInRight = keyframes`
  from { transform: translateX(100px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

// Hilfsfunktion für initialen Transform-Wert basierend auf Animationstyp
const getInitialTransform = (animType?: 'fadeIn' | 'slideUp' | 'slideInLeft' | 'slideInRight') => {
  switch (animType) {
    case 'slideUp':
      return 'translateY(50px)';
    case 'slideInLeft':
      return 'translateX(-100px)';
    case 'slideInRight':
      return 'translateX(100px)';
    default:
      return 'none'; // Für fadeIn oder wenn kein animType spezifiziert ist
  }
};

// Styled Components für den neuen Blog-Feed
const BlogFeedContainer = styled.div`
  width: 100%;
  /* max-width: 900px; */ /* Begrenzung für bessere Lesbarkeit - Entfernt */
  /* margin: 40px auto; */ /* Geändert für volle Breite */
  padding: 40px 0; /* Behält vertikalen Abstand, aber kein horizontales auto-margin oder max-width */
  position: relative; /* Für mögliche absolut positionierte Elemente im Feed */
  /* Beispiel für Hintergrund, falls gewünscht */
  color: var(--text-color);
  /* overflow-x: hidden;  Entfernt, da max-height und overflow-y dies steuern sollten */

  /* Macht den Container intern scrollbar, wenn Inhalt die max-height übersteigt */
  max-height: calc(100vh - 180px); /* Beispiel: 100% Viewport-Höhe minus Header/Footer/Margin-Schätzungen */
  overflow-y: auto;

  /* Versteckt den Scrollbalken für WebKit (Chrome, Safari, Edge) */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE und Edge */
  scrollbar-width: none;  /* Firefox */
`;

const BlogSection = styled.section<{ $visible?: boolean; $animDelay?: string; $animType?: 'fadeIn' | 'slideUp' | 'slideInLeft' | 'slideInRight' }>`
  margin-bottom: 80px;
  padding: 40px;
  background: rgba(30, 30, 30, 0.7); /* Etwas dunkler und transparenter für Tiefe */
  border-radius: 16px;
  border: 1px solid var(--border-color);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px); /* Glassmorphism-Effekt */
  opacity: 0; /* Initial state: invisible */
  transform: ${props => getInitialTransform(props.$animType)}; /* Initialer Transform basierend auf animType */

  ${props => props.$visible && css`
    /* Es werden keine direkten Opacity- oder Transform-Properties mehr hier gesetzt,
       nur noch die Animationseigenschaften, die die Keyframes referenzieren. */
    animation-name: ${props.$animType === 'slideInLeft' ? slideInLeft : props.$animType === 'slideInRight' ? slideInRight : props.$animType === 'slideUp' ? slideUp : fadeIn};
    animation-duration: 0.8s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
    animation-delay: ${props.$animDelay || '0s'};
  `}

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 30px;
  color: var(--accent-color);
  display: flex;
  align-items: center;
  gap: 15px;

  svg {
    font-size: 2.2rem;
    animation: ${float} 3s ease-in-out infinite;
    color: var(--accent-color); /* Sicherstellen, dass Icon die Akzentfarbe hat */
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 20px;
  color: #ccc; /* Etwas helleres Grau für besseren Kontrast auf dunklem Grund */
`;

const HighlightText = styled.span`
  color: var(--accent-color);
  font-weight: 600;
  /* Kleiner Leuchteffekt */
  text-shadow: 0 0 8px rgba(var(--accent-color-rgb), 0.5);
`;

const CompanyLink = styled.a`
  color: var(--secondary-accent-color);
  text-decoration: none;
  font-weight: 600;
  border-bottom: 2px dotted var(--secondary-accent-color_translucent);
  transition: color 0.3s ease, border-bottom-color 0.3s ease;

  &:hover {
    color: var(--accent-color);
    border-bottom-color: var(--accent-color);
  }
`;

// Zusätzliche Styled Components für Meilensteine
const MilestoneList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 30px;
`;

const MilestoneItem = styled.li<{ $visible?: boolean; $delay?: string }>`
  display: flex;
  align-items: flex-start;
  margin-bottom: 25px;
  font-size: 1.05rem;

  /* Initial state (sollte exakt dem 'from'-Zustand der Animation entsprechen) */
  opacity: 0;
  transform: translateX(-100px); /* Angepasst, um dem 'from'-State von 'slideInLeft' zu entsprechen */
  
  ${props => props.$visible && css`
    animation-name: ${slideInLeft};
    animation-duration: 0.6s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
    animation-delay: ${props.$delay || '0s'};
  `}

  .milestone-icon {
    margin-right: 18px;
    color: var(--secondary-accent-color);
    font-size: 1.4rem;
    margin-top: 3px;
  }

  .milestone-content {
    strong {
      display: block;
      font-weight: 600;
      color: var(--text-color-light);
      margin-bottom: 5px;
    }
    span {
      color: #bbb;
      font-size: 0.9rem;
    }
  }
`;

const Feed: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});
  const [visibleMilestones, setVisibleMilestones] = useState<Record<string, boolean>>({});
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);
  const milestoneRefs = useRef<Array<HTMLElement | null>>([]);

  const handleSectionIntersection = useCallback((id: string) => {
    setVisibleSections(prev => ({ ...prev, [id]: true }));
  }, []);

  const handleMilestoneIntersection = useCallback((id: string) => {
    setVisibleMilestones(prev => ({ ...prev, [id]: true }));
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null, // Beobachtet im Viewport
      rootMargin: '0px',
      threshold: 0.1 // Etwas früher auslösen für sanftere Übergänge
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          handleSectionIntersection(entry.target.id);
        }
      });
    }, observerOptions);

    const milestoneObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          handleMilestoneIntersection(entry.target.id);
        }
      });
    }, observerOptions);

    // Weise Refs zu und beobachte Elemente
    sectionRefs.current.forEach(ref => {
      if (ref) sectionObserver.observe(ref);
    });
    milestoneRefs.current.forEach(ref => {
      if (ref) milestoneObserver.observe(ref);
    });

    // Kopiere die aktuellen Ref-Werte für die Cleanup-Funktion
    const currentSectionRefs = sectionRefs.current;
    const currentMilestoneRefs = milestoneRefs.current;

    // Aufräumen
    return () => {
      currentSectionRefs.forEach(ref => { // Verwende die kopierten Werte
        if (ref) sectionObserver.unobserve(ref);
      });
      currentMilestoneRefs.forEach(ref => { // Verwende die kopierten Werte
        if (ref) milestoneObserver.unobserve(ref);
      });
    };
  }, [handleSectionIntersection, handleMilestoneIntersection]); // Abhängigkeiten für Callbacks hinzugefügt

  const sectionsData = [
    {
      id: 'intro',
      title: 'Hallo Basti & Emb Bentley Team!',
      icon: faPaperPlane,
      animType: 'fadeIn',
      content: (
        <>
          <Paragraph>
            Herzlich willkommen zu meinem etwas anderen Bewerbungs-Showcase! Statt eines drögen Anschreibens dachte ich mir, ich zeige euch direkt, was ich draufhabe – und was mich an <CompanyLink href="https://www.basti-emb-bentley.com" target="_blank" rel="noopener noreferrer">Basti Emb Bentley</CompanyLink> so fasziniert. Diese Seite ist nicht nur eine Demo meiner Coding-Skills, sondern auch ein kleiner Einblick in meine Motivation und wie ich ticke.
          </Paragraph>
          <Paragraph>
            Ihr sucht jemanden, der nicht nur Code schreibt, sondern mitdenkt, kreativ ist und für den Nutzer brennt? <HighlightText>Volltreffer!</HighlightText> Ich liebe es, intuitive und ansprechende Web-Erlebnisse zu schaffen. Und genau das möchte ich bei euch tun.
          </Paragraph>
        </>
      )
    },
    {
      id: 'journey',
      title: 'Meine Entwicklungsreise hierher',
      icon: faChartLine,
      animType: 'slideInLeft', 
      animDelay: '0.2s',
      content: (
        <>
          <Paragraph>
            Dieses Portfolio/Blog ist mein aktuelles "Spielplatzprojekt", um React, TypeScript und moderne Web-Technologien weiter zu vertiefen. Es ist komplett von Grund auf mit viel Liebe zum Detail und dem einen oder anderen Kaffee entstanden. Die Idee war, etwas Interaktives und Persönliches zu schaffen, das über eine statische Seite hinausgeht.
          </Paragraph>
          <MilestoneList>
            {[ 
              { id: 'ms1', title: 'Konzept & Design', date: 'April 2024', icon: faLightbulb, delay: '0.1s' },
              { id: 'ms2', title: 'Grundstruktur mit React & TS', date: 'April 2024', icon: faUserAstronaut, delay: '0.2s' },
              { id: 'ms3', title: 'Styling mit Styled Components', date: 'Mai 2024', icon: faMagic, delay: '0.3s' },
              { id: 'ms4', title: 'Interaktive Blog-Komponente', date: 'Mai 2024', icon: faComments, delay: '0.4s' },
              { id: 'ms5', title: 'Deployment & Fine-Tuning', date: 'Laufend', icon: faBullseye, delay: '0.5s' },
            ].map((milestone, index) => (
              <MilestoneItem 
                key={milestone.id} 
                id={milestone.id} 
                ref={el => { milestoneRefs.current[index] = el; }} 
                $visible={visibleMilestones[milestone.id]} 
                $delay={milestone.delay}
              >
                <FontAwesomeIcon icon={milestone.icon} className="milestone-icon" />
                <div className="milestone-content">
                  <strong>{milestone.title}</strong>
                  <span>{milestone.date}</span>
                </div>
              </MilestoneItem>
            ))}
          </MilestoneList>
        </>
      )
    },
    {
      id: 'fascination',
      title: 'Warum Basti Emb Bentley?',
      icon: faLightbulb,
      animType: 'slideInRight',
      animDelay: '0.3s',
      content: (
        <>
          <Paragraph>
            Eure Projekte im Bereich <HighlightText>Augmented Reality und interaktive Erlebnisse</HighlightText> finde ich extrem spannend. Die Art, wie ihr Technologie nutzt, um Geschichten zu erzählen und komplexe Informationen zugänglich zu machen, inspiriert mich. Ich sehe da eine riesige Schnittmenge zu meinen eigenen Interessen und dem Wunsch, an innovativen Lösungen mitzuwirken.
          </Paragraph>
          <Paragraph>
            Die Unternehmenskultur, die ihr nach außen tragt – kreativ, teamorientiert und immer am Puls der Zeit – spricht mich sehr an. Ich bin überzeugt, dass ich in so einem Umfeld mein volles Potenzial entfalten kann.
          </Paragraph>
        </>
      )
    },
    {
      id: 'contribution',
      title: 'Was ich einbringen kann',
      icon: faUserAstronaut,
      animType: 'slideUp',
      animDelay: '0.1s',
      content: (
        <>
          <Paragraph>
            Neben meinen aktuellen Kenntnissen in <HighlightText>React, TypeScript, Next.js und Node.js</HighlightText> bringe ich eine große Portion Lernbereitschaft und Begeisterung für neue Technologien mit. Ich arbeite mich schnell in neue Themen ein und liebe es, an Herausforderungen zu wachsen.
          </Paragraph>
          <Paragraph>
            Vor allem aber bringe ich eine <HighlightText>Hands-on-Mentalität</HighlightText> und den Willen mit, Dinge nicht nur zu erledigen, sondern sie richtig gut zu machen. Ich bin ein Teamplayer, kommunikativ und immer offen für Feedback.
          </Paragraph>
        </>
      )
    },
    {
      id: 'reflection',
      title: 'Ein Praktikum – Und dann?',
      icon: faComments,
      animType: 'fadeIn',
      animDelay: '0.4s',
      content: (
        <>
          <Paragraph>
            Ein Praktikum bei euch sehe ich als perfekte Chance, tief in die professionelle Webentwicklung einzutauchen, von erfahrenen Entwicklern zu lernen und an echten Projekten mitzuwirken. Mein Ziel ist es, mich langfristig in diesem Bereich zu etablieren und komplexe, nutzerzentrierte Anwendungen zu entwickeln.
          </Paragraph>
          <Paragraph>
            Ich bin gespannt auf eure Rückmeldung und würde mich riesig freuen, wenn diese kleine Demonstration meines Könnens euer Interesse geweckt hat!
          </Paragraph>
        </>
      )
    }
  ];

  return (
    <BlogFeedContainer>
      {sectionsData.map((section, index) => (
        <BlogSection 
          key={section.id} 
          id={section.id} 
          ref={el => { sectionRefs.current[index] = el; }} 
          $visible={visibleSections[section.id]} 
          $animType={section.animType as any} 
          $animDelay={section.animDelay}
        >
          <SectionTitle>
            <FontAwesomeIcon icon={section.icon} /> 
            {section.title}
          </SectionTitle>
          {section.content}
        </BlogSection>
      ))}
    </BlogFeedContainer>
  );
};

export default Feed;

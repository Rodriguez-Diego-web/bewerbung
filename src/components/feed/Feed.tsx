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
  padding: 40px 0; 
  position: relative; 
  color: var(--text-color);

  /* REMOVED max-height and overflow properties to allow parent to handle scrolling */
  /* max-height: calc(100vh - 180px); */
  /* overflow-y: auto; */

  /* REMOVED scrollbar hiding styles as overflow-y is removed */
  /* &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  
  scrollbar-width: none;   */
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
      title: 'Moin bastiembentley!',
      icon: faPaperPlane,
      animType: 'fadeIn',
      content: (
        <>
          <Paragraph>
            Ich hab eure Arbeiten verfolgt und bin beeindruckt. Kreative Power aus Bremerhaven, made in Altenwalde und Cuxhaven trifft auf echtes Handwerk – genau meine Welt. Als Filmmaker mit technischem Know-how sehe ich bei euch die perfekte Plattform für meine nächsten Schritte.
          </Paragraph>
          <Paragraph>
            Diese Bewerbung? Komplett selbstcodiert. Zeigt meine Denkweise: Nicht nur reden, sondern machen. Mit derselben Energie würde ich auch eure Projekte vorantreiben. Medien plus Code, ein Mix mit Potenzial.
          </Paragraph>
        </>
      )
    },
    {
      id: 'journey',
      title: 'Mein Weg zur Bewerbung bei euch',
      icon: faChartLine,
      animType: 'slideInLeft', 
      animDelay: '0.2s',
      content: (
        <>
          <Paragraph>
            AVM-Projekte in der Uni? <HighlightText>Absolutes Highlight</HighlightText> für mich! Nichts macht mir mehr Spaß als hinter der Kamera zu stehen und dann im Schnitt zu sehen, wie alles zusammenkommt. Es ist dieses Gefühl, wenn aus einer verrückten Idee plötzlich etwas Greifbares entsteht. Genau diese Kreativität ist es, die mich total triggert.
          </Paragraph>
          <Paragraph>
            In der Postproduktion blühe ich richtig auf. Im Team spinnen wir Ideen weiter, überlegen gemeinsam, was machbar ist und was nicht. Diese Mischung aus technischer Herausforderung und kreativer Freiheit ist genau mein Ding. Und genau das sehe ich auch in euren Arbeiten.
          </Paragraph>
          <Paragraph>
            Das <HighlightText>Code Base Projekt</HighlightText> begonn im April 2025 und endet im Mai 2025.
          </Paragraph>
          <MilestoneList>
            {[ 
              { id: 'ms1', title: 'Konzept & erste Codezeilen', date: 'Anfang April 2025', icon: faLightbulb, delay: '0.1s' },
              { id: 'ms2', title: 'Grundstruktur & Responsive Design', date: 'Mitte April 2025', icon: faUserAstronaut, delay: '0.2s' },
              { id: 'ms3', title: 'Integration des Code Base Projekts', date: '29. April 2025', icon: faMagic, delay: '0.3s' },
              { id: 'ms4', title: 'Implementierung der Animationseffekte', date: '3. Mai 2025', icon: faComments, delay: '0.4s' },
              { id: 'ms5', title: 'Video-Showcase Optimierung', date: '12. Mai 2025', icon: faBullseye, delay: '0.5s' },
              { id: 'ms6', title: 'Performance-Verbesserungen & UX-Updates', date: '18. Mai 2025', icon: faLightbulb, delay: '0.6s' },
              { id: 'ms7', title: 'Finale Portfolio-Erweiterung', date: '22. Mai 2025', icon: faMagic, delay: '0.7s' },
              { id: 'ms8', title: 'Fertig', date: '28. Mai 2025', icon: faMagic, delay: '0.7s' },
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
      title: 'Was mich an bastiembentley reizt',
      icon: faLightbulb,
      animType: 'slideInRight',
      animDelay: '0.3s',
      content: (
        <>
          <Paragraph>
            Eure <HighlightText>visuellen Geschichten</HighlightText> haben Charakter. Bremerhavener DNA, aber auf professionellem Level. Ich will diese Art von Storytelling vertiefen und dabei neue Verbindungen zwischen Film und Code schaffen. Eure Medienpräsenz ist kein Zufall – sie zeigt den Wert von durchdachter Konzeption und präziser Umsetzung.
          </Paragraph>
          <Paragraph>
            Ich bin ein echter Fan eurer Sparkassen-Reihe.
          </Paragraph>
          <Paragraph>
            Euer Team atmet Innovation. Man kann euch den Spaß ansehen, wenn man eure Reels schaut. <br />
            Ich sitze immer mit einem <HighlightText>breiten Grinsen</HighlightText> vor meinem Handy, wenn ich eure Reels sehe und den Spaß bei euch mitfühle.
          </Paragraph>
        </>
      )
    },
    {
      id: 'contribution',
      title: 'Das bringe ich mit',
      icon: faUserAstronaut,
      animType: 'slideUp',
      animDelay: '0.1s',
      content: (
        <>
          <Paragraph>
            Skills in <HighlightText>Kameraführung, Storytelling und Video-Editing</HighlightText> sind meine Basis. Dazu kommt visuelle Gestaltung und ein Auge für Detail. <br />
            Aber wichtiger: ich lerne schnell und passe mich an. Neue Tech? Neue Tools? Kein Problem – ich tauche ein und liefere.
          </Paragraph>
          <Paragraph>
            Meine Stärke ist die <HighlightText>Hands-on-Mentalität</HighlightText>. Keine langen Diskussionen, sondern Lösungen finden und umsetzen. Qualität statt Quantität. Kommunikation auf Augenhöhe. Und ein gesundes Maß Selbstorganisation, das Projekte voranbringt.
          </Paragraph>
        </>
      )
    },
    {
      id: 'reflection',
      title: 'Warum ein Praktikum bei euch?',
      icon: faComments,
      animType: 'fadeIn',
      animDelay: '0.4s',
      content: (
        <>
          <Paragraph>
            Bei euch kann ich zwei Welten verbinden: visuelle Medien und digitale Technik. Mein Ziel: Von den Besten lernen, an echten Projekten wachsen, messbare Ergebnisse liefern. Euer Fokus auf hochwertige Videoproduktion trifft auf meine Medien- und Tech-Skills – eine Kombination mit echtem Mehrwert.
          </Paragraph>
          <Paragraph>
            Diese Bewerbung ist nur der Anfang. Lasst uns im Gespräch herausfinden, was wir gemeinsam erreichen können. Ich bring Energie, Ideen und Umsetzungsstärke mit – den Rest erarbeiten wir zusammen.
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

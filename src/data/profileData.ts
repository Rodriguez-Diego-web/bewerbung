interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  from: string;
  to: string;
  description: string;
}

interface Experience {
  id: number;
  position: string;
  company: string;
  location: string;
  from: string;
  to: string;
  description: string;
  achievements: string[];
}

interface Skill {
  id: number;
  name: string;
  level: number; // 1-5
  category: 'design' | 'development' | 'tools' | 'softSkills';
}

export interface SocialLink {
  id: number;
  platform: string;
  url: string;
  icon: string;
}

interface Post {
  id: number;
  title: string;
  date: string;
  content: string;
  category: 'news' | 'portfolio' | 'personal';
  image?: string;
}

interface Profile {
  firstName: string;
  lastName: string;
  position: string;
  avatarUrl: string;
  heroImage: string;
  tagline: string;
  about: string;
  location: string;
  email: string;
  phone: string;
  socialLinks: SocialLink[];
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  languages: { language: string; proficiency: string }[];
  posts: Post[];
  interests: string[];
  portfolioHighlights: number[]; // IDs from projectsData
}

export const profileData: Profile = {
  firstName: "Kadir Diego",
  lastName: "Padin Rodriguez",
  position: "UI/UX Designer & Frontend-Entwickler",
  avatarUrl: "",
  heroImage: "",
  tagline: "Kreative digitale Lösungen mit Fokus auf Benutzerfreundlichkeit und ästhetischem Design",
  about: "Als passionierter UI/UX Designer und Frontend-Entwickler verbinde ich technisches Know-how mit kreativem Design. Mit meinem Hintergrund in digitaler Medienproduktion schaffe ich Anwendungen, die nicht nur gut aussehen, sondern auch intuitiv bedienbar sind. Ich lege besonderen Wert auf nutzerorientierte Gestaltung und innovative Lösungsansätze, die sowohl ästhetisch ansprechend als auch funktional sind.",
  location: "Hamburg, Deutschland",
  email: "kontakt@kadirrodriguez.de",
  phone: "+49 123 456789",
  socialLinks: [
    {
      id: 1,
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/kadir-diego-padin-rodriguez/",
      icon: "faLinkedin"
    },
    {
      id: 2,
      platform: "GitHub",
      url: "https://github.com/Rodriguez-Diego-web",
      icon: "faGithub"
    },
    {
      id: 3,
      platform: "Instagram",
      url: "https://www.instagram.com/diego_rodriguez_digital/",
      icon: "faInstagram"
    }
  ],
  education: [
    {
      id: 1,
      institution: "Hochschule für Angewandte Wissenschaften Hamburg",
      degree: "Bachelor of Arts",
      field: "Digitale Medienproduktion",
      from: "2021",
      to: "2025",
      description: "Studium mit Schwerpunkt auf User Interface Design, Web-Entwicklung und digitale Mediengestaltung. Vertiefung in benutzerorientierter Gestaltung und interaktiven Systemen."
    },
    {
      id: 2,
      institution: "Designschule Hamburg",
      degree: "Zertifikat",
      field: "UX/UI Design Fundamentals",
      from: "2020",
      to: "2021",
      description: "Intensivkurs mit Fokus auf User Experience Design, Prototyping und modernen Design-Methoden."
    }
  ],
  experience: [
    {
      id: 1,
      position: "UI/UX Designer (Werkstudent)",
      company: "DigitalCraft GmbH",
      location: "Hamburg",
      from: "2023",
      to: "Heute",
      description: "Gestaltung und Optimierung von Benutzeroberflächen für Web- und Mobile-Anwendungen. Enge Zusammenarbeit mit Entwicklern und Produktmanagern zur Umsetzung nutzerorientierter Designs.",
      achievements: [
        "Redesign eines E-Commerce-Portals mit 30% verbesserter Conversion-Rate",
        "Entwicklung eines Design Systems zur Vereinheitlichung der Unternehmensprodukte",
        "Durchführung von User Tests und Implementierung von Verbesserungen basierend auf Nutzerfeedback"
      ]
    },
    {
      id: 2,
      position: "Frontend Developer (Praktikum)",
      company: "WebSolutions AG",
      location: "Berlin",
      from: "2022",
      to: "2023",
      description: "Implementierung von Benutzeroberflächen mit React und TypeScript. Optimierung bestehender Webanwendungen und Umsetzung responsiver Designs.",
      achievements: [
        "Entwicklung einer Progressive Web App für einen Kunden aus dem Einzelhandel",
        "Verbesserung der Performance mehrerer Webanwendungen",
        "Migration von Legacy-Code zu modernen Frameworks"
      ]
    },
    {
      id: 3,
      position: "Freelancer",
      company: "Selbstständig",
      location: "Remote",
      from: "2020",
      to: "Heute",
      description: "Umsetzung von verschiedenen Kundenprojekten im Bereich Webdesign und -entwicklung. Spezialisierung auf kleine bis mittlere Unternehmen und Portfoliowebsites.",
      achievements: [
        "Erstellung einer Portfolio-Website für eine Fotografin",
        "Entwicklung mehrerer E-Commerce-Lösungen für lokale Unternehmen",
        "Durchführung von Redesigns bestehender Websites mit Fokus auf Benutzerfreundlichkeit"
      ]
    }
  ],
  skills: [
    { id: 1, name: "UI Design", level: 5, category: "design" },
    { id: 2, name: "UX Design", level: 5, category: "design" },
    { id: 3, name: "Prototyping", level: 4, category: "design" },
    { id: 4, name: "Wireframing", level: 5, category: "design" },
    { id: 5, name: "Design Systems", level: 4, category: "design" },
    { id: 6, name: "Figma", level: 5, category: "tools" },
    { id: 7, name: "Adobe XD", level: 4, category: "tools" },
    { id: 8, name: "Adobe Photoshop", level: 4, category: "tools" },
    { id: 9, name: "Adobe Illustrator", level: 3, category: "tools" },
    { id: 10, name: "HTML5", level: 5, category: "development" },
    { id: 11, name: "CSS3/SCSS", level: 5, category: "development" },
    { id: 12, name: "JavaScript", level: 4, category: "development" },
    { id: 13, name: "TypeScript", level: 4, category: "development" },
    { id: 14, name: "React", level: 4, category: "development" },
    { id: 15, name: "React Native", level: 3, category: "development" },
    { id: 16, name: "Git", level: 4, category: "tools" },
    { id: 17, name: "Responsive Design", level: 5, category: "development" },
    { id: 18, name: "Kommunikation", level: 5, category: "softSkills" },
    { id: 19, name: "Teamarbeit", level: 5, category: "softSkills" },
    { id: 20, name: "Kreatives Denken", level: 5, category: "softSkills" }
  ],
  languages: [
    { language: "Deutsch", proficiency: "Muttersprache" },
    { language: "Englisch", proficiency: "Fließend (C1)" },
    { language: "Spanisch", proficiency: "Fortgeschritten (B2)" }
  ],
  posts: [
    {
      id: 1,
      title: "Mein Portfolio-Website Launch",
      date: "24. April 2025",
      content: "Nach wochenlanger Arbeit freue ich mich, meine neue Portfolio-Website zu präsentieren! Diese Seite wurde mit React und TypeScript entwickelt und zeigt meine Projekte und Fähigkeiten. Besonders wichtig war mir die Implementierung eines responsiven Designs, das auf allen Geräten optimal funktioniert, sowie die Möglichkeit, zwischen einem hellen und dunklen Farbschema zu wechseln. In den kommenden Wochen werde ich weitere Inhalte hinzufügen und die Performance optimieren.",
      category: "news",
      image: "/fotos/2. semster/IMG_9716.jpeg"
    },
    {
      id: 2,
      title: "Die Bedeutung von User-Centered Design",
      date: "15. April 2025",
      content: "In meiner Arbeit als UI/UX Designer habe ich gelernt, dass der Schlüssel zu erfolgreichen digitalen Produkten immer beim Nutzer liegt. User-Centered Design bedeutet, die Bedürfnisse und Erwartungen der Zielgruppe in den Mittelpunkt des Designprozesses zu stellen. Jede Entscheidung, von der Farbwahl bis zur Platzierung von Buttons, sollte auf Basis von Nutzerforschung und -feedback getroffen werden. Diese Herangehensweise führt nicht nur zu ästhetisch ansprechenden Designs, sondern vor allem zu Produkten, die intuitiv bedienbar sind und echten Mehrwert bieten.",
      category: "personal"
    },
    {
      id: 3,
      title: "Mein Weg zum Frontend-Entwickler",
      date: "1. April 2025",
      content: "Meine Reise in die Welt der Webentwicklung begann mit einfachen HTML-Seiten und hat sich zu komplexen React-Anwendungen entwickelt. Der Weg war nicht immer einfach, aber jede Herausforderung hat mich weitergebracht. Besonders der Übergang von reinem Design zur Implementierung war lehrreich. Zu verstehen, wie Design und Code zusammenarbeiten, hat mir eine einzigartige Perspektive gegeben, die ich in jedem Projekt nutze. Ich glaube, dass die Kombination aus Design-Verständnis und technischem Know-how besonders wertvoll ist, um ganzheitliche digitale Erlebnisse zu schaffen.",
      category: "personal"
    }
  ],
  interests: [
    "Digitale Kunst",
    "Mobile App Design",
    "Interaktive Installationen",
    "Fotografie",
    "Neue Technologien",
    "Reisen"
  ],
  portfolioHighlights: [2, 5, 7, 1]
};

export default profileData;

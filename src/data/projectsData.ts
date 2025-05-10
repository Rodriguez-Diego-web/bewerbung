interface ProjectImage {
  path: string;
  alt: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  category: 'website' | 'ui-ux' | 'other' | 'programmieren';
  images: ProjectImage[];
  technologies: string[];
  featured: boolean;
  videoPath?: string;
  projectUrl?: string; // Live-URL zum Projekt
  semester?: string; // In welchem Semester wurde das Projekt erstellt
  type?: 'client' | 'academic' | 'personal'; // Art des Projekts
  year?: string; // Jahr der Erstellung
}

export const projects: Project[] = [
  {
    id: 1,
    title: "CityShare",
    description: "Eine Plattform für das Teilen urbaner Ressourcen und die Förderung nachhaltiger Stadtentwicklung. CityShare wurde als fiktives Kundenprojekt entwickelt und bietet innovative Lösungen für urbane Mobilität und Ressourcenteilung.",
    category: "website",
    images: [
      { path: "/Projektbilder/city/1.png", alt: "CityShare Hauptseite" },
      { path: "/Projektbilder/city/2.png", alt: "CityShare Funktionen" },
      { path: "/Projektbilder/city/3.png", alt: "CityShare mobile Ansicht" }
    ],
    technologies: ["React", "Node.js", "MongoDB", "Responsive Design"],
    featured: true,
    projectUrl: "https://cityshare.netlify.app/",
    type: "academic",
    semester: "5. Semester",
    year: "2024"
  },
  {
    id: 2,
    title: "Flyver",
    description: "Eine innovative Reiseplattform, die Benutzern hilft, Flüge zu finden und zu buchen mit besonderem Fokus auf Benutzerfreundlichkeit. Flyver wurde als fiktiver Kunde im Rahmen eines Studienprojekts konzipiert und implementiert.",
    category: "website",
    images: [
      { path: "/Projektbilder/flyver/1.png", alt: "Flyver Startseite" },
      { path: "/Projektbilder/flyver/2.png", alt: "Flyver Buchungsansicht" },
      { path: "/Projektbilder/flyver/3.png", alt: "Flyver Ergebnisse" },
      { path: "/Projektbilder/flyver/4.png", alt: "Flyver Mobile App" }
    ],
    technologies: ["React", "TypeScript", "Styled-Components", "Responsive Design", "UI/UX Design"],
    featured: true,
    projectUrl: "https://fleyver.netlify.app/",
    type: "academic",
    semester: "5. Semester",
    year: "2024"
  },
  {
    id: 3,
    title: "FAMFORDOGS",
    description: "Eine Plattform für Hundeliebhaber, die Ressourcen, Community und Produkte für Hunde und ihre Besitzer anbietet. Dieses Projekt wurde als Semesterabgabe im 6. Semester entwickelt und legt besonderen Wert auf Benutzerfreundlichkeit und ansprechendes Design für Haustierliebhaber.",
    category: "website",
    images: [
      { path: "/Projektbilder/FFD/1.png", alt: "FAMFORDOGS Hauptseite" },
      { path: "/Projektbilder/FFD/2.png", alt: "FAMFORDOGS Produktseite" },
      { path: "/Projektbilder/FFD/3.png", alt: "FAMFORDOGS Community" }
    ],
    technologies: ["WordPress", "WooCommerce", "CSS", "JavaScript", "Responsive Design"],
    featured: true,
    projectUrl: "https://famfordogs.com/",
    type: "academic",
    semester: "6. Semester",
    year: "2025"
  },
  {
    id: 4,
    title: "Saskia Photographie",
    description: "Ein persönliches Portfolio für Saskia, eine professionelle Fotografin. Diese Website wurde für eine echte Kundin entwickelt und zeigt ihre fotografischen Arbeiten in einem eleganten, benutzerfreundlichen Design. Die Website bietet eine Galerie, Kontaktformular und Informationen zu ihren Dienstleistungen.",
    category: "website",
    images: [
      { path: "/Projektbilder/saskia/1.png", alt: "Saskia Startseite" },
      { path: "/Projektbilder/saskia/2.png", alt: "Saskia Projektseite" },
      { path: "/Projektbilder/saskia/3.png", alt: "Saskia Kontakt" }
      
    ],
    technologies: ["WordPress", "CSS", "PHP", "JavaScript", "SEO-Optimierung"],
    featured: true,
    projectUrl: "https://www.saskia-photographie.de/",
    type: "client",
    year: "2024"
  },
  {
    id: 5,
    title: "Interaktives System",
    description: "Ein interaktives System für ein verbessertes Benutzererlebnis mit Fokus auf Zugänglichkeit und Innovation. Dieses Projekt wurde als Teil einer Studienabgabe im 4. Semester entwickelt und demonstriert die Anwendung von Interaktionsdesign-Prinzipien in einer webbasierten Umgebung.",
    category: "programmieren",
    images: [
      { path: "/Projektbilder/inter/1.png", alt: "System Overview" },
      { path: "/Projektbilder/inter/2.png", alt: "Interaktionsdesign" },
      { path: "/Projektbilder/inter/3.png", alt: "Benutzeroberfläche" },
      { path: "/Projektbilder/inter/4.png", alt: "Mobile Integration" },
      { path: "/Projektbilder/inter/5.png", alt: "Responsives Design" }
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "Interaction Design", "Prototyping", "User Testing"],
    featured: true,
    projectUrl: "https://interaktivesysteme.fun/",
    type: "academic",
    semester: "4. Semester",
    year: "2023"
  },
  {
    id: 9,
    title: "KI-generierte Tierbilder",
    description: "Eine Sammlung von KI-generierten Tierbildern, die die Kreativität und Technologie in der digitalen Kunst demonstrieren. Dieses persönliche Projekt zeigt meinen experimentellen Umgang mit KI-Bildgenerierung und digitaler Kunstschaffung.",
    category: "other",
    images: [
      { path: "/Projektbilder/ki/1.png", alt: "KI-generierter Engel" },
      { path: "/Projektbilder/ki/2.png", alt: "KI-generiertes Goldfischglas" },
      { path: "/Projektbilder/ki/3.png", alt: "KI-generierter Hamster" },
      { path: "/Projektbilder/ki/4.png", alt: "KI-generiertes Schwein" },
      { path: "/Projektbilder/ki/5.png", alt: "KI-generierter Käfig" },
      { path: "/Projektbilder/ki/6.png", alt: "KI-generierte Taube" }
    ],
    technologies: ["AI Image Generation", "Prompt Engineering", "Digital Art", "Midjourney"],
    featured: false,
    type: "academic",
    semester: "3. Semester",
    year: "2023"
  },
  {
    id: 10,
    title: "Roomies",
    description: "Roomies ist ein Buchungssystem für Co-Working Spaces, das es Unternehmen und Privatpersonen ermöglicht, ungenutzte Räume anzubieten und zu buchen – ähnlich einem eBay Kleinanzeigen für Arbeitsplätze.",
    category: "ui-ux",
    images: [
      { path: "/fotos/Roomies/1.png", alt: "Roomies Hauptansicht" },
      { path: "/fotos/Roomies/2.png", alt: "Roomies Detailansicht 1" },
      { path: "/fotos/Roomies/3.png", alt: "Roomies Detailansicht 2" },
      { path: "/fotos/Roomies/4.png", alt: "Roomies Detailansicht 3" },
      { path: "/fotos/Roomies/5.png", alt: "Roomies Detailansicht 4" },
      { path: "/fotos/Roomies/6.png", alt: "Roomies Detailansicht 5" },
      { path: "/fotos/Roomies/7.png", alt: "Roomies Detailansicht 6" },
      { path: "/fotos/Roomies/8.png", alt: "Roomies Detailansicht 7" }
    ],
    technologies: ["Figma", "Photoshop", "Adobe Firefly"],
    featured: true,
    type: "academic",
    semester: "3. Semester",
    year: "2023"
  }
];

export const getProjectsByCategory = (category: string) => {
  if (category === 'all') {
    return projects;
  }
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

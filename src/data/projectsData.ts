interface ProjectImage {
  path: string;
  alt: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  category: 'website' | 'ui-ux' | 'avm-video' | 'other';
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
      { path: "/Projektbilder/cityshare bilder /Bildschirmfoto 2025-04-24 um 12.09.43.png", alt: "CityShare Hauptseite" },
      { path: "/Projektbilder/cityshare bilder /Bildschirmfoto 2025-04-24 um 12.09.58.png", alt: "CityShare Funktionen" },
      { path: "/Projektbilder/cityshare bilder /Bildschirmfoto 2025-04-24 um 12.10.15.png", alt: "CityShare mobile Ansicht" }
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
    category: "ui-ux",
    images: [
      { path: "/Projektbilder/flyver bilder/Bildschirmfoto 2025-04-24 um 12.10.59.png", alt: "Flyver Startseite" },
      { path: "/Projektbilder/flyver bilder/Bildschirmfoto 2025-04-24 um 12.11.09.png", alt: "Flyver Buchungsansicht" },
      { path: "/Projektbilder/flyver bilder/Bildschirmfoto 2025-04-24 um 12.11.16.png", alt: "Flyver Ergebnisse" },
      { path: "/Projektbilder/flyver bilder/Bildschirmfoto 2025-04-24 um 12.11.28.png", alt: "Flyver Mobile App" }
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
      { path: "/Projektbilder/FAMFORDOGS bilder/Bildschirmfoto 2025-04-24 um 12.12.02.png", alt: "FAMFORDOGS Hauptseite" },
      { path: "/Projektbilder/FAMFORDOGS bilder/Bildschirmfoto 2025-04-24 um 12.12.10.png", alt: "FAMFORDOGS Produktseite" },
      { path: "/Projektbilder/FAMFORDOGS bilder/Bildschirmfoto 2025-04-24 um 12.12.25.png", alt: "FAMFORDOGS Community" }
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
      { path: "/Projektbilder/saskia bilder/Bildschirmfoto 2025-04-24 um 12.13.39.png", alt: "Saskia Startseite" },
      { path: "/Projektbilder/saskia bilder/Bildschirmfoto 2025-04-24 um 12.13.50.png", alt: "Saskia Projektseite" },
      { path: "/Projektbilder/saskia bilder/Bildschirmfoto 2025-04-24 um 12.14.02.png", alt: "Saskia Kontakt" }
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
    category: "ui-ux",
    images: [
      { path: "/Projektbilder/interaktive syssteem bilder/Bildschirmfoto 2025-04-24 um 12.14.41.png", alt: "System Overview" },
      { path: "/Projektbilder/interaktive syssteem bilder/Bildschirmfoto 2025-04-24 um 12.14.51.png", alt: "Interaktionsdesign" },
      { path: "/Projektbilder/interaktive syssteem bilder/Bildschirmfoto 2025-04-24 um 12.15.01.png", alt: "Benutzeroberfläche" },
      { path: "/Projektbilder/interaktive syssteem bilder/Bildschirmfoto 2025-04-24 um 12.15.07.png", alt: "Mobile Integration" },
      { path: "/Projektbilder/interaktive syssteem bilder/Bildschirmfoto 2025-04-24 um 12.15.14.png", alt: "Responsives Design" }
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "Interaction Design", "Prototyping", "User Testing"],
    featured: true,
    projectUrl: "https://interaktivesysteme.fun/",
    type: "academic",
    semester: "4. Semester",
    year: "2023"
  },
  {
    id: 6,
    title: "GlobalConnect",
    description: "Eine Plattform für globale Kommunikation und Zusammenarbeit mit Fokus auf Mehrsprachigkeit und kulturelle Integration. GlobalConnect wurde als fiktives Kundenprojekt konzipiert und implementiert, um die Vernetzung von Menschen aus verschiedenen Kulturen zu fördern.",
    category: "website",
    images: [
      { path: "/Projektbilder/globalconnect_bilder/Bildschirmfoto 2025-04-24 um 12.15.47.png", alt: "GlobalConnect Dashboard" },
      { path: "/Projektbilder/globalconnect_bilder/Bildschirmfoto 2025-04-24 um 12.15.52.png", alt: "GlobalConnect Profil" },
      { path: "/Projektbilder/globalconnect_bilder/Bildschirmfoto 2025-04-24 um 12.16.12.png", alt: "GlobalConnect Messaging" }
    ],
    technologies: ["React", "Next.js", "i18n", "TailwindCSS", "MongoDB"],
    featured: false,
    projectUrl: "https://globalconnectrodriguez.netlify.app/",
    type: "academic",
    semester: "5. Semester",
    year: "2024"
  },
  {
    id: 7,
    title: "SafeSport",
    description: "Eine App für sicheres Sporttraining und Gesundheitsüberwachung mit personalisiertem Feedback. Dieses soziale Projekt wurde im 6. Semester entwickelt und bietet innovative Lösungen für sicheres Training und Gesundheitsmonitoring für alle Altersgruppen.",
    category: "ui-ux",
    images: [
      { path: "/Projektbilder/Safesport/Bildschirmfoto 2025-04-24 um 12.16.46.png", alt: "SafeSport Home" },
      { path: "/Projektbilder/Safesport/Bildschirmfoto 2025-04-24 um 12.16.52.png", alt: "SafeSport Trainingsplan" },
      { path: "/Projektbilder/Safesport/Bildschirmfoto 2025-04-24 um 12.16.59.png", alt: "SafeSport Statistiken" },
      { path: "/Projektbilder/Safesport/Bildschirmfoto 2025-04-24 um 12.17.06.png", alt: "SafeSport Profil" },
      { path: "/Projektbilder/Safesport/Bildschirmfoto 2025-04-24 um 12.17.12.png", alt: "SafeSport Einstellungen" }
    ],
    technologies: ["React", "TypeScript", "Styled-Components", "Health API Integration", "UI/UX Design"],
    featured: true,
    projectUrl: "https://safesports.netlify.app/",
    type: "academic",
    semester: "6. Semester",
    year: "2025"
  },
  {
    id: 8,
    title: "Marketing Video",
    description: "Ein Marketingvideo zur Präsentation eines innovativen Produkts mit kreativen Visualisierungen und überzeugender Erzählung. Diese Videoarbeit demonstriert meine Fähigkeiten in Motion Graphics, Visual Storytelling und Audioproduktion.",
    category: "avm-video",
    images: [],
    technologies: ["After Effects", "Premiere Pro", "Motion Graphics", "Sound Design"],
    featured: false,
    videoPath: "/Marketing Intro_3.mp4",
    type: "personal",
    year: "2024"
  },
  {
    id: 9,
    title: "KI-generierte Tierbilder",
    description: "Eine Sammlung von KI-generierten Tierbildern, die die Kreativität und Technologie in der digitalen Kunst demonstrieren. Dieses persönliche Projekt zeigt meinen experimentellen Umgang mit KI-Bildgenerierung und digitaler Kunstschaffung.",
    category: "other",
    images: [
      { path: "/fotos/ki bulder 3 semster /Angel Kopie.png", alt: "KI-generierter Engel" },
      { path: "/fotos/ki bulder 3 semster /Goldfischglas Kopie.png", alt: "KI-generiertes Goldfischglas" },
      { path: "/fotos/ki bulder 3 semster /Hamster Kopie.png", alt: "KI-generierter Hamster" },
      { path: "/fotos/ki bulder 3 semster /Schwein Kopie.png", alt: "KI-generiertes Schwein" },
      { path: "/fotos/ki bulder 3 semster /käfig Kopie.png", alt: "KI-generierter Käfig" },
      { path: "/fotos/ki bulder 3 semster /taube Kopie.png", alt: "KI-generierte Taube" }
    ],
    technologies: ["AI Image Generation", "Prompt Engineering", "Digital Art", "Midjourney"],
    featured: false,
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

export interface Video {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  date: string;
  semester?: string;
  category: string;
  views: string;
  tools?: string[];
  client?: string;
  teamMembers?: string[];
  goals?: string[];
  challenges?: string[];
  outcomes?: string[];
  relatedProjectId?: number;
}

export const videos: Video[] = [
  {
    id: 1,
    title: "Marketing Intro - Arduino Uno Projekt",
    description: "Ein Einführungsvideo für eine Marketing intro, das im Rahmen des Arduino Uno Projekts erstellt wurde.",
    fullDescription: "Arduino Uno Intro Video zum Interaktiven Spiel mit C++",
    thumbnailUrl: "/thumbnails/marketing_intro_new.jpg",
    videoUrl: "/Marketing Intro_3.mp4",
    duration: "1:45",
    date: "Dezember 2024",
    semester: "7. Semester",
    category: "Marketing",
    views: "1.2K",
    tools: ["Adobe Premiere Pro", "After Effects", "Photoshop", "Blender"],
    client: "Hochschule Bremerhaven",
    teamMembers: ["Kadir Diego Padin Rodriguez", "Regis Fwansoni"],
    goals: [
      "Entwicklung eines ansprechenden Intro-Videos für die Social Media Präsenz",
      "Vermittlung der Kernwerte der Marke in unter 2 Minuten",
      "Erstellung eines wiedererkennbaren visuellen Stils"
    ],
    challenges: [
      "Kurze Produktionszeit von nur 1 Woche",
      "Balancierung zwischen Werbung und Spiel finden"
    ],
  },
  {
    id: 2,
    title: "Interaktive Systeme Intro",
    description: "Interaktive Systeme Intro Video",
    fullDescription: "Interaktive Systeme Intro Video",
    thumbnailUrl: "/thumbnails/case_video.jpg",
    videoUrl: "/videos/case_video.mp4",
    duration: "4:12",
    date: "Februar 2025",
    semester: "4. Semester",
    category: "Case Study",
    views: "1.8K",
    tools: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    client: "Hochschule Bremerhaven",
    teamMembers: ["Kadir Diego Padin Rodriguez", "Niklas Rathgeber"],
    goals: [
      "Dokumentation und Analyse eines vollständigen Design Thinking Prozesses",
      "Demonstration der Bedeutung von Nutzerforschung für erfolgreiche Produkte",
      "Visualisierung komplexer Designmethoden"
    ],
    challenges: [
      "Verdichtung umfangreicher Animationen auf der Webseite",
      "Balance zwischen theoretischem Wissen und Animierten Beispielen",
      "Visualisierung der Animationen ohne sie zu Kopieren"
    ],
  },
  {
    id: 3,
    title: "Projektvorstellung - Social Media TEIL 1",
    description: "Video zum Thema wer ist 'Oussama'",
    fullDescription: "Teil 1 Einführung in Oussama",
    thumbnailUrl: "/thumbnails/WhatsApp Video 2025-03-23 at 18.00.48.jpg",
    videoUrl: "/videos 7 semster/WhatsApp Video 2025-03-23 at 18.00.48.mp4",
    duration: "2:15",
    date: "März 2025",
    semester: "7. Semester",
    category: "AVM",
    views: "423",
    tools: ["Davinci Resolve", "Photoshop", "Canva",],
    client: "Hochschule Bremerhaven",
    teamMembers: ["Kadir Diego Padin Rodriguez", "Regis Fwansoni", "Anton Ferchtandiker"],
    goals: [
      "Erstellung einer Einführung zu Oussama",
      "Hochwertige Videoaufnahme nach vorgegebenem Konzept",
      "Effektive visuelle Präsentation des Themas"
    ],
    challenges: [
      "Umsetzung des Einführungskonzepts",
      "Optimierung der Aufnahme - und Tonqualität",
      "Effektive Nachbearbeitung des Videomaterials"
    ],
    outcomes: [
      "Erfolgreiche Aufnahme der Einführung zu Oussama",
      "Klare Visualisierung des Themas",
      "Positive Bewertung des Dozenten "
    ],
    relatedProjectId: 4
  },
  {
    id: 4,
    title: "Projektvorstellung - Social Media TEIL 2",
    description: "Video zum Thema 'Woher komme ich ?'",
    fullDescription: "Teil 2 Woher komme ich ?",
    thumbnailUrl: "/thumbnails/WhatsApp Video 2025-03-23 at 18.01.02.jpg",
    videoUrl: "/videos 7 semster/WhatsApp Video 2025-03-23 at 18.01.02.mp4",
    duration: "3:28",
    date: "März 2025",
    semester: "7. Semester",
    category: "AVM",
    views: "352",
    tools: ["Davinci Resolve", "Photoshop", "Canva",],
    client: "Hochschule Bremerhaven",
    teamMembers: ["Kadir Diego Padin Rodriguez", "Regis Fwansoni", "Anton Ferchtandiker"],
    goals: [
      "Aufnahme zum Thema 'Woher komme ich?'",
      "Kreative Darstellung des Herkunftsthemas",
      "Professionelle Videoproduktion nach Konzept"
    ],
    challenges: [
      "Effektive Erzählung der persönlichen Geschichte",
      "Technische Qualität der Aufnahmen sicherstellen",
      "Kohärente Fortführung des ersten Teils"
    ],
    outcomes: [
      "Gelungene Darstellung des Herkunftsthemas",
      "Konsistente visuelle Linie in der Videoserie",
      "Erfolgreiche Integration in die Gesamtpräsentation"
    ],
    relatedProjectId: 5
  },
  {
    id: 5,
    title: "Projektvorstellung - Social Media TEIL 3",
    description: "Video zum Thema Disziplin",
    fullDescription: "Teil 3 Disziplin",
    thumbnailUrl: "/thumbnails/WhatsApp Video 2025-03-23 at 18.01.06.jpg",
    videoUrl: "/videos 7 semster/WhatsApp Video 2025-03-23 at 18.01.06.mp4",
    duration: "4:12",
    date: "März 2025",
    semester: "7. Semester",
    category: "AVM",
    views: "287",
    tools: ["Davinci Resolve", "Photoshop", "Canva",],
    client: "Hochschule Bremerhaven",
    teamMembers: ["Kadir Diego Padin Rodriguez", "Regis Fwansoni", "Anton Ferchtandiker"],
    goals: [
      "Aufnahme zum Thema 'Disziplin'",
      "Vermittlung der Bedeutung von Disziplin",
      "Konsequente Fortsetzung der Videoserie"
    ],
    challenges: [
      "Abstrakte Konzept der Disziplin visuell darstellen",
      "Konsistenz mit den vorherigen Teilen wahren",
      "Technische Qualität der Aufnahmen sicherstellen"
    ],
    outcomes: [
      "Gelungene Darstellung des Disziplin-Themas",
      "Nahtlose Integration in die Videoreihe",
      "Positive Resonanz bei der Zielgruppe"
    ],
    relatedProjectId: 6
  },
  {
    id: 6,
    title: "Projektvorstellung - Social Media TEIL 4",
    description: "Video zum Thema 'Verletzung'",
    fullDescription: "Das Interview zu seiner Verletzung",
    thumbnailUrl: "/thumbnails/WhatsApp Video 2025-03-23 at 18.00.57.jpg",
    videoUrl: "/videos 7 semster/2.mp4",
    duration: "0:53",
    date: "März 2025",
    semester: "7. Semester",
    category: "AVM",
    views: "312",
    tools: ["Davinci Resolve", "Photoshop", "Canva",],
    client: "Hochschule Bremerhaven",
    teamMembers: ["Kadir Diego Padin Rodriguez", "Regis Fwansoni", "Anton Ferchtandiker"],
    goals: [
      "Aufnahme eines Interviews über die Verletzung",
      "Abschluss der Videoserie mit persönlichen Einblicken",
      "Professionelle Interviewführung und -aufzeichnung"
    ],
    challenges: [
      "Sensible Gesprächsführung zum Thema Verletzung",
      "Technische Herausforderungen bei der Interviewaufnahme",
      "Integration des Interviews in die bestehende Videoreihe"
    ],
    outcomes: [
      "Authentische Darstellung der Verletzungssituation",
      "Abschließender Teil der Videoserie mit persönlicher Note",
      "Positive Rückmeldung zur gesamten Videoreihe"
    ]
  }
];

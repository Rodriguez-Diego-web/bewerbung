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
    fullDescription: "Dieses Video wurde als Teil einer umfassenden Marketingkampagne für einen lokalen Kunden erstellt. Ziel war es, die Markenbekanntheit zu steigern und die wichtigsten Werte des Unternehmens zu kommunizieren. Das Projekt umfasste die gesamte Planung, Drehbucherstellung, Aufnahme und Nachbearbeitung. Besonderer Wert wurde auf die visuelle Ästhetik und klare Botschaft gelegt.",
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
      "Kurze Produktionszeit von nur 3 Wochen",
      "Integration bestehender Markenelemente in ein neues Format",
      "Balancierung zwischen Informationsgehalt und Unterhaltungswert"
    ],
    outcomes: [
      "Über 10.000 Views in den ersten zwei Wochen auf allen Plattformen",
      "30% höhere Interaktionsrate im Vergleich zu früheren Kampagnen",
      "Positive Rückmeldungen von Kunden und Zielgruppe"
    ]
  },
  {
    id: 2,
    title: "Interaktive Systeme Intro",
    description: "Detaillierte Analyse eines komplexen Designprozesses mit User Research und Iteration.",
    fullDescription: "Diese umfassende Case Study dokumentiert einen kompletten Designprozess von der Problemdefinition bis zur finalen Lösung. Besonders im Fokus steht die Methodik der Nutzerforschung und wie die gewonnenen Erkenntnisse in iterative Designverbesserungen eingeflossen sind. Das Video zeigt Interviews mit Nutzern, Affinity Mapping, Customer Journey Mapping und die verschiedenen Prototyping-Phasen. Der gesamte Prozess wurde durch die Double Diamond Methode strukturiert und zeigt, wie divergentes und konvergentes Denken zu innovativen Lösungen führt.",
    thumbnailUrl: "/thumbnails/case_video.jpg",
    videoUrl: "/videos/case_video.mp4",
    duration: "4:12",
    date: "Februar 2025",
    semester: "4. Semester",
    category: "Case Study",
    views: "1.8K",
    tools: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    client: "TH Köln",
    teamMembers: ["Kadir Diego Padin Rodriguez", "Sarah Mueller", "Thomas Weber"],
    goals: [
      "Dokumentation und Analyse eines vollständigen Design Thinking Prozesses",
      "Demonstration der Bedeutung von Nutzerforschung für erfolgreiche Produkte",
      "Visualisierung komplexer Designmethoden"
    ],
    challenges: [
      "Verdichtung umfangreicher Inhalte in kurze Erklärvideos",
      "Balance zwischen theoretischem Wissen und praktischen Beispielen",
      "Visualisierung abstrakter Konzepte"
    ],
    outcomes: [
      "Erfolgreiche Präsentation vor dem Dozenten",
      "Positive Rückmeldungen von Kommilitonen zur Klarheit der Erklärungen",
      "Nutzung des Videos als Referenz für zukünftige Projekte"
    ]
  },
  {
    id: 3,
    title: "Projektvorstellung - Social Media TEIL 1",
    description: "Kurzes Video zur Präsentation eines Social Media Projekts mit Fokus auf visuelle Kommunikation.",
    fullDescription: "Dieser Screencast dokumentiert die visuelle Kommunikationsstrategie für ein Social Media Projekt. Im Rahmen des Moduls 'Digitale Medienproduktion' (DMP-17) an der Hochschule Bremerhaven wurde dieses Projekt unter der Leitung von Ralf C. Schreier entwickelt. Das Video zeigt die Konzeption und Umsetzung einer modernen visuellen Identität für soziale Medien, mit besonderem Fokus auf die Zielgruppenansprache und Designentscheidungen, die für eine effektive Kommunikation auf verschiedenen Plattformen getroffen wurden.",
    thumbnailUrl: "/thumbnails/WhatsApp Video 2025-03-23 at 18.00.48.jpg",
    videoUrl: "/videos 7 semster/WhatsApp Video 2025-03-23 at 18.00.48.mp4",
    duration: "2:15",
    date: "März 2025",
    semester: "7. Semester",
    category: "Social Media",
    views: "423",
    tools: ["Adobe XD", "Photoshop", "Illustrator", "After Effects"],
    client: "Hochschule Bremerhaven",
    teamMembers: ["Kadir Diego Padin Rodriguez", "Regis Fwansoni", "Anton Ferchtandiker"],
    goals: [
      "Visuelle Kommunikationsstrategie entwickeln",
      "Corporate Identity in Social Media integrieren",
      "Konsistente Bildsprache etablieren"
    ],
    challenges: [
      "Unterschiedliche Anforderungen verschiedener Plattformen",
      "Vereinbarkeit von Markenwerten und Zielgruppeninteressen",
      "Technische Beschränkungen bei der visuellen Umsetzung"
    ],
    outcomes: [
      "Vollständiges Designsystem für Social Media",
      "Optimierte Templates für verschiedene Plattformen",
      "Positive Bewertung des Dozenten"
    ],
    relatedProjectId: 2
  },
  {
    id: 4,
    title: "Projektvorstellung - Social Media TEIL 2",
    description: "Demonstration eines interaktiven App-Prototyps mit Fokus auf Benutzerinteraktion und Animation.",
    fullDescription: "In diesem Video wird ein interaktiver App-Prototyp präsentiert, der im Rahmen des Moduls 'Digitale Medienproduktion' entwickelt wurde. Unter der Leitung von Dozent Ralf C. Schreier an der Hochschule Bremerhaven haben wir einen funktionalen Prototypen mit besonderem Fokus auf Benutzerinteraktion und Animation erstellt. Das Video demonstriert die verschiedenen Funktionen der App, die Navigationsstruktur und die Interaktionsmöglichkeiten. Besonders hervorgehoben werden die Micro-Animationen, die das Nutzererlebnis verbessern und die App intuitiver machen.",
    thumbnailUrl: "/thumbnails/WhatsApp Video 2025-03-23 at 18.01.02.jpg",
    videoUrl: "/videos 7 semster/WhatsApp Video 2025-03-23 at 18.01.02.mp4",
    duration: "3:28",
    date: "März 2025",
    semester: "7. Semester",
    category: "UI/UX",
    views: "352",
    tools: ["Figma", "Principle", "After Effects", "Adobe XD"],
    client: "Hochschule Bremerhaven",
    teamMembers: ["Kadir Diego Padin Rodriguez", "Regis Fwansoni", "Anton Ferchtandiker"],
    goals: [
      "Intuitive Benutzeroberfläche entwickeln",
      "Micro-Animationen für besseres Nutzererlebnis implementieren",
      "Komplexe Funktionen zugänglich gestalten"
    ],
    challenges: [
      "Balance zwischen Animation und Performance",
      "Konsistenz über verschiedene Bildschirmgrößen",
      "Integration von Feedback aus Nutzertests"
    ],
    outcomes: [
      "Vollständig interaktiver Prototyp",
      "Positive Rückmeldungen bei Nutzertests",
      "Implementierbare Designspezifikationen für Entwickler"
    ],
    relatedProjectId: 3
  },
  {
    id: 5,
    title: "Projektvorstellung - Social Media TEIL 3",
    description: "Screencast, der den Entwicklungsprozess eines Webdesign-Projekts demonstriert.",
    fullDescription: "Dieser Screencast dokumentiert den vollständigen Entwicklungsprozess eines Webdesign-Projekts. Das Video zeigt die Arbeit in verschiedenen Design- und Prototyping-Tools und erklärt die wichtigsten Designentscheidungen. Besondere Aufmerksamkeit wird auf responsive Design-Prinzipien und die Implementierung eines konsistenten Design-Systems gelegt. Der Screencast zeigt auch, wie Feedback von Stakeholdern in iterative Verbesserungen eingeflossen ist und wie Design-Entscheidungen auf der Grundlage von Benutzerforschung getroffen wurden.",
    thumbnailUrl: "/thumbnails/WhatsApp Video 2025-03-23 at 18.01.06.jpg",
    videoUrl: "/videos 7 semster/WhatsApp Video 2025-03-23 at 18.01.06.mp4",
    duration: "4:12",
    date: "März 2025",
    semester: "7. Semester",
    category: "Webdesign",
    views: "287",
    tools: ["Adobe XD", "VS Code", "Chrome DevTools", "Figma"],
    client: "Hochschule Bremerhaven",
    teamMembers: ["Kadir Diego Padin Rodriguez", "Regis Fwansoni", "Anton Ferchtandiker"],
    goals: [
      "Vollständigen Designprozess dokumentieren",
      "Responsive Design-Prinzipien anwenden",
      "Design-System implementieren"
    ],
    challenges: [
      "Komplexe Interaktionen darstellen",
      "Technische Einschränkungen überwinden",
      "Balance zwischen Ästhetik und Funktionalität"
    ],
    outcomes: [
      "Fertige Website mit responsivem Design",
      "Dokumentierter Workflow für zukünftige Projekte",
      "Verbesserte Zusammenarbeit zwischen Design und Entwicklung"
    ],
    relatedProjectId: 4
  },
  {
    id: 6,
    title: "Projektvorstellung - Social Media TEIL 4",
    description: "Screencast, der den kompletten Entwicklungsprozess eines Webdesign-Projekts demonstriert.",
    fullDescription: "In diesem finalen Screencast der Social Media Projektreihe wird der komplette Entwicklungsprozess eines Webdesign-Projekts von Anfang bis Ende gezeigt. Von der ersten Ideenfindung über Wireframes und Prototypen bis hin zur finalen Implementierung werden alle Schritte detailliert dokumentiert. Das Video erklärt die Designentscheidungen, technischen Herausforderungen und deren Lösungen. Ein besonderer Fokus liegt auf der Integration von User Feedback in den iterativen Designprozess und wie dadurch ein benutzerfreundliches Produkt entstanden ist.",
    thumbnailUrl: "/thumbnails/WhatsApp Video 2025-03-23 at 18.00.57.jpg",
    videoUrl: "/videos 7 semster/2.mp4",
    duration: "0:53",
    date: "März 2025",
    semester: "7. Semester",
    category: "Webdesign",
    views: "312",
    tools: ["Adobe XD", "VS Code", "Chrome DevTools", "Sketch"],
    client: "Hochschule Bremerhaven",
    teamMembers: ["Kadir Diego Padin Rodriguez", "Regis Fwansoni", "Anton Ferchtandiker"],
    goals: [
      "Dokumentation und Analyse eines vollständigen Design Thinking Prozesses",
      "Demonstration der Bedeutung von Nutzerforschung für erfolgreiche Produkte",
      "Veranschaulichung der verschiedenen Methodiken in jeder Projektphase"
    ],
    challenges: [
      "Verarbeitung umfangreicher Forschungsdaten zu klaren Erkenntnissen",
      "Visualisierung von komplexen Zusammenhängen für besseres Verständnis",
      "Balancierung zwischen theoretischen Grundlagen und praktischer Anwendung"
    ],
    outcomes: [
      "Umfassende Dokumentation als Referenz für künftige Projekte",
      "Positives Feedback von Design-Experten",
      "Verbesserung des Verständnisses für nutzerorientierte Designprozesse im Team"
    ]
  }
];

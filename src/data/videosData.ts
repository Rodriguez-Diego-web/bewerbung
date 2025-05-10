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
    title: "Marketing Intro - Arudino Uno Projekt",
    description: "Ein Einführungsvideo für eine Marketing intro, das im Rahmen des Arudino Uno Projekts erstellt wurde.",
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
    teamMembers: ["Kadir Diego Padin Rodriguez", "Regis Fwansoni",],
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
    id: 4,
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
  },
  {
    id: 5,
    title: "Projektvorstellung - Social Media TEIL 1",
    description: "Kurzes Video zur Präsentation eines Social Media Projekts mit Fokus auf visuelle Kommunikation.",
    fullDescription: "Dieses Video präsentiert ein komplettes Social Media Kampagnenkonzept, das für einen fiktiven Kunden entwickelt wurde. Es umfasst Content-Strategie, visuelle Gestaltung und Analyseansätze. Die Kampagne zielt darauf ab, die Zielgruppe der 18-30-Jährigen über verschiedene Plattformen wie Instagram, TikTok und Twitter anzusprechen. Das Video demonstriert, wie eine einheitliche Markenbotschaft über verschiedene Kanäle hinweg kommuniziert werden kann, während die spezifischen Stärken jeder Plattform optimal genutzt werden.",
    thumbnailUrl: "/thumbnails/WhatsApp Video 2025-03-23 at 18.00.48.jpg",
    videoUrl: "/videos 7 semster/WhatsApp Video 2025-03-23 at 18.00.48.mp4",
    duration: "0:43",
    date: "März 2025",
    semester: "7. Semester",
    category: "AVM",
    views: "432",
    tools: ["Adobe Premiere Pro", "Photoshop", "Illustrator", "Canva"],
    goals: [
      "Entwicklung einer plattformübergreifenden Social Media Strategie",
      "Schaffung einer visuell ansprechenden und konsistenten Markenidentität",
      "Konzeption von verschiedenen Content-Formaten für unterschiedliche Plattformen"
    ],
    challenges: [
      "Anpassung der Inhalte an die Besonderheiten verschiedener Social Media Plattformen",
      "Schaffung eines wiedererkennbaren visuellen Stils bei gleichzeitiger Variation",
      "Integration aktueller Trends ohne die langfristige Markenstrategie zu kompromittieren"
    ],
    outcomes: [
      "Umfassendes Content-Paket für drei Monate Social Media Marketing",
      "Positive Bewertung der Kreativität und strategischen Ausrichtung",
      "Mehrere umsetzbare Content-Templates für zukünftige Kampagnen"
    ]
  },
  {
    id: 6,
    title: "Projektvorstellung - Social Media TEIL 2",
    description: "Demonstration eines interaktiven App-Prototyps mit Fokus auf Benutzerinteraktion und Animation.",
    fullDescription: "Dieses Video demonstriert einen voll funktionsfähigen interaktiven Prototyp einer mobilen Anwendung. Die App wurde entwickelt, um komplexe Daten in einer benutzerfreundlichen Oberfläche darzustellen. Besonderer Wert wurde auf die Mikrointeraktionen und Animationen gelegt, die das Nutzererlebnis verbessern. Der Prototyp wurde in Figma erstellt und mit erweiterten Prototyping-Funktionen angereichert. Das Video zeigt den kompletten User Flow durch verschiedene Funktionen der App und hebt die wichtigsten UX-Entscheidungen hervor.",
    thumbnailUrl: "/thumbnails/WhatsApp Video 2025-03-23 at 18.01.02.jpg",
    videoUrl: "/videos 7 semster/WhatsApp Video 2025-03-23 at 18.01.02.mp4",
    duration: "0:51",
    date: "März 2025",
    semester: "7. Semester",
    category: "AVM",
    views: "673",
    tools: ["Figma", "Principle", "After Effects", "Framer"],
    goals: [
      "Erstellung eines realistischen App-Prototyps mit fortgeschrittenen Interaktionen",
      "Demonstration von Mikroanimationen zur Verbesserung des Nutzererlebnisses",
      "Visualisierung komplexer Daten in einer intuitiven Benutzeroberfläche"
    ],
    challenges: [
      "Implementierung komplexer Animationen mit begrenzten Prototyping-Tools",
      "Optimierung der Performance bei gleichzeitiger visueller Komplexität",
      "Balancierung zwischen ästhetischem Design und funktionaler Usability"
    ],
    outcomes: [
      "Hochwertiger interaktiver Prototyp als Portfolio-Stück",
      "Verbessertes Verständnis für fortgeschrittene Prototyping-Techniken",
      "Positive Ergebnisse in Usability-Tests mit potenziellen Nutzern"
    ]
  },
  {
    id: 7,
    title: "Projektvorstellung - Social Media TEIL 3",
    description: "Screencast, der den Entwicklungsprozess eines Webdesign-Projekts demonstriert.",
    fullDescription: "Dieser Screencast dokumentiert den kompletten Entwicklungsprozess eines Webdesign-Projekts von den ersten Wireframes bis zum fertigen Prototyp. Das Video zeigt die Arbeit in verschiedenen Design- und Prototyping-Tools und erklärt die wichtigsten Designentscheidungen. Besondere Aufmerksamkeit wird auf responsive Design-Prinzipien und die Implementierung eines konsistenten Design-Systems gelegt. Der Screencast zeigt auch, wie Feedback von Stakeholdern in iterative Verbesserungen eingeflossen ist und wie Design-Entscheidungen auf der Grundlage von Benutzerforschung getroffen wurden.",
    thumbnailUrl: "/thumbnails/WhatsApp Video 2025-03-23 at 18.01.06.jpg",
    videoUrl: "/videos 7 semster/WhatsApp Video 2025-03-23 at 18.01.06.mp4",
    duration: "0:38",
    date: "März 2025",
    semester: "7. Semester",
    category: "AVM",
    views: "512",
    tools: ["Figma", "Adobe XD", "Photoshop", "VS Code"],
    goals: [
      "Dokumentation eines vollständigen Webdesign-Prozesses in Echtzeit",
      "Demonstration von responsiven Design-Prinzipien und deren Implementierung",
      "Erklärung der Entwicklung und Anwendung eines Design-Systems"
    ],
    challenges: [
      "Effektive Kommunikation komplexer Design-Entscheidungen in Videoformat",
      "Darstellung des iterativen Prozesses in begrenzter Zeit",
      "Gleichzeitige Erklärung von Design-Theorie und praktischer Umsetzung"
    ],
    outcomes: [
      "Umfassende Dokumentation als Lernressource",
      "Verbesserung der eigenen Design-Workflow-Effizienz",
      "Positives Feedback von Kommilitonen und Dozenten"
    ],
    relatedProjectId: 2
  },
  {
    id: 8,
    title: "Projektvorstellung - Social Media TEIL 4",
    description: "Screencast, der den Entwicklungsprozess eines Webdesign-Projekts demonstriert.",
    fullDescription: "Dieser Screencast dokumentiert den kompletten Entwicklungsprozess eines Webdesign-Projekts von den ersten Wireframes bis zum fertigen Prototyp. Das Video zeigt die Arbeit in verschiedenen Design- und Prototyping-Tools und erklärt die wichtigsten Designentscheidungen. Besondere Aufmerksamkeit wird auf responsive Design-Prinzipien und die Implementierung eines konsistenten Design-Systems gelegt. Der Screencast zeigt auch, wie Feedback von Stakeholdern in iterative Verbesserungen eingeflossen ist und wie Design-Entscheidungen auf der Grundlage von Benutzerforschung getroffen wurden.",
    thumbnailUrl: "/thumbnails/WhatsApp Video 2025-03-23 at 18.00.57.jpg",
    videoUrl: "/videos 7 semster/2.mp4",
    duration: "0:38",
    date: "März 2025",
    semester: "7. Semester",
    category: "AVM",
    views: "512",
    tools: ["Figma", "Adobe XD", "Photoshop", "VS Code"],
    goals: [
      "Dokumentation eines vollständigen Webdesign-Prozesses in Echtzeit",
      "Demonstration von responsiven Design-Prinzipien und deren Implementierung",
      "Erklärung der Entwicklung und Anwendung eines Design-Systems"
    ],
    challenges: [
      "Effektive Kommunikation komplexer Design-Entscheidungen in Videoformat",
      "Darstellung des iterativen Prozesses in begrenzter Zeit",
      "Gleichzeitige Erklärung von Design-Theorie und praktischer Umsetzung"
    ],
    outcomes: [
      "Umfassende Dokumentation als Lernressource",
      "Verbesserung der eigenen Design-Workflow-Effizienz",
      "Positives Feedback von Kommilitonen und Dozenten"
    ],
    relatedProjectId: 2
  }
];

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { projects, Project } from '../data/projectsData';
import { videos } from '../data/videosData';
import { profileData } from '../data/profileData';

// Definieren der möglichen Suchergebnistypen
export interface SearchResult {
  id: number | string;
  title: string;
  description: string;
  type: 'project' | 'video' | 'blog' | 'profile';
  url: string;
  thumbnailUrl?: string;
}

interface SearchContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  searchResults: SearchResult[];
  performSearch: (term: string) => void;
  isSearching: boolean;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const performSearch = (term: string) => {
    if (!term.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    const searchTermLower = term.toLowerCase();

    // Projekte durchsuchen
    const projectResults = projects
      .filter(project => 
        project.title.toLowerCase().includes(searchTermLower) || 
        project.description.toLowerCase().includes(searchTermLower) ||
        (project.technologies && project.technologies.some(tech => 
          tech.toLowerCase().includes(searchTermLower)
        ))
      )
      .map(project => ({
        id: project.id,
        title: project.title,
        description: project.description,
        type: 'project' as const,
        url: `/projekte/${project.id}`,
        thumbnailUrl: project.images && project.images.length > 0 ? project.images[0].path : undefined
      }));

    // Videos durchsuchen
    const videoResults = videos
      .filter(video => 
        video.title.toLowerCase().includes(searchTermLower) || 
        video.description.toLowerCase().includes(searchTermLower) ||
        video.fullDescription.toLowerCase().includes(searchTermLower) ||
        (video.tools && video.tools.some(tool => 
          tool.toLowerCase().includes(searchTermLower)
        ))
      )
      .map(video => ({
        id: video.id,
        title: video.title,
        description: video.description,
        type: 'video' as const,
        url: `/videos`,
        thumbnailUrl: video.thumbnailUrl
      }));

    // Profile-Informationen durchsuchen (Skills, Erfahrungen, etc.)
    const profileResults: SearchResult[] = [];
    
    // Skills durchsuchen
    if (profileData.skills) {
      profileData.skills.forEach(skill => {
        if (
          skill.name.toLowerCase().includes(searchTermLower) ||
          skill.category.toLowerCase().includes(searchTermLower)
        ) {
          profileResults.push({
            id: `skill_${skill.id}`,
            title: `Fähigkeit: ${skill.name}`,
            description: `Kategorie: ${skill.category}, Level: ${skill.level}/5`,
            type: 'profile' as const,
            url: '/'
          });
        }
      });
    }
    
    // Erfahrungen durchsuchen
    if (profileData.experience) {
      profileData.experience.forEach(exp => {
        if (
          exp.position.toLowerCase().includes(searchTermLower) ||
          exp.company.toLowerCase().includes(searchTermLower) ||
          exp.description.toLowerCase().includes(searchTermLower)
        ) {
          profileResults.push({
            id: `exp_${exp.id}`,
            title: `Erfahrung: ${exp.position}`,
            description: `${exp.company} - ${exp.from} bis ${exp.to}`,
            type: 'profile' as const,
            url: '/'
          });
        }
      });
    }
    
    // Ausbildung durchsuchen
    if (profileData.education) {
      profileData.education.forEach(edu => {
        if (
          edu.institution.toLowerCase().includes(searchTermLower) ||
          edu.degree.toLowerCase().includes(searchTermLower) ||
          (edu.description && edu.description.toLowerCase().includes(searchTermLower))
        ) {
          profileResults.push({
            id: `edu_${edu.id}`,
            title: `Ausbildung: ${edu.degree}`,
            description: `${edu.institution} - ${edu.from} bis ${edu.to}`,
            type: 'profile' as const,
            url: '/'
          });
        }
      });
    }

    // Alle Ergebnisse kombinieren
    const allResults = [...projectResults, ...videoResults, ...profileResults];
    setSearchResults(allResults);
    setIsSearching(false);
  };

  const value = {
    searchTerm,
    setSearchTerm,
    searchResults,
    performSearch,
    isSearching
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};

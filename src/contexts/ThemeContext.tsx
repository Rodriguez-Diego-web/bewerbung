import React, { createContext, useState, useEffect, useContext } from 'react';

type ThemeType = 'dark' | 'light'; // Keep 'light' for type consistency, though not used

interface ThemeContextType {
  theme: ThemeType;
  // toggleTheme: () => void; // Removed
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme] = useState<ThemeType>('dark'); // Default to dark, remove setTheme

  useEffect(() => {
    // localStorage.setItem('theme', theme); // Removed localStorage
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      // This else block might be redundant if theme is always dark, but keep for type safety
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }, [theme]); // Dependency array still useful if theme could theoretically change, though not via toggleTheme

  // const toggleTheme = () => {
  //   setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  // }; // Removed toggleTheme function

  return (
    <ThemeContext.Provider value={{ theme /* toggleTheme */ }}> {/* Removed toggleTheme from value */}
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};

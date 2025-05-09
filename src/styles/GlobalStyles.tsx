import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle<{ theme: 'dark' | 'light' }>`
  :root {
    /* Common variables for both themes */
    --font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --accent-color: #f97316;
    --accent-hover: #e96400;
  }

  /* Dark Theme Colors */
  .dark-theme {
    --primary-color: #1a1a1a;
    --secondary-color: #242424;
    --text-color: #ffffff;
    --border-color: #333333;
    --hover-color: #2c2c2c;
    --card-background: #2a2a2a;
    --input-background: #333333;
    --shadow-color: rgba(0, 0, 0, 0.5);
  }

  /* Light Theme Colors */
  .light-theme {
    --primary-color: #f5f5f5;
    --secondary-color: #ffffff;
    --text-color: #333333;
    --border-color: #e0e0e0;
    --hover-color: #eaeaea;
    --card-background: #ffffff;
    --input-background: #f0f0f0;
    --shadow-color: rgba(0, 0, 0, 0.1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--font-family);
    background-color: var(--primary-color);
    color: var(--text-color);
    overflow-x: hidden;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    font-family: var(--font-family);
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: var(--secondary-color);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--border-color);
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--hover-color);
  }

  /* Smooth transitions for theme changes */
  * {
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  }
`;

export default GlobalStyles;

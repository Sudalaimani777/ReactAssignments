import { createContext, useContext, useState, useEffect, useRef } from 'react';

const ToggleContext = createContext(null);

export function ToggleProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const activeThemeRef = useRef('light');

  // Sync Tailwind class with DOM
  useEffect(() => {
    const root = document.documentElement;
    activeThemeRef.current = theme;

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = activeThemeRef.current === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  return (
    <ToggleContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ToggleContext.Provider>
  );
}

export const useToggle = () => useContext(ToggleContext);

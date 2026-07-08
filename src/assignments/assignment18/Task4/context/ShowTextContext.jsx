import { createContext, useContext, useState } from 'react';

const ShowTextContext = createContext(null);

export function ShowTextProvider({ children }) {
  const [displayedText, setDisplayedText] = useState('');

  return (
    <ShowTextContext.Provider value={{ displayedText, setDisplayedText }}>
      {children}
    </ShowTextContext.Provider>
  );
}

export const useShowText = () => useContext(ShowTextContext);

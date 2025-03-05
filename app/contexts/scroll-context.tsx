'use client'
import React, { createContext, useState, useEffect } from 'react';

export const ScrollContext = createContext(false);

const ScrollProvider = ({ children }: {children: React.ReactNode}) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  return (
    <ScrollContext.Provider value={isScrolled}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;
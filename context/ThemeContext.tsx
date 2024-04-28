"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

type ColorContextType = {
  brandColor: string;
  setBrandColor: (color: string) => void;
};

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const ColorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [brandColor, setBrandColor] = useState('#025689');

  return (
    <ColorContext.Provider value={{ brandColor, setBrandColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error('useColor must be used within a ColorProvider');
  }
  return context;
};
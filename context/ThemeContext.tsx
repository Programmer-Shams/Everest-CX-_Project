"use client"
import React, { createContext, useContext, useState } from 'react';

type ColorContextType = {
  brandColor: string;
  setBrandColor: (color: string) => void;
};

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const ColorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [brandColor, setBrandColorState] = useState('#025689');

  const setBrandColor = (color: string) => {
    // If selected color is white (#ffffff), change it to black (#000000)
    const updatedColor = color.toLowerCase() === '#ffffff' ? '#000000' : color;
    setBrandColorState(updatedColor);
  };

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

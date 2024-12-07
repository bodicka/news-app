import React, { createContext, ReactNode, useContext, useState } from "react";

interface IThemeContext {
  isDark: boolean;
  toogleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("context error");
  }

  return context;
};

interface ThemeProviderType {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderType) => {
  const [isDark, setIsDark] = useState<boolean>(true);

  const toogleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toogleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

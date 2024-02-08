import { useEffect, useState } from 'react';

export const useDarkTheme = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyChangeTheme(prefersDarkMode);
  });

  useEffect(() => {
    applyChangeTheme(darkMode);
  }, [darkMode]);

  const applyChangeTheme = (darkMode: boolean) => {
    const htmlElement = document.querySelector('html');
    if (darkMode) htmlElement?.classList.add('dark');
    if (!darkMode) htmlElement?.classList.remove('dark');
  };

  const changeTheme = () => {
    setDarkMode(darkMode ? false : true);
  };

  return {
    darkMode,
    setDarkMode,
    changeTheme,
  };
};

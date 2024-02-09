import { useEffect, useState } from 'react';

export const useDarkTheme = () => {
  const prefersDarkMode =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [darkMode, setDarkMode] = useState<boolean>(prefersDarkMode);

  useEffect(() => {
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
    setDarkMode(!darkMode);
  };

  return {
    darkMode,
    setDarkMode,
    changeTheme,
    toggle: useEffect(() => setDarkMode((current) => !current), [setDarkMode]),
  };
};

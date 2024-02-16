import { SelectPortfolioView } from '@components-views/select-porfolio';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import './App.css';

export const App = () => {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute='class' defaultTheme='light'>
        <SelectPortfolioView></SelectPortfolioView>
      </NextThemesProvider>
    </NextUIProvider>
  );
};

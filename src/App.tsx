import { SelectPortfolioView } from '@components-views/select-porfolio';
import { NextUIProvider } from '@nextui-org/react';

import './App.css';

export const App = () => {
  return (
    <NextUIProvider>
      <SelectPortfolioView></SelectPortfolioView>
    </NextUIProvider>
  );
};

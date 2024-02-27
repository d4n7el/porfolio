import { SelectPortfolioView } from '@components-views/select-porfolio';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from '../firebase.config';
import './App.css';
import { Suspense } from 'react';
import Loading from './components/loading';
import { I18nextProvider } from 'react-i18next';
import i18nInstance from '@locales/i18next.init';

export const App = () => {
  return (
    <I18nextProvider i18n={i18nInstance}>
      <NextUIProvider>
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
          <Suspense fallback={<Loading></Loading>}>
            <NextThemesProvider attribute='class' defaultTheme='light'>
              <SelectPortfolioView></SelectPortfolioView>
            </NextThemesProvider>
          </Suspense>
        </FirebaseAppProvider>
      </NextUIProvider>
    </I18nextProvider>
  );
};

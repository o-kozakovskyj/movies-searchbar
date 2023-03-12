import { theme } from '../src/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../src/theme/createEmotionCache';
import Head from 'next/head';
import { store, persistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react'

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
const clientSideEmotionCache = createEmotionCache();
const MyApp: React.FunctionComponent<MyAppProps> = props => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Head>
          <title>movie Tube</title>
          <meta name="description" content="Digital Books shop" />
          <link rel="icon" href="/images/favicon.ico" />
        </Head>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
      </PersistGate>
    </Provider>
  );
};
export default MyApp;
/**
 * @Author: Anand 
 * @Date: 2021-11-08
 * @Desc: ZenOnco - Applicaiton's Entrypoint
 */

import { ActivityIndicator } from 'react-native';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import React, { useEffect } from 'react';
import Text from './components/CustomText';
import { ThemeContextProvider } from './utils/ThemeProvider';
import configureStore from './store';
import setI18nConfig from './utils/LanguageProvider';
import Navigator from './navigation/NavigationStack';

const { persistor, store } = configureStore();

const EntryPoint = () => {

  useEffect(() => {
  }, [])

  setI18nConfig();

  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <ThemeContextProvider>
          <Navigator />
        </ThemeContextProvider>
      </PersistGate>
    </Provider>
  );
};

export default EntryPoint;

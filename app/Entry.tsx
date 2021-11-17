/**
 * @Author: Anand R
 * @Date: 2021-11-08
 * @Desc: ZenOnco - Applicaiton's Entrypoint
 */

import { ActivityIndicator } from 'react-native';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import React from 'react';
import Text from './components/CustomText';
import { ThemeContextProvider } from './utils/ThemeProvider';
import configureStore from './store';
import setI18nConfig from './utils/LanguageProvider';

const { persistor, store } = configureStore();

const EntryPoint = () => {

  setI18nConfig();

  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <ThemeContextProvider>
          <Text>Welcome</Text>
        </ThemeContextProvider>
      </PersistGate>
    </Provider>
  );
};

export default EntryPoint;

import React, {useEffect} from 'react';
import {persistor, store} from './src/redux/store';

import {LogBox} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import StackNavigation from './src/navigation/StackNavigation';

const App = props => {
  useEffect(() => {
    SplashScreen.hide();
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;

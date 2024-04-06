import React, {ReactNode} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider as ReduxProvider} from 'react-redux';

import {getInitialSafeAreaMetrics} from './utils/getInitialSafeAreaMetrics';
import ThemeProvider from '../theme/ThemeProvider';
import {persist, store} from '@redux/store';

function AppContextsProvider({children}: IAppContextsProviderProps) {
  return (
    <SafeAreaProvider initialMetrics={getInitialSafeAreaMetrics}>
      <ThemeProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          <ReduxProvider store={store}>
            <PersistGate loading={null} persistor={persist}>
              <NavigationContainer>{children}</NavigationContainer>
            </PersistGate>
          </ReduxProvider>
        </GestureHandlerRootView>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

interface IAppContextsProviderProps {
  children: ReactNode;
}

export default AppContextsProvider;

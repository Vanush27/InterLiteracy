import React from 'react';
import 'react-native-reanimated';

import AppContextsProvider from './AppContextsProvider';
import RootNavigator from './navigators/RootNavigator';

const App = () => {
  return (
    <AppContextsProvider>
      <RootNavigator />
    </AppContextsProvider>
  );
};

export default App;

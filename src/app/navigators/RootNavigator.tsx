import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomNavigator from './bottom-navigator/BottomNavigator';
import AppNavigator from './app-navigator/AppNavigator';

const AppStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="AppNavigator"
        component={AppNavigator}
        options={{headerShown: false}}
      />
      <AppStack.Screen
        name="BottomNavigator"
        component={BottomNavigator}
        options={{headerShown: false}}
      />
    </AppStack.Navigator>
  );
};

export default RootNavigator;

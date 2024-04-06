import React from 'react';
import BottomNavigator from '../bottom-navigator/BottomNavigator';

import {createStackNavigator} from '@react-navigation/stack';
import {MainNavigationRoutes} from '../../types/Navigation';

const Stack = createStackNavigator<MainNavigationRoutes>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'BottomNavigator'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

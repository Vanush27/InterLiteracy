import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TaskTwo, TaskOne, TaskTree} from '@screens';

import TaskOneIcon from 'react-native-vector-icons/FontAwesome';
import TaskTwoIcon from 'react-native-vector-icons/FontAwesome5';
import TaskTreeIcon from 'react-native-vector-icons/MaterialIcons';

import {HomeNavigationRoutes} from '../../types/Navigation';
import {useTheme} from '@rneui/themed';

const taskOneIcon = (focused: boolean) => {
  return (
    <TaskOneIcon color={focused ? '#E37C07' : 'black'} name="tasks" size={24} />
  );
};

const taskTwoIcon = (focused: boolean) => {
  return (
    <TaskTwoIcon color={focused ? '#E68406' : 'black'} name="tasks" size={24} />
  );
};

const taskTreeIcon = (focused: boolean) => {
  return (
    <TaskTreeIcon color={focused ? '#E68406' : 'black'} name="task" size={24} />
  );
};

const BottomTab = createBottomTabNavigator<HomeNavigationRoutes>();

const BottomNavigator = () => {
  const {theme} = useTheme();

  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.disabled,
          borderTopWidth: 0,
        },
      }}>
      <BottomTab.Screen
        component={TaskOne}
        name="TaskOne"
        options={() => ({
          tabBarIcon: ({focused}) => taskOneIcon(focused),
          title: 'TaskOne',
          headerShown: false,
          tabBarActiveTintColor: '#E37C07',
          backgroundColor: 'red',
        })}
      />

      <BottomTab.Screen
        component={TaskTwo}
        name="TaskTwo"
        options={() => ({
          tabBarIcon: ({focused}) => taskTwoIcon(focused),
          title: 'TaskTwo',
          headerShown: false,
          tabBarActiveTintColor: '#E37C07',
        })}
      />
      <BottomTab.Screen
        component={TaskTree}
        name="TaskTree"
        options={() => ({
          tabBarIcon: ({focused}) => taskTreeIcon(focused),
          title: 'TaskTree',
          headerShown: false,
          tabBarActiveTintColor: '#E37C07',
        })}
      />
    </BottomTab.Navigator>
  );
};
export default BottomNavigator;

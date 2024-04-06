import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';

import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type TCatalog = {};

export type MainNavigationRoutes = {
  MainScreen: undefined;
  BottomNavigator: undefined;
};

export type HomeNavigationRoutes = {
  TaskOne: undefined;
  TaskTwo: undefined;
  TaskTree: undefined;
};

export type TBottomTabScreenProps<TScreen extends keyof TCatalog> =
  NativeStackScreenProps<TCatalog, TScreen>;

export type TScreenProps<TScreen extends keyof MainNavigationRoutes> =
  CompositeScreenProps<
    NativeStackScreenProps<MainNavigationRoutes, TScreen>,
    CompositeScreenProps<
      BottomTabScreenProps<TCatalog>,
      NativeStackScreenProps<MainNavigationRoutes>
    >
  >;

export type TRootScreens = {
  Main: NavigatorScreenParams<MainNavigationRoutes | undefined>;
  Home: HomeNavigationRoutes;
};

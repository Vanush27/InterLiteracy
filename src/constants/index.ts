import {Dimensions, Platform} from 'react-native';

export const DIMENSIONS_WIDTH = Dimensions.get('window').width;
export const DIMENSIONS_HEIGHT = Dimensions.get('window').height;

export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';

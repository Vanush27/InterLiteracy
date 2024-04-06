import {StyleSheet} from 'react-native';
import {useTheme} from '@rneui/themed';

export const useStyles = (height: number) => {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: 5,
      backgroundColor: theme.colors.background,
      borderRadius: 10,
      elevation: 8,
    },
    wrapper: {
      backgroundColor: 'rgba(0,0,0,0)',
      width: 150,
      height: height,
      margin: 8,
    },
    image: {
      height: '100%',
      borderRadius: 10,
    },
  });

  return {
    styles,
  };
};

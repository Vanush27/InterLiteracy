import {StyleSheet} from 'react-native';
import {useTheme} from '@rneui/themed';
import {size} from '@assets/fonts/size';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.warning,
    },
    text: {
      alignSelf: 'center',
      fontSize: size.typography_24,
      fontWeight: '800',
    },
  });

  return {
    styles,
  };
}

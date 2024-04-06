import {StyleSheet} from 'react-native';
import {useTheme} from '@rneui/themed';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
    },
    card: {
      margin: 10,
    },

    listContent: {
      width: '100%',
      backgroundColor: theme.colors.grey4,
    },
  });

  return {
    styles,
  };
}

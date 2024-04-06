import {StyleSheet} from 'react-native';
import {useTheme} from '@rneui/themed';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 40,
    },
    input: {
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 8,
      padding: 12,
      marginVertical: 10,
      marginLeft: 16,
      marginRight: 16,
    },
    error: {
      color: 'red',
      // marginBottom: 5,
    },
    image_wrapper: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {width: 200, height: 200},
  });

  return {styles, theme};
}

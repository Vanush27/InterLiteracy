import {colors} from '@assets/colors';
import {size} from '@assets/fonts/size';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const styles = StyleSheet.create({
    text: {
      color: colors.primaryBlack,
      fontSize: size.typography_18,
      fontWeight: '800',
    },
  });

  return {
    styles,
  };
};

import {createTheme} from '@rneui/themed';
import {colors} from './colors';
import {fonts} from './fonts';

export const lightTheme = createTheme({
  components: {},
  ...colors,
  ...fonts,
});

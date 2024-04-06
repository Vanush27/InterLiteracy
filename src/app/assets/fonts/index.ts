import {family, IThemeFonts} from './family';
import {IThemeSize, size} from './size';

export type IFonts = {
  size: IThemeSize;
  family: IThemeFonts;
};

export const fonts: IFonts = {
  size,
  family,
};

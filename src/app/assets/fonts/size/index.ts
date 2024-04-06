export interface IThemeSize {
  typography_10: number;
  typography_14: number;
  typography_16: number;
  typography_18: number;
  typography_24: number;
  typography_30: number;
  typography_36: number;
}
export interface ILineHeight {
  lineHeight_10: number;
  lineHeight_14: number;
  lineHeight_16: number;
  lineHeight_18: number;
  lineHeight_24: number;
  lineHeight_30: number;
  lineHeight_36: number;
}
export const size: IThemeSize = {
  typography_10: 10,
  typography_14: 14,
  typography_16: 16,
  typography_18: 18,
  typography_24: 24,
  typography_30: 30,
  typography_36: 36,
};
export const lineHeight: ILineHeight = {
  lineHeight_10: 1.4 * size.typography_10,
  lineHeight_14: 1.4 * size.typography_14,
  lineHeight_16: 1.4 * size.typography_16,
  lineHeight_18: 1.4 * size.typography_18,
  lineHeight_24: 1.4 * size.typography_24,
  lineHeight_30: 1.4 * size.typography_30,
  lineHeight_36: 1.4 * size.typography_36,
};

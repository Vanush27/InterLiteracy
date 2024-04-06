export interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export type TOnScrollHandler = {
  isScrolling: boolean;
  prevY: number;
};

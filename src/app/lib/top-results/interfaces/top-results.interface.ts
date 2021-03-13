import { MediaFormat } from '../../media/enums/media-format.enum';
import { MediaSeason } from '../../media/enums/media-season.enum';
import { MediaStatus } from '../../media/enums/media-status.enum';

export interface ITopAnime {
  id: number;
  title: {
    romaji: string;
    native: string;
  };
  bannerImage?: string;
  coverImage: {
    color: string;
    medium?: string;
    large?: string;
    extraLarge?: string;
  };
  description: string;
  genres: string[];
  episodes: number;
  format: MediaFormat;
  season: MediaSeason;
  seasonYear: number;
  status: MediaStatus;
}

export interface IPaginatedTopAnime {
  Page: {
    media: ITopAnime[];
  };
}

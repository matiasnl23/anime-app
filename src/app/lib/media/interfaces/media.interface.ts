import { IDate } from '../../date/interfaces/date.interface';
import { MediaFormat } from '../enums/media-format.enum';
import { MediaSeason } from '../enums/media-season.enum';
import { MediaSource } from '../enums/media-source.enum';
import { MediaStatus } from '../enums/media-status.enum';
export interface IMediaMinimalBase {
  id: number;
  title: {
    romaji: string | null;
    native: string | null;
    english: string | null;
  };
  coverImage: ICover;
}

export interface IMediaBase extends IMediaMinimalBase {
  bannerImage: string | null;
  description: string;
  episodes: number | null;
  format: MediaFormat;
  genres: string[];
  season: MediaSeason;
  seasonYear: number;
  status: MediaStatus;
}

export interface IMedia extends IMediaBase {
  duration: number | null;
  endDate: IDate;
  isAdult: boolean;
  relations: {
    edges: {
      node: IMediaMinimalBase;
      relationType: string;
      isMainStudio: boolean;
    }[];
  };
  source: MediaSource;
  startDate: IDate;
  studios: {
    nodes: {
      id: number;
      name: string;
      isAnimationStudio: boolean;
    }[];
  };
  trailer: {
    id: string;
    site: string;
    thumbnail: string;
  };
  volumes: number | null;
}

export interface ICover {
  color: string | null;
  extraLarge: string | null;
  large: string | null;
  medium: string | null;
}

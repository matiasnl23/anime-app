import { IDate } from '../../date/interfaces/date.interface';
import { IPage } from '../../page/interfaces/page.interface';
import { IStaff } from '../../staff/interfaces/staff.interface';
import { MediaFormat } from '../enums/media-format.enum';
import { MediaRelation } from '../enums/media-relation.enum';
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
  relations: IMediaConnection;
  source: MediaSource;
  startDate: IDate;
  studios: {
    nodes: {
      id: number;
      name: string;
      isAnimationStudio: boolean;
    }[];
  };
  trailer: ITrailer;
  volumes: number | null;
}

export interface ICover {
  color: string | null;
  extraLarge: string | null;
  large: string | null;
  medium: string | null;
}

export interface ITrailer {
  id: string;
  site: string;
  thumbnail: string;
}

export interface IMediaConnection {
  edges?: IMediaEdge[];
  nodes?: IMedia[];
  pageInfo?: IPage;
}

export interface IMediaEdge {
  node?: IMedia;
  id: number;
  relationType: MediaRelation;
  isMainStudio?: boolean;
  characters?: any[];
  characterRole?: any;
  staffRole?: string;
  voiceActors?: IStaff[];
  favouriteOrder?: number;
}

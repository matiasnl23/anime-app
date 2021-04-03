import {
  IAiringSchedule,
  IAiringScheduleConnection,
} from '@lib/airing-schedule';
import {
  CharacterRole,
  CharacterSort,
  ICharacter,
  ICharacterConnection,
} from '@lib/character';
import { IDate } from '@lib/date';
import {
  MediaFormat,
  MediaRelation,
  MediaSeason,
  MediaSource,
  MediaStatus,
  MediaType,
} from '@lib/media';
import { IPage } from '@lib/page';
import { IStaff, IStaffConnection, StaffSort } from '@lib/staff';
import { IStudioConnection } from '@lib/studio';

export interface IMedia {
  id: number;
  title?: IMediaTitle;
  type?: MediaType;
  format?: MediaFormat;
  status?: MediaStatus;
  description?: string;
  startDate?: IDate;
  endDate?: IDate;
  season?: MediaSeason;
  seasonYear?: number;
  episodes?: number;
  duration?: number;
  chapters?: number;
  volumes?: number;
  isLicensed?: boolean;
  source?: MediaSource;
  trailer?: ITrailer;
  coverImage: ICover;
  bannerImage?: string | null;
  genres?: string[];
  synonyms?: string[];

  averageScore?: number;
  meanScore?: number;
  trending?: number;

  relations?: IMediaConnection;
  characters?: ICharacterConnection;
  staff?: IStaffConnection;
  studios?: IStudioConnection;

  isFavourite?: boolean;
  isAdult: boolean;
  siteUrl?: string;

  // recommendations?: IRecommendationConnection;
  nextAiringEpisode?: IAiringSchedule;
  airingSchedule?: IAiringScheduleConnection;
}

export interface IMediaTitle {
  romaji: string;
  english?: string;
  native?: string;
}

export interface ICover {
  color: string | null;
  extraLarge?: string;
  large?: string;
  medium?: string;
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
  id: number;
  node: IMedia;
  relationType: MediaRelation;
  isMainStudio?: boolean;
  characters?: ICharacter[];
  characterRole?: CharacterRole;
  staffRole?: string;
  voiceActors?: IStaff[];
  favouriteOrder?: number;
}

export interface IMediaCharactersOptions {
  role?: CharacterRole;
  sort?: CharacterSort[];
}

export interface IMediaStaffOptions {
  sort?: StaffSort;
}

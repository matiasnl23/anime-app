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
import { IStaff, IStaffConnection, StaffLanguage, StaffSort } from '@lib/staff';
import { IStudioConnection } from '@lib/studio';
import { MediaSort } from '../enums/media-sort.enum';

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

export interface IMediaOptions {
  id?: number;
  idMal?: number;
  startDate?: IDate;
  endDate?: IDate;
  season?: MediaSeason;
  seasonYear?: number;
  type?: MediaType;
  format?: MediaFormat;
  status?: MediaStatus;
  episodes?: number;
  duration?: number;
  chapters?: number;
  volumes?: number;
  isAdult?: boolean;
  genre?: string;
  tag?: string;
  minimumTagRank?: number;
  tagCategory?: string;
  onList?: boolean;
  licensedBy?: string;
  averageScore?: number;
  popularity?: number;
  source?: MediaSource;
  //countryOfOrigin?: CountryCode;
  search?: string;
  id_not?: number;
  id_in?: [number];
  id_not_int?: [number];
  idMal_not?: number;
  idMal_in?: [number];
  idMal_not_in?: [number];
  startDate_greater?: IDate;
  startDate_lesser?: IDate;
  startDate_like?: string;
  endDate_greater?: IDate;
  endDate_lesser?: IDate;
  endDate_like?: string;
  format_in?: MediaFormat[];
  format_not?: MediaFormat;
  format_not_in?: MediaFormat[];
  status_in?: MediaStatus[];
  status_not?: MediaStatus;
  status_not_in?: MediaStatus[];
  episodes_greater?: number;
  episodes_lesser?: number;
  duration_greater?: number;
  duration_lesser?: number;
  chapters_greater?: number;
  chapters_lesser?: number;
  volumes_greater?: number;
  volumes_lesser?: number;
  genre_int?: string[];
  genre_not_in?: string[];
  tag_in?: string[];
  tag_not_in?: string[];
  tagCategory_in?: string[];
  tagCategory_not_in?: string[];
  licensedBy_in?: string[];
  averageScore_not?: number;
  averageScore_greater?: number;
  averageScore_lesser?: number;
  popularity_not?: number;
  popularity_greater?: number;
  popularity_lesser?: number;
  source_in?: MediaSource[];
  sort?: MediaSort[];
  perPage?: number;
}

export interface IMediaCharactersOptions {
  role?: CharacterRole;
  sort?: CharacterSort[];
  staffLanguage?: StaffLanguage;
  staffSort?: StaffSort[];
}

export interface IMediaStaffOptions {
  sort?: StaffSort;
}

import {
  IAiringSchedule,
  IAiringScheduleConnection,
} from '../../airing-schedule/interfaces/airing-schedule.interface';
import { CharacterRole } from '../../character/enums/character-role.enum';
import {
  ICharacter,
  ICharacterConnection,
} from '../../character/interfaces/character.interface';
import { IDate } from '../../date/interfaces/date.interface';
import { IPage } from '../../page/interfaces/page.interface';
import {
  IStaff,
  IStaffConnection,
} from '../../staff/interfaces/staff.interface';
import { IStudioConnection } from '../../studio/interfaces/studio.interface';
import { MediaFormat } from '../enums/media-format.enum';
import { MediaRelation } from '../enums/media-relation.enum';
import { MediaSeason } from '../enums/media-season.enum';
import { MediaSource } from '../enums/media-source.enum';
import { MediaStatus } from '../enums/media-status.enum';
import { MediaType } from '../enums/media-type.enum';

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

import { CharacterSort } from '@lib/character';
import { MediaSort, MediaType } from '@lib/media';
import { ICharacterConnection } from '../../character/interfaces/character.interface';
import { IMediaConnection } from '../../media/interfaces/media.interface';
import { IPage } from '../../page/interfaces/page.interface';
import { StaffLanguage } from '../enums/staff.enum';

export interface IStaff {
  id: number;
  name: IStaffName;
  language: StaffLanguage;
  image: IStaffImage;
  description: string;
  isFavourite: boolean;
  siteUrl: string;
  staffMedia?: IMediaConnection;
  characters?: ICharacterConnection;
  characterMedia?: IMediaConnection;
  staff: IStaff;
  favourites: number;
}

export interface IStaffEdge {
  id: number;
  node: IStaff;
  role: string;
  favouriteOrder: number;
}

export interface IStaffConnection {
  edges?: IStaffEdge[];
  nodes?: IStaff[];
  pageInfo?: IPage;
}

export interface IStaffName {
  first: string;
  last: string;
  full: string;
  native: string;
  alternative: string[];
}

export interface IStaffImage {
  large: string;
  medium: string;
}

export interface IStaffMediaOptions {
  onList?: boolean;
  sort?: MediaSort[];
  type?: MediaType;
}

export interface IStaffCharactersOptions {
  sort?: CharacterSort[];
}

export interface IStaffCharacterMediaOptions {
  sort?: MediaSort[];
}

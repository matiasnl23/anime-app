import {
  IMedia,
  IMediaConnection,
} from '../../media/interfaces/media.interface';
import { IPage } from '../../page/interfaces/page.interface';
import { IStaff } from '../../staff/interfaces/staff.interface';
import { CharacterRole } from '../enums/character-role.enum';

export interface ICharacter {
  id: number;
  name: ICharacterName;
  image: ICharacterImage;
  description?: string;
  isFavourite?: boolean;
  siteUrl?: string;
  media?: IMediaConnection;
  favourites?: number;
}

export interface ICharacterEdge {
  node?: ICharacter;
  id: number;
  role?: CharacterRole;
  voiceActors?: IStaff[];
  media?: IMedia[];
  favouriteOrder?: number;
}

export interface ICharacterConnection {
  edges?: ICharacterEdge[];
  nodes?: ICharacter[];
  pageInfo?: IPage;
}

export interface ICharacterName {
  first?: string;
  last?: string;
  full?: string;
  native?: string;
  alternative?: string[];
}

export interface ICharacterImage {
  large?: string;
  medium?: string;
}

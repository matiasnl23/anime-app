import { CharacterRole } from '@lib/character';
import { IMedia, IMediaConnection } from '@lib/media';
import { IPage } from '@lib/page';
import { IStaff } from '@lib/staff';

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
  id: number;
  node: ICharacter;
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

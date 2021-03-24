import { IMediaConnection } from '../../media/interfaces/media.interface';
import { StaffLanguage } from '../enums/staff.enum';

export interface IStaffEdge {
  node: any;
  id: number;
  role: string;
  favouriteOrder: number;
}

export interface IStaff {
  id: number;
  name: IStaffName;
  language: StaffLanguage;
  image: IStaffImage;
  description: string;
  isFavourite: boolean;
  siteUrl: string;
  staffMedia?: IMediaConnection;
  //characters?: ICharacterConnection;
  characterMedia?: IMediaConnection;
  staff: IStaff;
  favourites: number;
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

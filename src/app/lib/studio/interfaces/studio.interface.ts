import { IMediaConnection } from '../../media/interfaces/media.interface';
import { IPage } from '../../page/interfaces/page.interface';

export interface IStudio {
  id: number;
  name: string;
  isAnimationStudio?: boolean;
  media?: IMediaConnection;
  siteUrl?: string;
  isFavourite?: boolean;
  favourites?: number;
}

export interface IStudioEdge {
  node?: IStudio;
  id: number;
  isMain?: boolean;
  favouriteOrder?: number;
}

export interface IStudioConnection {
  edges?: IStudioEdge[];
  nodes?: IStudio[];
  pageInfo?: IPage;
}

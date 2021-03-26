import { IMedia } from '../../media/interfaces/media.interface';
import { IPage } from '../../page/interfaces/page.interface';

export interface IAiringSchedule {
  id: number;
  airingAt?: number;
  timeUntilAiring?: number;
  episode?: number;
  mediaId?: number;
  media?: IMedia;
}

export interface IAiringScheduleEdge {
  id?: number;
  node?: IAiringSchedule;
}

export interface IAiringScheduleConnection {
  edges?: IAiringScheduleEdge[];
  nodes?: IAiringSchedule[];
  pageInfo?: IPage;
}

import { IMedia } from '@lib/media';
import { IPage } from '@lib/page';

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

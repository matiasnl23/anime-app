import { IAiringSchedule } from '@lib/airing-schedule';
import { ICharacter } from '@lib/character';
import { IMedia } from '@lib/media';
import { IStaff } from '@lib/staff';

export interface IPage {
  total?: number;
  perPage?: number;
  currentPage?: number;
  lastPage?: number;
  hasNextPage?: boolean;
}

export interface IPageResponse {
  Page: {
    pageInfo: IPage;
    media?: IMedia[];
    characters?: ICharacter[];
    staff?: IStaff[];
    airingSchedules?: IAiringSchedule[];
  };
}

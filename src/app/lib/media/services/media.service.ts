import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { IAiringScheduleConnection } from '@lib/airing-schedule';
import { ICharacterConnection } from '@lib/character';
import { IPageResponse } from '@lib/page';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IMedia } from '..';
import {
  IMediaCharactersOptions,
  IMediaOptions,
  IMediaStaffOptions,
} from '../interfaces/media.interface';
import {
  getAiringSchedulesQuery,
  getCharactersQuery,
  getMediaPaginatedQuery,
  getRelationsQuery,
  getStaffQuery,
  getStudiosQuery,
} from '../queries/media.query';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  constructor(private apollo: Apollo) {}

  getMediaPaginated(page: number = 1, options?: IMediaOptions) {
    return this.apollo.watchQuery<IPageResponse>({
      query: getMediaPaginatedQuery,
      variables: {
        page,
        ...options,
      },
    }).valueChanges;
  }

  getCharacters(
    id: number,
    page: number = 1,
    options?: IMediaCharactersOptions
  ): Observable<ICharacterConnection | undefined> {
    return this.apollo
      .watchQuery<IMediaResponse>({
        query: getCharactersQuery,
        variables: {
          id,
          page,
          ...options,
        },
      })
      .valueChanges.pipe(map((response) => response.data.Media?.characters));
  }

  getStaff(
    id: number,
    page: number = 1,
    options?: IMediaStaffOptions
  ): Observable<ApolloQueryResult<IMediaResponse>> {
    return this.apollo.watchQuery<IMediaResponse>({
      query: getStaffQuery,
      variables: {
        id,
        page,
        ...options,
      },
    }).valueChanges;
  }

  getStudios(id: number): Observable<ApolloQueryResult<IMediaResponse>> {
    return this.apollo.watchQuery<IMediaResponse>({
      query: getStudiosQuery,
      variables: {
        id,
      },
    }).valueChanges;
  }

  getRelations(id: number): Observable<ApolloQueryResult<IMediaResponse>> {
    return this.apollo.watchQuery<IMediaResponse>({
      query: getRelationsQuery,
      variables: {
        id,
      },
    }).valueChanges;
  }

  getAiringSchedules(
    id: number
  ): Observable<IAiringScheduleConnection | undefined> {
    return this.apollo
      .watchQuery<IMediaResponse>({
        query: getAiringSchedulesQuery,
        variables: {
          id,
        },
      })
      .valueChanges.pipe(
        map((response) => response.data.Media?.airingSchedule)
      );
  }
}

export interface IMediaResponse {
  Media: IMedia;
}

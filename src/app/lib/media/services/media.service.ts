import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IAiringScheduleConnection } from '../../airing-schedule/interfaces/airing-schedule.interface';
import { ICharacterConnection } from '../../character/interfaces/character.interface';
import { StaffLanguage } from '../../staff/enums/staff.enum';
import { IMedia } from '../interfaces/media.interface';
import {
  getAiringSchedules,
  getCharactersQuery,
  getRelationsQuery,
  getStaffQuery,
  getStudiosQuery,
} from '../queries/media.query';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  constructor(private apollo: Apollo) {}

  getCharacters(
    id: number,
    language: StaffLanguage = StaffLanguage.JAPANESE
  ): Observable<ICharacterConnection | undefined> {
    return this.apollo
      .watchQuery<IMediaResponse>({
        query: getCharactersQuery,
        variables: {
          id,
          language,
        },
      })
      .valueChanges.pipe(map((response) => response.data.Media?.characters));
  }

  getStaff(id: number): Observable<ApolloQueryResult<IMediaResponse>> {
    return this.apollo.watchQuery<IMediaResponse>({
      query: getStaffQuery,
      variables: {
        id,
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
        query: getAiringSchedules,
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

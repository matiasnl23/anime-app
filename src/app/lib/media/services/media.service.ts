import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { StaffLanguage } from '../../staff/enums/staff.enum';
import { IMedia } from '../interfaces/media.interface';
import {
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
  ): Observable<ApolloQueryResult<IMediaResponse>> {
    return this.apollo.watchQuery<IMediaResponse>({
      query: getCharactersQuery,
      variables: {
        id,
        language,
      },
    }).valueChanges;
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
}

export interface IMediaResponse {
  Media: IMedia;
}

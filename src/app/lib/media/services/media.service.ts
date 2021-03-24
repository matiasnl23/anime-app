import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { StaffLanguage } from '../../staff/enums/staff.enum';
import { getCharactersQuery } from '../queries/media.query';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  constructor(private apollo: Apollo) {}

  getCharacters(id: number, language: StaffLanguage = StaffLanguage.JAPANESE) {
    return this.apollo.watchQuery({
      query: getCharactersQuery,
      variables: {
        id,
        language,
      },
    }).valueChanges;
  }
}

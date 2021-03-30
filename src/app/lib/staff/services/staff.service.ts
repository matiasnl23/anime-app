import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { IStaff } from '../interfaces/staff.interface';
import {
  getStaffCharacterMediaQuery,
  getStaffCharacters,
  getStaffQuery,
} from '../queries/staff.query';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  constructor(private apollo: Apollo) {}

  getStaff(id: number) {
    return this.apollo.watchQuery<IStaffResponse>({
      query: getStaffQuery,
      variables: {
        id,
      },
    }).valueChanges;
  }

  getCharacters(id: number, page: number = 1) {
    return this.apollo.watchQuery<IStaffResponse>({
      query: getStaffCharacters,
      variables: {
        id,
        page,
      },
    }).valueChanges;
  }

  getCharactersMedia(id: number, page: number = 1, options?: any) {
    return this.apollo.watchQuery<IStaffResponse>({
      query: getStaffCharacterMediaQuery,
      variables: {
        id,
        page,
        ...options,
      },
    }).valueChanges;
  }
}

export interface IStaffResponse {
  Staff: IStaff;
}

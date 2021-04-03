import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  IStaff,
  IStaffCharacterMediaOptions,
  IStaffCharactersOptions,
  IStaffMediaOptions,
} from '../interfaces/staff.interface';
import {
  getStaffCharacterMediaQuery,
  getStaffCharacters,
  getStaffMediaRolesQuery,
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

  getCharacters(
    id: number,
    page: number = 1,
    options?: IStaffCharactersOptions
  ) {
    return this.apollo.watchQuery<IStaffResponse>({
      query: getStaffCharacters,
      variables: {
        id,
        page,
        ...options,
      },
    }).valueChanges;
  }

  getCharactersMedia(
    id: number,
    page: number = 1,
    options?: IStaffCharacterMediaOptions
  ) {
    return this.apollo.watchQuery<IStaffResponse>({
      query: getStaffCharacterMediaQuery,
      variables: {
        id,
        page,
        ...options,
      },
    }).valueChanges;
  }

  getStaffMediaRoles(
    id: number,
    page: number = 1,
    options?: IStaffMediaOptions
  ) {
    return this.apollo.watchQuery<IStaffResponse>({
      query: getStaffMediaRolesQuery,
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

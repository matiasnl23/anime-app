import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { IMedia } from '../../media/interfaces/media.interface';

@Injectable({
  providedIn: 'root',
})
export class DetailService {
  constructor(private apollo: Apollo) {}

  getFullData(id: number): Observable<ApolloQueryResult<IMediaResponse>> {
    const query = gql`
      query($id: Int) {
        Media(id: $id) {
          id
          title {
            romaji
            native
            english
          }
          type
          format
          status
          description
          startDate {
            year
            month
            day
          }
          endDate {
            year
            month
            day
          }
          season
          seasonYear
          episodes
          duration
          volumes
          source
          trailer {
            id
            site
            thumbnail
          }
          coverImage {
            color
            medium
            large
            extraLarge
          }
          bannerImage
          studios {
            nodes {
              id
              name
              isAnimationStudio
            }
          }
          relations {
            edges {
              node {
                id
                title {
                  romaji
                  native
                }
                coverImage {
                  color
                  medium
                  large
                  extraLarge
                }
              }
              relationType
              isMainStudio
            }
          }
          isAdult
        }
      }
    `;

    return this.apollo.watchQuery<IMediaResponse>({
      query,
      variables: {
        id,
      },
    }).valueChanges;
  }
}

interface IMediaResponse {
  Media: IMedia;
}

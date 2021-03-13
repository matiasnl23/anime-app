import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { MediaFormat } from '../../media/enums/media-format.enum';
import { MediaSort } from '../../media/enums/media-sort.enum';
import { MediaType } from '../../media/enums/media-type.enum';
import { IPaginatedTopAnime } from '../interfaces/top-results.interface';

@Injectable({
  providedIn: 'root',
})
export class TopResultsService {
  constructor(private apollo: Apollo) {}

  getTopAnimes(format: MediaFormat) {
    const query = gql`
      query ($format: MediaFormat) {
        Page(page: 1, perPage: 25) {
          media(sort: ${MediaSort.SCORE_DESC}, type: ${MediaType.ANIME}, format: $format) {
            id
            title {
              romaji
              native
            }
            bannerImage
            coverImage {
              color
              medium
              large
              extraLarge
            }
            description
            genres
            episodes
            format
            season
            seasonYear
            status
          }
        }
      }
    `;

    return this.apollo.watchQuery<IPaginatedTopAnime>({
      query,
      variables: {
        format,
      },
    });
  }
}

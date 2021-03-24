import { gql } from 'apollo-angular';

export const getCharactersQuery = gql`
  query($id: Int, $language: StaffLanguage) {
    Media(id: $id) {
      characters {
        edges {
          role
          node {
            id
            name {
              first
              last
              full
            }
            image {
              large
              medium
            }
          }
          voiceActors(language: $language) {
            id
            name {
              first
              last
              full
            }
            image {
              large
              medium
            }
          }
        }
        pageInfo {
          total
          perPage
          currentPage
          lastPage
          hasNextPage
        }
      }
    }
  }
`;

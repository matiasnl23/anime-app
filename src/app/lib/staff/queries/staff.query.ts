import { gql } from 'apollo-angular';

export const getStaffQuery = gql`
  query($id: Int) {
    Staff(id: $id) {
      id
      name {
        first
        last
        full
        native
        alternative
      }
      language
      image {
        large
        medium
      }
      description
      siteUrl
      favourites
    }
  }
`;

export const getStaffMediaQuery = gql`
  query($id: Int) {
    Staff(id: $id) {
      staffMedia {
        edges {
          node {
            id
            title {
              romaji
              english
              native
            }
            coverImage {
              color
              extraLarge
              large
              medium
            }
          }
          relationType
          staffRole
          favouriteOrder
        }
        pageInfo {
          total
          perPage
          lastPage
          hastNextPage
        }
      }
    }
  }
`;

export const getStaffCharacters = gql`
  query($id: Int) {
    Staff(id: $id) {
      characters {
        edges {
          edges {
            id
            name {
              first
              last
              full
              native
            }
            image {
              large
              medium
            }
          }
          role
          media {
            id
            title {
              romaji
              english
              native
            }
            coverImage {
              color
              extraLarge
              large
              medium
            }
          }
          favouriteOrder
        }
        pageInfo {
          total
          perPage
          lastPage
          hastNextPage
        }
      }
    }
  }
`;

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
      description(asHtml: true)
      siteUrl
      favourites
    }
  }
`;

export const getStaffMediaRolesQuery = gql`
  query(
    $id: Int
    $page: Int
    $sort: [MediaSort]
    $type: MediaType
    $onList: Boolean
  ) {
    Staff(id: $id) {
      staffMedia(page: $page, sort: $sort, type: $type, onList: $onList) {
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
            seasonYear
          }
          relationType
          staffRole
          favouriteOrder
        }
        pageInfo {
          total
          perPage
          lastPage
          hasNextPage
          currentPage
        }
      }
    }
  }
`;

export const getStaffCharacters = gql`
  query($id: Int, $page: Int, $sort: [CharacterSort]) {
    Staff(id: $id) {
      characters(page: $page, sort: $sort) {
        edges {
          node {
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
            seasonYear
          }
          favouriteOrder
        }
        pageInfo {
          total
          perPage
          lastPage
          hasNextPage
          currentPage
        }
      }
    }
  }
`;

export const getStaffCharacterMediaQuery = gql`
  query($id: Int, $page: Int, $sort: [MediaSort], $onList: Boolean) {
    Staff(id: $id) {
      characterMedia(page: $page, sort: $sort, onList: $onList) {
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
            seasonYear
          }
          characters {
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
          characterRole
          favouriteOrder
        }
        pageInfo {
          total
          perPage
          lastPage
          hasNextPage
          currentPage
        }
      }
    }
  }
`;

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
          hasNextPage
          currentPage
        }
      }
    }
  }
`;

export const getStaffCharacters = gql`
  query($id: Int, $page: Int) {
    Staff(id: $id) {
      characters(page: $page, sort: [ID]) {
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
  query($id: Int, $page: Int, $sort: [MediaSort]) {
    Staff(id: $id) {
      characterMedia(page: $page, sort: $sort) {
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

import { gql } from 'apollo-angular';

export const getAiringSchedules = gql`
  query($id: Int) {
    Media(id: $id) {
      airingSchedule {
        nodes {
          id
          airingAt
          timeUntilAiring
          episode
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

export const getRelationsQuery = gql`
  query($id: Int) {
    Media(id: $id) {
      relations {
        edges {
          relationType
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
            bannerImage
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

export const getStudiosQuery = gql`
  query($id: Int) {
    Media(id: $id) {
      edges {
        isMain
        node {
          id
          name
          isAnimationStudio
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
`;

export const getStaffQuery = gql`
  query($id: Int) {
    Media(id: $id) {
      staff {
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

export const getCharactersQuery = gql`
  query($id: Int, $language: StaffLanguage, $page: Int) {
    Media(id: $id) {
      characters(page: $page) {
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

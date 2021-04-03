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
  query($id: Int, $page: Int) {
    Media(id: $id) {
      staff(page: $page) {
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
  query(
    $id: Int
    $role: CharacterRole
    $sort: [CharacterSort]
    $staffLanguage: StaffLanguage
    $staffSort: [StaffSort]
    $page: Int
  ) {
    Media(id: $id) {
      characters(page: $page, role: $role, sort: $sort) {
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
          voiceActors(language: $staffLanguage, sort: $staffSort) {
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

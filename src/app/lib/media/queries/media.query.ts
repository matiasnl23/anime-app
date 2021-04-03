import { gql } from 'apollo-angular';

export const getMediaPaginatedQuery = gql`
  query(
    $id: Int
    $idMal: Int
    $startDate: FuzzyDateInt
    $endDate: FuzzyDateInt
    $season: MediaSeason
    $seasonYear: Int
    $type: MediaType
    $format: MediaFormat
    $status: MediaStatus
    $episodes: Int
    $duration: Int
    $chapters: Int
    $volumes: Int
    $isAdult: Boolean
    $genre: String
    $tag: String
    $minimumTagRank: Int
    $tagCategory: String
    $onList: Boolean
    $licensedBy: String
    $averageScore: Int
    $popularity: Int
    $source: MediaSource
    $countryOfOrigin: CountryCode
    $search: String
    $id_not: Int
    $id_in: [Int]
    $id_not_in: [Int]
    $idMal_not: Int
    $idMal_in: [Int]
    $idMal_not_in: [Int]
    $startDate_greater: FuzzyDateInt
    $startDate_lesser: FuzzyDateInt
    $startDate_like: String
    $endDate_greater: FuzzyDateInt
    $endDate_lesser: FuzzyDateInt
    $endDate_like: String
    $format_in: [MediaFormat]
    $format_not: MediaFormat
    $format_not_in: [MediaFormat]
    $status_in: [MediaStatus]
    $status_not: MediaStatus
    $status_not_in: [MediaStatus]
    $episodes_greater: Int
    $episodes_lesser: Int
    $duration_greater: Int
    $duration_lesser: Int
    $chapters_greater: Int
    $chapters_lesser: Int
    $volumes_greater: Int
    $volumes_lesser: Int
    $genre_in: [String]
    $genre_not_in: [String]
    $tag_in: [String]
    $tag_not_in: [String]
    $tagCategory_in: [String]
    $tagCategory_not_in: [String]
    $licensedBy_in: [String]
    $averageScore_not: Int
    $averageScore_greater: Int
    $averageScore_lesser: Int
    $popularity_not: Int
    $popularity_greater: Int
    $popularity_lesser: Int
    $source_in: [MediaSource]
    $sort: [MediaSort]
    $page: Int
    $perPage: Int
  ) {
    Page(page: $page, perPage: $perPage) {
      media(
        id: $id
        idMal: $idMal
        startDate: $startDate
        endDate: $endDate
        season: $season
        seasonYear: $seasonYear
        type: $type
        format: $format
        status: $status
        episodes: $episodes
        duration: $duration
        chapters: $chapters
        volumes: $volumes
        isAdult: $isAdult
        genre: $genre
        tag: $tag
        minimumTagRank: $minimumTagRank
        tagCategory: $tagCategory
        onList: $onList
        licensedBy: $licensedBy
        averageScore: $averageScore
        popularity: $popularity
        source: $source
        countryOfOrigin: $countryOfOrigin
        search: $search
        id_not: $id_not
        id_in: $id_in
        id_not_in: $id_not_in
        idMal_not: $idMal_not
        idMal_in: $idMal_in
        idMal_not_in: $idMal_not_in
        startDate_greater: $startDate_greater
        startDate_lesser: $startDate_lesser
        startDate_like: $startDate_like
        endDate_greater: $endDate_greater
        endDate_lesser: $endDate_lesser
        endDate_like: $endDate_like
        format_in: $format_in
        format_not: $format_not
        format_not_in: $format_not_in
        status_in: $status_in
        status_not: $status_not
        status_not_in: $status_not_in
        episodes_greater: $episodes_greater
        episodes_lesser: $episodes_lesser
        duration_greater: $duration_greater
        duration_lesser: $duration_lesser
        chapters_greater: $chapters_greater
        chapters_lesser: $chapters_lesser
        volumes_greater: $volumes_greater
        volumes_lesser: $volumes_lesser
        genre_in: $genre_in
        genre_not_in: $genre_not_in
        tag_in: $tag_in
        tag_not_in: $tag_not_in
        tagCategory_in: $tagCategory_in
        tagCategory_not_in: $tagCategory_not_in
        licensedBy_in: $licensedBy_in
        averageScore_not: $averageScore_not
        averageScore_greater: $averageScore_greater
        averageScore_lesser: $averageScore_lesser
        popularity_not: $popularity_not
        popularity_greater: $popularity_greater
        popularity_lesser: $popularity_lesser
        source_in: $source_in
        sort: $sort
      ) {
        id
        title {
          romaji
          native
          english
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

export const getAiringSchedulesQuery = gql`
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

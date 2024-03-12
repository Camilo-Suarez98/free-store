import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
query getCharaters($page: Int!) {
  characters(page: $page) {
    info {
      pages
      next
      prev
    }
    results {
      id
      name
      status
      image
      gender
    }
  }
}
`;

export const GET_CHARACTER = gql`
  query getCharater($id: ID!) {
    character(id: $id) {
      id
      name
      image
      status
      species
      origin {
        name
      }
      location {
        name
      }
      episode {
        id
        name
        air_date
        episode
      }
    }
  }
`;

export const GET_EPISODES = gql`
  query getEpisodes($page: Int!) {
    episodes(page: $page) {
      info {
        pages
        next
        prev
      }
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;

export const GET_EPISODE = gql`
  query getEpisode($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      characters {
        id
        name
        image
      }
    }
  }
`;
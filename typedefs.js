const { gql } = require('apollo-server');
export default gql`
  scalar DateTime

  type Query {
    games(filter: String!): [Game!]
    game(id: ID!): Game!
    review(id: ID!): Review!
  }

  type Game {
    id: ID!
    name: String!
    url: String!
    firstReleaseDate: DateTime!
    topCriticScore: Float!
    tier: String!
    Platforms: [Platform!]
    Reviews: [Review]
  }

  type Platform {
    id: ID!
    name: String!
    shortName: String!
    imageSrc: String!
    releaseDate: DateTime!
    displayRelease: String!
  }

  type Review {
    Authors: [Author!]
    externalUrl: String!
    npScore: Int!
    Outlet: Outlet!
    publishedDate: DateTime!
    score: Int
    snippet: String
  }

  type Outlet {
    name: String!
  }

  type Author {
    name: String!
    image: String
  }
`;
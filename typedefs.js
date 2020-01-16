const { gql } = require('apollo-server');
export default gql`
  scalar DateTime

  type Query {
    games(filter: String!): [Game!]
    game(id: ID!): Game!
    reviews(id: ID!): [Review!]
    halloffame: [Game!]
  }

  type Game {
    id: ID!
    name: String!
    Companies: [Company]
    Genres: [Genre]
    bannerScreenshot: Screenshot
    logoScreenshot: Screenshot
    mastheadScreenshot: Screenshot
    description: String
    firstReleaseDate: DateTime!
    percentRecommended: Float
    topCriticScore: Float!
    tier: String!
    Platforms: [Platform!]
    Reviews: [Review]
  }

  type Genre {
    id: ID!
    name: String!
  }

  type Company {
    name: String
    type: String
  }

  type Screenshot {
    fullRes: String
    thumbnail: String
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
    _id: ID!
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
const { createTestClient } = require('apollo-server-testing');
const { ApolloServer, gql } = require('apollo-server');

import typeDefs from '../typedefs.js';
import resolvers from '../resolvers.js';
import OpenCriticAPI from '../datasource.js';

const createTestServer = () => {
  return new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        OpenCriticAPI: new OpenCriticAPI()
      };
    }
  });
}

// the mocked REST API data
const mockGameResponse = require('./mockGameResponse');
const mockGamesResponse = require('./mockGamesResponse');

const GET_GAME = gql`
  query {
    game(id: 463) {
      id
      name
    }
  }
`;

const GET_GAMES = gql`
  query {
    games(filter: "witcher 3") {
      id
      name
    }
  }
`;

const GET_GAME_WITH_REVIEWS = gql`
  query {
    game(id: 463) {
      id
      name
      Reviews {
        score
        snippet
      }
    }
  }
`;

const GET_GAME_WITH_EVERYTHING = gql`
  query {
    game(id: 463) {
      id
      name
      url
      firstReleaseDate
      topCriticScore
      tier
      Platforms {
        shortName
      }
      Reviews {
        score
        snippet
      }
    }
  }
`;


describe('Queries', () => {
  it('fetches list of games', async () => {
    const server = createTestServer();

    OpenCriticAPI.getGames = jest.fn(() => [mockGamesResponse]);

    const {query} = createTestClient(server);
    const res = await query({query: GET_GAMES});
    expect(res).toMatchSnapshot();
  });

  it('fetches single game', async () => {
    const server = createTestServer();

    OpenCriticAPI.getGame = jest.fn(() => [mockGameResponse]);

    const {query} = createTestClient(server);
    const res = await query({query: GET_GAME});
    expect(res).toMatchSnapshot();
  });

  it('fetches game with reviews', async () => {
    const server = createTestServer();

    OpenCriticAPI.getGames = jest.fn(() => [mockGamesResponse]);

    const {query} = createTestClient(server);
    const res = await query({query: GET_GAMES_WITH_REVIEWS});
    expect(res).toMatchSnapshot();
  });


  it('fetches game with all nested fields', async () => {
    const server = createTestServer();

    OpenCriticAPI.getGames = jest.fn(() => [mockGamesResponse]);

    const {query} = createTestClient(server);
    const res = await query({query: GET_GAMES_WITH_EVERYTHING});
    expect(res).toMatchSnapshot();
  });

});
const fetch = require('node-fetch');

const baseURL = `https://api.opencritic.com/api`;

const getGame = async (id) => {
  const result = await fetch(`${baseURL}/game/${id}`);
  const json = await result.json();
  return json;
}

const getReviews = async (id) => {
  const result = await fetch(`${baseURL}/review/game/${id}`);
  const json = await result.json();
  return json;
}

export default {
  Query: {
    games: async (parent, args) => {
      const results = await fetch(`${baseURL}/game/search?criteria=${args.filter}`);
      const json = await results.json();

      return json;
    },

    review: async (parent, args) => {
      return getReview(args.id);
    },

    game: async (parent, args) => {
      return getGame(args.id);
    },
  },

  // extremely thin field resolvers:
  // https://medium.com/paypal-engineering/graphql-resolvers-best-practices-cd36fdbcef55
  Game: {
    name: async ({ id }) => {
      const { name } = await getGame(id);

      return name;
    },
    url: async ({ id }) => {
      const { url } = await getGame(id);

      return url;
    },
    firstReleaseDate: async ({ id }) => {
      const { firstReleaseDate } = await getGame(id);

      return firstReleaseDate;
    },
    topCriticScore: async ({ id }) => {
      const { topCriticScore } = await getGame(id);

      return topCriticScore;
    },
    tier: async ({ id }) => {
      const { tier } = await getGame(id);

      return tier;
    },
    Platforms: async ({ id }) => {
      const { Platforms } = await getGame(id);

      return Platforms;
    },
    Reviews: async ({ id }) => {
      const reviews = await getReviews(id);
      return reviews;
    }
  }
};
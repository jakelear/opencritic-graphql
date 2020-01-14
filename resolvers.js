const fetch = require('node-fetch');

const baseURL = `https://api.opencritic.com/api`;

export default {
  Query: {
    games: async (_source, { filter }, { dataSources }) => {
      return dataSources.OpenCriticAPI.getGames(filter);
    },

    game: async (_source, { id }, { dataSources }) => {
      return dataSources.OpenCriticAPI.getGame(id);
    },

    review: async (_source, { id }, { dataSources }) => {
      return dataSources.OpenCriticAPI.getReviews(id);
    }
  },
  Game: {
    Reviews: async({ id }, args, { dataSources }) => {
      return dataSources.OpenCriticAPI.getReviews(id);
    },
    Platforms: async({id}, args, { dataSources }) => {
      const { Platforms } = await dataSources.OpenCriticAPI.getGame(id);
      return Platforms;
    }
  }
};
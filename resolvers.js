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

    reviews: async (_source, { id }, { dataSources }) => {
      return dataSources.OpenCriticAPI.getReviews(id);
    },

    halloffame: async (_source, { id }, { dataSources }) => {
      return dataSources.OpenCriticAPI.getHallOfFame();
    }
  },
  // Thin field resolvers: https://medium.com/paypal-engineering/graphql-resolvers-best-practices-cd36fdbcef55
  Game: {
    tier: async({ id }, args, { dataSources }) => {
      const { tier } = await dataSources.OpenCriticAPI.getGame(id);
      return tier;
    },
    bannerScreenshot: async({ id }, args, { dataSources }) => {
      const { bannerScreenshot } = await dataSources.OpenCriticAPI.getGame(id);
      return bannerScreenshot;
    },
    logoScreenshot: async({ id }, args, { dataSources }) => {
      const { logoScreenshot } = await dataSources.OpenCriticAPI.getGame(id);
      return logoScreenshot;
    },
    mastheadScreenshot: async({ id }, args, { dataSources }) => {
      const { mastheadScreenshot } = await dataSources.OpenCriticAPI.getGame(id);
      return mastheadScreenshot;
    },
    Genres: async({ id }, args, { dataSources }) => {
      const { Genres } = await dataSources.OpenCriticAPI.getGame(id);
      return Genres;
    },
    Companies: async({ id }, args, { dataSources }) => {
      const { Companies } = await dataSources.OpenCriticAPI.getGame(id);
      return Companies;
    },
    percentRecommended: async({ id }, args, { dataSources }) => {
      const { percentRecommended } = await dataSources.OpenCriticAPI.getGame(id);
      return percentRecommended;
    },
    description: async({ id }, args, { dataSources }) => {
      const { description } = await dataSources.OpenCriticAPI.getGame(id);
      return description;
    },
    Reviews: async({ id }, args, { dataSources }) => {
      return dataSources.OpenCriticAPI.getReviews(id);
    },
    Platforms: async({ id }, args, { dataSources }) => {
      const { Platforms } = await dataSources.OpenCriticAPI.getGame(id);
      return Platforms;
    }
  }
};
const { RESTDataSource } = require('apollo-datasource-rest');

export default class OpenCriticAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.opencritic.com/api';
  }

  willSendRequest(request) {
    // Pretty logging for debug mode
    if (process.env.DEBUG) {
      console.log(request.path);
    }
  }

  async getGame(id) {
    console.log(process.env);
    return await this.get(`game/${id}`);
  }

  async getGames(filter ='') {
    return await this.get(`/game/search?criteria=${filter}`);
  }

  async getReviews(id) {
    return await this.get(`review/game/${id}`);
  }
};
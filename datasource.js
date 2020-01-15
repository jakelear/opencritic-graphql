const chalk = require('chalk');
const { RESTDataSource } = require('apollo-datasource-rest');

const debugMode = process.env.DEBUG;

export default class OpenCriticAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.opencritic.com/api';
  }

   async didReceiveResponse(response, request) {
    if (debugMode) {
      console.log(`${chalk.bold.underline.green(request.method)}: ${chalk.blue(request.url)}`);
    }
    if (response.ok) {
      return (this.parseBody(response));
    } else {
      throw await this.errorFromResponse(response);
    }
  }

  async getGame(id) {
    return await this.get(`game/${id}`);
  }

  async getGames(filter ='') {
    return await this.get(`/game/search?criteria=${filter}`);
  }

  async getReviews(id) {
    return await this.get(`review/game/${id}`);
  }
};
require('dotenv').config()
const { ApolloServer, gql } = require('apollo-server');

import OpenCriticAPI from './datasource.js';
import typeDefs from './typedefs.js';
import resolvers from './resolvers.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      OpenCriticAPI: new OpenCriticAPI()
    };
  }
});

server.listen().then(({ url }) => {
  console.log(`🍕 Server ready at ${url}`);
});
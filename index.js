const { ApolloServer, gql } = require('apollo-server');

import typeDefs from './typedefs.js';
import resolvers from './resolvers.js';

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`🍕 Server ready at ${url}`);
});
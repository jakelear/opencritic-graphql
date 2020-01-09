const { ApolloServer, gql } = require('apollo-server');

import typeDefs from './schema.gql.js';
import resolvers from './resolvers.js';

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers,
})

server.listen().then(() => console.log(`Server is running on http://localhost:4000`))
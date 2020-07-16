import { ApolloServer, PubSub } from "apollo-server";

function startServer({ typeDefs, resolvers }) {
  const pubsub = new PubSub();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
      pubsub
    }
  });

  server
    .listen(3333)
    .then(({ url }) => console.log(`Server running on ${url} ⚡️`));
}

export default startServer;

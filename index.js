import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose from "mongoose";

import typeDefs from "./schema.js";
import resolvers from "./resolvers.js";

// mongoose connection
mongoose.connect(
  "Your MongoDB connection string",
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`Server ready at ${url}`);
};

startServer();

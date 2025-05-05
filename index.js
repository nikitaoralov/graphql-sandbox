import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// types
import { typeDefs } from "./schema.js";

// db
import db from "./_db.js";

// server setup
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      games: () => db.games,
      game(_, args) {
        return db.games.find((r) => r.id === args.id);
      },
      reviews: () => db.reviews,
      review(_, args) {
        return db.reviews.find((r) => r.id === args.id);
      },
      authors: () => db.authors,
      author(_, args) {
        return db.authors.find((r) => r.id === args.id);
      },
    },
  },
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("Server ready at port: ", 4000);

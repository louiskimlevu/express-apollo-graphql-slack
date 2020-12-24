// import express from "express";
// import bodyParser from "bodyParser";
// import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
// import { makeExecutableSchema } from "graphql-tools";
// import typeDefs from "./schema";
// import resolvers from "./resolvers";

// // Put together a schema
// const schema = makeExecutableSchema({
//   typeDefs,
//   resolvers,
// });

// // Initialize the app
// const app = express();

// // The GraphQL endpoint
// app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

// // GraphiQL, a visual editor for queries
// // app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

// // Start the server
// app.listen(3000, () => {
//   console.log("Go to http://localhost:3000/graphiql to run queries!");
// });

import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";
import typeDefs from "./schema";
import resolvers from "./resolvers";

const execSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();
const PORT = 8080;
const grapqlEndpoint = "/graphql";

// bodyParser is needed just for POST.
app.use(
  grapqlEndpoint,
  bodyParser.json(),
  graphqlExpress({ schema: execSchema })
);
app.use("/graphiql", graphiqlExpress({ endpointURL: grapqlEndpoint }));
app.listen(8080, () => {
  console.log("Go to http://localhost:8080/graphiql to run queries!");
});

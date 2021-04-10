// Librerías
var cors = require("cors");
var express = require("express");
var { buildSchema } = require("graphql");
var { graphqlHTTP } = require("express-graphql");
const voyagerMiddleware = require("graphql-voyager/middleware").express;

// Nodos
const schema = require("./schema");

const { PORT = 2020, NODE_ENV = "dev" } = process.env;

var app = express();
app.use(cors());
app.use(
  "/_graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.use("/voyager", voyagerMiddleware({ endpointUrl: "/_graphql" }));

app.listen(PORT, () =>
  console.log(`Listen on port http://localhost:${PORT}/_graphql`)
);

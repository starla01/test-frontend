const { GraphQLString, GraphQLObjectType } = require("graphql");

module.exports = new GraphQLObjectType({
  name: "Query",
  description: "Metodos de consulta para ML",
  fields: {
    viewer: {
      type: require("./viewer"),
      resolve: require("../resolvers/query.viewer"),
    },
  },
});

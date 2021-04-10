const { GraphQLList, GraphQLObjectType, GraphQLString } = require("graphql");

module.exports = new GraphQLObjectType({
  name: "Viewer",
  fields: () => ({
    products: {
      type: new GraphQLList(require("./items")),
      resolve: require("../resolvers/get.search"),
    },
  }),
  resolve: new GraphQLObjectType(require("../resolvers/query.viewer.js")),
});

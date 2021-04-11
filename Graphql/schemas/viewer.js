const { GraphQLList, GraphQLObjectType, GraphQLString } = require("graphql");

module.exports = new GraphQLObjectType({
  name: "Viewer",
  fields: () => ({
    products: {
      type: new GraphQLList(require("./items")),
      resolve: require("../resolvers/get.search"),
      args: {
        strSearch: {
          type: GraphQLString,
        },
      },
    },
    detailProduct: {
      type: require("./detail"),
      resolve: require("../resolvers/get.product"),
      args: {
        id: {
          type: GraphQLString,
        },
      },
    },
  }),
  resolve: new GraphQLObjectType(require("../resolvers/query.viewer.js")),
});

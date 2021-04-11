const { GraphQLObjectType, GraphQLString, GraphQLBoolean } = require("graphql");

module.exports = new GraphQLObjectType({
  name: "Detail",
  description: "Schema de tipo Detalle",
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    title: {
      type: GraphQLString,
    },
    state_name: {
      type: GraphQLString,
    },
    picture: {
      type: GraphQLString,
    },
    condition: {
      type: GraphQLString,
    },
    free_shipping: {
      type: GraphQLBoolean,
    },
    description: {
      type: GraphQLString,
      resolve: require("../resolvers/get.description"),
    },
    price: {
      type: require("./price"),
    },
  }),
});

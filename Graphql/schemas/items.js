const { GraphQLObjectType, GraphQLString, GraphQLBoolean } = require("graphql");

module.exports = new GraphQLObjectType({
  name: "Item",
  description: "Schema de tipo Item",
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
    price: {
      type: require("./price"),
    },
  }),
});

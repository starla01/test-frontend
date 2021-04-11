const { GraphQLObjectType, GraphQLString, GraphQLFloat } = require("graphql");

module.exports = new GraphQLObjectType({
  name: "Price",
  description: "Schema de tipo Price",
  fields: () => ({
    currency: {
      type: GraphQLString,
    },
    amount: {
      type: GraphQLFloat,
    },
    decimals: {
      type: GraphQLFloat,
    },
  }),
});

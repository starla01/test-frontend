const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  graphqlSync,
  GraphQLList,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLFloat,
} = require("graphql");

module.exports = new GraphQLObjectType({
  name: "Price",
  description: "Schema de tipo Price",
  fields: () => ({
    // _id: {
    //   type: GraphQLID,
    //   resolve: (parent) => parent._id.$oid.toString(),
    // },
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

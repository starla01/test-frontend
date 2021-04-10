const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  graphqlSync,
  GraphQLList,
  GraphQLBoolean,
} = require("graphql");

module.exports = new GraphQLObjectType({
  name: "Item",
  description: "Schema de tipo Item",
  fields: () => ({
    // _id: {
    //   type: GraphQLID,
    //   resolve: (parent) => parent._id.$oid.toString(),
    // },
    id: {
      type: GraphQLString,
    },
    title: {
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

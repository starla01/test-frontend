const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  graphqlSync,
  GraphQLList,
} = require("graphql");

module.exports = new GraphQLObjectType({
  name: "category",
  description: "Schema de tipo Categoria",
  fields: () => ({
    // _id: {
    //   type: GraphQLID,
    //   resolve: (parent) => parent._id.$oid.toString(),
    // },
    categories: {
      type: GraphQLList(GraphQLString),
    },
  }),
});

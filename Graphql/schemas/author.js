const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  graphqlSync,
  GraphQLList,
} = require("graphql");

module.exports = new GraphQLObjectType({
  name: "Author",
  description: "Schema de tipo author",
  fields: () => ({
    // _id: {
    //   type: GraphQLID,
    //   resolve: (parent) => parent._id.$oid.toString(),
    // },
    name: {
      type: GraphQLString,
    },
    lastname: {
      type: GraphQLString,
    },
    // items: {
    //   type: GraphQLString,
    //   resolve: require(GraphQLList("../resolvers/get.fullName")),
    // },
    // segment: {
    //   type: require("../schemas/segment"),
    //   resolve: require("../resolvers/get.segmentById"),
    // },
    // sign: {
    //   type: GraphQLString,
    // },
  }),
});

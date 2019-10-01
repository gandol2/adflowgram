// GraphQL 스키마 파일

import path from "path";
import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";

const allTypes = fileLoader(path.join(__dirname, "/api/**/*.graphql")); // 모든 GraphQL 타입 import
const allResolvers = fileLoader(path.join(__dirname, "/api/**/*.js")); // 모든 GraphQL Resolver import

const schema = makeExecutableSchema({
  typeDefs: mergeTypes(allTypes),
  resolvers: mergeResolvers(allResolvers)
});

export default schema;

import { fileLoader, mergeTypes } from "merge-graphql-schemas";
import path from "path";

const typesArray = fileLoader(path.join(__dirname, "modules", "**", "*.gql"));
const typeDefs = mergeTypes(typesArray);

// import { gql } from "apollo-server";

// const typeDefs = gql`
//   type User {
//     _id: ID!
//     name: String!
//     email: String!
//     password: String!
//     posts: [Post]
//   }

//   type Post {
//     _id: ID!
//     title: String!
//     content: String!
//     author: User!
//   }

//   type Query {
//     users: [User]!
//     getUserByEmail(email: String): User!
//   }

//   type Mutation {
//     createUser(name: String, email: String, password: String): User!
//   }
// `;

export default typeDefs;

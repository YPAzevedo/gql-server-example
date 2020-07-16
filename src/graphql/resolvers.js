import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

import { fileLoader, mergeResolvers } from "merge-graphql-schemas";
import path from "path";

const resolversArray = fileLoader(path.join(__dirname, "modules", "**", "resolvers.js"));
const resolvers = mergeResolvers(resolversArray);


// const resolvers = {
//   Query: {
//     users: () => prisma.user.findMany(),
//     getUserByEmail: async (_, args) => {
//       const user = await prisma.user.findOne({
//         where:{
//           email: args.email,
//         }
//       });

//       return user;
//     },
//   },
//   Mutation: {
//     createUser: async (_, args) => {
//       const {name, email, password } = args;

//       const user = await prisma.user.create({
//         data: {
//           name,
//           email,
//           password,
//         }
//       })

//       return user;
//     },
//   },
// };

export default resolvers;

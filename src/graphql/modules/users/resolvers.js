import { PrismaClient } from "@prisma/client";

import { USER_ADDED } from "./channels";

const prisma = new PrismaClient();

export default {
  Query: {
    users: async () => await prisma.user.findMany({ include: { posts: true } }),
    user: async (_, { id }) =>
      await prisma.user.findOne({ where: { id }, include: { posts: true } }),
  },
  Mutation: {
    createUser: async (_, { data }, { pubsub }) => {
      const user = await prisma.user.create({
        data,
      });

      pubsub.publish(USER_ADDED, {
        userAdded: user,
      });

      return user;
    },
    updateUser: async (_, { id, data }) =>
      await prisma.user.update({
        where: { id },
        data,
      }),
    deleteUser: async (_, { id }) => prisma.user.delete({ where: { id } }),
  },
  Subscription: {
    userAdded: {
      subscribe: (obj, args, { pubsub }) => pubsub.asyncIterator(USER_ADDED),
    },
  },
};

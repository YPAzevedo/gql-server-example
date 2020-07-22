import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
  Query: {
    posts: async () => await prisma.user.findMany(),
    post: async (_, { id }) => await prisma.post.findOne({ where: { id } }),
  },
  Mutation: {
    createPost: async (_, { id, data }) =>
      await prisma.post.create({
        data: {
          ...data,
          author: {
            connect: {
              id,
            },
          },
        },
      }),
    updatePost: async (_, { id, data }) =>
      await prisma.post.update({
        where: { id },
        data,
      }),
    deletePost: async (_, { id }) => prisma.post.delete({ where: { id } }),
  },
};

import { isAuthenticated } from "../../../middlewares";
import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    // 좋아요 토글
    toggleLike: async (_, args, { request }) => {
      isAuthenticated(request);
      const { postId } = args;
      const { user } = request;
      const filterOptions = {
        AND: [
          {
            user: {
              id: user.id
            }
          },
          {
            post: {
              id: postId
            }
          }
        ]
      };

      try {
        // 좋아요가 있는지 확인
        const existingLike = await prisma.$exists.like(filterOptions);

        if (existingLike) {
          // 좋아요가 존재하면 삭제
          await prisma.deleteManyLikes(filterOptions);
        } else {
          // 좋아요가 존재하지 않으면 생성
          await prisma.createLike({
            user: {
              connect: {
                id: user.id
              }
            },
            post: {
              connect: {
                id: postId
              }
            }
          });
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  }
};

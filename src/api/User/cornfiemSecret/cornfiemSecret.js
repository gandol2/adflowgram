import { prisma } from "../../../../generated/prisma-client";
import { generateToken } from "../../../utils";

export default {
  Mutation: {
    cornfiemSecret: async (_, args) => {
      const { email, secret } = args;
      const user = await prisma.user({ email });

      if (user.loginSecret === secret) {
        return generateToken(user.id);
      } else {
        throw Error("Wrong email/secret combination");
      }
    }
  }
};

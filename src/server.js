import "./env";
import { GraphQLServer } from "graphql-yoga";
import { prisma } from "../generated/prisma-client";
import logger from "morgan";
import schema from "./schema";
import "./passport";
import { autenticateJwt } from "./passport";

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({
  schema,
  context: ({ request }) => ({ request })
});

server.express.use(logger("dev")); // express 서버에 morgan log 미들웨어를 추가
server.express.use(autenticateJwt);

server.start({ port: PORT }, () =>
  console.log(`✅ Server running on port http://localhost:${PORT}`)
);

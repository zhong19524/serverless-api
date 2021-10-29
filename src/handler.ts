import { Router } from "itty-router";

import Posts from "./handlers/posts";
import Post from "./handlers/post";
import Postpost from "./handlers/postPost";
import GenJWT from "./handlers/genJWT";
import VerifyToken from './handlers/verifyToken';
import ReadMe from "./handlers/ReadMe";
const router = Router();

router
  .get('/GET/posts', Posts)
  .get('/GET/posts/:id',Post)
  .get('/GET/auth',GenJWT)
  .get('GET/verify',VerifyToken)
  .get('/GET/README.txt',ReadMe)
  .get('*',() => new Response("Not found", { status :404 }))
  .post('/POST/posts', Postpost )

export const handleRequest = request => router.handle(request)
// export async function handleRequest(request: Request): Promise<Response> {
//   return new Response(`request method: ${request.method}`)
// }

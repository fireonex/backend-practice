import express from 'express';
const { Router } = express;
import PostController from "./postController.js";

const postRouter = Router();

postRouter.get('/posts', PostController.getAll)

postRouter.get('/posts/:id', PostController.getOne)

postRouter.post('/posts', PostController.create);

postRouter.put('/posts/:id', PostController.update)

postRouter.delete('/posts/:id', PostController.delete)

export default postRouter;
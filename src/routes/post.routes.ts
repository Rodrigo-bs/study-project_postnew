import { Router } from 'express';

import PostController from '../controllers/post.controller';

const router = Router();

router.post('/post/create', PostController.create);
router.get('/post/:id', PostController.selectById)

export default router;
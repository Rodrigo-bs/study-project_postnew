import { Router } from 'express';

import userController from '../controllers/user.controller';

const router = Router()

router.post('/user/create', userController.create);
router.get('/user/:id', userController.selectById);

export default router;
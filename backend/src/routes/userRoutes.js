import { Router } from 'express';
import * as UserController from '../controller/userController.js';

const router = Router();

router.post('/user', UserController.createUser);
router.get('/user', UserController.getAll);
router.get('/user/:id', UserController.getUserById);
router.patch('/user/:id', UserController.updateUser);
router.delete('/user/:id', UserController.deleteUser);

export default router;
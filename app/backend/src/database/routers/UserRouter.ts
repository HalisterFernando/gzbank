import { Router } from 'express';

import UserService from '../services/UserService';
import UserController from '../controllers/UserController';


const userService = new UserService();
const userController = new UserController(userService);

const router = Router()

router.get('/', userController.list);
router.get('/:username', userController.getByName);
router.get('/:id', userController.getById);


export default router
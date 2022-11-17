import { Router } from 'express';

import UserService from '../services/UserService';
import UserController from '../controllers/UserController';


const userService = new UserService();
const userController = new UserController(userService);

const router = Router()

router.get('/', userController.list);
router.get('/id', userController.getById)
router.post('/sigin', userController.create)

export default router
import { Router } from 'express';

import LoginService from '../services/LoginService';
import LoginController from '../controllers/LoginController';
import LoginValidate from '../middlewares/LoginValidate';

const loginService = new LoginService();
const loginController = new LoginController(loginService);

const router = Router();

router.post('/', LoginValidate, loginController.login);

export default router;

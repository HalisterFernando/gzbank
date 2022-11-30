import { Router } from 'express';

import SigninService from '../services/SigninService';
import SigninController from '../controllers/SigninController';
import SigninValidate from '../middlewares/SigninValidate';

const signinService = new SigninService();
const signinController = new SigninController(signinService);

const router = Router();

router.post('/', SigninValidate, signinController.signin);

export default router;

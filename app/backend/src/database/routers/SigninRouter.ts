import { Router } from 'express';

import SigninService from '../services/SigninService';
import SigninController from '../controllers/SigninController';



const signinService = new SigninService();
const signinController = new SigninController(signinService);

const router = Router()

router.post('/', signinController.signin);


export default router
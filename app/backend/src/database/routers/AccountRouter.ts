import { Router } from 'express';

import AccountService from '../services/AccountService';
import AccountController from '../controllers/AccountController';
import JwtValidate from '../middlewares/JwtValidate'


const accountService = new AccountService();
const accountController = new AccountController(accountService);

const router = Router()
router.use(JwtValidate)
router.get('/', accountController.account);
router.get('/transfer', accountController.list)


export default router
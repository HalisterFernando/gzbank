import { Router } from 'express';

import AccountService from '../services/AccountService';
import AccountController from '../controllers/AccountController';
import JwtValidate from '../middlewares/JwtValidate';

const accountService = new AccountService();
const accountController = new AccountController(accountService);

const router = Router();
router.use(JwtValidate);
router.get('/:accountId', accountController.account); // saldo
router.get('/transfer/:accountId', accountController.list); // transferência

export default router;

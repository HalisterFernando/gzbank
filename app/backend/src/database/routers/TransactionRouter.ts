import { Router } from 'express';

import TransactionService from '../services/TransactionService';
import TransactionController from '../controllers/TransactionController';
import TransactionValidate from '../middlewares/TransactionValidate';



const transactionService = new TransactionService();
const transactionController = new TransactionController(transactionService);

const router = Router()

router.post('/', TransactionValidate, transactionController.cashOut);
router.get('/', transactionController.list)


export default router
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ITransactionService } from '../services/TransactionService';
import date from '../../helpers/date'


export default class TransactionController {
    
    constructor(private transactionService: ITransactionService) {}
    
    cashOut = async ( req: Request, res: Response) => {
        const { debitedAccountId, creditedAccountId, value } = req.body  
        const createdAt = date.currentDate()
     
        const newTransaction = await this.transactionService.cashOut({
            debitedAccountId,
            creditedAccountId,
            value,
            createdAt
        });
        return res.status(StatusCodes.OK).json(newTransaction)
    }   

    list = async (req: Request, res: Response) => {
        const { id } = req.body
        const transaction = await this.transactionService.getById(id)

        return res.status(StatusCodes.OK).json(transaction)
    }
}
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

    getById = async (req: Request, res: Response) => {
        const { id } = req.params
        const transaction = await this.transactionService.getById(Number(id))

        return res.status(StatusCodes.OK).json(transaction)
    }

    list = async (req: Request, res: Response) => {
        const allTransactions = this. transactionService.list()
        return res.status(StatusCodes.OK).json(allTransactions)
    }
}
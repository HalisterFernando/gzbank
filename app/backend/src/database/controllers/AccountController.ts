import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IAccountService } from '../services/AccountService';
import jwt from '../../helpers/jwt';

export default class AccountController {
    
    constructor(private accountService: IAccountService) {}
    
    account = async (req: Request, res: Response) => {
        const { username } = req.body
        const balance = await this.accountService.account(username)

        return res.status(StatusCodes.OK).json({balance})
    }
    
    list = async (req: Request, res: Response) => {
        const { username } = req.body
        const accounts = await this.accountService.list(username)
        

        return res.status(StatusCodes.OK).json(accounts)

    }
}
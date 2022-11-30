import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IAccountService } from '../services/AccountService';

export default class AccountController {
  constructor(private accountService: IAccountService) {}

  account = async (req: Request, res: Response) => {
    const { accountId } = req.params;
    const balance = await this.accountService.account(Number(accountId));

    return res.status(StatusCodes.OK).json({ balance });
  };

  list = async (req: Request, res: Response) => {
    const { accountId } = req.params;
    const accounts = await this.accountService.list(Number(accountId));

    return res.status(StatusCodes.OK).json(accounts);
  };
}

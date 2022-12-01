import { NextFunction, Request, Response } from 'express';
import Account from '../models/account';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { debitedAccountId, creditedAccountId, value } = req.body;
  const accountToDebit = await Account.findByPk(debitedAccountId);
  const accountToCredit = await Account.findByPk(creditedAccountId);

  if (accountToDebit && accountToCredit) {
    const { dataValues: { balance } } = accountToDebit;
    if (Number(balance) < Number(value)) {
      const err = new Error('Seu saldo não é suficiente para realizar a transferência');
      err.name = 'InsuficientBalance';
      throw err;
    }
  } else {
    const err = new Error('Erro interno');
    err.name = 'InternalError';
    throw err;
  }

  return next();
};

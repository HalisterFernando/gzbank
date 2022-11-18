import ITransaction from "../interfaces/ITransaction";
import Account from "../models/account";
import Transaction from "../models/transaction";
import date from '../../helpers/date'

type transfer = {
    debitedAccountId: number,
    creditedAccountId: number,
    value: number, 
    createdAt: string,   
}

export interface ITransactionService {
    cashOut(data: transfer): Promise<ITransaction>
}

export default class TransactionService implements ITransactionService {
    updateAccountBalance = async (data: transfer): Promise<void> => {
        const { debitedAccountId, creditedAccountId, value } = data
        const users = [debitedAccountId, creditedAccountId];
        
        const accounts = await Promise.all(users.map((id) => Account.findByPk(id)
        .then((account) => account!.toJSON())));        
        const accountValues = await Promise.all(accounts.map(({balance}) =>  Number(balance)));
        
        const debitedNewValue = accountValues[0] - Number(value)
        const creditedNewValue = accountValues[1] + Number(value)
        
        await Account.update({balance: debitedNewValue}, {where: {id: debitedAccountId}})
        await Account.update({balance: creditedNewValue}, {where: {id: creditedAccountId}})

    }
    cashTransfer = async (data: transfer): Promise<ITransaction> => {
        const { debitedAccountId, creditedAccountId, value, createdAt } = data        
        const newTransaction = await Transaction.create({
            debitedAccountId,
            creditedAccountId,
            value,
            createdAt
        })
        
        await this.updateAccountBalance(data)

        return newTransaction
    }

    async cashOut(data: transfer): Promise<ITransaction> {
        const newTransaction = await this.cashTransfer(data)
        return newTransaction
    }
}
import IAccount from "../interfaces/IAccount";
import Account from "../models/account";
import User from "../models/user";

export interface IAccountService {
    account(username: string): Promise <IAccount | unknown>
}

export default class AccountService implements IAccountService {
    getBalance = async (username: string): Promise<IAccount | unknown> => {
        const user = await  User.findOne({where: {username}})
        const balance = await Account.findByPk(user!.accountId);
        return balance

    }  

    async account(username: string): Promise<IAccount | unknown> {
        const balance = await this.getBalance(username)
        return balance
    }
}
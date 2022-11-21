import IAccount from "../interfaces/IAccount";
import IUser from "../interfaces/IUser"
import Account from "../models/account";
import User from "../models/user";

export interface IAccountService {
    account(username: string): Promise <IAccount | unknown>
    list(username: string): Promise<IUser[]>
}

export default class AccountService implements IAccountService {
    getBalance = async (username: string): Promise<IAccount | unknown> => {
        const user = await  User.findOne({where: {username}})
        const balance = await Account.findByPk(user!.accountId);
        return balance

    }
    
    getAccounts = async (username: string): Promise<IUser[]> => {
        const userAccount = await User.findOne({where: {username}});
        const allAccounts = await Account.findAll();
        const filteredAccounts = allAccounts.filter((account) => account.id !== userAccount!.id)
        const filteredUserAccounts = await Promise.all(filteredAccounts
            .map(({id}) => User.findOne({
                where: {accountId: id}, 
                attributes: { 
                    exclude: ["id", "password", "accountId"]
                }})
            .then((account) => account!.toJSON())))
        
        return filteredUserAccounts
    }

    async account(username: string): Promise<IAccount | unknown> {
        const balance = await this.getBalance(username)
        return balance
    }

    async list(username: string): Promise<IUser[]> {
       const accounts = this.getAccounts(username);
       return accounts
    }
}
import IAccount from '../interfaces/IAccount';
import IUser from '../interfaces/IUser';
import Account from '../models/account';
import User from '../models/user';

export interface IAccountService {
  account(accountId: number): Promise <IAccount | null>
  list(accountId: number): Promise<IUser[]>
}

export default class AccountService implements IAccountService {
  private getBalance = async (accountId: number): Promise<IAccount | null> => {
    const balance = await Account.findByPk(accountId);
    return balance;
  };

  private getAccounts = async (userAccountId: number): Promise<IUser[] | any> => {
    const allAccounts = await Account.findAll();
    const filteredAccounts = allAccounts.filter((account) => account.id !== userAccountId);
    const filteredUserAccounts = await Promise.all(filteredAccounts
      .map(async ({ dataValues: { id } }) => {
        const user = await User.findOne({
          where: { accountId: id },
        });
        return user;
      }));

    return filteredUserAccounts;
  };

  async account(accountId: number): Promise<IAccount | null> {
    const balance = await this.getBalance(accountId);
    return balance;
  }

  async list(accountId: number): Promise<IUser[]> {
    const accounts = this.getAccounts(accountId);
    return accounts;
  }
}

import IUser from "../interfaces/IUser"
import Account from "../models/account";
import User from "../models/user"

export interface ISigninService  {
    signin(username: string, password: string): Promise<IUser>
}

export default class Signin implements ISigninService {
    userSignin = async (username: string, password: string): Promise<IUser> => {
        const balance = 100.00;
        const {dataValues: {id}} = await Account.create({balance})
        const newUser = await User.create({username, password, accountId: id});
        return newUser
    }

    async signin(username: string, password: string): Promise<IUser> {
        const newUser = await this.userSignin(username, password);
        return newUser
    }
}
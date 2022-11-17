import IUser from "../interfaces/IUser";
import User from "../models/user";

export interface ILoginService  {
    login(username: string): Promise<IUser | null>
}

export default class LoginService implements ILoginService {
    private userLogin = async (username: string): Promise<IUser | null> => {
        const user = await User.findOne({where: {username}})
        return user
    }

    async login(username: string): Promise<IUser | null> {
        const user = await this.userLogin(username)
        return user
    }
}
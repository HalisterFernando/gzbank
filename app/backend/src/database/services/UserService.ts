import IUser from "../interfaces/IUser"
import User from "../models/user"

export interface IUserService  {
    list(): Promise<IUser[]>    
    getById(id: number): Promise<IUser | null>
}

export default class UserService implements IUserService {
    
    private getAllUsers = async (): Promise<IUser[]> => {
        const users = await User.findAll();
        return users
    }
    private getUserById = async (id: number): Promise<IUser | null> => {
        const user = await User.findByPk(id)
        return user
    }   

    async list(): Promise<IUser[]> {
        const users = await this.getAllUsers();
        return users
    }

    async getById(id: number): Promise<IUser | null> {
        const user = await this.getUserById(id);
        return user
    }

   
}
import IUser from "../interfaces/IUser"
import User from "../models/user"

export interface IUserService  {
    list(): Promise<IUser[]>
    create(username: string, password: string): Promise<IUser>
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

    private createNewUser = async (username: string, password: string): Promise<IUser>  => {
        const newUser = await User.create({username, password})
        return newUser
    }

    async list(): Promise<IUser[]> {
        const users = await this.getAllUsers();
        return users
    }

    async getById(id: number): Promise<IUser | null> {
        const user = await this.getUserById(id);
        return user
    }

    async create(username: string, password: string): Promise<IUser> {
        const newUser = await this.createNewUser(username, password)
        return newUser
    }
}
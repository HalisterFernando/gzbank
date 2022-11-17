import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IUserService } from '../services/UserService';

export default class UserController {
    
    constructor(private userService: IUserService) {}
    
    list = async (_req: Request, res: Response) => {
        const users = await this.userService.list();
        return res.status(StatusCodes.OK).json(users)
    }

    getById = async (req: Request, res: Response) => {
        const {id} = req.params;
        const user = await this.userService.getById(Number(id));
        return res.status(StatusCodes.OK).json(user);
    }  
    
}
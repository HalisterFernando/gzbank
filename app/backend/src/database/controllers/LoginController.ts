import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ILoginService } from '../services/LoginService';

export default class LoginController {
    
    constructor(private userService: ILoginService) {}
    
    login = async ( req: Request, res: Response) => {
        const { username } = req.body  
        const users = await this.userService.login(username);
        return res.status(StatusCodes.OK).json(users)
    }   
}
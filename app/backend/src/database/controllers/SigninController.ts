import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ISigninService } from '../services/SigninService';

export default class SigninController {
    
    constructor(private userService: ISigninService) {}
    
    signin = async ( req: Request, res: Response) => {
        const { username, password } = req.body  
        const newUser = await this.userService.signin(username, password);
        return res.status(StatusCodes.OK).json(newUser)
    }   
}
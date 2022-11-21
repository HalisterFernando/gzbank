import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ILoginService } from '../services/LoginService';
import jwt from '../../helpers/jwt';

export default class LoginController {
    
    constructor(private userService: ILoginService) {}
    
    login = async ( req: Request, res: Response) => {
        const { username } = req.body  
        const userData = await this.userService.login(username);
       
        const token = jwt.sign({username})        
        return res.status(StatusCodes.OK).json({userData, token})
    }   
}
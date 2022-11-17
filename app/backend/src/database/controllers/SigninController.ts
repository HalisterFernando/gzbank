import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ISigninService } from '../services/SigninService';
const bcrypt = require('bcrypt')


export default class SigninController {
    
    constructor(private userService: ISigninService) {}
    
    signin = async ( req: Request, res: Response) => {
        const { username, password } = req.body  
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = await this.userService.signin(username, hashedPassword);
        return res.status(StatusCodes.OK).json(newUser)
    }   
}
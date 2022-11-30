import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ISigninService } from '../services/SigninService';
import bcrypt from '../../helpers/bcrypt';

export default class SigninController {
  constructor(private userService: ISigninService) {}

  signin = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.encryptPassword(password);
    const newUser = await this.userService.signin(username, hashedPassword);
    return res.status(StatusCodes.OK).json(newUser);
  };
}

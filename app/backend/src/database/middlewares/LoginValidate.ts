import { NextFunction, Request, Response } from 'express';
import User from '../models/user';
import bcrypt from '../../helpers/bcrypt';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });

  if (!user) {
    const err = Error('Usuário ou senha inválidos');
    err.name = 'UserNotFound';
    throw err;
  }

  const isPasswordValid = await bcrypt.checkPassword(password, user.password);

  if (!isPasswordValid) {
    const err = Error('Usuário ou senha inválidos');
    err.name = 'UserNotFound';
    throw err;
  }

  return next();
};

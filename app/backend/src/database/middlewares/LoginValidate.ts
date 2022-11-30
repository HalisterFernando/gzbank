import { NextFunction, Request, Response } from 'express';
import User from '../models/user';
import bcrypt from '../../helpers/bcrypt';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });

  if (!user) {
    throw new Error('Usuário não encontrado');
  }

  const isPasswordValid = await bcrypt.checkPassword(password, user.password);

  if (!isPasswordValid) {
    throw new Error('Senha inválida');
  }

  return next();
};

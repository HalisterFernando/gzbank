import { NextFunction, Request, Response } from 'express';
import jwt from '../../helpers/jwt';

export default async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.params);
  const { authorization: token } = req.headers;
  if (!token) {
    throw new Error('Usuário precisa estar logado para ver o saldo');
  }
  jwt.verify(token);

  return next();
};

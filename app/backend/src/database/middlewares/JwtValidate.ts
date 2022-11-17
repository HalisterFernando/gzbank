import { NextFunction, Request, Response } from 'express';
import jwt from '../../helpers/jwt'

export default async (req: Request, res: Response, next: NextFunction) => {
    const {authorization: token} = req.headers;
    if (!token) {
        throw new Error('Usuário precisa estar logado para ver o saldo')
    }
    const {username} = jwt.verify(token)
    req.body = {username}
    return next()
}
import { NextFunction, Request, Response } from 'express';
import User from '../models/user';
const bcrypt = require('bcrypt')

export default async (req: Request, res: Response, next: NextFunction) => {
    
    const {username} = req.body
    const user = await User.findOne({where: {username}})

    if (!user) {
        const err = new Error('Usuário não encontrado')
    }

    return next()
}
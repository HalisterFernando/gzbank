import { NextFunction, Request, Response } from 'express';
import * as joi from 'joi';
import User from '../models/user';
const  passwordComplexity = require('joi-password-complexity')

export default async (req: Request, res: Response, next: NextFunction) => {
    
    const {username, password} = req.body

    const checkIfUserExists = await User.findOne({where: {username}});

    if (checkIfUserExists) {
        throw new Error('Este nome de usuário já existe')
    }

    const complexity = {
        min: 8,
        max: 26,
        numeric: 1,
        upperCase: 1,
        requirementCount: 2
    }

    const {error} = joi.object({
        username: joi.string().min(3).required(),
        password: passwordComplexity(complexity),
    }).validate({username, password})

   if (error) {
    throw new Error(error.message)
   }

    return next()
}
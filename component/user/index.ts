import { Request, Response, NextFunction } from "express"
import UserService from './service'
import { IUserModel } from './model'
import ErrorResponse from "../../utils/errorResponse"
import asyncHandler from '../../middleware/async'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const login = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const result: IUserModel = await UserService.login(req.body)

    if(!result)
        throw new ErrorResponse('Email not found',404)
    
    const match : boolean = await bcrypt.compare(req.body.password,result.password)

    if(!match)
        throw new ErrorResponse('Password Invalid',404)

    //console.log(process.env.SECRET_KEY);
    
    const token = jwt.sign({id : result._id},process.env.SECRET_KEY)

    res.header('token',token).status(200).json({
        status : "Login Successful"
    })
})

export const register = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const result: IUserModel = await UserService.register(req.body);

    res.status(200).json({
        status : "Registration Successful"
    })
})


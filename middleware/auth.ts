import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import ErrorResponse from "../utils/errorResponse";

export const verifyToken = (req : Request, res: Response, next : NextFunction) => {

    const token = req.header('token')
    if(!token)
        throw new ErrorResponse('Access Denied',401)

    try {
        const userInfo : {} = jwt.verify(token,process.env.SECRET_KEY)   
        res.locals = userInfo;
        next() 
    } catch (error) {
        throw new ErrorResponse('Invalid Token',400)
    }
}
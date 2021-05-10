import { NextFunction, Request, Response } from 'express'
import ErrorResponse from '../utils/errorResponse'

export const errorHandler = (err : ErrorResponse, req : Request,res : Response,next : NextFunction) => {
    
    let error : ErrorResponse = {...err}
    error.message = err.message

    if(error.name === 'CastError'){
        const message = `Phone Number not Found`
        error = new ErrorResponse(message,404)
    }

    if(error["code"] === 11000) {
        const obj : string = Object.keys(error["keyPattern"])[0].split('_').join(" ");
        const message = `${obj} already exist`
        error = new ErrorResponse(message,400)
    }

    if(err.name === 'ValidationError')
    {
        let message : string;
        const errorDetails = err["details"][0];

        if(errorDetails.type === 'any.required')
            message = errorDetails.message.split("\"").join("")  

        if(Object.keys(errorDetails.context)[1] === 'regex')
            message = `Invalid ${Object.values(errorDetails.context)[3]}`

        if(errorDetails.type === 'string.min')
            message = errorDetails.message.split("\"").join("") 

        error = new ErrorResponse(message,400)
    }
    
    res.status(error.statusCode || 500).json({
        error : error.message || 'Server Error'
    })
}
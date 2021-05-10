import { Request, Response, NextFunction } from "express"
import AddressService from './service'
import { IAddressModel } from './model'
import ErrorResponse from "../../utils/errorResponse"
import asyncHandler from '../../middleware/async'

export const findAll = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    console.log(req.res.locals); 
    const result: IAddressModel[] = await AddressService.findAll()
    res.status(200).json(result)
})

export const findOne = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const result: IAddressModel = await AddressService.findOne(req.params.phoneNumber)

    if (!result)
        return next(new ErrorResponse(`Phone number : ${req.params.phoneNumber} not found`, 404))

    res.status(200).json(result)

})

export const create = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const result: IAddressModel = await AddressService.create(req.body)
    res.status(201).json(result)

})

export const update = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const result: IAddressModel = await AddressService.update(req.params.phoneNumber)

    if (!result)
        return next(new ErrorResponse(`Phone number : ${req.params.phoneNumber} not found`, 404))

    res.status(200).json(result)

})

export const deletes = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const result: IAddressModel = await AddressService.delete(req.params.phoneNumber)

    if (!result)
        return next(new ErrorResponse(`Phone number : ${req.params.phoneNumber} not found`, 404))

    res.status(200).json(result)
})
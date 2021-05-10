import { Router } from "express";
import {create,deletes,findAll,findOne,update} from '../component/address/index'
import {verifyToken} from '../middleware/auth'

export const addressRoute = Router();

addressRoute.route('/')
    .get(verifyToken,findAll)
    .post(verifyToken,create)

addressRoute.route('/:phoneNumber')
    .get(verifyToken,findOne)
    .put(verifyToken,update)
    .delete(verifyToken,deletes)

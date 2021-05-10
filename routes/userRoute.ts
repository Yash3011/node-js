import { Router } from "express";
import {register,login} from "../component/user/index";

export const userRoute = Router();

userRoute.post('/register',register);
userRoute.post('/login',login);
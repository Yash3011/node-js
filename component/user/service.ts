import { ValidationResult } from 'joi';
import {IUserService} from './interface'
import UserModel,{IUserModel} from './model'
import validation from './validation';

const UserService : IUserService = {

    async register(user : IUserModel) : Promise<IUserModel> {
        try {
            const validator : ValidationResult = validation.signUpValidation(user);
            
            if(validator.error)
                throw validator.error

            return await UserModel.create(user);
        } catch (error) {
            throw error
        }
    },

    async login(user : {email: string, password: string}) : Promise<IUserModel> {
        try {
            const validator : ValidationResult = validation.loginValidation(user);
            return await UserModel.findOne({email: user.email})   
        } catch (error) {
            throw error
        }
    }
}

export default UserService;
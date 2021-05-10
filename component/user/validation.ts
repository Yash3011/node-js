import Joi, { ValidationResult, Schema } from 'joi';
import {IUserModel} from './model'

class AddressValidation {

    loginValidation(body : {email: string, password: string}) : ValidationResult {

        const schema : Schema = Joi.object().keys({
            email : Joi.string().pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).required(),
            password : Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).required()
        })
        return schema.validate(body)  
    }
    
    signUpValidation(body : IUserModel) {
        const schema : Schema = Joi.object().keys({
            name : Joi.string().min(3).max(50).required(),
            email : Joi.string().pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).required(),
            password : Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).required()
        })
        return schema.validate(body)  
    }
}

export default new AddressValidation();

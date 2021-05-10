import Joi, { ValidationResult, Schema } from 'joi';
import {IAddressModel} from './model'

class AddressValidation {

    phoneNumberValidation(body : {phone_number : string}) : ValidationResult {

        const schema : Schema = Joi.object().keys({
            phone_number : Joi.string().pattern(/^[6-9]\d{9}$/).required()
        })
        return schema.validate(body)  
    }
    
    bodyValidation(body : IAddressModel) {
        const schema : Schema = Joi.object().keys({
            name : Joi.string().min(3).max(50).required(),
            phone_number : Joi.string().pattern(/^[6-9]\d{9}$/).required(),
            email : Joi.string().pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).required(),
            city : Joi.string().min(3).max(50).required()
        })
        return schema.validate(body)  
    }
}

export default new AddressValidation();

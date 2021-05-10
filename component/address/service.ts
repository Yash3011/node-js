import { ValidationResult } from 'joi';
import ErrorResponse from '../../utils/errorResponse';
import {IAddressService} from './interface'
import AddressModel,{IAddressModel} from './model'
import AddressValidation from './validation'

const AddressService : IAddressService = {

    async findAll() : Promise<IAddressModel[]> {
        try {
            return await AddressModel.find({});
        } catch (error) {
            throw error
        }
    },

    async findOne(phone_number : string) : Promise<IAddressModel>{
        try {
            const validtor : ValidationResult = AddressValidation.phoneNumberValidation({phone_number})

            if(validtor.error)
                throw new ErrorResponse('Invalid Phone Number',400);

            return await AddressModel.findOne({phone_number : phone_number}); 
        } catch (error) {
            throw error
        }
    },

    async delete(phone_number : string) : Promise<IAddressModel>{
        try {
            const validtor : ValidationResult = AddressValidation.phoneNumberValidation({phone_number})

            if(validtor.error)
                throw new ErrorResponse('Invalid Phone Number',400);

            return await AddressModel.findOneAndRemove({phone_number: phone_number})
        } catch (error) {
            throw error
        }
    },

    async update(phone_number : string) : Promise<IAddressModel>{
        try {
            const validator : ValidationResult = AddressValidation.phoneNumberValidation({phone_number})

            if(validator.error)
                throw new ErrorResponse('Invalid Phone Number',400);

            return await AddressModel.findOneAndUpdate({phone_number: phone_number})
        } catch (error) {
            throw error
        }
    },

    async create(details : IAddressModel) : Promise<IAddressModel>{
        try {
            const validator : ValidationResult = AddressValidation.bodyValidation(details);
            
            if(validator.error)
                throw validator.error

            return await AddressModel.create(details)
        } catch (error) {
            throw error
        }
    }
}

export default AddressService;
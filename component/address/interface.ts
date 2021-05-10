import {IAddressModel} from './model'

export interface IAddressService{

    findAll() : Promise<IAddressModel[]>
    
    findOne(phoneNumber : string) : Promise<IAddressModel>

    delete(phoneNumber : string) : Promise<IAddressModel>

    update(phoneNumber : string) : Promise<IAddressModel>

    create(details : IAddressModel) : Promise<IAddressModel>
}
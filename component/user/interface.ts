import {IUserModel} from './model'

export interface IUserService{

    login(user : {email: string, password: string}) : Promise<IUserModel>
    
    register(user : IUserModel) : Promise<IUserModel>
}
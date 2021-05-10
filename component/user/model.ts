import { NextFunction } from "express";
import { Document, model, Schema } from "mongoose";
import bcrypt from 'bcrypt';

export interface IUserModel extends Document{
    name : string;
    email : string; 
    password : string;
}

const UserSchema : Schema = new Schema({
    name : String,
    email : {
        type : String,
        trim : true,
        unique : true
    },
    password : String
},{ 
    versionKey: false,
    collection: 'user'
}).pre("save",async function (next : NextFunction) : Promise < void > {
   const user : any = this; 
   try {
        const salt : string = await bcrypt.genSalt(10);
        const hash : string = await bcrypt.hash(user.password,salt);
        user.password = hash;
        next();
   } catch (error) {
       next(error);
   }       
})

//Not Working
// UserSchema.statics.comparePassword = async function (password : string) : Promise < boolean >{
//     const user : any = this; 
//     try {
//         const match : boolean = await bcrypt.compare(password,user.password)
//         return match;
//     } catch (error) {
//         throw error;
//     }
// }

export default model<IUserModel>('User',UserSchema)

import { Document, model, Schema } from "mongoose";

export interface IAddressModel extends Document{
    name : string;
    city : string;
    phone_number : string;
    email : string; 
}

const AddressSchema : Schema = new Schema({
    name : String,
    email : {
        type : String,
        trim : true,
        unique : true
    },
    phone_number : {
        type : String,
        unique : true 
    },
    city : String
},{ 
    versionKey: false,
    collection: 'address'
})

export default model<IAddressModel>('Address',AddressSchema)

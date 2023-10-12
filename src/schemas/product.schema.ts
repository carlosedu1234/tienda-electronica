import { Schema } from "mongoose";

export const ProducSchema=new Schema({
    name:{type: String, required:true},
    description: String,
    image: String,
    price: Number,
    createAt:{
        type:Date,
        default:Date.now
    }

})

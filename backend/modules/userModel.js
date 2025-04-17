import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
name:{type:String, required:true},
email:{type:String,required:true},
password:{type:String, required:true},
role: {type:String, enum:["newUser","owner"], default:"newUser"},
enrolledTourism:[
 {
   type:mongoose.Schema.Types.ObjectId, ref:"Toursim"
 }
]

},{timestamps:true})

export const User = mongoose.model("User",userSchema);
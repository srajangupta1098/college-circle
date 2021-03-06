const mongoose=require('mongoose')
const Schema=mongoose.Schema

const CollegeRegistration=new Schema({
    collegename:{type:String,required:true},
    address:{type:String,required:true},
    city:{type:String,required:true},
    state:{type:String,required:true},
    pincode:{type:Number,required:true},
    collegetype:{type:String,required:true},
    degree:{type:String,required:true},
    name:{type:String,required:true},
    designation:{type:String,required:true},
    email:{type:String,required:true}
},{collection:'collegeregistration'})


module.exports=mongoose.model('collegeregistration',CollegeRegistration)
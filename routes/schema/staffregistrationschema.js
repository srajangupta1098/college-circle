const mongoose=require('mongoose')
const Schema=mongoose.Schema

const CollegeRegistration=new Schema({
    firstname:{type:String,required:true},
    middlename:{type:String,required:true},
    lastname:{type:String,required:true},
    membertype:{type:String,required:true},
    collegename:{type:String,required:true},
    enrollmentno:{type:Number,required:true}
},{collection:'staffregistration'})

module.exports=mongoose.model('staffregistration',StaffRegistration)
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const {Schema} = mongoose;

const studentManagementSchema = new Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    age:{
        type:Number,
        required:true
    },
    Dept:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    Id:{
        type:Number,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    status:{
        type:Boolean,
        default:true
    },
    role:{
        type:String,
        required:true,
    },

    isDelete:{
        type:Boolean,
        default:false
    }
    
})

studentManagementSchema.pre('save',async function(next){
    var student = this;
    const hashedPassword  = await bcrypt.hash(student.password,10);
    student.password = hashedPassword;
    next();
})

module.exports = mongoose.model('studentManagement', studentManagementSchema);
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const adminShema = new Schema({
    id:{
        type:Number,
        default:12345,
        unique:true
    },
    password:{
        type:String,
        default:"admin"
    }
})

adminShema.pre("save", async function(req,res,next){
    const admin = this;
    const hashedPassword = await bcrypt.hash(admin.password,10);
    admin.password = hashedPassword;
    next();
})

module.exports = mongoose.model('admin',adminShema);
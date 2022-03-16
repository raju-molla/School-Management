const Admin = require('../../models/adminActivitices/admin');
const bcrypt = require('bcrypt');

// admin register

const adminRegister = async(req,res)=>{
    try{
        const admin = new Admin(req.body);
        const data = await admin.save();
        res.status(200).json(data);
    }
    catch(err){
        res.status(500).json('admin registation failed')
    }
}


// login admin

const login = async(req,res)=>{
    try{
        const {id,password} = req.body;
        const admin = await Admin.findOne({id:id});
        if(!admin){
            return res.status(500).json("admin ID is not found")
        }
        const isValied = await bcrypt.compare(password,admin.password);
        if(!isValied){
            return res.status(500).json("admin password is not matched")
        }
        res.status(200).json({
            mgs: "you are logged in"
        });
    }
    catch(err){
        res.status(500).json("loged failed!");
    }
}

module.exports = {
    adminRegister,
    login
}
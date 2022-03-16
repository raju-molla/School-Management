const StudentManagement = require('../../models/adminActivitices/studentManagement');
const bcrypt = require("bcrypt");
const mongoose= require('mongoose')



// student get all 
const getAll = async(req,res) =>{
    try{
        const allStudent = await StudentManagement.find({isDelete:false});
        res.status(200).json(allStudent)
    }
    catch(err){
        res.status(500).json("failed get all method")
    }
}


// Admit Single Student
const studentadmit= async(req,res)=>{
    try{
        
        
        const student = new StudentManagement(req.body);
        const data = await student.save();
        
        return res.status(201).json({
            mgs: 'Registation successfully!',
            data
        })
    }
    catch(err){
        return res.json({
            mgs:'registation unsuccessful' 
        })
    }
}

// Update Student Info
const updateStudetInfo = async(req,res)=> {
    try{
        const id = req.params.id;
        const student = await StudentManagement.findOneAndUpdate(
            {_id:id},
            {
                $set: req.body
            },
            {multi:true}
        )
        res.status(200).json(student);

    }
    catch(err){
        res.status(500).json("student updated failed");
    }
}
// recycle bin a Student
const recycleBinStudent = async(req,res)=>{
    try{
        const id = req.params.id;
        const student = await StudentManagement.findOneAndUpdate(
            {_id:id},
            {
                $set: {isDelete:true}
            },
            {multi:true}
        )
        res.status(200).json("Sutdent go to recycle bin")
    }
    catch(err){
        res.status(500).json("student delete successfully");
    }
}

// RESTORE STUDENT
const reStore = async(req,res)=>{
    try{
        const id = req.params.id;
        const student = await StudentManagement.findOneAndUpdate(
            {_id:id},
            {
                $set: {isDelete:false}
            },
            {multi:true}
        )
        res.status(200).json({
            mgs:"Restore",
            student
        });
        


    }
    catch(err){
        res.status(500).json("reStore failed!");
    }
}
// Delete for all time
const studentDelete = async(req,res)=>{
    try{
        const id = req.params.id;
        const student = await StudentManagement.findByIdAndDelete({_id:id});
        res.status(200).json("student delete for all time")
    }
    catch(err){
        res.status(500).json("Student Delete failed!");
    }
}
// Change inactive status

const inActiveStudent = async(req,res)=> {
    try{
        const id = req.params.id;
        const student = await StudentManagement.findOneAndUpdate(
            {_id:id},
            {
                $set: {status:false}
            },
            {multi:true}
        )
        res.status(200).json(student);

    }
    catch(err){
        res.status(500).json("student updated failed");
    }
}
// Change inactive status

const activeStudent = async(req,res)=> {
    try{
        const id = req.params.id;
        const student = await StudentManagement.findOneAndUpdate(
            {_id:id},
            {
                $set: {status:true}
            },
            {multi:true}
        )
        res.status(200).json(student);

    }
    catch(err){
        res.status(500).json("student updated failed");
    }
}
// Student active all profile view
const getActiveProfile = async(req,res)=>{
    try{
        const student = await StudentManagement.find({status:true});
        if(student){
            res.status(200).json(student);
        }
        res.status(400).json("here have no student");
    }
    catch(err){
        res.status(500).json(err);
    }
}

// Student active all profile view
const getInActiveProfile = async(req,res)=>{
    try{
        const student = await StudentManagement.find({status:false});
        if(student){
            res.status(200).json(student);
        }
        res.status(400).json("here have no student");
    }
    catch(err){
        res.status(500).json(err);
    }
}
// Student get by Id

const studentGetbyID = async(req,res)=>{
    try{
        const id = req.body.id;
        console.log(id);
        const data = await StudentManagement.findOne({Id:id});
         res.status(200).json(data); 
    }
    catch(err){
        res.status(500).json(err);
    }
}

module.exports={
    studentadmit,
    updateStudetInfo,
    recycleBinStudent,
    getAll,
    reStore,
    studentDelete,
    activeStudent,
    inActiveStudent,
    getActiveProfile,
    getInActiveProfile,
    studentGetbyID
}
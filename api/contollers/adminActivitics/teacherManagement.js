const TeacherManagement = require("../../models/adminActivitices/teacherManagement");

// ❖Create New Teacher

const createTeacher= async(req,res)=>{
    try{
        const teacher = new TeacherManagement(req.body);
        const data = await teacher.save();
        
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

// UPDATE TEACHER INGO
const updateTeacherInfo = async(req,res)=>{
    try{
        const _id = req.params.id;
        const teacher = await TeacherManagement.findOneAndUpdate(
            {_id},
            {
                $set: req.body
            },
            {multi:true}
        )
        res.status(200).json(teacher)
    }
    
    catch(err){
        res.status(500).json(err);
    }
}
// ❖Delete a Teacher controller
// same as student 
// active student constroller
// same as student 
module.exports = {
    createTeacher,
    updateTeacherInfo
}

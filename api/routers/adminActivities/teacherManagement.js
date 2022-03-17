const express = require('express');
const router = express.Router();

const {createTeacher, updateTeacherInfo} =require("../../contollers/adminActivitics/teacherManagement")

router.post('/create',createTeacher);
router.post('/update/:id',updateTeacherInfo);

module.exports = router
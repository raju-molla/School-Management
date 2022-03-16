const express = require('express');
const router = express.Router();
const {studentadmit,updateStudetInfo,recycleBinStudent,getAll,reStore,studentDelete,activeStudent,inActiveStudent, getActiveProfile,getInActiveProfile,studentGetbyID} = require("../../contollers/adminActivitics/studentManagement");

router.get("/all-student", getAll);
router.post("/create/student", studentadmit);
router.post("/create/student/update/:id", updateStudetInfo);
router.post("/create/student/recycle-bin/:id", recycleBinStudent);
router.post("/create/student/restore/:id", reStore);
router.post("/create/student/delete/:id", studentDelete);
router.post("/create/student/inactive/:id", inActiveStudent);
router.post("/create/student/actice/:id", activeStudent);
router.get("/create/student/actice-student", getActiveProfile);
router.get("/create/student/in-actice-student", getInActiveProfile);
router.post("/create/student/id", studentGetbyID);


module.exports = router;
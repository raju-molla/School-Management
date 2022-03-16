const express = require('express');
const router = express.Router();
const {login,adminRegister} = require("../../contollers/adminActivitics/admin")

router.post('/admin/register', adminRegister);
router.post('/admin/login', login);

module.exports = router;
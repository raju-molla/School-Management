const express = require('express');
const app =express();
const mongoose = require('mongoose');
require('dotenv').config();
const admin = require('./routers/adminActivities/admin')
const adminStudentRouter = require('./routers/adminActivities/studentManagement')


app.use(express.json());

app.use(admin);
app.use('/admin',adminStudentRouter);

// database connect
mongoose.connect('mongodb://localhost:27017/schoolManagement')
.then(()=> console.log('Database connect successfully'))
.catch((err)=>console.log(err));

// server create
const port = process.env.PORT;
app.listen(port, ()=>{
    console.log("server is running at port ",port);
})
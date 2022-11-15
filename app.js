require('dotenv').config();
const express = require('express');
const app=express();
const port = 5050;
require('./db/conn');
const users = require('./models/userSchema')
const router=require('./routes/routes')
const cors=require('cors');
app.use(cors());
app.use(express.json());
app.use(router);


app.listen(port,async()=>{
console.log(`server is running on ${port}`)
})

//Sarfraj12@#
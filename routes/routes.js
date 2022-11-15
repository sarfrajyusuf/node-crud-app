const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");

//data store in the db
router.post("/register",async(req,res)=>{
    // console.log(req.body);
    const {name,email,age,mobile,work,add,desc} = req.body;

    if(!name || !email || !age || !mobile || !work || !add || !desc){
        res.status(422).json("plz fill the data");
    }

    try {
        
        const preuser = await users.findOne({email:email});
        console.log(preuser);

        if(preuser){
            res.status(422).json("this is user is already present");
        }else{
            const adduser = new users({
                name,email,age,mobile,work,add,desc
            });

            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }

    } catch (error) {
        res.status(422).json(error);
    }
})
//get all data from here
router.get("/getdata",async(req,res)=>{
    try {
        const userdata = await users.find();
        res.status(201).json(userdata)
        console.log(userdata);
    } catch (error) {
        res.status(422).json(error);
    }
})

//get indivisual data
router.get("/getuser/:id",async(req,res)=>{

    try{
        console.log(req.params)
        const {id} = req.params;
        const indivisualData = await users.findById({_id:id});
        console.log(indivisualData)
        res.status(201).json(indivisualData);
    }catch(error){
        res.status(422).json(error)
    }
})

//update user data
router.patch('/updateuser/:id',async(req,res)=>{
    try{
    const {id} = req.params;
    const updateUser= await users.findByIdAndUpdate(id,req.body,{new:true})
    console.log(updateUser)
    res.status(201).json(updateUser)
    }
    catch(error){
        res.status(422).json(error);
    }
})

//delete users
router.delete('/deleteuser/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const deleteUser = await users.findByIdAndDelete({_id:id});
        console.log(deleteUser);
        res.status(201).json(deleteUser);
    }catch(error){
        res.status(422).json(error)
    }
})
module.exports = router;

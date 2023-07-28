const express = require('express')
const router =  express.Router()
const users = require('../models/userSchema')

//register user data

router.post('/register',async(req,res)=>{
// console.log(req.body);

const {name,email,age,mobile,work,add,desc}=req.body
if(!name || !email || !age || !mobile || !work || !add  || !desc)
{
    res.status(404).json('please fill all the data')
}
try {
    const preuser = await users.findOne({email:email})
    console.log(preuser);
    if(preuser){
        res.status(404).json("This user is already present")
    }
    else{
        const adduser =  new users({
            name,email,age,mobile,work,add,desc
        })
        await adduser.save()
    res.status(201).json(adduser)
    console.log(adduser);
    }
} catch (error) {
    res.status(404).json(error)  
}
})

//get userdata
router.get('/getdata',async(req,res)=>{
    try {
        const userdata = await users.find()
        res.status(201).json(userdata)
        console.log(userdata);
    } catch (error) {
        res.status(404).json(error)  
        
    }

})


//GET indivisual data
router.get('/getuser/:id',async(req,res)=>{
    try {
        console.log(req.params);
        const {id}=req.params

        const useronedata = await users.findById({_id:id})
        console.log(useronedata);
        res.status(201).json(useronedata)
        
    } catch (error) {
        res.status(404).json(error)  
        
    }
})

//deleteuser
router.delete('/deleteuser/:id',async(req,res)=>{
    try {
        const {id}= req.params
        const deleteuser =  await users.findByIdAndDelete({_id:id})
        console.log(deleteuser);
        res.status(201).json(deleteuser)
        
    } catch (error) {
        res.status(404).json(error)  
        
    }
})

module.exports = router
const port = 4000;
const express = require('express');
const app =express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer =require('multer');
const path =require('path');
const cors =require('cors');
const { error } = require('console');


app.use(express.json());
app.use(cors());


// Database connection with mongodb atlas

mongoose.connect("mongodb+srv://medhanshpatley01:medhansh@cluster0.aotq1bg.mongodb.net/Liquor-studio");

//Api creation

app.get('/',(req,res)=>{
    res.send("express app is running")

})





//Schema create for user model

const Users = mongoose.model('Users',{
    firstname:{
        type:String,
    },
    lastname:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartdata:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now
    }
})

//creating endpoints for registring the user
app.post('/signup', async(req,res)=>{
    let check =await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false,error:"exiting  user found with same email"});
    }
    let cart={};
    for(let i =0;i<300;i++){
        cart[i]=0;
    }
    const user = new Users({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        password:req.body.password,
        cartdata:cart,

    })

    await user.save();

    const data ={
        user:{
            id: user.id,
        }
    }

    const token =jwt.sign(data,'secret_liq');
    res.json({success:true,token})
})


//creating end point for user login
app.post('/login', async(req,res)=>{
    let user = await Users.findOne({email:req.body.email});
    if(user){
        const passcompare =req.body.password ===user.password;  
        if(passcompare){
            const data ={
                user:{
                    id:user.id,
                }
            }
            const token =jwt.sign(data,'secret_liq');
            res.json({success:true,token});
        }
        else{
            res.json({success:false,error:"Wrong Password"});
        }

    }
    else{
        res.json({success:false,error:"Wrong EmailId"});
    }
})



app.listen(port,(error)=>{
    if(!error){
        console.log("Server running on port" +port);
    }
    else{
        console.log('error:'+error)
    }

})
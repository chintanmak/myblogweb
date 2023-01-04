const { response, request } = require('express')
const express = require('express')
const router = express.Router()
const signupcopy = require('../models/Signup')
const blogdatacopy = require('../models/Blogdata')
const randomstring = require('randomstring');


router.post('/signup', async(request, response)=> {
    console.log(request.body)

    const id = randomstring.generate({
        length: 12,
        charset: 'hex'
      });

    try{
        const signup = await new signupcopy({
            id:id,
            name:request.body.name,
            email:request.body.email,
            password:request.body.password
        })
        signup.save()
        .then(data =>{
            response.sendStatus(200)
        })
        .catch(error =>{
            response.sendStatus(404)
        })
    }catch(err){
        console.log(err);
        response.sendStatus(404)
    }
})

router.get('/get-all-data', async(request, response)=>{

    try{

        await signupcopy.find()
        .then(data=>{
            response.json(data)
            
        }).catch(err=>response.json(err));
        
    }catch(err){
        console.log(err);
    }
})

router.get('/get-data/:email/:password', async(req,res)=>{

    try{

        const data = await signupcopy.findOne({
            email:req.params.email
        });

        console.log(data);

        if(data){
            
            if(data.password===req.params.password){
                res.json({status:200,data:data})
                                             
            } else{
                console.log("Invalid Credential")
                res.sendStatus(303).json({status:400,error:"INVALID"})                                
            }

        }
        else{
            console.log("Invalid Credential")
            
            res.json({status:400,error:"INVALID"})                                
                                
        }
        
    }catch(err){
        console.log(err);
    }
})


router.post('/blogdata', async(request, response)=> {
    console.log(request.body)

    const id = randomstring.generate({
        length: 12,
        charset: 'hex'
      });

    try{
        const blogdata = await new blogdatacopy({
            id:id,
            title:request.body.title,
            content:request.body.content
        })
        blogdata.save()
        .then(data =>{
            response.sendStatus(200)
        })
        .catch(error =>{
            response.sendStatus(404)
        })
    }catch(err){
        console.log(err);
        response.sendStatus(404)
    }
})

router.get('/get-all-content', async(request, response)=>{

    try{

        await blogdatacopy.find()
        .then(data=>{
            response.json(data)
            
        }).catch(err=>response.json(err));
        
    }catch(err){
        console.log(err);
    }
})

router.post('/delete/:title', async(req,res)=>{

    try{

        const data = await blogdatacopy.findOneAndDelete({
            title:req.params.title
        });

        if(data){
            res.json(data);
        }
        else res.sendStatus(404);
        
    }catch(err){
        console.log(err);
        res.sendStatus(404);
    }


})


module.exports = router
const express = require('express')

//instance of the router 
const router = express.Router()


//get all users
router.get('/',(req,res) =>{
    res.json({msg:'Get all users'})
})

//get a single user
router.get('/:id',(req,res) =>{
    res.json({msg:'Get a single user'})
})

//create a new user
router.post('/',(req,res) =>{
    res.json({msg:'Create a new user'})
})


//delete a user
router.delete('/:id',(req,res) =>{
    res.json({msg:'delete a user'})
})

//update a user
router.patch('/:id',(req,res) =>{
    res.json({msg:'update a user'})
})

//export router
module.exports= router
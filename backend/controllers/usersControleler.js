const User = require('../models/usersModels');
const mongoose = require('mongoose')


//get all users
const getUsers = async (req,res) =>{
    const user = await User.find({}).sort({createdAtP:-1})

    res.status(200).json(user)
}

//get a single user
const getUser = async(req,res) =>{
    const{id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such user'})  
    }


    const user= await User.findById(id)

    if(!user){
        return res.status(404).json({error:'No such user'})
    }

    res.status(200).json(user)
}



//create a user
const createUser = async(req, res) =>{

   const { name, location, age, id } = req.body;


  //add soc to db
  try {
    const user = await User.create({ name, location, age, id });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

//delete a user
const deleteUser =async(req,res) =>{
    const{id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such user'})  
    }

    const user = await User.findOneAndDelete({_id:id})

    if(!user){
        return res.status(404).json({error:'No such user'})
    }

    res.status(200).json(user)
}

//update a user
const updateUser = async (req,res) =>{
    const{id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such user'})  
    }

    const user = await User.findByIdAndUpdate({_id:id},{
        ...req.body
    })
  
    if(!user){
        return res.status(404).json({error:'No such usert'})
    }

    res.status(200).json(user)    
}




module.exports ={
    getUser,
    getUsers,
    createUser,
    deleteUser,
    updateUser
}
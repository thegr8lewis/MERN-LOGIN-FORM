require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/usersroutes')

//start the application 
const app = express()



//middleware
app.use((req,res,next) =>{
    console.log(req.path, req.method)
    next()
})


//react for requests
app.use('/api/users', userRoutes)


//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        
        //listen for request
        app.listen(process.env.PORT, () =>{
            console.log('listening for request from port',process.env.PORT)
        })
      
    })
    .catch((error) =>{
        console.log(error)
    })


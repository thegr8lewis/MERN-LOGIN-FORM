const express = require('express')

//start the application 
const app = express()



//middleware
app.use((req,res,next) =>{
    console.log(req.path, req.method)
    next()
})


//react for requests
app.get('/', (req,res) =>{
    res.json({msg: ' welcome to the app'})
})

//listen for request
app.listen(4000, () =>{
    console.log('listening for request from port 4000')
})
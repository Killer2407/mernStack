const express = require('express')
const app = express();
const PORT = 3000
const { MONGOURI } = require('./keys');
const mongoose = require('mongoose')

const User=require('./models/user.model')

app.use(express.json())  //middleware

//The way to register the server.
app.use(require('./routes/auth'));

console.log('MONGOURI', MONGOURI)

mongoose.connect(MONGOURI)
.then(()=>{
  console.log("connection completed......")

}).catch((error)=>{
  console.log(error.message)
  console.log(error.message||"connection failed...")
  logger.logger.log("error",error.message)
 
})

app.listen(PORT, () => {
    console.log("Server is running on", PORT)
})



// app.get('/signup', async(req, res) => {
//     try {
//     const data = new User({
//         user:"Aniket",
//         email:"anike",
//         password:"12345"
    
//     })
//     await data.save()
//     res.send({message:"saved sucessfully"})
    
        
//     } catch (error) {
//         console.log(error)
//         res.send({message:"failed to  save"})
//     }
//     })
    
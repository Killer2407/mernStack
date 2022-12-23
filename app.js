const express = require('express')
const app = express();
const PORT = 5000
const { MONGOURI } = require('./keys');
const mongoose = require('mongoose')

//Password: Bonsai1304

mongoose.connect(MONGOURI)

app.listen(PORT, () => {
    console.log("Server is running on", PORT)
})

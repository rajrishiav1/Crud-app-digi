require('dotenv').config()
require('./db/conn')
const express = require('express')
const app = express()
const users =  require('./models/userSchema')
const mongoose = require('mongoose')
const cors = require('cors')
const router= require('./routes/router')
const PORT =8003



app.use(cors())
app.use(express.json());

app.use(router);

app.listen(PORT,()=>{
    console.log(`Server started port number ${PORT}`);
})


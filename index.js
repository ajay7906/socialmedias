const express = require('express')
const app = express();
const PORT =  process.env.port || 5000;
const mongoose = require('mongoose');
const {mongoUrl} = require('./key')
const path = require('path')
//cors 
const cors = require('cors')
app.use(cors())
require('./model/model')
require('./model/post')
app.use(express.json())
//routes
app.use(require("./routes/auth"))
app.use(require('./routes/createPost'))
 app.use(require("./routes/user"))
mongoose.connect(mongoUrl)
mongoose.connection.on("connected", ()=>{
    console.log("successful connected to mongo");
})
mongoose.connection.on("error", ()=>{
    console.log("not connected to mongo");
})


//server frontend
app.use(express.static(path.join(__dirname)))
app.listen(PORT, ()=>{
    console.log("serveer is runnig on"+PORT);
})
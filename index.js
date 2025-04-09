const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();
//rest object
const app = express();

//middleware
app.use(express.json())
app.use(morgan("dev"));
const port =process.env.PORT

app.get('/test',(req,res)=>{
    res.status(200).send("Node js Mysql App")
});

app.listen(port,() =>{
    console.log("Server Running")
})
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mysqlPool = require('./config/db');

dotenv.config();
//rest object
const app = express();

//routes
app.use('/api/v1/student', require('./routes/studentsRoutes'));

//middleware
app.use(express.json())
app.use(morgan("dev"));
const port = 8000

app.get('/test',(req,res)=>{
    res.status(200).send("Node js Mysql App")
});

//condionally listen
mysqlPool.query('SELECT 1').then(() =>{
    //mySql
    console.log('MySQL DB connected')
    app.listen(port,() =>{
        console.log(`Server Running https://localhost:${port}`)
    })
}).catch((error) => {
    console.log(error)
})
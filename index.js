const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes/api');

const app = express();

require('./database/db');

//Middlewares
app.use(cors());
app.use(express.json())
// app.use(express.urlencoded({
//     extended: true
//     })
// );


app.use('/api', apiRouter);

app.get('/', (req,res)=>{
    res.send("Hola mundo");
});



app.listen(4000, ()=>{
    console.log("Servidor arrancado en 4000")
});
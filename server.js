require('dotenv').config();
const express = require('express')
const app = express()

const PORT = process.env.PORT;
console.log(process.env.PORT);

app.listen (PORT, ()=> {
    console.log("listing on port: ",PORT)
}) 
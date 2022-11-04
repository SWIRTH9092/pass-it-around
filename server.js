require('dotenv').config();
const express = require('express')
const app = express()

const PORT = process.env.PORT;
console.log(process.env.PORT);

app.get('/:number_of_bottles', (request,response) => {
    const bottlesLeft = Number(request.params.number_of_bottles)
    if (bottlesLeft === 0 ) {
        response.send(`
        <a href="/">Start Over</a>`)   
    }
    
    response.send(`
                <h1>${bottlesLeft} Bottles of beer on the wall</h1>
                <a href="/${bottlesLeft - 1}" style="font-size: 35px;">Take one down, pass it around!</a>`)
})

app.get('/', (request,response) => {
    response.send(`
                <h1>99 Bottles of beer on the wall</h1>
                <a href="/98" style="font-size: 35px;">Take one down, pass it around!</a>`)

})


app.listen (PORT, ()=> {
    console.log("listing on port: ",PORT)
}) 
const connectToMongo = require('./db')
const express = require('express')
const { log } = require('console')

connectToMongo()

const app = express()
const port = 5000

app.use(express.json())
app.use(`/api/countries`,require('./routes/country'))

app.listen(port, ()=> {
    console.log(`example app listening on ${port}`);
})
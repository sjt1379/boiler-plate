const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://shin:1379@cluster0.tnicd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))
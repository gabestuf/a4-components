//init 
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectDB = require('./config/dbConn')
const UserRouter = require('./api/User')
const UserDataRouter = require('./api/UserData')

//use ejs
app.set('view engine', 'ejs')

// bodyParser
const bodyParser = require('express').json;
app.use(bodyParser())

// routes
// signin
app.get('/', (req, res) => {
    res.render('signin')
})
app.get('/signin', (req, res) => {
    res.render('signin')
})

//signup
app.get('/signup', (req, res) => {
    res.render('signup')
})

app.use('/user', UserRouter)

app.use('/todo', UserDataRouter)

app.get('/profile/:id', (req, res) => {
    res.render('profile', { username: req.params.id })
})


//connect to DB
connectDB();

const db = mongoose.connection
db.on('error', (error) => { console.error(error) })
db.once('open', () => {
    console.log("Connected to database");
    app.listen(process.env.PORT || 3000, () => console.log(`Server Started on Port ${process.env.PORT || 3000}`));
})




































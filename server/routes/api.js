const express = require('express')
const router = express.Router()
const User = require('../models/user')
const mongoose = require('mongoose')


const db = "mongodb+srv://nicolas:caca77550@cluster0.xinzg.mongodb.net/<dbname>?retryWrites=true&w=majority"

mongoose.connect(db, err => {
    if (err)
    {
        console.error('Erreur ! ' + err)
    }
    else {
        console.log('Connecté à MongoDB')
    }
})

router.get('/', (req, res) => {
    res.send('fiojzeoijf')
})

router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((error, registeredUser) =>{
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(registeredUser)
        }
    })
})

module.exports = router
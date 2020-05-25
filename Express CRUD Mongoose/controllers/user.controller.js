const User = require('../models/user.model');

//SHOWING ALL USERS
const index = (req, res, next)=>{
    User.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(err => {
        res.json({
            message: 'An error occured'
        })
    })
}

//SHOWING SINGLE USER
const show = (req, res, next)=>{
    let userID = req.body.id;
    User.findById(userID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(err => {
        res.json({
           message: 'An error occured' 
        })
    })
}

//ADDING AN USER
const store = (req, res, next)=>{
    let user = new User(req.body)
    user.save()
    .then(response => {
        res.json({
            message: 'User Added Successfully'
        })
    })
    .catch(err => {
        res.json({
            message: 'An error occured'
        })
    })
}

//UPDATING USER DATA
const update = (req, res, next)=>{
    let userID = req.body.id;
    let updatedUser = { 
        name: req.body.name, 
        username: req.body.username, 
        email: req.body.email, 
        password: req.body.password, 
        group: req.body.group 
    };
    User.findByIdAndUpdate(userID, {$set: updatedUser})
    .then(()=> {
        res.json({
            message: 'User details updated'
        })
    })
    .catch(()=> {
        res.json({
            message: 'An error ocured'
        })
    })
}

//DELETING ONE USER
const destroy = (req, res, next)=>{
    let userID = req.body;
    User.findByIdAndRemove(userID)
    .then(()=> {
        res.json({
            message: 'User deleted'
        })
    })
    .catch(()=> {
        res.json({
            message: 'An error occured'
        })
    })
}

module.exports = {
    index, show, store, update, destroy
}
let User = require('../models/user.model');

let store = (req, res, next)=>{
    let newUser = new User(req.body)
    newUser.save()
    .then((response)=>{
        res.json({
            response
        })
    })
    .catch((err)=>{
        res.json({
            message: 'Error occured'
        })
        console.log(err)
    })
}

let show = (req, res, next)=>{
    userID = req.body.id;
    User.findById(userID)
    .then((response)=>{
        res.json({
            response
        })
    })
    .catch((err)=>{
        res.json({
            message: 'Error occured'
        })
    })
}

let update = (req, res, next)=>{
    userID = req.body.id;
    let updatedUser = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    }
    // User.findByIdAndUpdate(userID, { $set: updatedUser })
    User.findOneAndUpdate( {_id : userID}, updatedUser )
    .then((doc)=> {
        res.json({
            message: "user updated",
            doc:  doc
        })
    })
    .catch((err)=>{
        res.json({
            message: err.message
        })
        console.log(err);
    })
}

module.exports = {
    store, show, update
}
var Student = require('../models/student.model');

let index = (req, res, next)=>{
    Student.find()
    .then((response)=>{
        res.json({
            response
        })
    })
    .catch((err)=> {
        res.json({
            message: "Error occured"
        })
    })
}

let store = (req, res, next)=>{
    let newStudent = new Student(req.body)
    newStudent.save()
    .then((response)=> {
        res.json({
            message: 'New Student Added'
        })
    })
    .catch((err)=>{
        res.json({
            message: 'Error occured'
        })
        console.log(err)
    })
}

let filter = (req, res, next)=>{
    let state = req.body.state;
    Student.find({ state: state })
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
    let studentID = req.body.id;
    console.log(studentID)
    Student.findById(studentID)
    .then((response)=>{
        res.json({
            response
        })
    })
    .catch((err)=> {
        res.json({
            message: 'Error Occured'
        })
    })
}

let showAll = (req, res, next)=>{
    Student.find()
    .then((response)=>{
        res.json({
            response
        })
    })
    .catch((err)=>{
        res.json({
            message: 'Error Occured'
        })
    })
}

let userAdd = (req, res, next)=>{
    let newUser = new Student({
        fname: req.body.fname,
        lname: req.body.lname,
        mobile: req.body.mobile,
        address: req.body.address
    })
    newUser.save()
    .then((response)=>{
        res.json({
            response
        })
    })
    .catch((err)=>{
        res.json({
            message: 'Error occuerd'
        })
    })
}

module.exports = {
    index, store, filter, show, showAll, userAdd
}
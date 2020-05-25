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

module.exports = {
    index, store, filter, show
}
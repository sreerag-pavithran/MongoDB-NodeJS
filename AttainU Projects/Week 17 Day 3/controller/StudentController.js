const Student = require("../model/Student");

const StudentController = {};

StudentController.create = function (req, res) {
  let student = new Student(req.body);
  student.save(function (err, data) {
    if (err) {
      res.status(500).send(err);
    }
    console.log("Document inserted");
    res.send(data);
  });
};

module.exports = { StudentController };

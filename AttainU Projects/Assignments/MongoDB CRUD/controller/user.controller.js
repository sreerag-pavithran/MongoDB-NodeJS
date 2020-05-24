const User = require("../models/user.model");

const UserController = {};

// router.get('/', (req, res)=>{
//     // res.render('Hello World')
//     addUser(req, res);
// });

UserController.create = function (req, res) {
  let user = new User(req.body);
  user.save(function (err, data) {
    if (err) {
      res.send(500).send(err);
    } else {
      console.log("User added", data);
      var message =
        '<script type="text/javascript"> alert("User Added Successfully!"); window.location= "/"; </script>';
      res.send(message);
    }
  });
};

module.exports = { UserController };

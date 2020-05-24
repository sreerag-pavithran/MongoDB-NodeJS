var User = require("../model/data.model");

const UserController = {};

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

UserController.updateOne = function(req, res){
  let found = dataSchema.find(ele => ele.name === req.body.name);
  const newName = req.body.upname;
  const newUsername = req.body.upusername;
  const newEmail = req.body.upemail;
  const newGroup = req.body.upgroup;
  if(found){
    found.name = newName;
    found.username = newUsername;
    found.email = newEmail;
    found.group = newGroup;
    res.send('Upated');
  }else{
    res.send('Error')
  }
  user.save();
  console.log(found)
}

module.exports = { UserController };

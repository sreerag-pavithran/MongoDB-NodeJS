var express = require("express");
var router = express.Router();
var { UserController } = require("../controller/data.controller");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/", UserController.create);
// router.post('/', function(req, res){
//   return UserController.create(req, res);
// })

module.exports = router;

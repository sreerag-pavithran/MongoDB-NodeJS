var express = require("express");
var router = express.Router();
var { StudentController } = require("../controller/StudentController");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/new", StudentController.create);

module.exports = router;
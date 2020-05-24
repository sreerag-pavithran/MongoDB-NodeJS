var express = require("express");
var router = express.Router();
var { UserController } = require('../controller/data.controller')

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("update", { title: "Express" });
});

router.post('/', UserController.updateOne);

module.exports = router;

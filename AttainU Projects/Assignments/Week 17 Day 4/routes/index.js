var express = require("express");
var router = express.Router();
var StudentController = require("../controllers/student.controller");

/* GET home page. */
router.get("/", StudentController.index);
router.post("/add", StudentController.store);
router.get("/filter", StudentController.filter);
router.get("/show", StudentController.show);

module.exports = router;

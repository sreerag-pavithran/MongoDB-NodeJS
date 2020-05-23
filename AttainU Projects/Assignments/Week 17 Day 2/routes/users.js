var express = require("express");
const path = require("path");
const fs = require("fs");

var router = express.Router();

let dataPath = path.join(__dirname, "./data.json");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
  fs.readFile(dataPath, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
      console.log(data);
    }
  });
});

module.exports = router;

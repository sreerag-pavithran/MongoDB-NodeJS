var express = require("express");
const path = require("path");
const fs = require("fs");

var router = express.Router();

let dataPath = path.join(__dirname, "./data.json");

router.get("/:name/:email/:password", (req, res, next) => {
  fs.readFile(dataPath, "utf-8", (err, data) => {
    let userJS = JSON.parse(data);
    let { name, email, password } = req.params;
    let userOBJ = { name, email, password };
    userJS.push(userOBJ);
    let userJSON = JSON.stringify(userJS);
    fs.writeFile(dataPath, userJSON, (err) => {
      if (err) return err;
      console.log(userJSON);
    });
  });

  res.send("hello");
});

module.exports = router;

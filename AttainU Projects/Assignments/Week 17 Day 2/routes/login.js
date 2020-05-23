const express = require("express");
const path = require("path");
const fs = require("fs");

const router = express.Router();
let dataPath = path.join(__dirname, "./data.json");

router.get("/:name/:password", (req, res, next) => {
  fs.readFile(dataPath, "utf-8", (err, data) => {
    if (err) return err;
    let { name, password } = req.params;
    let userOBJ = { name, password };
    let userJS = JSON.parse(data);
    let found = userJS.find(
      (ele) => ele.name === userOBJ.name && ele.password == userOBJ.password
    );
    if (!found) {
      res.send("Login failed!");
    } else {
      res.send("Login successfull!");
    }
  });
});

module.exports = router;

const express = require("express");
const path = require("path");
const fs = require("fs");

const router = express.Router();
let dataPath = path.join(__dirname, "./data.json");

router.get("/:name/:upname/:upemail/:uppass", (req, res, next) => {
  fs.readFile(dataPath, "utf-8", (err, data) => {
    if (err) return err;
    let userJS = JSON.parse(data);
    let { name } = req.params;
    let userOBJ = { name };
    let upname = req.params.upname;
    let upemail = req.params.upemail;
    let uppass = req.params.uppass;
    // let updateOBJ = { upname, upemail, uppass };
    let found = userJS.find((ele) => ele.name === userOBJ.name);
    if (!found) {
      res.send("Username not found");
    } else {
      found.name = upname;
      found.email = upemail;
      found.password = uppass;
      res.send("User details updated!");
    }
    console.log(userJS);
    fs.writeFile(dataPath, JSON.stringify(userJS), (err) => {
      if (err) return;
    });
  });
});

module.exports = router;

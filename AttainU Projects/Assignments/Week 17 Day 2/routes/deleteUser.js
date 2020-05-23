const express = require("express");
const path = require("path");
const fs = require("fs");

const router = express.Router();
let dataPath = path.join(__dirname, "./data.json");

router.get("/:name", (req, res, next) => {
  fs.readFile(dataPath, "utf-8", (err, data) => {
    if (err) return err;
    let userJS = JSON.parse(data);
    let { name } = req.params;
    let userOBJ = { name };
    const found = userJS.find((ele) => ele.name === userOBJ.name);
    if (!found) {
      res.send("username was not found");
    } else {
      const index = userJS.indexOf(found);
      userJS.splice(index, 1);
      res.send("User deleted!");
      let userJSON = JSON.stringify(userJS);
      fs.writeFile(dataPath, userJSON, (err) => {
        if (err) return err;
      });
    }
  });
});

module.exports = router;

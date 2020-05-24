var express = require("express");
var router = express.Router();
let fs = require("fs");
var dataPath = "./data.json";

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/", (req, res, next) => {
  fs.readFile(dataPath, "utf-8", (err, data) => {
    userJS = JSON.parse(data);
    if (err) {
      console.log(err);
    } else {
      const { name, author, year, rating, genre } = req.body;
      let userOBJ = { name, author, year, rating, genre };
      userJS.push(userOBJ);
      let userJSON = JSON.stringify(userJS);
      fs.writeFile(dataPath, userJSON, (err, data) => {
        if (err) {
          return err;
        } else {
          res.send("Book Details Added");
        }
      });
      console.log(userJS);
    }
  });
});

module.exports = router;

var express = require("express");
var router = express.Router();

var v1Router = require("./v1/index");
router.use("/v1", v1Router);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;

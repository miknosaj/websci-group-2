const express = require("express");
const path = require("path");
var router = express.Router();

var absPath = path.join(__dirname, "../../src");

//route to handle home page
router.get("/", function(req, res, next) {
    res.sendFile(absPath + "/index.html");
});

module.exports = router;
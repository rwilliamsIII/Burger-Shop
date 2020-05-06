const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");



router.get("/", function(req, res) {
    burger.selectAll(function(data){
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne([
        ["burger_name"], [req.body.burger_name], function(result) {
        res.json({ id: result.insertId });
        }
    ]);
  });

  module.exports = router;
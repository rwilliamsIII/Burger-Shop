const express = require("express");

const router = express.Router();

const burger = require("../model/burgers");




router.get("/", function(req, res) {
    burger.all(function(data){
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create([
        ["burger_name"], [req.body.burger_name], function(result) {
        res.json({ id: result.insertId });
    }
    ]);
  });
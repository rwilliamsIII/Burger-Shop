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

app.post("/api/burgers", function(req, res) {
    connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger_name], function(
      err,
      result
    ) {
      if (err) {
        // If an error occurred, send a generic server failure
        return res.status(500).end();
      }
  
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
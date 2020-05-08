require("dotenv").config();
const mysql = require("mysql");



const dbConnect = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  });
  
  dbConnect.connect(function(err) {
      if (err) {
        console.error("error connecting: " + err.stack);
        return;
      }
    
      console.log("connected as id " + dbConnect.threadId);
    });

    module.exports = dbConnect;
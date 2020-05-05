const mysql = require("mysql");



const dbConnect = mysql.createConnection({
    host: "nba02whlntki5w2p.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "yf9yeimiimzrjwxm",
    password: "xmef0lhik321nu4f",
    database: "hsbx0eucwo5e4ffd"
  });
  
  dbConnect.connect(function(err) {
      if (err) {
        console.error("error connecting: " + err.stack);
        return;
      }
    
      console.log("connected as id " + dbConnect.threadId);
    });

    module.exports = dbConnect;
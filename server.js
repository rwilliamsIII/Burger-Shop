const express = require("express");
const timeout = require("connect-timeout")

const PORT = process.env.PORT || 5000;


const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controllers");

app.use(routes);

app.use(timeout(15000));
app.use(haltOnTimeout);

function haltOnTimeout(req, res, next) {
  if (!req.timedout) next();
}


app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });

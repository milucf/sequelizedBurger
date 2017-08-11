var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models");

var port =process.env.PORT || 8080;

var app=express();

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


var exphbs=require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/",routes);

db.sequelize.sync().then(function() {
  app.listen(port, function() {
    console.log("App listening on port " + port);
  });
});



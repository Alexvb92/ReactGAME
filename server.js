var express = require("express");
var app = express();

// Make public a static dir
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile("./public/index.html");
});


// Listen on port Process Enviroment or 3000
var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log("App running on port "+ PORT + "!");
});

//sets up the routes for the rest of the app, utilizes react-router to do this

var React = require("react");
var ReactDOM = require("react-dom");

// include main component
var Main = require("./Components/Main");


ReactDOM.render(<Main />, document.getElementById("app"));



var React = require("react");

var Board = require("./Board.js")
//create the main component - createClass is a function within React so you need React before createClass
var Main = React.createClass({
    //every component has to have a render function
    render: function() {
        return (
            <div className="main-container">
                <div className="jumbotron">
                    <h1 className="text-center"> Dodge the cubes</h1>
                    <p className="lead text-center"> press any key to play! </p>
                </div>
                <div className="game-container">
                </div>
            </div>
        );
    }
});

module.exports = Main;

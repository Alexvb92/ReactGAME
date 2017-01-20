var React = require("react");

var router = require("react-router");




var Board = React.createClass({
    getInitialState: function() {
    return {
        works: "yes"
    }
},

    render: function(){
        return(
            <div className="col-md-12">
                <h1>will this render</h1>
            </div>
        )
    }
})


module.exports = Board;





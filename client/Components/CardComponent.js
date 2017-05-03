var React = require('react');
import moment from "moment"


var CardComponent = React.createClass({

  render: function(){
  
    return (






     <div className="col s10 m4">

    <div className="card horizontal">
      <div className="card-image">
        <img src="/images/red.png" />
      </div>
      <div className="card-stacked">
        <div className ="card-content">
          <p>{this.props.cardValue}</p>
        </div>
        <div className="card-action">
          <a href="#">{this.props.cardTitle}</a>
        </div>
      </div>
    </div>
  </div>


    );
  }

});

module.exports = CardComponent

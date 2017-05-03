var React = require('react')
import CardComponent from "./CardComponent"
import TimeSheet from "./TimeSheet"
var TimeSheetList = React.createClass({

  render: function(){




        var timeSheets = this.props.timeSheetlist.map(function(ts,index){
          return(
            <li><TimeSheet key = {index} oneTs = {ts} /></li>
          )

        });
    return(



      <ul className = "collection">
          {timeSheets}

      </ul>


    );

  }

});

module.exports = TimeSheetList;

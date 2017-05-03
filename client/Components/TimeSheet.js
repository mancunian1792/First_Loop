var React = require('react')
var  CardComponent = require('./CardComponent')
import moment from "moment"
import TimeSheetAction from "../Actions/TimeSheetAction"

function round(value, exp) {
  if (typeof exp === 'undefined' || +exp === 0)
    return Math.round(value);

  value = +value;
  exp = +exp;

  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0))
    return NaN;

  // Shift
  value = value.toString().split('e');
  value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));

  // Shift back
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp));
}


var TimeSheet = React.createClass({
render:function() {
    const format = 'h:mm a';
  var stTime ="START TIME ";
  var enTime = "END TIME ";
  var tSpent = "TIME SPENT";
  var sthour =moment(this.props.oneTs.startTime) && moment(this.props.oneTs.startTime).format(format); // should mddify  this  to props value
  var enhour = moment(this.props.oneTs.endTime) && moment(this.props.oneTs.endTime).format(format);  // should mddify  this  to props value
   // Calculate the difference and add hours
  const toDate = moment(this.props.oneTs.startTime).format("MMM Do YYYY"); // should modify this to props value


  var duration = moment.duration(moment(this.props.oneTs.endTime).diff(moment(this.props.oneTs.startTime)));

  var hrSpent = round(duration.asHours(),2) + " hours";


  return(
    <li className="collection-item avatar">
    <li className="collection-header"><h4>{toDate}</h4></li>
    <div className = "row">

        <CardComponent cardTitle={stTime} cardValue = {sthour} />
        <CardComponent cardTitle={enTime} cardValue = {enhour} />
        <CardComponent cardTitle={tSpent} cardValue = {hrSpent} />

        <a  href="/#/timesheet" onClick={this._openTimeSheetEdit} className="secondary-content"><i className="material-icons">edit</i></a>
    </div>
  </li>


  );

},
  _openTimeSheetEdit:function(){

    var ts = this.props.oneTs;


		$('edit_timesheet_modal').modal();
		$('edit_timesheet_modal').modal('open');
		TimeSheetAction.edit(ts);
  }


})


module.exports = TimeSheet;

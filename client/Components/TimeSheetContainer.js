/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the CMStore and passes the new data to its children.
 */

var React = require('react');
var TimeSheetHeader = require('./TimeSheetHeader');
var TimeSheetModal = require('./TimeSheetModal');
var TimeSheetList = require('./TimeSheetList');
var TimeSheetStore = require('../Stores/TimeSheetStore');
var TimeSheetAction = require('../Actions/TimeSheetAction');
var EditTimeSheetModal = require('./EditTimeSheetModal');
import moment from "moment"

function getTimeSheets(){
  return {
    allTimesheets:TimeSheetStore.getAllTimeSheets(),
    editTimesheet:TimeSheetStore.getEditTimesheet()
  }
}

var TimeSheetContainer = React.createClass({
    getInitialState: function(){
        this._initializeTimesheets();

        return getTimeSheets()

    },
    componentDidMount: function() {
      TimeSheetStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
      TimeSheetStore.removeChangeListener(this._onChange);
    },

	render: function() {

		//Code for editing a contact
    var editId = this.state.editTimesheet.id;
      var editTimesheet = this.state.editTimesheet;
      const toDate = moment().format("MMM Do YYYY");
      console.log("Edit id is :::",editId);
      console.log("what is editTimesheet",this.state.editTimesheet);
      if (editId !== undefined) {
        console.log("This should be printed ideally when the edit button is clicked :::::");
        $('#edit_timesheet_modal').modal();
        $('#edit_timesheet_modal').modal('open');

        // fill form elements with selected contact info
        $('#edit_timesheet_form').find('#timesheet_id').val(editTimesheet.id);
        $('#edit_timesheet_form').find('#edit_timesheet_owner').val(editTimesheet.ownername);

        // focus on the first field with a little delay so it won't mess-
        // with modal focus
        setTimeout(function() {
          $('#edit_timesheet_form').find('#edit_start_time').focus();
        },50);


        // changing back to undefined so it prevent from opening the modal-
        // everytime the view is rendering
        this.state.editTimesheet.id = undefined;
      }


    return(
      
      <ul className="collection">
			<div> <TimeSheetHeader/> </div>
      <TimeSheetModal />
      <TimeSheetList timeSheetlist= {this.state.allTimesheets}  />
      <EditTimeSheetModal eTs={this.state.editTimesheet}/>



      </ul>

    );
  },
  _initializeTimesheets: function(){
    TimeSheetAction.getTimeSheets();

  },
  _onChange: function() {
    console.log(getTimeSheets());
    this.setState(getTimeSheets());
  }




});

module.exports = TimeSheetContainer;

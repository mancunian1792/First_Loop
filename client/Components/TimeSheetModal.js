var React = require('react');

import 'rc-time-picker/assets/index.css';
import moment from 'moment';
import TimePicker from 'rc-time-picker';
import TimeSheetAction from "../Actions/TimeSheetAction";
import TimeSheetStore from "../Stores/TimeSheetStore";
const format = 'h:mm a';
const now = moment().hour(0).minute(0);
const toDate = moment().format("MMM Do YYYY");


var TimeSheetModal = React.createClass({
  getInitialState: function() {
      return {
        stDate: {now},
        endDate: {now}
      }
  },
	render:function() {


		return(
			<div id="timesheet_modal" className="modal">
				<form id="timesheet_form" onSubmit={this._saveTimeSheet}>
        <div className="modal-content">



            <h4>Enter Timesheet for :{toDate} </h4>
						<div >
            <label >Entry Time</label>

            <TimePicker
            id ="start_time"
                showSecond={false}
                defaultValue={now}
                className="xxx"
                onChange={this._onChangeStart}
                format={format}
                use12Hours style={{marginLeft: 150 + 'px'}}/>

						</div>

            <div >
            <label >Exit Time</label>

            <TimePicker
            id ="exit_time"
                showSecond={false}
                defaultValue={now}
                className="xxx"
                onChange={this._onChangeEnd}
                format={format}
                use12Hours style={{marginLeft: 155 + 'px'}}/>

						</div>

            <div className="input-field">

              <input id="timesheet_owner" type="text" />
              <label htmlFor="timesheet_owner"> Owner</label>

            </div>
        </div>
					<input type="submit" className="hide"/>
				</form>

				<div className="modal-footer">
					<a onClick={this._saveTimeSheet} className="modal-action modal-close waves-effect waves-green btn-flat">Press enter or click here</a>
				</div>
			</div>
		);
	},
  _onChangeStart: function(value) {

    var stDate = value && value.format(format);

    this.setState({
      stDate: value.toString()

    });

  },
  _onChangeEnd: function(value) {
      var endDate = value && value.format(format);
      this.setState({
        endDate:value.toString()
      })

  },
	// sending new contact to action
	_saveTimeSheet: function(e) {
		e.preventDefault();

		var form = $('#timesheet_form');

		// getting data from form

    var owner =form.find('#timesheet_owner').val();

    var newTimesheet = {

      startTime:this.state.stDate,
      endTime:this.state.endDate,
      ownername:owner
    }

    TimeSheetAction.create(newTimesheet)




		this._clearContactForm();
	},
	/*
	 * clearing form for next time
	 */
	_clearContactForm: function() {
		var form = $('#timesheet_form');
    this.setState({
      startTime:now,
      endTime:now
    });
    form.find('#timesheet_owner').val(''); // Clearing out the owner value when modal closes

		$('#timesheet_modal').modal('close');
	}
});

module.exports = TimeSheetModal;

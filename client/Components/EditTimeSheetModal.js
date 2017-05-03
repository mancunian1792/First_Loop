var React = require('react')
import 'rc-time-picker/assets/index.css';
import moment from 'moment';
import TimePicker from 'rc-time-picker';
import TimeSheetAction from "../Actions/TimeSheetAction";
import TimeSheetStore from "../Stores/TimeSheetStore";
const format = 'h:mm a';


var EditTimeSheetModal = React.createClass({

  getInitialState: function(){
    return{
      stTime:moment().hour(0).minute(0),
      enTime:moment().hour(0).minute(0)
    }
  },
  componentWillReceiveProps:function(nextProps){
      console.log("What is nextProps",nextProps);
      this.setState({
        stTime:moment(nextProps.eTs.startTime),
        enTime:moment(nextProps.eTs.endTime)
      })
      console.log("state object is ",this.state);
  },
  componentShouldUpdate(){
    return true
  },
  componentWillUpdate(){
      console.log("IS this ever called")
  },
  render:function(){



    console.log("Render in Edit Timesheet Modal");
    return(
      <div id="edit_timesheet_modal" className="modal">
        <form id="edit_timesheet_form" onSubmit={this._saveTimeSheet}>
        <div className="modal-content">



            <h4>Enter Timesheet for :<span id="toDate">{moment(this.state.stTime).format("MMM Do YYYY")}</span> </h4>
            <div >
            <label >Entry Time</label>

            <TimePicker
            id ="edit_start_time"
                value = {this.state.stTime}
                showSecond={false}
                className="xxx"
                onChange={this._onChangeStart}
                format={format}
                use12Hours style={{marginLeft: 150 + 'px'}}/>

            </div>

            <div >
            <label >Exit Time</label>

            <TimePicker
                id ="edit_exit_time"
                value = {this.state.enTime}
                showSecond={false}
                className="xxx"
                onChange={this._onChangeEnd}
                format={format}
                use12Hours style={{marginLeft: 155 + 'px'}}/>

            </div>

            <div>
              <label htmlFor="edit_timesheet_owner"> Owner</label>
              <input id="edit_timesheet_owner" type="text" disabled/>


            </div>
        </div>
          <input type="submit" className="hide"/>
          <input id="timesheet_id" type="hidden" />
        </form>

        <div className="modal-footer">
          <a onClick={this._saveTimeSheet} className="modal-action modal-close waves-effect waves-green btn-flat">Update Timesheet</a>
          <a onClick={this._removeTimeSheet} className="red lighten-4 modal-action modal-close waves-effect waves-red btn-flat">Delete Timesheet</a>
        </div>
      </div>


    )



},

_onChangeStart: function(value) {

  var stDate = value && value.format(format);
  console.log("what is value");
  this.setState({
    stTime: moment(value.toString())

  });

},
_onChangeEnd: function(value) {
    var endDate = value && value.format(format);
    this.setState({
      enTime:moment(value.toString())
    })

},
_saveTimeSheet: function(e){
  e.preventDefault();

  var form = $('#edit_timesheet_form');

  // getting data from form

  var owner =form.find('#edit_timesheet_owner').val();
  var tsId = form.find('#timesheet_id').val();
  var updateTs = {
    id:tsId,
    startTime:this.state.stTime,
    endTime:this.state.enTime,
    ownername:owner
  }
TimeSheetAction.update(updateTs);
this._clearTimeSheetModal();

},
_removeTimeSheet: function(e){

  e.preventDefault();

  var form = $('#edit_timesheet_form');
  var removeId = form.find('#timesheet_id').val();

  TimeSheetAction.remove(removeId);
  this._clearTimeSheetModal();

},
_clearTimeSheetModal: function(){
    var form = $('#edit_timesheet_form');
    form.find('#edit_timesheet_owner').val('');
    this.setState({
      stTime:moment().hour(0).minute(0),
      enTime:moment().hour(0).minute(0)
    });
    $('#edit_timesheet_modal').modal('close');
}


});

module.exports = EditTimeSheetModal;

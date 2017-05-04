var AppDispatcher = require('../Dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
import _ from "underscore";
var CMConstants = require('../constants/CMConstants');
var assign = require('object-assign');
import api from "axios";

var CHANGE_EVENT = "TIMESHEET_CHANGE";
var _timesheets = [];
var _editTimesheet = {};

function createTimeSheet(newTs){
  api.post('api/timesheets',newTs).then(response =>{
    console.log("::::It was inserted successfully:::::");
    getAllTimeSheets();
  });
}

function getAllTimeSheets(){


  api.get('api/timesheets?filter[order]=startTime%20DESC').then(response => {
      _timesheets = response.data;
      TimeSheetStore.emitChange();
  });
}


  function editTimeSheet(action){

    _editTimesheet = action;
    TimeSheetStore.emitChange();
  }

  function updateTimeSheet(action){
    var url ='api/timesheets/' + action.id;
    var toPut={
      startTime:action.startTime,
      endTime:action.endTime,
      ownername:action.ownername
    }
    api.put(url,toPut).then(response => {
      getAllTimeSheets();
    });
  }

  function removeTimeSheet(id){

    api.delete('api/timesheets/'+id).then(response =>{
      getAllTimeSheets();
    });
  }

var TimeSheetStore = _.extend({}, EventEmitter.prototype, {
  /**
   * Get the entire Contacts.
   * @return {object}
   */
   getAllTimeSheets: function() {

     return _timesheets;
   },

   getEditTimesheet:function() {
     return _editTimesheet;
   },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});


AppDispatcher.register(function(action) {

  console.log("Is this printed ????");
  switch(action.actionType) {
    case CMConstants.TS_CREATE:
          createTimeSheet(action.action);
    break;

    case CMConstants.GET_ALL_TIMESHEETS:
        getAllTimeSheets();
    break;

    case CMConstants.EDIT_TIMESHEET:

        editTimeSheet(action.action);
    break;

    case CMConstants.UPDATE_TIMESHEET:
        updateTimeSheet(action.action);
    break;

    case CMConstants.REMOVE_TIMESHEET:
        removeTimeSheet(action.removeId);
    break;

  }
});


module.exports = TimeSheetStore;

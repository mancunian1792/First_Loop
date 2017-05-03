var AppDispatcher = require('../Dispatcher/dispatcher');
var CMConstants = require('../constants/CMConstants');


var TimeSheetAction = {


/*
  This method is used to dispatch an action ,
  ( which is listened to by stores which are registered to the dispatcher)
   when a new timesheet is entered
 */
create: function(action){
  console.log("In Action :::")
  AppDispatcher.dispatch({
    actionType:CMConstants.TS_CREATE,
    action
  });

},

/*
    This method is used to dispatch an action when
    the user loads the timesheets page ... we intend to get all the timesheets from store
 */
getTimeSheets: function(){
  AppDispatcher.dispatch({
    actionType:CMConstants.GET_ALL_TIMESHEETS
  })
},

/*
    This method is used to link the view to the controller while editing any timesheet.
 */
edit:function(action){
  AppDispatcher.dispatch({
    actionType:CMConstants.EDIT_TIMESHEET,
    action
  })
},

/*
    This method is used to update the edited timesheet
 */
update: function(action){
  AppDispatcher.dispatch({
    actionType:CMConstants.UPDATE_TIMESHEET,
    action
  })

},

remove:function(removeId){
  AppDispatcher.dispatch({
    actionType:CMConstants.REMOVE_TIMESHEET,
    removeId
  })
}
}


module.exports = TimeSheetAction;

var React = require('react');


/*
 * Show Add button and Program header
 */
var TimeSheetHeader = React.createClass({
	render:function() {
		return(

			<li className="collection-header">
				<span className="title flow-text" style={{marginLeft: 30 + 'px'}}>All TimeSheets</span>

				<a onClick={this._openAddModal} className="teal darken-1 waves-effect waves-circle waves-light btn-floating secondary-content">
					<i className="material-icons">add</i>
				</a>
			</li>
		);
	},

	// Opening AddContactModal component
	_openAddModal: function() {

		console.log("It goes to _openAddModal");
		// $('#contact_modal').modal('open');

		try{
				$('#timesheet_modal').modal();

				$('#timesheet_modal').modal('open');

		}catch(e){

		}
		// focus on the first field
		//$('#contact_modal').find('#contact_name').focus();
		
	}
});

module.exports = TimeSheetHeader;

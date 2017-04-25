var React = require('react');


/*
 * Show Add button and Program header
 */
var ItemListHeader = React.createClass({
	render:function() {
		return(

			<li className="collection-header">
				<span className="title flow-text" style={{marginLeft: 30 + 'px'}}>All TimeBlogs</span>

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
				$('#blog_modal').modal();
				console.log("It is working ");
				$('#blog_modal').modal('open');
				console.log("Open statement passed too::::");
		}catch(e){
			console.log("Not loaded ...")
		}
		// focus on the first field
		//$('#contact_modal').find('#contact_name').focus();
		console.log("This is executing as well")
	}
});

module.exports = ItemListHeader;

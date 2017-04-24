var React = require('react');
var CMActions = require('../Actions/CMAction');

var Contact = React.createClass({
	render:function() {
		var contact = this.props.oneContact;

		// Blog component ( for every blog )
		// used by ContactList.react.js
		return(
			<li className="collection-item avatar">

			<span className="title">{contact.name}</span>
			<p>Phone Number: {contact.phone} <br />
			Email: {contact.email}
			</p>
			<a href="#" onClick={this._openEditModal} className="secondary-content"><i className="material-icons">edit</i></a>
			</li>
		);
	},
	_openEditModal: function() {
		var contact = this.props.oneContact;
		//$('edit_contact_modal').modal();
		//$('edit_contact_modal').modal('open');
		CMActions.edit(contact);
	}
});

module.exports = Contact;

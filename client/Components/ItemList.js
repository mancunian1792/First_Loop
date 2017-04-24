/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the CMStore and passes the new data to its children.
 */

var React = require('react');
var ItemListHeader = require('./ItemListHeader');
var ContactModal = require('./ContactModal')
var ContactList = require('./ContactList')
var CMStore = require('../Stores/CMStore')
var CMActions = require('../Actions/CMAction')
var EditContactModal = require('./EditContactModal')

function getContactsState() {
  return {
    allContacts: CMStore.getAll(),
    editContact: CMStore.getEditContact()
  };
}

var ItemList = React.createClass({

	getInitialState: function() {
    // loading existing data
    this._initializeContacts();
    return getContactsState();
  },
  componentDidMount: function() {
		CMStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    CMStore.removeChangeListener(this._onChange);
  },

	render: function() {

		//Code for editing a contact
		var editId = this.state.editContact.id;
	    var editContact = this.state.editContact;
	    if (editId !== undefined) {
				console.log("This should be printed ideally when the edit button is clicked :::::");
				$('#edit_contact_modal').modal();
	      $('#edit_contact_modal').modal('open');

	      // fill form elements with selected contact info
	      $('#edit_contact_form').find('#contact_id').val(editContact.id);
	      $('#edit_contact_form').find('#contact_name').val(editContact.name);
	      $('#edit_contact_form').find('#contact_phone').val(editContact.phone);
	      $('#edit_contact_form').find('#contact_email').val(editContact.email);
	      $('#edit_contact_form').find('#contact_avatar').val(editContact.avatar);

	      // focus on the first field with a little delay so it won't mess-
	      // with modal focus
	      setTimeout(function() {
	        $('#edit_contact_form').find('#contact_name').focus();
	      },50);


	      // changing back to undefined so it prevent from opening the modal-
	      // everytime the view is rendering
	      this.state.editContact.id = undefined;
	    }

		console.log("What is all Contacts ::::",this.state.allContacts);
    return(
      <ul className="collection">
			<div> <ItemListHeader/> </div>

				<ContactList contactList={this.state.allContacts}/>
				<EditContactModal editContact={this.state.editContact} />
				<ContactModal />
      </ul>

    );
  },

	_onChange: function() {
    this.setState(getContactsState());

  },
  _initializeContacts: function() {

		CMActions.allContacts();
  }





});

module.exports = ItemList;

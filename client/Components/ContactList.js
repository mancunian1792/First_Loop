var React = require('react');
var Contact = require('./Contact');

var ContactList = React.createClass({



	render:function() {
		console.log(" static contacts ::::",this.props.contactList);

		var contacts = this.props.contactList.map(function(contact,index){
				return(

						<Contact key={index} oneContact={contact} />

				)
		});

		return(<ul className="collection">{contacts}</ul>);
	}
});

module.exports = ContactList;

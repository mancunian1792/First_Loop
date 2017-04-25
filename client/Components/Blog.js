var React = require('react');
var CMActions = require('../Actions/CMAction');

var Blog = React.createClass({
	render:function() {
		var blog = this.props.oneBlog;

		// Blog component ( for every blog )
		// used by ContactList.react.js
		return(
			<li className="collection-item avatar">

			<span className="title">{blog.title}</span>
			<p>{blog.description}
			</p>
			<br />
			<span >{blog.owner}</span>
			<a href="#" onClick={this._openEditModal} className="secondary-content"><i className="material-icons">edit</i></a>
			</li>
		);
	},
	_openEditModal: function() {
		var blog = this.props.oneBlog;
		console.log("What is oneBlog :::",this.props.oneBlog);

		//$('edit_contact_modal').modal();
		//$('edit_contact_modal').modal('open');
		CMActions.edit(blog);
	}
});

module.exports = Blog;

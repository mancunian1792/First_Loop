var React = require('react');
 var CMActions = require('../Actions/CMAction');



var BlogModal = React.createClass({
	render:function() {
		return(
			<div id="blog_modal" className="modal">
				<form id="blog_form" onSubmit={this._saveBlog}>
					<div className="modal-content">
						<h4>Add New TimeBlog</h4>
						<div className="input-field">

							<input id="blog_owner" type="text" className="validate" />
							<label htmlFor="blog_owner">Owner</label>
						</div>
						<div className="input-field">

							<input id="blog_title" type="text" className="validate"/>
							<label htmlFor="blog_title">title</label>
						</div>
						<div className="input-field">


              <textarea id ="blog_description" className="materialize-textarea"></textarea>
							<label htmlFor="blog_description">Description</label>
						</div>
					</div>
					<input type="submit" className="hide"/>
				</form>

				<div className="modal-footer">
					<a onClick={this._saveBlog} className="modal-action modal-close waves-effect waves-green btn-flat">Press enter or click here</a>
				</div>
			</div>
		);
	},
	// sending new contact to action
	_saveBlog: function(e) {
		e.preventDefault();
		var newBlog = {};
		var form = $('#blog_form');

		// getting data from form
		newBlog.owner = form.find('#blog_owner').val();
		newBlog.title = form.find('#blog_title').val();
		newBlog.description = form.find('#blog_description').val();

		CMActions.create(newBlog);

		this._clearContactForm();
	},
	/*
	 * clearing form for next time
	 */
	_clearContactForm: function() {
		var form = $('#blog_form');

		form.find('#blog_owner').val('');
		form.find('#blog_title').val('');
		form.find('#blog_description').val('');
		$('#blog_modal').modal('close');
	}
});

module.exports = BlogModal;

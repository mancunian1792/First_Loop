var React = require('react');
var CMActions = require('../Actions/CMAction');

var EditBlogModal = React.createClass({

	render:function() {
		return(
			<div id="edit_blog_modal" className="modal">
				<form id="edit_blog_form" onSubmit={this._saveBlog}>
					<div className="modal-content">
						<h4>Edit TimeBlog</h4>
						<div className="input-field">

							<input id="blog_owner" type="text" className="validate" disabled />

						</div>
						<div className="input-field">

							<input id="blog_title" type="text" className="validate"/>

						</div>
						<div className="input-field">


              <textarea id="blog_description" className="materialize-textarea"></textarea>

						</div>
					</div>
					<input id="blog_id" type="hidden" />

					<input type="submit" className="hide"/>
				</form>

				<div className="modal-footer">
					<a onClick={this._saveBlog} className="modal-action modal-close waves-effect waves-green btn-flat">Update Blog</a>
					<a onClick={this._removeBlog} className="red lighten-4 modal-action modal-close waves-effect waves-red btn-flat">Delete Blog</a>
				</div>
			</div>
		);

	},
	// saving contact
	_saveBlog: function(e) {
		e.preventDefault();

		var blog = {};
		var form = $('#edit_blog_form');

		// getting data from form
		blog.id = form.find('#blog_id').val();

		blog.owner = form.find('#blog_owner').val();
		blog.title = form.find('#blog_title').val();
		blog.description = form.find('#blog_description').val();


		//sending to action
		CMActions.save(blog);

		this._clearContactForm();
	},
	// when the user clicks on delete button
	_removeBlog: function(e) {
		e.preventDefault();
		var removeId = $('#edit_blog_form').find('#blog_id').val();

		//sending to action
		CMActions.remove(removeId);

		this._clearContactForm();
	},
	/*
	 * clearing form and closing modal for the next time
	 */
	_clearContactForm: function() {
		var form = $('#edit_blog_form');

		form.find('#blog_owner').val('');
		form.find('#blog_description').val('');
		form.find('#blog_title').val('');
		$('#edit_blog_modal').modal('close');
	}
});

module.exports = EditBlogModal;

/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the CMStore and passes the new data to its children.
 */

var React = require('react');
var ItemListHeader = require('./ItemListHeader');
var BlogModal = require('./BlogModal')
var BlogList = require('./BlogList')
var CMStore = require('../Stores/CMStore')
var CMActions = require('../Actions/CMAction')
var EditBlogModal = require('./EditBlogModal')

function getBlogsState() {
  return {
    allBlogs: CMStore.getAll(),
    editBlog: CMStore.getEditContact()
  };
}

var ItemList = React.createClass({

	getInitialState: function() {
    // loading existing data
    this._initializeBlogs();
    return getBlogsState();
  },
  componentDidMount: function() {
		CMStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    CMStore.removeChangeListener(this._onChange);
  },

	render: function() {

		//Code for editing a contact
		var editId = this.state.editBlog.id;
	    var editBlog = this.state.editBlog;
	    if (editId !== undefined) {
				console.log("This should be printed ideally when the edit button is clicked :::::");
				$('#edit_blog_modal').modal();
	      $('#edit_blog_modal').modal('open');

	      // fill form elements with selected contact info
	      $('#edit_blog_form').find('#blog_id').val(editBlog.id);
	      $('#edit_blog_form').find('#blog_owner').val(editBlog.owner);
	      $('#edit_blog_form').find('#blog_title').val(editBlog.title);
	      $('#edit_blog_form').find('#blog_description').val(editBlog.description);


	      // focus on the first field with a little delay so it won't mess-
	      // with modal focus
	      setTimeout(function() {
	        $('#edit_blog_form').find('#blog_title').focus();
	      },50);


	      // changing back to undefined so it prevent from opening the modal-
	      // everytime the view is rendering
	      this.state.editBlog.id = undefined;
	    }

		console.log("What is all Contacts ::::",this.state.allBlogs);
    return(
      <ul className="collection">
			<div> <ItemListHeader/> </div>

				<BlogList blogList={this.state.allBlogs}/>
				<EditBlogModal editContact={this.state.editBlog} />
				<BlogModal />
      </ul>

    );
  },

	_onChange: function() {
    this.setState(getBlogsState());

  },
  _initializeBlogs: function() {

		CMActions.allBlogs();
  }





});

module.exports = ItemList;


var AppDispatcher = require('../Dispatcher/dispatcher');
var CMConstants = require('../constants/CMConstants');

var CMActions = {

  /**
   * Saving new contact
   * @param {string} new contact object
   */
  create: function(newBlog) {
  	// adding avatar randomly!

    AppDispatcher.dispatch({
      actionType: CMConstants.CM_CREATE,
      owner: newBlog.owner,
      title: newBlog.title,
      description: newBlog.description

    });
  },
  /**
   * Opening modal to edit contact
   */
  edit: function(blog) {
    AppDispatcher.dispatch({
      actionType: CMConstants.CM_EDIT,
      id: blog.id,
      owner: blog.owner,
      title: blog.title,
      description: blog.description

    });
  },
  /**
   * Saving edited contact
   */
  save: function(blog) {
    AppDispatcher.dispatch({
      actionType: CMConstants.CM_SAVE,
      id: blog.id,
      owner: blog.owner,
      title: blog.title,
      description: blog.description

    });
  },

  /**
   * removing contact
   */
  remove: function(removeId) {
    AppDispatcher.dispatch({
      actionType: CMConstants.CM_REMOVE,
      id: removeId
    });
  },


  /**
  *   Getting all the contacts
  */

  allBlogs: function(){
    AppDispatcher.dispatch({
      actionType:CMConstants.GET_ALL_BLOGS
    })
  }


};

module.exports = CMActions;

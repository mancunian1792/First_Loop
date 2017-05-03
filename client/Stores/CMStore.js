
var AppDispatcher = require('../Dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var CMConstants = require('../constants/CMConstants');
var assign = require('object-assign');
import api from "axios";
import _ from "underscore";

var CHANGE_EVENT = 'change';

var _blogs = [];
var _editBlog = {};

// will be used to incremental id for contacts
var currentId = 0;

// saving new contact
function create(newBlog) {
  // _contacts[currentId] = {
  //   id: currentId,
  //   name: newContact.name,
  //   phone: newContact.phone,
  //   email: newContact.email,
  //   avatar: newContact.avatar
  // };
  // currentId+=1;
console.log("The new COntact before the api call is :::",newBlog)
var url ='api/blog_entries';

api.post(url,newBlog).then(response =>{
  console.log("::::::::::The contact was inserted successfully::::::::");
  allBlogs();
});

}

// sending edit id to controller view
function edit(blog) {
  _editBlog = {
    id: blog.id,
    owner: blog.owner,
    title: blog.title,
    description: blog.description

  };
}

// saving edited contact
function save(blog) {
  console.log("What is the contact that i received :::",blog);
  var currDate= new Date();
  var toPut={
      owner:blog.owner,
      title:blog.title,
      description:blog.description,
      updatedat:currDate


  }
  var url ='api/blog_entries/'+blog.id;
  api.put(url,toPut).then(response =>{

    console.log("The value has been updated ::::::");
    allBlogs();
  });
}

// removing contact by user
function remove(removeId) {

  var url ='api/blog_entries/'+removeId;

  api.delete(url).then(response =>{
      console.log("Deleted successfully");
      allBlogs();
  })
  .catch(function(e){
    console.log("Error is ::::",e);
  });

}

function allBlogs(){
  var url='api/blog_entries';
   api.get(url).then(response => {
     console.log("The data is :::",response.data);
      _blogs = response.data;
      CMStore.emitChange();
     });

}


var CMStore = _.extend({}, EventEmitter.prototype, {
  /**
   * Get the entire Contacts.
   * @return {object}
   */
  getEditContact: function() {
    return _editBlog;
  },
  getAll: function() {
    return _blogs;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var text;

  switch(action.actionType) {
    case CMConstants.CM_CREATE:
      text = action.owner.trim();
      if (text !== '') {
        create(action);

      }


      break;

    case CMConstants.CM_EDIT:
      edit(action);
      CMStore.emitChange();
      break;

    case CMConstants.CM_SAVE:
      save(action);
      CMStore.emitChange();
      break;

    case CMConstants.CM_REMOVE:
      remove(action.id);
      //CMStore.emitChange();
      break;

    case CMConstants.GET_ALL_BLOGS:
      allBlogs();



    default:
      // no op
  }
});

module.exports = CMStore;


var AppDispatcher = require('../Dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var CMConstants = require('../constants/CMConstants');
var assign = require('object-assign');
import api from "axios";

var CHANGE_EVENT = 'change';

var _contacts = [];
var _editContact = {};

// will be used to incremental id for contacts
var currentId = 0;

// saving new contact
function create(newContact) {
  // _contacts[currentId] = {
  //   id: currentId,
  //   name: newContact.name,
  //   phone: newContact.phone,
  //   email: newContact.email,
  //   avatar: newContact.avatar
  // };
  // currentId+=1;
console.log("The new COntact before the api call is :::",newContact)
var url ='api/contacts';

api.post(url,newContact).then(response =>{
  console.log("::::::::::The contact was inserted successfully::::::::");
  getAllRoles();
});

}

// sending edit id to controller view
function edit(contact) {
  _editContact = {
    id: contact.id,
    name: contact.name,
    phone: contact.phone,
    email: contact.email,
    avatar: contact.avatar
  };
}

// saving edited contact
function save(contact) {
  console.log("What is the contact that i received :::",contact);
  var toPut={
      name:contact.name,
      phone:contact.phone,
      email:contact.email


  }
  var url ='api/contacts/'+contact.id;
  api.put(url,toPut).then(response =>{

    console.log("The value has been updated ::::::");
    getAllRoles();
  });
}

// removing contact by user
function remove(removeId) {

  var url ='api/contacts/'+removeId;

  api.delete(url).then(response =>{
      console.log("Deleted successfully");
      getAllRoles();
  });

}

function getAllRoles(){
  var url='api/contacts';
   api.get(url).then(response => {
     console.log("The data is :::",response.data);
      _contacts = response.data;
      CMStore.emitChange();
     });

}


var CMStore = assign({}, EventEmitter.prototype, {
  /**
   * Get the entire Contacts.
   * @return {object}
   */
  getEditContact: function() {
    return _editContact;
  },
  getAll: function() {
    return _contacts;
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
      text = action.name.trim();
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

    case CMConstants.GET_ALL_ROLES:
      getAllRoles();

    default:
      // no op
  }
});

module.exports = CMStore;

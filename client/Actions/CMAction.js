
var AppDispatcher = require('../Dispatcher/dispatcher');
var CMConstants = require('../constants/CMConstants');

var CMActions = {

  /**
   * Saving new contact
   * @param {string} new contact object
   */
  create: function(newContact) {
  	// adding avatar randomly!

    AppDispatcher.dispatch({
      actionType: CMConstants.CM_CREATE,
      name: newContact.name,
      phone: newContact.phone,
      email: newContact.email

    });
  },
  /**
   * Opening modal to edit contact
   */
  edit: function(contact) {
    AppDispatcher.dispatch({
      actionType: CMConstants.CM_EDIT,
      id: contact.id,
      name: contact.name,
      phone: contact.phone,
      email: contact.email

    });
  },
  /**
   * Saving edited contact
   */
  save: function(contact) {
    AppDispatcher.dispatch({
      actionType: CMConstants.CM_SAVE,
      id: contact.id,
      name: contact.name,
      phone: contact.phone,
      email: contact.email

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

  allContacts: function(){
    AppDispatcher.dispatch({
      actionType:CMConstants.GET_ALL_ROLES
    })
  }


};

module.exports = CMActions;

import {EventEmitter} from "events";
import _ from "underscore";
import api from "axios";
import dispatcher from "../Dispatcher/dispatcher";


let roles=[];
const RoleStore = _.extend({}, EventEmitter.prototype, {

  addRolesListListener (callback) {
    this.on("change", callback);
  },
  removeRolesListListener (callback) {
    this.removeListener("change", callback);
  },
  emitChange () {
    console.log("-----coming here -------");
    this.emit("change");
  },




    createRole(data){
    // Setting the post object

    },


    getAllRoles(){
      return roles;
    }
});

    dispatcher.register(function (action) {
      //console.log("RoleStore received an action ::::"+JSON.stringify(action));
      switch(action.type){
        case "CREATE_ROLE":
          console.log("Inside the case ???");
          const data = action.data;
          var postData={
            "name":data.name,
            "description":data.description

          };
      // Call the post API to insert it to the DB..

      api.post('/api/roles',postData).then(function(response){
        console.log("Insert was successfull :::",response);
        RoleStore.emitChange();
      }).catch(function(err){
        console.log("Error happened due to :::",err)
      });
          // RoleStore.createRole(action.data);
          // this.emit("change");
        break;
        case "GET_ALL_ROLES":
          var url='http://localhost:3000/api/roles';
           api.get(url).then(response => {
              console.log("The data is :::"+JSON.stringify(response.data))
              roles=response.data;
              console.log("Roles are ::::",roles);
              //RoleStore.emitChange();
              return roles;
             });
        break;

    }
  });
// const roleStore = new RoleStore;
// dispatcher.register(RoleStore.handleAction);
// window.roleStore=roleStore;
// window.dispatcher=dispatcher;
export default RoleStore;

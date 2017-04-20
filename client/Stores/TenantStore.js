import {EventEmitter} from "events"
import api from "axios"
import dispatcher from "../Dispatcher/dispatcher"


class TenantStore extends EventEmitter{

    constructor(){
      super();
      this.getTenantList();
    }

    getTenantList(){
      this.tenants=[];
      var url='http://localhost:3000/api/tenants';
      api.get(url).then(response => {
          this.tenants=response.data;

          console.log("What is my response :::",this.tenants);
          this.emit("tenantChange");
        });

        return this.tenants;
    }


    getTenants(){
      return this.tenants;
    }


    handleAction(action){
      console.log("Action is :::"+action);

      
    }

}
const tenantStore = new TenantStore;
dispatcher.register(tenantStore.handleAction.bind(tenantStore));
window.tenantStore=tenantStore;
window.dispatcher=dispatcher;
export default tenantStore;

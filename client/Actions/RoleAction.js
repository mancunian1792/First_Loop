import dispatcher from "../Dispatcher/dispatcher";
export function createRole(data){
  dispatcher.dispatch({
    type:"CREATE_ROLE",
    data
  })
}

export function getAllRoles() {
  dispatcher.dispatch({
    type:"GET_ALL_ROLES"
  })
}

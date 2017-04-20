var React = require('react')
import { Link } from "react-router"
import * as RoleAction from "../Actions/RoleAction"

export default class CreateRoleComponent extends React.Component{

  constructor(){
    super();

    this.state={
      name:"",
      description:""
    }
  }

  createRole(){
    //console.log("Name is :::"+this.refs.name.value);
    //console.log("Description is :::"+this.refs.desc.value);
    RoleAction.createRole({name:this.refs.name.value,description:this.refs.desc.value})
  }



  render(){


    return(

      <div>
        <div>
          <label>Enter your name :</label>
          <input type="text" htmlFor="name" placeholder="Name here.." ref="name"/>
        </div>
        <div>
          <label>Enter the  description :</label>
          <input type="text" htmlFor="description" placeholder="Description here.." ref="desc"/>
        </div>
      <button onClick={this.createRole.bind(this)}>Create Role</button>
      </div>



    );


  }


}

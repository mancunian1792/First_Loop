var React = require('react')
import { Link } from "react-router"


export default class CreateRoleComponent extends React.Component{




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

      </div>



    );


  }


}

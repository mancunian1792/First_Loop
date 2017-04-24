var React = require('react')
import { Link } from "react-router"

export default class Navbar extends React.Component{

render(){


return(
<nav>
  <div className="nav-wrapper">
     <a href="#!" className=" right  ">Sample App</a>
    <ul className="left hide-on-med-and-down">
            <li><Link to="allItems" activeClassName="active"
            className="side-nav-btn">Home</Link></li>
            <li><Link to="createRole"
            className="side-nav-btn">Create Role</Link></li>
            <li><Link to="tenant"
            className="side-nav-btn">Timesheet</Link></li>

    </ul>
  </div>
</nav>


);




}






}

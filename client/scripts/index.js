var React = require('react');
var ReactDOM = require('react-dom')

import { Router,Route,IndexRoute , browserhashHistory}  from "react-router"
// import createHashHistory from 'history/lib/createHashHistory'
// const history=createHashHistory();

import RoleComponent from "../Components/RoleComponent"
import TenantComponent from "../Components/TenantComponent"
import CreateRoleComponent from "../Components/CreateRoleComponent"
import AppContainer from "../Components/AppContainer"



const reactDiv=document.getElementById('reactRoot');
// ReactDOM.render(<RoleComponent />,reactDiv);

 ReactDOM.render(
   <Router history = {browserhashHistory}>
       <Route path="/" component={AppContainer}>
            <IndexRoute component={TenantComponent} />
            <Route path="createRole" component={CreateRoleComponent}></Route>
            <Route path="tenant" component={TenantComponent}></Route>

       </Route>
   </Router>,
   reactDiv);

var React = require('react');
var ReactDOM = require('react-dom')

import { Router,Route,IndexRoute , browserhashHistory}  from "react-router"
// import createHashHistory from 'history/lib/createHashHistory'
// const history=createHashHistory();

import ItemList from "../Components/ItemList"
import CreateRoleComponent from "../Components/CreateRoleComponent"
import AppContainer from "../Components/AppContainer"



const reactDiv=document.getElementById('reactRoot');
// ReactDOM.render(<RoleComponent />,reactDiv);

 ReactDOM.render(
   <Router history = {browserhashHistory}>
       <Route path="/" component={AppContainer}>
            <IndexRoute component={ItemList} />
            <Route path="allItems" component={ItemList}></Route>
            <Route path="timesheet" component={CreateRoleComponent}></Route>


       </Route>
   </Router>,
   reactDiv);

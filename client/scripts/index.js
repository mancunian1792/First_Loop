var React = require('react');
var ReactDOM = require('react-dom')

import { Router,Route,IndexRoute , browserhashHistory}  from "react-router"
// import createHashHistory from 'history/lib/createHashHistory'
// const history=createHashHistory();

import ItemList from "../Components/ItemList"
import AppContainer from "../Components/AppContainer"
import TimeSheetContainer from "../Components/TimeSheetContainer"
import UploadCSVContainer from "../Components/UploadCSVContainer"

const reactDiv=document.getElementById('reactRoot');
// ReactDOM.render(<RoleComponent />,reactDiv);

 ReactDOM.render(
   <Router history = {browserhashHistory}>
       <Route path="/" component={AppContainer}>
            <IndexRoute component={ItemList} />
            <Route path="allItems" component={ItemList}></Route>
            <Route path="timesheet" component={TimeSheetContainer}></Route>
            <Route path= "readCsv" component={UploadCSVContainer}></Route>

       </Route>
   </Router>,
   reactDiv);

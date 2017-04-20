var React=require('react')
import Navbar from "./Navbar"

export default class AppContainer extends React.Component{


render(){

return(



  <div>
     <Navbar />
     <div>
          {this.props.children}
     </div>
  </div>

);

}


}

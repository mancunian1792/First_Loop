var React=require('react')
import Navbar from "./Navbar"
import Footer from "./Footer"

export default class AppContainer extends React.Component{


render(){

return(



  <div className="col s12">
     <Navbar className="row" />
     <main>
     <div className="container">
          {this.props.children}


     </div>
     </main>

  </div>

);

}


}

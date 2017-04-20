var React = require('react');
import api from "axios";
import TenantStore from "../Stores/TenantStore"


export default class TenantComponent extends React.Component{


  constructor(props){
      super(props);
      this.state={tenants:[]};
  }

  componentDidMount(){



    this.setState({tenants:TenantStore.getTenants()})

    TenantStore.on("tenantChange",() => {
      console.log("Roles inside emit change :::",TenantStore.getTenants());
      this.setState({
        tenants:TenantStore.getTenants()
      })
    })

  }



  render(){
    var tenantList = this.state.tenants.map(function(tenant,index){
                       return (
                         <tr key={index}>
                            <th>{tenant.name}</th>
                            <th>{tenant.companyname}</th>

                         </tr>
                       )
                     })
    return(
      <div>

        <span> List of all Tenants</span>
        <table>
          <tbody>
            {tenantList}
          </tbody>
        </table>

      </div>
    );
  }
}

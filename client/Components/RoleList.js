var React=require('react')


function getContactsState() {
  return {
    allContacts: CMStore.getAll(),
    editContact: CMStore.getEditContact()
  };
}

export default class RoleList extends React.Component{



  render(){

      return(

            <ContactList data={this.state.allContacts}/>
      )

  }


}

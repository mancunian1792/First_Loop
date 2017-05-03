var React = require('react');

var UploadCSVContainer = React.createClass({


render:function(){



return(

  <div className="input-field">

      <input type="file" ref="file" />
  </div>



);



}

});


module.exports = UploadCSVContainer

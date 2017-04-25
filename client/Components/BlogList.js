var React = require('react');
var Blog = require('./Blog');

var BlogList = React.createClass({



	render:function() {
		console.log(" static contacts ::::",this.props.blogList);

		var blogs = this.props.blogList.map(function(blog,index){
				return(

						<Blog key={index} oneBlog={blog} />

				)
		});

		return(<ul className="collection">{blogs}</ul>);
	}
});

module.exports = BlogList;

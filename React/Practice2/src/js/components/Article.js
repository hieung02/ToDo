import React from 'react';


export default class Article extends React.Component{
	render(){
		// console.log('Article: ')
		// console.log(this.props)
		const { title } = this.props;
		
		return(
			<div class='col-md-4'>
				<h4>{title}</h4>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eius dolores, sunt, sit quisquam qui quam cupiditate nihil. Consectetur eveniet quas dolores dolore repellendus blanditiis, incidunt placeat architecto qui sed.</p>
				<a href='#' class='btn btn-default'>More Info</a>

			</div>

		);
	};
}




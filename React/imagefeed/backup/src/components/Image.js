import  React, { Component } from 'react';

class Image extends Component{
	render(){
		console.log('Image Component:')
		return(
			<div>
				{this.props.images}
			</div>
		);
	}
}

export default Image
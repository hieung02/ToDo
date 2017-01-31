import React from 'react';

export default class Title extends React.Component{

	render(){
		return(
  		<label class="control-label" for="inputSmall">{this.props.title}</label>
		);
	}
}
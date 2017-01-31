import React from 'react';

import Title from './Title';

export default class Header extends React.Component{
	
	handleChange(e){
		const title = e.target.value;
		this.props.changeTitle(title);
	}

	render(){
		return(
			<div class="form-group">
				<Title title={this.props.title} />
				<input class="form-control input-sm" type="text" id="inputSmall" onChange={this.handleChange.bind(this)} />
			</div>
		)
	}
} 
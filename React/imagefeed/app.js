import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Images from './Images';

class App extends Component{
	render(){
		return(
			<div>
				This is the React App
				<Images />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));


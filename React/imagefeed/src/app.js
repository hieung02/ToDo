import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ImageGallery from './components/ImageGallery';

class App extends Component{
	render(){
		return(
			<div>
				This is the React App
				<ImageGallery />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));


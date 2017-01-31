import React from 'react';
import { Link } from 'react-router';

import Footer from '../components/layout/Footer';
import Nav from '../components/layout/Nav';


export default class Layout extends React.Component{
	
	render(){
		const { location } = this.props;
		const containerStyle = {
			marginTop: '60px'
		};

		// console.log('Layout Location: ');
		// console.log(this.props.children);

 		return(
			<div>
				<Nav location={location}/>
				
				<div class='container' style={containerStyle}>
					<div class='row'>
						<div class='col-lg-12'>
							<h1>KillerNews.net</h1>

							{this.props.children}

						</div>
					</div>

					<br />
					<Footer />
				</div>

			</div>
		);
	}
}



/*
navigate(){
	console.log(this.props.history.pushState(null,'/')); //pushState() pushes the history states to Feature ('Back' button works)
	console.log(this.props.history.replaceState(null,'/')); //replaceState() will not have 'Back' button
}

{this.props.children} 
	=> <Route path='/' component={Layout}>
			<IndexRoute  component={Featured}></IndexRoute> (Layout's children)
			<Route path='archives(/:article)' component={Archives}></Route> (Layout's children)
			<Route path='settings' component={Settings}></Route> (Layout's children)
		 </Route>

activeClassName='test' => w/ <Link></Link> component
	=> eg. <Link to='archives' class='btn' activeClassName='test'>archives</Link>

EXAMPLE
export default class Layout extends React.Component{
	constructor(){
		super();
		this.state = {
			title: 'Welcome'
		};
	}

	navigate(){
		this.props.history.replaceState(null,'/');
	}

	render(){
		console.log('Layout: ');//React Route Object 
		console.log(this.props);//React Route Object
		
		const { history } = this.props;
		console.log(history.isActive('archives'));
		
		return(
			<div>
				<h1>KillerNews.net</h1>
				{this.props.children}
				<Link to='archives' class='btn' activeClassName='test'>archives</Link>
				<Link to='settings' class='btn'>settings</Link>
				<button class='btn' onClick={this.navigate.bind(this)}>Home</button>

			</div>
		);
	}
}

*/

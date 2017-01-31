import React from 'react';

import Article from '../components/Article';
import Featured from './Featured';

export default class Archives extends React.Component{
	constructor(){
		super();
		this.state={
			articles:[
				"Some Article",
	      "Some Other Article",
	      "Yet Another Article",
	      "Still More",
	      "Fake Article",
	      "Partial Article",
	      "American Article",
	      "Mexican Article"
			]
		}
	}

	// getArticle(){


	// }
	render(){
		// console.log('Archives: ');//React Route Object
		// console.log(this.props);//React Route Object

		const {query } = this.props.location; //pull query out of location
		const { params } = this.props;
		const { article } = this.props.params;
		const { date, filter } = query;
		console.log('Archive: ');
		console.log(this.state.articles);
		
		const Articles = this.state.articles.map((title, i) => <Article key={i} title={title} />);
		

		return(
			<div>
				<h1>Archives</h1>
				article: {article}, date: {date}, filter: {filter}
				<div class='row'>{Articles}</div>
				<Featured name={this.state.articles} />
			</div>
		);
	}
}

/*
<h2>Heading Test 1</h2>
				<p class="lead thumbnail">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

				<h2>Heading 2</h2>
				<p class="lead thumbnail">Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

				<h2>Heading 3</h2>
				<p class="lead thumbnail">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

				

				<form class="form-inline">
				  <div class="form-group">
				    <label class="sr-only" for="date">Date: </label>
				    <input type="text" class="form-control" id="date" placeholder='Date'/>
				  </div>
				  <div class="form-group">
				    <label class="sr-only" for="filter">Filter: </label>
				    <input type="text" class="form-control" id="filter" placeholder="keyword"/>
				  </div>
				  <button type="submit" class="btn btn-default">Search Article</button>
				</form>




*/
import React from 'react';
import Article from '../components/Article'; // Archives extract article
import Archives from './Archives';

export default class Featured extends React.Component{
	constructor(){
		super();
		this.state={
			adText:[
		    "Ad spot #1",
		    "Ad spot #2",
		    "Ad spot #3",
		    "Ad spot #4",
		    "Ad spot #5",
	    ]
		}
	}
	// const test = Archives.map((title, i) => <Featured key={i} title={title} />)
	render(){
		const ad = this.state.adText;
  	const randomAd = ad[Math.round(Math.random()*(ad.length) )];
  	console.log('featured: ')
		
		console.log(this.prop.name)



		return(
			<div>
				<div class='row'>
					<div class='col-lg-12'>
						<div class='well text-center'>
							{randomAd} 
						</div>
					</div>
				</div>

							
				
			</div>
		);
	}
}

/*
<div class='row'>{test}</div>
*/

import  React, { Component } from 'react';

class Image extends Component{

	render(){
		const list = this.props.images.map((image, i) => {
			return(
				<li className='imageBox' key={i}>
					<a href={image.secure_url}>
						<img src={image.secure_url} />
					</a>
					<br />
					<a href='#' id={i} onClick={this.props.removeImage} alt='remove image'> remove</a>
				</li>
			)
		});
		
		return(
			<ul>
				{ list }
			</ul>
		);
	}
}

export default Image


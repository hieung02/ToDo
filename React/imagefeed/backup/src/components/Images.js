import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import sha1 from 'sha1';
import superagent from 'superagent';
import Image from './Image';

class Images extends Component{

	constructor(){
		super()
		this.state={
			images:[]
		}
	}
	
	uploadFile(files){
		console.log('uploadFile: ');
		const image = files[0]

		const cloudName = 'dlqm0js0m';
		const url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/image/upload';

		const timestamp = Date.now()/1000; // Cloudninary must be in second
		const uploadPreset = 'ldwlc3ge';

		const paramsStr = 'timestamp='+timestamp+'&upload_preset='+uploadPreset+'HUkbW75mY5iShSYabDUemzNb-_Y';

		const signature = sha1(paramsStr);
		const params={
			'api_key': '936231253683263',
			'timestamp': timestamp,
			'upload_preset': uploadPreset,
			'signature': signature
		};

		let uploadRequest = superagent.post(url);
		uploadRequest.attach('file', image);

		Object.keys(params).forEach((key) => {
			uploadRequest.field(key, params[key]);
		});

		uploadRequest.end((err, resp) => {
			if(err){{

			}
				alert(err);
				return;
			}
			console.log('UPLOAD COMPLETE: ' + JSON.stringify(resp.body));
			const uploaded = resp.body;

			let updatedImages = Object.assign([],this.state.images); //copy the array object

			updatedImages.push(uploaded); //pushes the uploaded image to updatedImages

			this.setState({
				images: updatedImages //refreshes the state.images
			});
		});
	}

	removeImage(index){
		let updatedImages = Object.assign([],this.state.images); //copy the array object

		updatedImages.splice(e.target.id, 1); //pushes the uploaded image to updatedImages

		this.setState({
			images: updatedImages //refreshes the state.images
		});
	}

	render(){
		const list = this.state.images.map((image, i) => {
			return(
				<li key={i}>
					<img src={image.secure_url} style={{width: 72}}/>
					<br/>
					<a href='#' id={i} onClick={this.removeImage.bind(this)} alt='remove image'>remove</a>
				</li>
			)
		});
		return(
			<div>
				<br />
				<Dropzone onDrop={this.uploadFile.bind(this)} />
				<ol>
					{ list }
				</ol>
				<Image images={this.state.images} />
			</div>
		)
	}
}

export default Images
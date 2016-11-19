// document.forms

// document.getElemntById('cart-oil').addEventListener('submit', estimateTotal);//addEventListener listens for "submit" event and call the function.

// function estimateTotal(event){
// 	event.preventDefault();//do not do what you normally do. Do what I want you to do?
// 	//console.log('You got here safely.');
// 	if(document.getElemntById('s-state').value === ""){
// 		alert('Pleae choose your shipping state.');
// 		document.getElementById('s-state').focus();//trigger an event to happen.
// 	}

// 	var bltExtra = document.getElemntById(), 
// 	bltCold, 
// 	btlGarlic, 
// 	state, 
// 	shippingMethod;

// 	for(var i = 0; i< methods.length; i++){
// 		if(methods[i].checked === true) {
// 			shippingMethod = methods[i].value;
// 		}
// 	}

// 	if (state === 'CA'){
// 		taxFactor = 1.075;
// 	}

// 	var estimate = (btlExtra * 10) + (btlCold * 8) + (bbtlGarlic *10);
// 	document.getElemntById('txt-estimate').value = estimate; 
// }

function Car(model, year, mileage){
	this.model = model;
	this.year = year;
	this.mileage = mileage;
	this.getModel = function(){return model;};
	this.getYear = function(){return year;};
	this.getMileage = function(){return year;};
	this.setModel = function(x){model = x;};
	this.setYear = function(x){year = x;};
	this.setMileage = function(x){mileage = x;};
}

function Car1(model, year, mileage){
	var model = undefined;
	var year = undefined;
	var mileage = undefined;
	
	return{
		getModel = function(){return model},
		getYear = function(){return year},
		getMileage = function(){return year},
		setModel = function(x){model = x;},
		setYear = function(x){year = x;},
		setMileage = function(x){mileage = x;}
	}
}		




































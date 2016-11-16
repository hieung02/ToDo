function Car(mdl, yr, mlg){
	// var model = undefined;
	// var year = undefined;
	// var mileage = undefined;

	var model = mdl;
	var year = yr;
	var mileage = mlg;

	return{
		getModel: function(){
			return model;
		},
		setModel: function(mdl){
			 model = mdl;
		},
		getYear: function(){
			return year;
		},
		setYear: function(yr){
			 year = yr;
		},
		getMileage: function(){
			return mileage;
		},
		setMileage: function(mlg){
			 mileage = mlg;
		}
	};
}



var data = document.getElementsByTagName("input"); 
/*data=
HTMLCollection[4]
0:input#model
1:input#year
2:input#mileage
3:input#submit
length:4
*/
var obj

data[data.length-1].addEventListener("click", function(){
	  debugger
		var model = data[0].value; //Subura
		var year = data[1].value; //1998
		var mileage = data[2].value; //150000

		obj = new Car(model, year, mileage); //Car(Subura, 1998, 150000)
		
})





// function createCarObj(){

// 	var model = Car(model, year, mileage);
// }





// var model = document.getElementById(model); 
// var year = document.getElementById(year);
// var mileage = document.getElementById(mileage); 
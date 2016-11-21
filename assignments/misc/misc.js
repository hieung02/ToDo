// console.log("Numbers btw -10 and 19");
// for(var i= -10; i < 20; i++){
// 	console.log(i);
// }


// console.log("Even numbers btw 10 and 40");
// for(var i = 10; i < 41; i++){
// 	if(i%2 === 0){
// 		console.log(i);
// 	}
// }


// console.log("Odd numbers btw 300 and 333");
// for(var i = 300; i < 334; i++){
// 	if(i%2 !== 0){
// 		console.log(i);
// 	}
// }

// console.log("Divisible by 5 and 3 numbers btw 5 and 50");
// for(var i = 5; i < 51; i++){
// 	if(i%5 === 0 && i%3 === 0){
// 		console.log(i);
// 	}
// }

// (function singSong(){
// 	console.log("Twinkle, twinkle, little stars. \nHow I wonder what you are! \nUp above the world so high, \nLike a diamond in the sky.");	
// })();


//console.log("printReverse() - takes array arg and print out element in reverse order.");
function printReverse(arr){
	// arr.forEach(function(ele, i){
	// 	console.log(arr[(arr.length-1)-i]);
	// });
//for loop is better than forEach in this case.
	for (var i = arr.length -1; i >= 0; i--){
		console.log(arr[i]);
	}
}


//console.log("isUniform() - takes array arg return true if all elements are identical.");
function isUniform(arr){
		//ele = next ele?
		//if ele !== next ele => false
  var first = arr[0];
  for(var i = 1; i < arr.length; i++){
  	if(arr[i] !== first){
  		return false;
  	}
  }
  return true;
}




function sumArray(arr){
	var sum = 0;
	arr.forEach(function(ele){
		sum += ele;
	});
	return sum;
}


function max(arr){
	var maxNum = 0;
	arr.forEach(function(ele, i){
		ele >= maxNum ? maxNum = ele : maxNum;
	});
	return maxNum;
}











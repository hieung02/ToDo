// var movieTitle = ["KungFu Panda","Trumbo","Spirited Away","Doctor Stranger"];
// var rating = ["3 stars","4.6 stars","4.8 stars","3 stars"];
// var hasWatched = ["yes","yes","yes","no"];
//STUPID!!
// movieDB={
// 	title: movieTitle,
// 	rating: rating,
// 	hasWatched: hasWatched
// };

// //output: You have watched "In Bruges" - 5 stars

// (function(obj){
// 	//check if hasWatched = yes
// 	//pull movieTitle
// 	//pull rating
// 	for (var i = 0; i < hasWatched.length; i++){
// 		if(obj.hasWatched[i] !== "yes"){
// 			console.log("You have not watched \"" + obj.title[i] + "\" - " + obj.rating[i]);
// 		}else{
// 		 console.log("You have watched \"" + obj.title[i] + "\" - " + obj.rating[i]);
// 		}
// 	}
// }(movieDB));

var movies = [
	{
		title: "KungFu Panda",
		hasWatched: true,
		rating: "3 stars"
	},
	{
		title: "Trumbo",
		hasWatched: true,
		rating: "4.6 stars"
	},
	{
		title: "Spirited Away",
		hasWatched: true,
		rating: "4.8 stars"
	},
	{
		title: "Doctor Stranger",
		hasWatched: false,
		rating: "3 stars"
	}
];


// (function(arr){
// 	//check if hasWatched = yes
// 	//pull movieTitle
// 	//pull rating
// 	arr.forEach(function(obj){
// 		if(!obj.hasWatched){
// 			console.log("You have not watched \"" + obj.title + "\" - " + obj.rating);	DRY!!!
// 		}else{
// 			console.log("You have watched \"" + obj.title + "\" - " + obj.rating); DRY!!
// 		}
// 	});
// }(movies));

// !!DRY!!!

movies.forEach(function(movie){
	console.log(builtString(movie));
});

function builtString(movie){
	var result = "You have ";
	if(!movie.hasWatched){
		result += "not watched ";	
	}else{
		result += "watched ";
	}
	result += " \"" + movie.title + "\" - " + movie.rating;
	return result;
}
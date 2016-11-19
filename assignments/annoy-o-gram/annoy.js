var answer = prompt("Are we there yet?").toLowerCase();

(function checkResponse(answer){
	if(typeof(answer.indexOf("no")) === "number"  && answer.indexOf("no") !== -1){
		answer = prompt("How about now? Are we there yet?").toLowerCase();
		checkResponse(answer);
	}else if (typeof(answer.indexOf("yes")) === "number" && answer.indexOf("yes") !== -1){
		console.log("Yay! We arrived!!").toLowerCase();
	} else{
		answer = prompt("Dude, that's gibberish. I am not program to understand that...just saying...").toLowerCase();
		checkResponse(answer);
	}
})(answer);


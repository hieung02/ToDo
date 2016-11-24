var buttons = document.querySelectorAll("button");
var scoreBoard = document.getElementById("scoreBoard");
var gameCount = document.getElementById("gameCount");
var setGame = document.getElementById("setGame");
var p1Score = 0;
var p2Score = 0;


//count nth game
setGame.addEventListener("change",function() {
	gameCount.textContent = "Playing To: " + Number(setGame.value);
});

for (var i = 0; i < buttons.length; i++){

	buttons[i].addEventListener("click", function() {

	var clickedButton = this;
	var player1 = document.getElementById("p1");
	var player2 = document.getElementById("p2");
	var reset = document.getElementById("reset");
	var game = Number(setGame.value);
	var score = p1Score + " To " + p2Score;

		if( p1Score < game && p2Score < game){
		 if (player1 === clickedButton){	
				p1Score += 1;	
			}else if (player2 === clickedButton){	
				p2Score += 1;	
			}else{
				p1Score = 0;
				p2Score = 0;
			}

			clickedButton.classList.add("clickBlue");
		  
		  setInterval(function() {
		  	clickedButton.classList.remove("clickBlue");
		  	}, 200);

		  //update score board
		  score = p1Score + " To " + p2Score;
		  scoreBoard.textContent = score;
		}

		if(p1Score === game || p2Score === game){
			p2Score > p1Score ? scoreBoard.textContent = score + ": Player Two won." : scoreBoard.textContent = score + ": Player One won.";
		}

	});		  
}
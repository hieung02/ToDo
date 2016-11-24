var player1 = document.getElementById("p1");
var player2 = document.getElementById("p2");
var reset = document.getElementById("reset");
var scoreBoard = document.getElementById("scoreBoard");
var gameCount = document.getElementById("gameCount");
var setGame = document.getElementById("setGame");
var p1Score = 0;
var p2Score = 0;


//count nth game
setGame.addEventListener("change",()=>{
	
	if(Number(setGame.value) >= 0){
		gameCount.textContent = "Playing To: " + Number(setGame.value);
	}

});

//add point to player1 and player2
player1.addEventListener("click", ()=>{
	if( p1Score < Number(setGame.value) && p2Score < Number(setGame.value)){	
		p1Score += 1;
		//update score board
		scoreBoard.textContent = p1Score + " To " + p2Score;
	}
  player1.classList.add("clickBlue");
  
  setInterval(()=>{
  	player1.classList.remove("clickBlue");
  }, 200);

});

player2.addEventListener("click", ()=>{
	if(p1Score < Number(setGame.value) && p2Score < Number(setGame.value)){	
		p2Score += 1;
		scoreBoard.textContent = p1Score + " To " + p2Score;
	}
	
	player2.classList.add("clickBlue");

	setInterval(()=>{
  	player2.classList.remove("clickBlue");
  }, 200);

});

//reset game
reset.addEventListener("click", ()=>{
	p1Score = 0;
	p2Score = 0;
	scoreBoard.textContent = p1Score + " To " + p2Score;

	reset.classList.add("clickBlue");

	setInterval(()=>{
  	reset.classList.remove("clickBlue");
  }, 200);
});








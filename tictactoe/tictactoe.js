var boxSelected = document.getElementsByClassName("tGame");
													// .onclick = ()=>{ return this.id;} ;


var player ="X";



var xRange = [];
var oRange = [];
var xPoints = 0;
var oPoints = 0;

// 123 147 357
// 456 258 159
// 789 369


trackXPoints = ()=>{
	xRange.map((el)=>{
		if (el === 1 || el === 2 || el === 3){
			xPoints += 1;
			if (xPoints === 3){
				return console.log("Congratulation! X player won the game!");
			}		
		}else if (el === 1 || el === 4 || el === 7){
			// xPionts = 0;
			xPoints += 1;
			if (xPoints === 3){
				return console.log("Congratulation! X player won the game!");
		  }else if (el === 1 || el === 5 || el === 9){
				xPoints += 1;
				if (xPoints === 3){
					return console.log("Congratulation! X player won the game!");
				}else if (el === 2 || el === 5 || el === 8){
					xPoints += 1;
					if (xPoints === 3){
						return console.log("Congratulation! X player won the game!");
					}else if (el === 3 || el === 5 || el === 7){
						xPoints += 1;
						if (xPoints === 3){
							return console.log("Congratulation! X player won the game!");
						}else if (el === 3 || el === 6 || el === 9){
							xPoints += 1;
							if (xPoints === 3){
								return console.log("Congratulation! X player won the game!");
							}else if (el === 4 || el === 5 || el === 6){
								xPoints += 1;
								if (xPoints === 3){
									return console.log("Congratulation! X player won the game!");
								}else if (el === 7 || el === 8 || el === 9){
									xPoints += 1;
									if (xPoints === 3){
										return console.log("Congratulation! X player won the game!");
								}
					  	}
					  }
					 }
					}
				}
			}
		}			  		 
	});
};



for (var i = boxSelected.length-1; i >= 0; i--){
	boxSelected[i].addEventListener('click', function(){
		if (this.innerText === "" && player === "X"){
				this.innerText = "X";
				this.style.color = "black";
				xRange.push(Number(this.getAttribute('id')));
				if (xRange.length >=3){
					trackXPoints();
				}
				player ="O";
		}else if (this.innerText === "" &&player === "O"){
				this.innerText = "O";
				this.style.color = "orange";
				oRange.push(Number(this.getAttribute('id')));
				player ="X";
		}
	});	
}




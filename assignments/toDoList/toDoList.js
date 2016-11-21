var task = prompt("What would you like to do?").toLowerCase();
var activityList = [];

(function toDoList(task){
	switch(task){
		case "list":
			if(activityList[0] === undefined){
				console.log("***********************************");
				console.log("Todo list is empty");
				console.log("***********************************");
				task = prompt("Would you like to add a 'new' task or 'quit'?").toLowerCase();
				toDoList(task);
			}else{
				console.log("***********************************");
				activityList.forEach(function(ele, i){
					console.log(i + ": " + ele);
				});
				console.log("***********************************");
				task = prompt("That's your Todo List. Now, what would you like do?\n Add a 'new' task, 'delete' a task, or 'quit'?").toLowerCase();
				toDoList(task);
			}
			break;
		case "new":
			var newTask = prompt("What is the task?");
			activityList.push(newTask);
			console.log("***********************************");
			console.log(newTask + " is added to Todo list.");
			console.log("***********************************"); 
			task = prompt("What would you like to do now.\n1) View Todo 'list'\n2) Add another 'new' task\n3)'delete' a task\n4) 'quit'").toLowerCase();
			toDoList(task);
			break; 
		case "delete":
			if(activityList[0] === undefined){
				toDoList("list");
			} else{
				console.log("***********************************");
				activityList.forEach(function(ele, i){
						console.log(i + ": " + ele);
				});
				console.log("***********************************");
				var deleteTask = prompt("Please enter which todo would you like to remove.");
				var deletedTask = activityList.splice(Number(deleteTask),1);
				task = prompt("\"" + deletedTask + "\"" +" is deleted. What would you like to do now.\n1) View Todo 'list'\n2) Add another 'new' task\n3)'delete' another task\n4) 'quit'").toLowerCase();
				toDoList(task);
			}
			break;
		case "quit":
			console.log("***********************************");
			console.log("Ok, you quited from Todo List.")
			console.log("***********************************");
			break;
		default:
			task = prompt("I don't understand. What would you like to do.\n1) View Todo 'list'\n2) Add another 'new' task\n3)'delete' a task\n4) 'quit'").toLowerCase();
			toDoList(task);
	}
})(task);
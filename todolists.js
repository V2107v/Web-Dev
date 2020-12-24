var todo = [];

window.setTimeout(function() {

	var input = prompt("What would you like to do?");

	while (input != "quit") {

		if(input === "list"){
			todo.forEach(function(todos,i) {
				console.log(i + ":" + todos);
			});			
		} else if (input === "new") {
			var newToDo = prompt("Enter new ToDo");
			todo.push(newToDo);
			console.log("Added To-Do");
		} else if (input === "delete") {
			var index = prompt("Enter the index to be deleted");
			todo.splice(index,1);
			console.log("Deleted To-Do");
		}

		input = prompt("What would you like to do?");

	}
	console.log("OK, You Quit the App");

}, 500);

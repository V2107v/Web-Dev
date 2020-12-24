var secretNumber = 4;

var guess = prompt("Guess a number");


if(secretNumber === Number(guess)) {
	alert("You got it right");
} else if (secretNumber >= Number(guess)) {
	alert("Too Low!!");
} else {
	alert("Too High!!");
}
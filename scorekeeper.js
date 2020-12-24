window.setTimeout(function() {

	var p1 = document.querySelector("#p1");
	var p2 = document.querySelector("#p2");
	var p1Display = document.querySelector("#p1display");
	var p2Display = document.querySelector("#p2display");
	var input = document.querySelector("input");
	var maxscoredisplay = document.querySelector("p span");
	
	var p1Score = 0;
	var p2Score = 0;

	var gameOver = false;
	var winningScore = 5;


	p1.addEventListener("click",function() {
		if(!gameOver) {
			p1Score++;

			if(p1Score === winningScore) {
				p1display.classList.add("winner");
				gameOver = true;
			}
		}
		
		p1Display.textContent = p1Score;
	});

	p2.addEventListener("click",function() {
		if(!gameOver) {
			p2Score++;

			if(p2Score === winningScore) {
				p2display.classList.add("winner");
				gameOver = true;
			}
		}
		
		p2Display.textContent = p2Score;
	});

	reset.addEventListener("click",function() {
		p1Display.textContent = 0;
		p1Score = 0;
		p2Display.textContent = 0;
		p2Score = 0;
		p1Display.classList.remove("winner");
		p2Display.classList.remove("winner");
		gameOver = false;
	});

	input.addEventListener("change", function() {
		maxscoredisplay.textContent = Number(input.value);
		winningScore = Number(input.value);
	})
	
}, 500);
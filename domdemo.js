// window.setTimeout(function() {

// 	var body = document.querySelector("body");
// 	var isWhite = true;

// 	document.querySelector("button").addEventListener("click",function(){
// 		if(isWhite) {
// 			body.style.background = "purple";
// 			// isWhite = false;
// 		} else {
// 			body.style.background = "white";
// 			// isWhite = true;
// 		}
// 		isWhite = !isWhite;

// 	});
	
// }, 500);

window.setTimeout(function() {

	var body = document.querySelector("body");

	document.querySelector("button").addEventListener("click",function(){
		body.classList.toggle("purple");

	});
	
}, 500);
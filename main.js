
// ORGINAL FUNCTION
// function changeBG(element,color){
// 	var element = document.getElementById(element);
// 	element.style.transition = "background 1.0s linear 0s";
// 	element.style.background = color;
// }

// CURRENT FUNCTION
document.getElementById("btn1").addEventListener('click', function() {
	document.body.style.backgroundColor = "#757899"
	document.body.style.transition = "background 1.5s linear 0s"
})

// HUGE HELP FROM CHRIS!

document.getElementById("btn2").addEventListener('click', function() {
	document.body.style.backgroundColor = "#FEFFEF"
	document.body.style.transition = "background 1.5s linear 0s"
})



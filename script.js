const cursor = document.querySelector(".cursor");
const box = document.querySelector(".box")
var timeout;

//follow cursor on mousemove
box.addEventListener("mousemove", (e) => {
	let x = e.pageX;
	let y = e.pageY;


	cursor.style.top = y + "px";
	cursor.style.left = x + "px";
	cursor.style.display = "block";

});


document.addEventListener("mouseout", () => {
	cursor.style.display = "none";
});



// 	box.addEventListener("mousemove", getMouse); 

// var eyepos = { x: 0, y: 0 };

// setInterval(followMouse, 50);

// var mouse = { x: 0, y: 0 }; //mouse.x, mouse.y

// function getMouse(e) {
// 	mouse.x = e.pageX;
// 	mouse.y = e.pageY;
// }

// function followMouse() {
// 	var distX = mouse.x - eyepos.x;
// 	var distY = mouse.y - eyepos.y;
// 	eyepos.x += distX / 5;
// 	eyepos.y += distY / 2;

// 	cursor.style.left = eyepos.x + "px";
// 	cursor.style.top = eyepos.y + "px";
//     cursor.style.display = "block";
// }
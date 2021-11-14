const cursor = document.querySelector(".cursor");
const box = document.querySelector(".box");
const svg = document.querySelector("svg");

//follow cursor on mousemove
// box.addEventListener("mousemove", (e) => {
// 	let x = e.pageX *;
// 	let y = e.pageY;

// 	cursor.style.top = y + "px";
// 	cursor.style.left = x + "px";
// 	cursor.style.display = "block";
//     svg.style.display = "block";

// });


let mouseX = 0,
	mouseY = 0;
let xp = 0,
	yp = 0;

box.addEventListener("mousemove", function (e) {
	mouseX = e.pageX ;
	mouseY = e.pageY ;
});

setInterval(function () {
	xp += (mouseX - xp) / 5;
	yp += (mouseY - yp) / 5;
	cursor.style.top = yp + "px";
	cursor.style.left = xp + "px";
	cursor.style.display = "block";
	svg.style.display = "block";
}, 20);


box.addEventListener("mouseout", () => {
	svg.style.display = "none";
});
const cursor = document.querySelectorAll(".cursor");
const box = document.querySelectorAll(".box");
const svg = document.querySelectorAll("svg");

//follow cursor on mousemove
// box.addEventListener("mousemove", (e) => {
// 	let x = e.pageX ;
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

box.forEach(function (item) {
	item.addEventListener("mousemove", function (e) {
		mouseX = e.pageX;
		mouseY = e.pageY;
	});
});

setInterval(function () {
	xp += (mouseX - xp) / 5;
	yp += (mouseY - yp) / 5;
	cursor.forEach(function (c) {
		c.style.top = yp + "px";
		c.style.left = xp + "px";
		c.style.display = "block";
	});

	svg.forEach(function (s) {
		s.style.display = "block";
	});
}, 20);

box.forEach(function (item) {
	item.addEventListener("mouseout", () => {
		svg.forEach(function (s) {
			s.style.display = "none";
		});
	});
});

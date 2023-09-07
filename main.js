const canvas = document.getElementById('micanvas');
const ctx = canvas.getContext('2d');
const mouse = document.querySelectorAll('span');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let largo = canvas.width;
let alto = canvas.height;

const hojas = new Image();

hojas.src = 'palma.png';

let lado = largo / 35;
let inverso = false;
// 22 cuadros
for (var i = 0; i < 4; i++) {
	for (let j = 0; j < 35; j++) {
		if (j % 2 == 0) {
			if (inverso) {
				ctx.fillStyle = '#C06000';
			} else {
				ctx.fillStyle = '#602000';
			}
		} else {
			if (inverso) {
				ctx.fillStyle = '#602000';
			} else {
				ctx.fillStyle = '#C06000';
			}
		}
		ctx.fillRect(0 + lado * j, alto - lado * (1 + i), lado, lado);
	}
	if (inverso) {
		inverso = false;
	} else {
		inverso = true;
	}
}

ctx.fillStyle = 'rgb(0,0,0,0.7)';
ctx.fillRect(0, 20 + alto - lado * i, largo, 30);

ctx.fillStyle = '#006000';
ctx.fillRect(0, alto - lado * i, largo, 20);

ctx.fillStyle = '#40A000';
ctx.fillRect(0, alto - 20 - lado * i, largo, 20);

ctx.fillStyle = '#80E000';
ctx.fillRect(0, alto - 40 - lado * i, largo, 20);
//#40A000

ctx.fillStyle = '#804000';
ctx.fillRect(largo / 2, alto - alto / 2 - 40 - lado * i, 20, alto / 2);
ctx.fillRect(0, alto - alto / 2 - 40 - lado * i, 20, alto / 2);

ctx.lineWidth = 5;
ctx.strokeStyle = 'yellow';
ctx.beginPath();
ctx.arc(150, alto - 100 - lado * i, 40, 0, Math.PI * 2, true);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.arc(300, alto - 100 - lado * i, 40, 0, Math.PI * 2, true);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.arc(450, alto - 100 - lado * i, 40, 0, Math.PI * 2, true);
ctx.closePath();
ctx.stroke();

hojas.onload = function () {
	ctx.drawImage(hojas, -120, 55, 300, 300);
	ctx.drawImage(hojas, largo / 2 - 120, 55, 300, 300);
};

let d = 25;
ctx.beginPath();
ctx.lineWidth = 2;
ctx.arc(largo / 2 + 300, alto / 2, d, 0, 2 * Math.PI);
ctx.fillStyle = '#40A000';
ctx.fillRect(largo / 2 + 295, alto - 100 - 40 - lado * i, 10, 100);

ctx.fill();

for (var i = 0; i < 50; i++) {
	var angle = (i * Math.PI) / 25;
	var x1 = largo / 2 + 300 + d * Math.cos(angle);
	var y1 = alto / 2 + d * Math.sin(angle);
	if (i % 2 == 0) {
		var x2 = x1 + 15 * Math.cos(angle);
		var y2 = y1 + 15 * Math.sin(angle);
	} else {
		var x2 = x1 + 10 * Math.cos(angle);
		var y2 = y1 + 10 * Math.sin(angle);
	}

	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.stroke();
}

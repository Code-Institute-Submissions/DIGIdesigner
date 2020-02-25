(function() {
	const canvas = document.getElementById('myCanvas');
	const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'green';
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(227.1, 33.6);
	ctx.bezierCurveTo(222.1, 24.8, 202.29999999999998, 16.5, 202.29999999999998, 16.5);
	ctx.lineTo(167.59999999999997, 0.5);
	ctx.bezierCurveTo(167.59999999999997, 0.5, 158.29999999999995, 7.4, 125.59999999999997, 7.7);
	ctx.bezierCurveTo(93, 7.4, 89.2, 0.6, 89.2, 0.6);
	ctx.lineTo(54.5, 16.6);
	ctx.bezierCurveTo(54.5, 16.6, 34.7, 24.900000000000002, 29.7, 33.7);
	ctx.bezierCurveTo(24.7, 42.5, 0.5, 88.2, 0.5, 88.2);
	ctx.lineTo(35.7, 111.30000000000001);
	ctx.lineTo(44.5, 101.4);
	ctx.bezierCurveTo(44.5, 101.4, 58, 155.3, 58, 166.9);
	ctx.bezierCurveTo(58, 178.5, 51.1, 276.5, 51.1, 276.5);
	ctx.bezierCurveTo(51.1, 276.5, 58.800000000000004, 293.6, 128.2, 293.6);
	ctx.lineTo(128.5, 293.6);
	ctx.bezierCurveTo(197.9, 293.6, 205.6, 276.5, 205.6, 276.5);
	ctx.bezierCurveTo(205.6, 276.5, 198.7, 178.5, 198.7, 166.9);
	ctx.bezierCurveTo(198.7, 155.3, 212.2, 101.4, 212.2, 101.4);
	ctx.lineTo(221, 111.30000000000001);
	ctx.lineTo(256.2, 88.20000000000002);
	ctx.bezierCurveTo(256.3, 88.1, 232.1, 42.4, 227.1, 33.6);
	ctx.lineTo(227.1, 33.6);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	draw.ctx();
})();


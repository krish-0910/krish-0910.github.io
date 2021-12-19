var canvas = document.getElementById('game');
	var ctx = canvas.getContext('2d');
	var ball = {
		pos: {x: 500,y: 300},
        direction: { x: 0, y: 0 },
		speed: 5,
        brake: 0.9, 
	};
	var FPS = 30;
    window.onload = function() {
    	setInterval(function() {
            animate();
    		gameBack();
    	}, 1000/FPS);
    };
    function animate() {
        ball.pos.x += ball.direction.x * ball.speed;
        ball.pos.y += ball.direction.y * ball.speed;
        ball.direction.x *= ball.brake;
        ball.direction.y *= ball.brake;
    }
    function gameBack() {
    	drawRect(0,0,canvas.width,canvas.height, '#fefefe');
    	colorCircle(ball.pos.x,ball.pos.y,60, '#77D970');
    }
    
    function drawRect(leftX,topY,width,height, drawColor) {
    	ctx.fillStyle = drawColor;
    	ctx.fillRect(leftX,topY,width,height);
    }
    
    function colorCircle(centerX,centerY,radius, drawColor) {
    	ctx.fillStyle = drawColor;
    	ctx.beginPath();
    	ctx.arc(centerX,centerY,radius,0,Math.PI*2,true);
    	ctx.closePath();
    	ctx.fill();
    }
    
    document.addEventListener('keydown', event => {
        if (event.keyCode === 37) { //Left
        	xBall(-1);
        } else if (event.keyCode === 39) { //Right
        	xBall(1);
        } else if (event.keyCode === 38) { //Up
        	yBall(-1);
        } else if (event.keyCode === 40) { //Down
        	yBall(1);
        }
    });
    function yBall(offset) {
    	ball.direction.y += offset;
    }
    function xBall(offset) {
    	ball.direction.x += offset;
    }

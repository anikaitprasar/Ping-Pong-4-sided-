const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Game Variables
let stickWidth = 20;
let stickHeight = 80;

let y_coordinate1 = Math.random() * (window.innerHeight-stickWidth);
let y_coordinate2 = Math.random() * (window.innerHeight-stickWidth);

let ball_x = 100
let ball_y = 100
let ball_radius = 15

let ball_dx = (Math.random()*1)+2;
let ball_dy = (Math.random()*1)+3;
let playerSpeed = 20


ctx.fillStyle = '#202022';

ctx.fillRect(3, y_coordinate1, stickWidth, stickHeight);
ctx.fillRect(window.innerWidth-stickWidth-3, y_coordinate2, stickWidth, stickHeight);

ctx.fillStyle = '#878787';
ctx.arc(ball_x, ball_y, ball_radius, 0, 2*Math.PI);
ctx.fill();

window.addEventListener("click", setGameInterval);

function setGameInterval(){
    setInterval(gameLoop, 10)
}

function clearCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

function update(){
    if (ball_y > canvas.height || ball_y < 0) {
        ball_dy = -ball_dy;
    }

    if ((ball_x > canvas.width-stickWidth-3 && ball_y > y_coordinate2 && ball_y < y_coordinate2+stickHeight || (ball_x < stickWidth+3 && ball_y > y_coordinate1 && ball_y < y_coordinate1+stickHeight))){
        ball_dx = -ball_dx;
    }

    ball_x+=ball_dx;
    ball_y+=ball_dy;
    ctx.fillStyle = '#202022';
    ctx.beginPath()
    ctx.fillRect(3, y_coordinate1, stickWidth, stickHeight);
    ctx.fillRect(window.innerWidth-stickWidth-3, y_coordinate2, stickWidth, stickHeight);
    
    ctx.fillStyle = '#878787';
    ctx.arc(ball_x, ball_y, ball_radius, 0, 2*Math.PI);
    ctx.fill();
}

function movePlayer() {
    ctx.fillStyle = '#202022'
    ctx.fillRect(3, y_coordinate1, stickWidth, stickHeight);
    ctx.fillRect(window.innerWidth-stickWidth-3, y_coordinate2, stickWidth, stickHeight);
    ctx.fill();
}

function gameLoop(){
    clearCanvas();
    update()
} 


//Moving the Players
document.onkeydown = function(e) {
    switch (e.key) {
        case 'ArrowUp':
            y_coordinate2-=playerSpeed;
            break;
        case 'ArrowDown':
            y_coordinate2+=playerSpeed;
            break;
        case 'w':
            y_coordinate1-=playerSpeed;
            break;
        case 's':
            y_coordinate1+=playerSpeed;
            break;
    }
}
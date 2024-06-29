const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Game Variables
let stickWidth = 20;
let stickHeight = 60;

let y_coordinate1 = Math.random() * (window.innerHeight-stickWidth);
let y_coordinate2 = Math.random() * (window.innerHeight-stickWidth);
let x_coordinate1 = Math.random() * (window.innerWidth-stickHeight)
let x_coordinate2 = Math.random() * (window.innerWidth-stickHeight)


ctx.fillStyle = '#202022';

ctx.fillRect(3, y_coordinate1, stickWidth, stickHeight);
ctx.fillRect(window.innerWidth-stickWidth-3, y_coordinate2, stickWidth, stickHeight);
ctx.fillRect(x_coordinate1, 3, stickHeight, stickWidth);
ctx.fillRect(x_coordinate2, window.innerHeight-stickWidth-3, stickHeight, stickWidth);

ctx.fillStyle = '#878787';
ctx.arc(100, 100, 15, 0, 2*Math.PI);
ctx.fill();

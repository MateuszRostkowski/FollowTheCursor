const ball = document.querySelector(".ball");

let moveX = 0;
let moveY = 0;

let ballX = 0;
let ballY = 0;

let speed = 0.05;
let moveSpeed = 10;

let keys = [];

function keyPressed() {
  keys[event.keyCode] = true;
}
function keyReleased(event) {
  keys[event.keyCode] = false;
}

function animate() {
  let distX = moveX - ballX;
  let distY = moveY - ballY;

  ballX = ballX + distX * speed;
  ballY = ballY + distY * speed;

  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";

  if (keys[37]) {
    moveX -= 10;
  }
  if (keys[38]) {
    moveY -= 10;
  }
  if (keys[39]) {
    moveX += 10;
  }
  if (keys[40]) {
    moveY += 10;
  }

  requestAnimationFrame(animate);
}


animate();


document.addEventListener("keydown", keyPressed);
document.addEventListener("keyup", keyReleased);
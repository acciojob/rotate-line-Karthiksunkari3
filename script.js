const lineElement = document.getElementById('line');
let rotationAngle = 0;

function rotateLine() {
  rotationAngle += 1;
  lineElement.style.transform = `rotate(${rotationAngle}deg)`;
}

setInterval(rotateLine, 10);

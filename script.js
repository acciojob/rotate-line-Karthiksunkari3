var line = document.getElementById("line");

// Set the line's properties
line.style.color = "black";
line.style.width = "200px";
line.style.height = "2px";

// Create a function to rotate the line
function rotateLine() {
  // Get the current angle of the line
  var angle = line.style.transform.match(/rotate\((\d+)deg\)/)[1];

  // Rotate the line by 1 degree
  angle++;

  // Set the line's transform property
  line.style.transform = "rotate(" + angle + "deg)";
}

// Start rotating the line
setInterval(rotateLine, 100);
//your JS code here. If required.
var line = document.getElementById("line");

// Set the line's properties
line.style.color = "black";
line.style.width = "200px";
line.style.height = "2px";

// Create a function to rotate the line
function rotateLine() {
  // Get the current angle of the line
  var angle = line.style.transform.match(/rotate\((\d+)deg\)/)[1];

  // Rotate the line by 1 degree
  angle++;

  // Set the line's transform property
  line.style.transform = "rotate(" + angle + "deg)";
}

// Start rotating the line
setInterval(rotateLine, 100);

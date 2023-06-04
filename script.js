var trainElement = document.getElementById("train");
var startButton = document.getElementById("startButton");
var stopButton = document.getElementById("stopButton");
var animationId;

startButton.addEventListener("click", startTrainAnimation);
stopButton.addEventListener("click", stopTrainAnimation);

function startTrainAnimation() {
  // Start the animation
  animationId = requestAnimationFrame(moveTrain);
}

function stopTrainAnimation() {
  // Stop the animation
  cancelAnimationFrame(animationId);
}

function moveTrain() {
  // Move the train to the right
  var currentPosition = parseFloat(trainElement.style.left) || 0;
  var newPosition = currentPosition + 10;
  trainElement.style.left = newPosition + "px";

  // Check if the train has reached the end
  if (newPosition < window.innerWidth - trainElement.offsetWidth) {
    animationId = requestAnimationFrame(moveTrain);
  }
}

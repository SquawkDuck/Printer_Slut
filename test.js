function generateStupidMessage() {
  const ButtonMessage = "Stop if you had enought !"
  document.getElementById("button_message").textContent = ButtonMessage;
  let index = 0;
  const frasi = ["Dario", "saro'", "la troia", "informatica", "della ditta"];
  let paused = false;
  function cycleMessage() {
    if (!paused) {
      document.getElementById("screen_message").textContent = frasi[index];
      index = (index + 1) % frasi.length;
    }
  }
  const intervalLenght = 800;
  cycleMessage();
  let intervalId = setInterval(cycleMessage, intervalLenght);
  stopStartInterval = function () {
    if (paused) {
      clearInterval(intervalId);
      document.getElementById("button_message").textContent = ButtonMessage;
    } else {
      intervalId = setInterval(cycleMessage, intervalLenght);
      document.getElementById("button_message").textContent = "Keep going, I actually like it !";
    }
    paused = !paused;
  };
}
generateStupidMessage();

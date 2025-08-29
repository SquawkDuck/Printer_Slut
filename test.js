function main() {
  let index = 0;
  const frasi = ["Dario", "saro'", "la troia", "informatica", "della ditta"];
  const screenMessage = document.getElementById("screen_message");
  const buttonMessage = document.getElementById("button_message");
  buttonMessage.textContent = "pause";
  let paused = false;
  const intervalLenght = 800;
  let interval = setInterval(cycleMessage, intervalLenght);
  function pauseUnpause() {
    paused = !paused;
    if (paused) {
      clearInterval(interval);
      buttonMessage.textContent = "unpause";
      console.log("paused");
    } else {
      interval = setInterval(cycleMessage, intervalLenght);
      buttonMessage.textContent = "pause";
      console.log("unpaused");
    }
  }
  buttonMessage.addEventListener("click", pauseUnpause);
  function cycleMessage() {
    screenMessage.textContent = frasi[index];
    index = (index + 1) % frasi.length;
  }
}
main();

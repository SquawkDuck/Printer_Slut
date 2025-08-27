function generateStupidMessage() {
  let index = 0;
  const frasi = ["Dario", "saro'", "la troia", "informatica", "della ditta"];
  let paused = false;
  function cycleMessage() {
    if (!paused) {
      document.getElementById("screen_message").textContent = frasi[index];
      index = (index + 1) % frasi.length;
    }
  };
  cycleMessage();
  let intervalId = setInterval(cycleMessage, 800);

  // Add an event listener to the button to toggle the paused state
  document.getElementById("button_message").addEventListener("click", function() {
    paused = !paused;
    if (!paused) {
      cycleMessage(); // Run the cycleMessage function once to update the text
    }
  });
}
generateStupidMessage();
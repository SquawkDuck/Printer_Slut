function generateStupidMessage() {
  let index = 0;
  const frasi = ["Dario", "saro'", "la troia", "informatica", "della ditta"];
  function cycleMessage() {
    document.getElementById("screen_message").textContent = frasi[index];
    index = (index + 1) % frasi.length;
  };
  cycleMessage();
  setInterval(cycleMessage, 800);
}
generateStupidMessage();

function Main() {
  let index = 0;
  const frasi = ["Dario", "saro'", "la troia", "informatica", "della ditta"];
  function cylingMessage() {
    document.getElementById("screen_message").textContent = frasi[index];
    index = (index + 1) % frasi.length;
  }
  setInterval(cylingMessage, 800);
}
Main();

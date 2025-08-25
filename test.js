function Main() {
  let index = 0;
  const frasi = ["Dario", "saro'", "la troia", "informatica", "della ditta"];
  function CylingMessage() {
    document.getElementById("screen_message").textContent = frasi[index];
    index = (index + 1) % frasi.length;
  }
  setInterval(CylingMessage, 800);
}
Main();

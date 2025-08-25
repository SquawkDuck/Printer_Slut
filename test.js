function CylingMessage() {
  const frasi = ["Dario", "saro'", "la troia", "informatica", "della ditta"];
  let index = 0;
}
setInterval(CylingMessage, 800); {

  document.getElementById("screen_message").textContent = frasi[index];
  index = (index + 1) % frasi.length; // Visto come ho usato l'operatore modulo invece di if-else ? 
}, 800);

const updateScreenMessage = () => {
  document.getElementById("screen_message").textContent = messages[currentIndex];
  currentIndex = (currentIndex + 1) % messages.length;
};

setInterval(updateScreenMessage, 2000);
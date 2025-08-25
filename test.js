{ // ora non inquino piu' :)
  const frasi = ["Dario", "saro'", "la troia", "informatica", "della ditta"];
  let index = 0;

  setInterval(function () {

    document.getElementById("screen_message").textContent = frasi[index];
    index = (index + 1) % frasi.length; // Visto come ho usato l'operatore modulo invece di if-else ? 
  }, 800);
}
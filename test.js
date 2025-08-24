const frasi = ["Dario", "saro'", "la troia", "informatica", "della ditta"];
let index = 0;

if (index < frasi.length) {
  output = frasi[index];
  document.getElementById("screen_message").textContent = output;
  index++;
} else {
  index = 0; // Reset index to 0
}

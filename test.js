let output = "nullo";
let frasi = ["Dario", "saro'", "la troia","informatica","della ditta"];
let index = 0;

function showNext() {
    if (index < frasi.length) {
        output = frasi[index];
        document.getElementById('screen_message').textContent = output;
        index++;
    } else {
        index = 0; // Reset index to 0
    }
}

let intervalId = setInterval(showNext, 1000); // 1000 ms = 1 second
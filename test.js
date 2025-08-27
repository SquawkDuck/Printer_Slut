function generateStupidMessage() {
  document.getElementById("button_message").style.backgroundColor = "red";
  const ButtonMessage = "Stop if you had enought !"
  document.getElementById("button_message").textContent = ButtonMessage;
  let index = 0;

  async function getJokes() {
  try {
    const response = await fetch('jokes.txt');
    const text = await response.text();
    const jokes = text.split('\n');
    return jokes;
  } catch (error) {
    console.error('Error:', error);
  }
}

  let paused = false;
  async function cycleMessage() {
   if (!paused) {
     const jokes = await getJokes();
      document.getElementById("screen_message").textContent = jokes[index];
      index = (index + 1) % jokes.length;
    }
  }
  const intervalLenght = 3500;
  cycleMessage();
  let intervalId = setInterval(cycleMessage, intervalLenght);
  stopStartInterval = function () {
    if (paused) {
      clearInterval(intervalId);
      document.getElementById("button_message").textContent = ButtonMessage;
      document.getElementById("button_message").style.backgroundColor = "red";
    } else {
      intervalId = setInterval(cycleMessage, intervalLenght);
      document.getElementById("button_message").textContent = "Keep going, I actually like it !";
      document.getElementById("button_message").style.backgroundColor = "green";
    }
    paused = !paused;
  };
}
generateStupidMessage();

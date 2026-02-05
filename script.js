let count = 0;

const messages = [
  "Hey… don’t run yet 😄",
  "That tickles 🙈",
  "Okay okay… I’m just asking 💕",
  "At least smile first ☺️"
];

const noBtn = document.getElementById("noBtn");
const text = document.getElementById("text");

noBtn.addEventListener("touchstart", moveButton);
noBtn.addEventListener("mouseover", moveButton);

function moveButton() {
  const x = Math.random() * 120 - 60;
  const y = Math.random() * 120 - 60;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  if (count < messages.length) {
    text.innerText = messages[count];
    count++;
  } else {
    noBtn.innerText = "Let’s talk 🫶";
  }
}

function yesClicked() {
  document.body.innerHTML = `
    <div style="text-align:center">
      <h1 style="color:#ff4d88">
        That made my day 💖<br>
        See you on the 7th ✨
      </h1>
    </div>`;
}

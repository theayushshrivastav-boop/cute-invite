const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const text = document.getElementById("text");

let count = 0;

const messages = [
  "Hey… don’t run yet 😄",
  "That tickles 🙈",
  "Okay okay… I’m just asking 💕",
  "At least smile first ☺️"
];

function moveNo() {
  const x = Math.random() * 140 - 70;
  const y = Math.random() * 140 - 70;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  if (count < messages.length) {
    text.innerText = messages[count];
    count++;
  } else {
    noBtn.innerText = "Let’s talk 🫶";
  }
}

noBtn.addEventListener("touchstart", moveNo);
noBtn.addEventListener("mouseover", moveNo);

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="text-align:center">
      <h1 style="color:#ff4d88">
        That made my day 💖<br>
        See you on the 7th ✨
      </h1>
    </div>
  `;
});

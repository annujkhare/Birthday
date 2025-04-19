document.getElementById("giftBox").addEventListener("click", () => {
  const giftBox = document.getElementById("giftBox");
  const giftImg = document.getElementById("giftImg");
  const msg = document.getElementById("giftMessage");

  // If the gift box is closed, open it
  if (giftImg.src.includes("gift-closed.png")) {
    giftImg.src = "gift-open.png"; // Change the image to the opened gift
    msg.classList.remove("hidden"); // Show the message
    launchConfetti(); // Trigger the confetti
  } else {
    // If the gift box is open, close it
    giftImg.src = "gift-closed.png"; // Change the image back to the closed gift
    msg.classList.add("hidden"); // Hide the message
  }
});

document.getElementById("giftBox").addEventListener("click", () => {
  const msg = document.getElementById("giftMessage");
  msg.classList.remove("hidden");
  launchConfetti(); // Launch the confetti after clicking the gift box
});

function launchConfetti() {
  const container = document.getElementById("fireworks");
  const colors = ['#ff66b2', '#ff1493', '#ffd700', '#00ffff', '#adff2f'];

  for (let i = 0; i < 100; i++) {
    const spark = document.createElement("div");
    spark.className = "spark";

    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 200 + 50;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;

    spark.style.left = `${window.innerWidth / 2}px`;
    spark.style.top = `${window.innerHeight / 2}px`;
    spark.style.setProperty('--x', `${dx}px`);
    spark.style.setProperty('--y', `${dy}px`);
    spark.style.setProperty('--confetti-color', colors[Math.floor(Math.random() * colors.length)]);

    container.appendChild(spark);
    setTimeout(() => spark.remove(), 1500);
  }

  // Play the confetti sound
  const audio = document.getElementById("confettiSound");
  if (audio) audio.play();
}

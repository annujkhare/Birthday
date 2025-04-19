document.getElementById("celebrateBtn").addEventListener("click", () => {
  document.querySelectorAll(".flame").forEach(f => f.style.display = "none");

  // Play music and sound immediately when button is clicked
  const celebrationMusic = document.getElementById("celebrationMusic");
  const fireworkSound = document.getElementById("fireworkSound");

  celebrationMusic.play().then(() => {
    console.log("Celebration music started!");
  }).catch((error) => {
    console.error("Error starting music:", error);
  });

  fireworkSound.play();  // Start the fireworks sound immediately

  // Launch fireworks immediately
  launchFireworks();
});

function launchFireworks() {
  const container = document.getElementById("fireworks");
  const colors = ["#ffffff", "#ffd1dc", "#ff66b2", "#ff1493", "#ff99cc"];

  let fireworkCount = 15;
  let launched = 0;

  for (let i = 0; i < fireworkCount; i++) {
    const startX = Math.random() * window.innerWidth;
    const rocket = document.createElement("div");
    rocket.className = "rocket";
    rocket.style.left = `${startX}px`;
    rocket.style.top = `100vh`;
    container.appendChild(rocket);

    setTimeout(() => {
      rocket.remove();

      for (let j = 0; j < 40; j++) {
        const particle = document.createElement("div");
        particle.className = "firework";
        particle.style.left = `${startX}px`;
        particle.style.top = `${window.innerHeight * 0.3}px`;

        const angle = Math.random() * 2 * Math.PI;
        const radius = Math.random() * 160 + 80;
        const dx = Math.cos(angle) * radius;
        const dy = Math.sin(angle) * radius;
        const color = colors[Math.floor(Math.random() * colors.length)];

        particle.style.setProperty("--x", `${dx}px`);
        particle.style.setProperty("--y", `${dy}px`);
        particle.style.setProperty("--color", color);

        container.appendChild(particle);
        setTimeout(() => particle.remove(), 9000);
      }

      launched++;
      if (launched === fireworkCount) {
        // Show the "Next Page" button after fireworks and confetti
        setTimeout(() => {
          launchConfetti();
          document.getElementById("nextPageBtn").style.display = "inline-block";  // Show button after fireworks and confetti
        }, 1000);  // Adjust this delay if needed
      }
    }, 1000 + i * 400);
  }
}

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

  document.getElementById("confettiSound").play();
}

// When the user clicks the "Next Page" button, navigate to the gift page
document.getElementById("nextPageBtn").addEventListener("click", () => {
  window.location.href = "gift.html";
});

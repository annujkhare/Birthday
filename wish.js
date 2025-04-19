document.addEventListener("DOMContentLoaded", () => {
  const wishText = "Wishing you a day filled with love, laughter,\nand everything that makes you smile!\n\n🎂 Happy Birthday! 🎈🎁";
  const textElement = document.getElementById("wish-text");
  const nextBtn = document.getElementById("nextBtn");

  let index = 0;
  function typeWriter() {
    if (index < wishText.length) {
      textElement.innerHTML += wishText.charAt(index);
      index++;
      setTimeout(typeWriter, 50);
    } else {
      nextBtn.classList.remove("hidden");
    }
  }

  typeWriter();
launchFireworks(); // Add this right after to trigger background fireworks
setInterval(launchFireworks, 3000);



  nextBtn.addEventListener("click", () => {
    window.location.href = "cake.html";
  });
  function launchFireworks() {
    const container = document.getElementById("fireworks");
    const colors = ["#ff66b2", "#ff1493", "#ffffff", "#ff69b4", "#ffc0cb", "#ff85a2"];
  
    for (let i = 0; i < 5; i++) {
      const startX = Math.random() * window.innerWidth;
      const startY = window.innerHeight - 10;
  
      // Create the rocket
      const rocket = document.createElement("div");
      rocket.className = "rocket";
      rocket.style.left = `${startX}px`;
      rocket.style.top = `${startY}px`;
      container.appendChild(rocket);
  
      // After rocket reaches top, explode
      setTimeout(() => {
        rocket.remove();
        const explosionX = startX;
        const explosionY = startY - 400;
  
        for (let j = 0; j < 40; j++) {
          const particle = document.createElement("div");
          particle.className = "firework";
          particle.style.left = `${explosionX}px`;
          particle.style.top = `${explosionY}px`;
  
          const angle = Math.random() * 2 * Math.PI;
          const radius = Math.random() * 120 + 60;
          const dx = Math.cos(angle) * radius;
          const dy = Math.sin(angle) * radius;
  
          const color = colors[Math.floor(Math.random() * colors.length)];
          particle.style.setProperty("--x", `${dx}px`);
          particle.style.setProperty("--y", `${dy}px`);
          particle.style.setProperty("--color", color);
  
          container.appendChild(particle);
          setTimeout(() => particle.remove(), 1000);
        }
      }, 1000); // time for rocket to reach the top
    }
  }
});  
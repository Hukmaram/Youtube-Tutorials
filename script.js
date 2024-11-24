const rainContainer = document.querySelector(".rain-container");

// Create 300 raindrops for high density
for (let i = 0; i < 300; i++) {
  const drop = document.createElement("div");
  drop.classList.add("drop");
  drop.style.setProperty("--x", Math.random()); // Random horizontal position
  drop.style.setProperty("--duration", Math.random() * 0.5 + "s"); // Random fall duration
  drop.style.setProperty("--delay", Math.random() * 2 + "s"); // Random delay for natural effect
  rainContainer.appendChild(drop);
}

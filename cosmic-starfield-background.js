const starfield = document.getElementById("starfield");

// Function to generate stars
function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");

  const x = Math.random() * 100; // Random horizontal position
  const size = Math.random() * 3 + 1; // Random size

  // Set the star's initial position and size
  star.style.top = Math.random() * 100 + "vh";
  star.style.left = x + "vw";
  star.style.width = size + "px";
  star.style.height = size + "px";
  star.style.animationDuration = Math.random() * 4 + 4 + "s"; // Vary fall speed
  star.style.animationDelay = Math.random() * 5 + "s"; // Vary delay

  starfield.appendChild(star);

  // Remove stars after they move out of view
  setTimeout(() => {
    star.remove();
  }, 10000); // Adjust this timeout based on fall duration
}

// Generate stars every 100ms
setInterval(createStar, 100);

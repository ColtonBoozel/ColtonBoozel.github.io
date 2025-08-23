// Shrink wave on scroll
window.addEventListener("scroll", () => {
  const wave = document.querySelector(".wave");
  const waveSvg = document.querySelector(".wave svg");

  if (!wave || !waveSvg) return;

  // Define min and max heights
  const maxHeight = 100; // starting height
  const minHeight = 45; // smallest height you want
  const scrollLimit = 300; // px scrolled before it reaches min size

  // Calculate new height based on scroll
  let newHeight =
    maxHeight - (window.scrollY / scrollLimit) * (maxHeight - minHeight);

  // Clamp to minHeight
  if (newHeight < minHeight) newHeight = minHeight;

  // Apply height
  wave.style.height = `${newHeight}px`;
  waveSvg.style.height = `${newHeight}px`;
});

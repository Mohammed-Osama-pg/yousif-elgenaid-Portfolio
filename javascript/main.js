// !------ Hero section animation
const carouselColumns = document.querySelectorAll(".carousel .column");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.style.animationPlayState = entry.isIntersecting
        ? "running"
        : "paused";
    });
  },
  { threshold: 0.1 }
);
carouselColumns.forEach((column) => observer.observe(column));

// Add touch event prevention for smoother scrolling
document.addEventListener(
  "touchstart",
  (e) => {
    if (e.target.closest(".carousel")) e.preventDefault();
  },
  { passive: false }
);

// !-- Preload functions ----------------------------------
window.addEventListener("load", () => {
  document.querySelector(".carousel").style.animationPlayState = "running";
  document.querySelector("header").style.animationPlayState = "running";
  document.querySelector(".overlay-titl").style.animationPlayState = "running";
  document.querySelector(
    ".overlay-description .date "
  ).style.animationPlayState = "running";
  document.querySelector(
    ".overlay-description .type "
  ).style.animationPlayState = "running";
});

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

// !carouselColumns.forEach((column) => observer.observe(column));

// Add touch event prevention for smoother scrolling
document.addEventListener(
  "touchstart",
  (e) => {
    if (e.target.closest(".carousel")) e.preventDefault();
  },
  { passive: false }
);

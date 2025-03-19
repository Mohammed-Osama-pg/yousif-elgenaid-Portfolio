const scrollers = document.querySelectorAll(".scroller");

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", "off");
  });
}

// Hero Section animation
const heroBgScroller = document.querySelectorAll(
  ".hero__bg-scroller .inner-scroller"
);

heroBgScroller.forEach((scroller) => {
  const ScrollerItem = Array.from(scroller.children);
  ScrollerItem.forEach((image) => {
    const dublicateImage = image.cloneNode(true);
    dublicateImage.setAttribute("aria-hidden", "true");
    scroller.appendChild(dublicateImage);
  });
});

// about Section animation
const aboutScrollers = document.querySelectorAll(".about__labels .scroller");

aboutScrollers.forEach((scroller) => {
  const ScrollerItem = Array.from(scroller.children);
  for (let i = 0; i < 2; i++) {
    ScrollerItem.forEach((Item) => {
      const dublicateItem = Item.cloneNode(true);
      dublicateItem.setAttribute("aria-hidden", "true");
      scroller.appendChild(dublicateItem);
    });
  }
});

// Create custom Cursor

// Select all parent elements and cursors
const parents = document.querySelectorAll(".portfolio__holder .project");
const portfolioHolder = document.querySelector(".portfolio__holder");

// Create a global cursor element outside of sticky parents
const cursor = document.createElement("div");
cursor.classList.add("cursor");
const node = document.createTextNode("See More");

cursor.appendChild(node);
portfolioHolder.appendChild(cursor); // Attach cursor to portfolioHolder, not each project

// Function to update cursor position
function updateCursorPosition(e) {
  // Convert mouse coordinates to viewport percentages
  const vw = (e.clientX / window.innerWidth) * 100;
  const vh = (e.clientY / window.innerHeight) * 100;
  cursor.style.transform = `translate(${vw}vw, ${vh}vh)`;
}

// Function to show cursor inside the parent element
function showCursor() {
  cursor.style.opacity = "1";
}

// Function to hide cursor when leaving
function hideCursor() {
  cursor.style.opacity = "0";
}

// Attach event listeners to each project
parents.forEach((parent) => {
  parent.addEventListener("mouseenter", showCursor);
  parent.addEventListener("mouseleave", hideCursor);
  parent.addEventListener("mousemove", updateCursorPosition);
});

// !-- Preload functions ----------------------------------
// call all animation element
let preLoade = document.querySelector(".loading");
let allAnimation = document.querySelectorAll(".hero-animation");

// *Create pre-load fuction
window.addEventListener("load", () => {
  preLoade.classList.add("fade-out");
  allAnimation.forEach(function (ele) {
    ele.style.animationPlayState = "running";
  });
});

// !-- Lenis for smooth scrolling ----------------------------------
// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on("scroll", ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

gsap.registerPlugin(ScrollTrigger);

gsap.from(".fade-in-down", {
  opacity: 0,
  y: 100,
  duration: 1,
  scrollTrigger: {
    trigger: ".fade-in-down", // Element that triggers animation
    start: "top 90%", // Start when top of .box reaches 80% of viewport
    end: "top 30%", // End when top of .box reaches 30% of viewport
    scrub: true, // Smooth animation as user scrolls
  },
});
gsap.from(".fade-in-left", {
  opacity: 0,
  x: -50,
  duration: 1,
  scrollTrigger: {
    trigger: ".fade-in-left", // Element that triggers animation
    start: "top 90%", // Start when top of .box reaches 80% of viewport
    end: "top 30%", // End when top of .box reaches 30% of viewport
    scrub: true, // Smooth animation as user scrolls
  },
});
gsap.to(".show-text", {
  width: 0,
  scrollTrigger: {
    trigger: ".show-text", // Element that triggers animation
    start: "top 80%", // Start when top of .box reaches 80% of viewport
    end: "top 0%", // End when top of .box reaches 30% of viewport
    scrub: true, // Smooth animation as user scrolls
  },
});

gsap.from(".show", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".show", // Element that triggers animation
    start: "top 80%", // Start when top of .box reaches 80% of viewport
    end: "top 20%", // End when top of .box reaches 30% of viewport
    scrub: true, // Smooth animation as user scrolls
  },
});

gsap.from(".slide-left", {
  opacity: 0,
  x: "-110%",
  scaleX: 0,
  scrollTrigger: {
    trigger: ".slide-left", // Element that triggers animation
    start: "top 80%", // Start when top of .box reaches 80% of viewport
    end: "top 20%", // End when top of .box reaches 30% of viewport
    scrub: true, // Smooth animation as user scrolls
  },
});
gsap.from(".slide-right", {
  opacity: 0,
  x: "110%",
  scaleX: 0,
  scrollTrigger: {
    trigger: ".slide-right", // Element that triggers animation
    start: "top 80%", // Start when top of .box reaches 80% of viewport
    end: "top 20%", // End when top of .box reaches 30% of viewport
    scrub: true, // Smooth animation as user scrolls
  },
});
gsap.from(".slide-center", {
  opacity: 0,
  scaleX: 0,
  scrollTrigger: {
    trigger: ".slide-center", // Element that triggers animation
    start: "top 80%", // Start when top of .box reaches 80% of viewport
    end: "top 20%", // End when top of .box reaches 30% of viewport
    scrub: true, // Smooth animation as user scrolls
  },
});

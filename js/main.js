const scrollers = document.querySelectorAll(".scroller");

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", "off");
  });
}
// Hero Section animation
const heroBgScroller = document.querySelector(
  ".hero__bg-scroller .inner-scroller"
);
const heroBgScrollerImages = Array.from(heroBgScroller.children);
heroBgScrollerImages.forEach((image) => {
  const dublicateImage = image.cloneNode(true);
  dublicateImage.setAttribute("aria-hidden", "true");
  heroBgScroller.appendChild(dublicateImage);
});

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
  const heroBgScrollerImages = Array.from(scroller.children);
  heroBgScrollerImages.forEach((image) => {
    const dublicateImage = image.cloneNode(true);
    dublicateImage.setAttribute("aria-hidden", "true");
    scroller.appendChild(dublicateImage);
  });
});

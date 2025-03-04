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
const aboutScrollers = document.querySelectorAll(".about__lables .scroller");
aboutScrollers.forEach((scroller) => {
  const ScrollerItem = Array.from(scroller.children);
  ScrollerItem.forEach((Item) => {
    const dublicateItem = Item.cloneNode(true);
    dublicateItem.setAttribute("aria-hidden", "true");
    scroller.appendChild(dublicateItem);
  });
});

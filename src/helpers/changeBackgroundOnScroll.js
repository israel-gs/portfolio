export function changeBackgroundOnScroll(selector, classes) {
  const el = document.querySelector(selector);
  const classesToAdd = classes;
  const height = el.offsetHeight;
  document.addEventListener("scroll", (e) => {
    if (window.scrollY > height) {
      el.classList.add(...classesToAdd);
    } else {
      el.classList.remove(...classesToAdd);
    }
  });
}

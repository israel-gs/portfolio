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

export function changeClassOnScroll(observedSelector, targetSelector, classes) {
  const targetElement = document.querySelector(targetSelector);
  const observerElement = document.querySelector(observedSelector);
  const options = {
    threshold: 0.2,
  };
  const observer = new IntersectionObserver(([entry]) => {
    console.log(entry);
    if (entry.isIntersecting) {
      targetElement.classList.remove(...classes);
    } else {
      targetElement.classList.add(...classes);
    }
  }, options);
  observer.observe(observerElement);
}

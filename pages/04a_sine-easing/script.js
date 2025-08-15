import gsap from "gsap";

const button = document.querySelector(".scroll-to-top");

let isFloating = false;

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    button.classList.add("show");

    if (!isFloating) {
      gsap.to(button, {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "sine.inOut",
      });
      isFloating = true;
    }
  } else {
    button.classList.remove("show");
  }
});

button.addEventListener("mouseenter", () => {
  gsap.to(button, {
    scale: 1.5,
    duration: 0.3,
  });
});

button.addEventListener("mouseleave", () => {
  gsap.to(button, {
    scale: 1.2,
    duration: 0.3,
  });
});

button.addEventListener("click", () => {
  window.scrollTo(0, 0, { behavior: "smooth" });
});

import gsap from "gsap";

const repeat = document.querySelector(".repeat");

const animation = gsap.from(".card", {
  y: 60,
  opacity: 0,
  duration: 0.6,
  delay: 0.2,
  scale: 0.95,
  stagger: 0.2,
  ease: "power4.out",
});

repeat.addEventListener("click", () => {
  animation.restart();
});

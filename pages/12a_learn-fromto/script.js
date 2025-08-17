import gsap from "gsap";

const bars = document.querySelectorAll(".bar");

bars.forEach((bar, i) => {
  gsap.fromTo(
    bar,
    {
      scaleY: 0.4,
    },
    {
      scaleY: 1.3,
      duration: 0.6,
      repeat: -1,
      delay: i * 0.1,
      yoyo: true,
      ease: "sine.inOut",
    }
  );
});

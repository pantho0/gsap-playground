import gsap from "gsap";

gsap.to(".box", {
  // y: 50,
  opacity: 1,
  rotate: 360,
  borderRadius: "50%",
  scale: 1.1,
  background: "#ff6f61",
  duration: 2,
  ease: "bounce",
  repeat: -1,
  yoyo: true,
  repeatDelay: 2,
});

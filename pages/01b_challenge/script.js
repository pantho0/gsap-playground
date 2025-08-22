gsap.to(".card", {
  opacity: 1,
  duration: 1,
  scale: 0.89,
  onComplete: () => {
    gsap.to(".card", {
      boxShadow: "0px 10px 40px #ffdc73",
      repeat: -1,
      yoyo: true,
      duration: 1,
    });
  },
});

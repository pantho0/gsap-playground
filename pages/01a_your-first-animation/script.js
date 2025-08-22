// gsap.to(".card", {
//   opacity: 1,
//   scale: 1,
//   duration: 1,
//   onComplete: () => {
//     gsap.to(".card", {
//       y: -20,
//       repeat: -1,
//       yoyo: true,
//       duration: 0.5,
//     });
//   },
// });

gsap.to(".card", {
  opacity: 1,
  duration: 1,
  scale: 0.9,
  onComplete: () => {
    gsap.to(".card", {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 1,
    });
  },
});

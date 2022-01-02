gsap.to('.cup', { duration: 3, y: '0%' });
gsap.to('.confetti', { duration: 3, delay: 1, y: '0%' });
gsap.to('.funs_left', { duration: 3, delay: 3, x: '-1%' });
gsap.to('.funs_right', { duration: 3, delay: 3, x: '1%' });

gsap.to('.title_one', { duration: 3, delay: 5, opacity: 1 });
gsap.to('.team_left', {
  duration: 4,
  delay: 6,
  keyframes: [
    { opacity: 0.5 },
    { opacity: 0.7 },
    { opacity: 1 },
    { opacity: 0.7 },
    { opacity: 0.5 },
    { opacity: 0 },
  ],
});
gsap.to('.team_right', {
  duration: 4,
  delay: 6,
  keyframes: [
    { opacity: 0.5 },
    { opacity: 0.7 },
    { opacity: 1 },
    { opacity: 0.7 },
    { opacity: 0.5 },
    { opacity: 0.2 },
    { opacity: 0 },
  ],
});

gsap.to('.label_left', {
  duration: 3,
  delay: 10,
  keyframes: [{ opacity: 0.2 }, { opacity: 0.5 }, { opacity: 0.7 }, { opacity: 1 }],
});
gsap.to('.label_right', {
  duration: 3,
  delay: 10,
  keyframes: [{ opacity: 0.2 }, { opacity: 0.5 }, { opacity: 0.7 }, { opacity: 1 }],
});

// gsap.to('.final_result', {
//   duration: 3,
//   delay: 10,
//   keyframes: [{ opacity: 0.2 }, { opacity: 0.5 }, { opacity: 0.7 }, { opacity: 1 }],
// });

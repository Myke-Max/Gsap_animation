gsap.to('.cup', { duration: 3, y: '0%' });
gsap.to('.confetti', { duration: 3, delay: 1, y: '0%' });
gsap.to('.funs_left', {
  duration: 14,
  delay: 3,
  keyframes: [
    { x: '-60%' },
    { x: '-40%' },
    { x: '-20%' },
    { x: '-1%' },
    { x: '-1%' },
    { x: '-1%' },
    { x: '-1%' },
    { x: '-1%' },
    { x: '-1%' },
    { x: '-20%' },
    { x: '-40%' },
    { x: '-60%' },
    { x: '-80%' },
  ],
});
gsap.to('.funs_right', {
  duration: 14,
  delay: 3,
  keyframes: [
    { x: '60%' },
    { x: '40%' },
    { x: '20%' },
    { x: '1%' },
    { x: '1%' },
    { x: '1%' },
    { x: '1%' },
    { x: '1%' },
    { x: '1%' },
    { x: '20%' },
    { x: '40%' },
    { x: '60%' },
    { x: '80%' },
  ],
});

gsap.to('.title_one', {
  duration: 7,
  delay: 5,
  keyframes: [
    { opacity: 0.5 },
    { opacity: 0.7 },
    { opacity: 1 },
    { opacity: 0.7 },
    { opacity: 0.5 },
    { opacity: 0 },
  ],
});
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
    { opacity: 0 },
  ],
});

gsap.to('.label_left', {
  duration: 4,
  delay: 10,
  keyframes: [
    { opacity: 0.2 },
    { opacity: 0.5 },
    { opacity: 0.7 },
    { opacity: 1 },
    { x: '-10%' },
    { x: '-20%' },
    { x: '-30%' },
  ],
});
gsap.to('.label_right', {
  duration: 4,
  delay: 10,
  keyframes: [
    { opacity: 0.2 },
    { opacity: 0.5 },
    { opacity: 0.7 },
    { opacity: 1 },
    { x: '10%' },
    { x: '20%' },
    { x: '30%' },
  ],
});

gsap.to('.final_result', {
  opacity: 1,
  duration: 1,
  delay: 12,
});

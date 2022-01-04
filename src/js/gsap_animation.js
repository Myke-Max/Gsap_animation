const animation = gsap.to('.cup', { duration: 3, y: '0%' });
gsap.to('.confetti', { duration: 3, delay: 2, ease: 'power3.out', y: '0%' });

gsap.to('.funs_left', {
  duration: 28,
  delay: 3,
  ease: 'power1.out',
  keyframes: [
    { x: '-80%' },
    { x: '-60%' },
    { x: '-40%' },
    { x: '-20%' },

    { x: '0%' },
    { x: '0%' },
    { x: '0%' },
    { x: '0%' },
    { x: '0%' },
    { x: '-30%' },
    { x: '-60%' },
    { x: '-80%' },
    { x: '-100%' },
    { zIndex: 0 },
  ],
});
gsap.to('.funs_right', {
  duration: 28,
  delay: 3,
  ease: 'power1.out',
  keyframes: [
    { x: '80%' },
    { x: '60%' },
    { x: '40%' },
    { x: '20%' },
    { x: '0%' },
    { x: '0%' },
    { x: '0%' },
    { x: '0%' },
    { x: '0%' },
    { x: '30%' },
    { x: '60%' },
    { x: '80%' },
    { x: '100%' },
    { zIndex: 0 },
  ],
});

gsap.to('.title_one', {
  duration: 2,
  delay: 6,
  keyframes: [
    { opacity: 0.5 },
    { opacity: 0.7 },
    { opacity: 1 },
    { opacity: 0.7 },
    { opacity: 0.5 },
    { opacity: 0 },
    { zIndex: 0 },
  ],
});
gsap.to('.title_game', {
  duration: 2,
  delay: 7,
  keyframes: [
    { opacity: 0.7 },
    { opacity: 1 },
    { opacity: 0.7 },
    { opacity: 0.5 },
    { opacity: 0 },
    { zIndex: 0 },
  ],
});
gsap.to('.title_glory', {
  duration: 8,
  delay: 8,
  keyframes: [
    { opacity: 1 },
    { opacity: 1 },
    { opacity: 0.7 },
    { opacity: 0.5 },
    { opacity: 0 },
    { zIndex: 0 },
  ],
});
gsap.to('.team_left', {
  duration: 4,
  delay: 8,
  keyframes: [
    { opacity: 0.5 },
    { opacity: 0.7 },
    { opacity: 1 },
    { opacity: 0.7 },
    { opacity: 0.5 },
    { opacity: 0 },
    { zIndex: 0 },
  ],
});
gsap.to('.team_right', {
  duration: 4,
  delay: 8,
  keyframes: [
    { opacity: 0.5 },
    { opacity: 0.7 },
    { opacity: 1 },
    { opacity: 0.7 },
    { opacity: 0.5 },
    { opacity: 0 },
    { zIndex: 0 },
  ],
});

gsap.to('.label_left', {
  duration: 4,
  delay: 12,
  keyframes: [
    { opacity: 0.2 },
    { opacity: 0.5 },
    { opacity: 0.7 },
    { opacity: 1 },
    { x: '0%' },
    { x: '-10%' },
    { x: '-20%' },
    { x: '-30%' },
    { zIndex: 0 },
  ],
});
gsap.to('.label_right', {
  duration: 4,
  delay: 12,
  keyframes: [
    { opacity: 0.2 },
    { opacity: 0.5 },
    { opacity: 0.7 },
    { opacity: 1 },
    { x: '0%' },
    { x: '10%' },
    { x: '20%' },
    { x: '30%' },
    { zIndex: 0 },
  ],
});

gsap.to('.final_result', {
  opacity: 1,
  duration: 1,
  delay: 12,
});

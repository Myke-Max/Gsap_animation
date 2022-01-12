const animation = gsap.to('.cup', { duration: 2, y: '-6%' });
gsap.to('.confetti', { duration: 3, delay: 1, ease: 'power3.out', y: '0%' });

gsap.to('.fans_left', {
  duration: 20,
  delay: 1.5,
  ease: 'power1.out',
  keyframes: [
    { x: '-70%' },
    { x: '-40%' },
    { x: '-5%' },
    { x: '0%' },
    { x: '0%' },
    { x: '0%' },
    { x: '-30%' },
    { x: '-70%' },
    { x: '-90%' },

    { zIndex: 0 },
  ],
});

gsap.to('.fans_right', {
  duration: 20,
  delay: 1.5,
  ease: 'power1.out',
  keyframes: [
    { x: '70%' },
    { x: '40%' },
    { x: '5%' },
    { x: '0%' },
    { x: '0%' },
    { x: '0%' },
    { x: '30%' },
    { x: '70%' },
    { x: '90%' },

    { zIndex: 0 },
  ],
});

gsap.to('.title_one', {
  duration: 6,
  delay: 4,
  ease: Power1.easeOut,
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
});
gsap.to('.title_game', {
  duration: 5,
  delay: 4.5,
  ease: Power1.easeOut,
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
});
gsap.to('.title_glory', {
  duration: 4,
  delay: 5,
  ease: Power1.easeOut,
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
});

gsap.to('.team_left', {
  duration: 2.5,
  delay: 5,
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
  duration: 2.5,
  delay: 5,
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
  duration: 3,
  delay: 7.2,
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
  duration: 3,
  delay: 7.2,
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
  delay: 7.7,
});

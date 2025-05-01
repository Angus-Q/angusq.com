
const elements = document.querySelectorAll('.fade-up-on-scroll');

const observer = new IntersectionObserver((entries, observer) => {
entries.forEach((entry, index) => {
  if (entry.isIntersecting) {
    const el = entry.target;

    // Set staggered delay
    const delay = parseFloat(el.dataset.stagger) || 0;
    el.style.transitionDelay = `${delay}s`;

    el.classList.add('visible');
    observer.unobserve(el);
  }
});
}, {
threshold: 0.1
});

// Assign stagger delays based on order
document.querySelectorAll('.fade-up-on-scroll').forEach((el, i) => {
el.dataset.stagger = (i * 0.15).toFixed(2); // 150ms between each
observer.observe(el);
});

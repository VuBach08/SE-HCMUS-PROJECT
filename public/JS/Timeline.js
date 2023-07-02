const observer1 = new IntersectionObserver(entries => {
    // Loop over the entries
  entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
      // Add the animation
          entry.target.classList.add("timeline-item--active");
      }
  });
});

// observer1.observe(document.querySelector('.timeline-item'));

const items = document.querySelectorAll('.timeline-item');
items.forEach(item => {
  observer1.observe(item);
});

lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  disableScrolling: true,
});
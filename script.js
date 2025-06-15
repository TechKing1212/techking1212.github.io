document.addEventListener("DOMContentLoaded", () => {
  // Assign background images dynamically
  const sectionBackgrounds = {
    home: '1.jpg?auto=format&fit=crop&w=1350&q=80',
    about: '2.jpg?auto=format&fit=crop&w=1350&q=80',
    services: '3.jpg?auto=format&fit=crop&w=1350&q=80',
    updates: '4.jpg?auto=format&fit=crop&w=1350&q=80', // new image
    contact: '4.jpg?auto=format&fit=crop&w=1350&q=80'
  };


  Object.keys(sectionBackgrounds).forEach(id => {
    const section = document.getElementById(id);
    if (section) {
      const bgDiv = section.querySelector('.bg');
      if (bgDiv) {
        bgDiv.style.backgroundImage = `url('${sectionBackgrounds[id]}')`;
      }
    }
  });

  // Fade-in on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  const fadeEls = document.querySelectorAll(".fade-in");
  fadeEls.forEach(el => observer.observe(el));
});

// Hamburger menu toggle
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("active");
});

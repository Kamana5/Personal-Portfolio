// Fetching the different pages for the portfolio section
// Load header
fetch("/pages/header.html")
  .then(response => response.text())
  .then(data => {
    console.log("PATH =", window.location.pathname);

    document.getElementById("header-container").innerHTML = data;
    const path = window.location.pathname;

    document.querySelectorAll("#menu li a").forEach((link) => {
      const href = link.getAttribute("href");
      if (path.startsWith(href) && href !== "/") {
        link.classList.add("active");
      }
    });
  });

// Load footer
fetch("/pages/footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer-container").innerHTML = data;
  });


// Carousel functionality for next & prev buttons
document.querySelectorAll('.project-item').forEach(project => {
  const images = project.querySelectorAll('.image2 img');
  const nextBtn = project.querySelector('.next-btn');
  const prevBtn = project.querySelector('.prev-btn');
  const label = project.querySelector('.design-label');

  let current = 0;

  function updateLabel() {
    if (!label) return; // skip all other projects
    label.textContent = current % 2 === 0 ? "New Design:" : "Previous Design:";
  }

  updateLabel();

  function showImage(index) {
    images.forEach((img, i) => {
      img.style.display = i === index ? 'block' : 'none';
    });
  }

  // Next image
  nextBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    current = (current + 1) % images.length;
    showImage(current);
    updateLabel();
  });

  // Prev image
  prevBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    current = (current - 1 + images.length) % images.length;
    showImage(current);
    updateLabel();
  });

  // Initialize
  showImage(current);
});

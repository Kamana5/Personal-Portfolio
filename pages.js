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


// Carousel functionality for the image carousels
document.querySelectorAll('.next-btn').forEach(button => {
  button.addEventListener('click', () => {
      const carousel = button.previousElementSibling;
      const images = carousel.querySelectorAll('img');
      let current = Array.from(images).findIndex(img => img.style.display !== 'none');
      
      images [current].style.display = 'none';
      let next = (current + 1) % images.length;
      images[next].style.display = 'block';
  });
});
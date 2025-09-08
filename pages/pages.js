// Fetching the different pages for the portfolio section
document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then(res =>  res.text())
    .then(data => {
      document.getElementById("header-container").innerHTML = data;
    })

});

document.addEventListener("DOMContentLoaded", () => {
  fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer-container").innerHTML = data;
    });
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("../index.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("homepage-container").innerHTML = data;
    });
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
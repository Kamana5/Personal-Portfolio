// typing effect for the words "Developer.", "Engineer.", "Programmer."
document.addEventListener("DOMContentLoaded", function() {
    const words = ["Developer.", "Engineer.", "Programmer."];
    let currentWordIndex = 0;
    let currentLetterIndex = 0;
    let isDeleting = false;
    const typingElement = document.querySelector(".typing");
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const delayBetweenWords = 2000;

    function type() {
        const currentWord = words[currentWordIndex];
        const displayedText = currentWord.substring(0, currentLetterIndex);

        typingElement.textContent = displayedText;

        if (!isDeleting && currentLetterIndex < currentWord.length) {
            currentLetterIndex++;
            setTimeout(type, typingSpeed);
        } else if (isDeleting && currentLetterIndex > 0) {
            currentLetterIndex--;
            setTimeout(type, erasingSpeed);
        } else if (!isDeleting && currentLetterIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, delayBetweenWords);
        } else if (isDeleting && currentLetterIndex === 0) {
            isDeleting = false;
            currentWordIndex = (currentWordIndex + 1) % words.length;
            setTimeout(type, typingSpeed);
        }
    }

    type();
});


// Fetching the different pages for the portfolio section
document.addEventListener("DOMContentLoaded", () => {
  fetch("components/header.html")
    .then(res =>  res.text())
    .then(data => {
      document.getElementById("header-container").innerHTML = data;
    })

});

document.addEventListener("DOMContentLoaded", () => {
  fetch("components/footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer-container").innerHTML = data;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    fetch("pages/experience.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("experience-container").innerHTML = data;
        })  
});

document.addEventListener("DOMContentLoaded",() => {
    fetch("pages/skills.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("skills-container").innerHTML = data;
        })
    });

document.addEventListener("DOMContentLoaded", () => {
    fetch("pages/projects.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("projects-container").innerHTML = data;
        })

})
document.addEventListener("DOMContentLoaded", () => {
    fetch("pages/contacts.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("contacts-container").innerHTML = data;
        })

})
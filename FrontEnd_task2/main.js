fetch("header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
    const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

    const path = window.location.pathname;
    const navIcons = document.getElementById("nav-icons");

    if (path.includes("index.html")) {
      navIcons.innerHTML = `
        <img src="img/search.png">
        <img src="img/language.png">
        <a href="login.html" class="login-text">Login</a>
      `;
    }

    if (path.includes("movies.html")) {
      navIcons.innerHTML = ``;
    }

    if (path.includes("movie-details.html")) {
      navIcons.innerHTML = `
        <img src="img/notifications.png">
        <img src="img/settings.png">
      `;
    }
  });

fetch("footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });


document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".news-swiper")) {
    new Swiper(".news-swiper", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
      },
      autoplay: {
        delay: 4000,
      },
    });
  }
});
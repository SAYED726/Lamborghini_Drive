'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navToggleFunc = function () {
  navToggleBtn.classList.toggle("active");
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

navToggleBtn.addEventListener("click", navToggleFunc);
overlay.addEventListener("click", navToggleFunc);

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navToggleFunc);
}



/**
 * header active on scroll
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 10 ? header.classList.add("active")
    : header.classList.remove("active");
});

function submitForm() {
  // You can add your form submission logic here
  // For now, let's just log a message to the console
  console.log("Form submitted!");

  // Hide the form and show success message
  document.getElementById('contact-form-container').classList.add('fade-out');
  document.getElementById('success-message').classList.remove('hidden');
}

function scrollToFeaturedCars() {
  // Scroll to the Featured Cars section
  const featuredCarsSection = document.getElementById('featured-car');
  if (featuredCarsSection) {
      featuredCarsSection.scrollIntoView({ behavior: 'smooth' });
  }

  // Prevent the form from submitting (if needed)
  return false;
}

document.addEventListener('DOMContentLoaded', function () {
  const favButtons = document.querySelectorAll('.fav-btn');

  favButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      btn.classList.toggle('active');
      updateLikedCars();
    });
  });

  function updateLikedCars() {
    const likedCars = [];
    favButtons.forEach(function (btn, index) {
      if (btn.classList.contains('active')) {
        likedCars.push(index + 1); // Assuming index + 1 corresponds to the car ID
      }
    });

    // Do something with the list of liked cars (e.g., send to the server, store in localStorage, etc.)
    console.log('Liked Cars:', likedCars);
  }
});

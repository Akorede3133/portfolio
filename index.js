const navLink = document.querySelector('.nav-link');
const hamburgerIcon = document.querySelector('.toolbar-hamburger');
const closeIcon = document.querySelector('.close-container');
const headerHeroSection = document.querySelector('.header-hero-section');
hamburgerIcon.addEventListener('click', () => {
  navLink.classList.add('show-link');
  headerHeroSection.classList.add('blur-header-hero-section');
});
closeIcon.addEventListener('click', () => {
  navLink.classList.remove('show-link');
  headerHeroSection.classList.remove('blur-header-hero-section');
});

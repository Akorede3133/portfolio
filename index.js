const navLink = document.querySelector('.nav-link');
const hamburgerIcon = document.querySelector('.toolbar-hamburger');
const closeIcon = document.querySelector('.close-container');
hamburgerIcon.addEventListener('click', () => {
  navLink.classList.add('show-link');
});
closeIcon.addEventListener('click', () => {
  navLink.classList.remove('show-link');
});

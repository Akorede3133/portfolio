const navLink = document.querySelector('.nav-link');
const hamburgerIcon = document.querySelector('.toolbar-hamburger');
const closeIcon = document.querySelector('.close-container');
const links = document.querySelectorAll('.nav-link > li');
const headerHeroSection = document.querySelector('.header-hero-section');
const projectSection = document.querySelector('.project-section');
const popupSection = document.querySelector('.pop-up');
const form = document.querySelector('form');
const email = document.querySelector('.email');
const errorPara = document.querySelector('.error');
const fullName = document.querySelector('.fullname');
const message = document.querySelector('.message');
const autoFills = document.querySelectorAll('.auto-fills');
const projects = [
  {
    name: 'Rest Countries API',
    description: 'This is a web application built with TypeScript, Tailwind, React, and Vite that utilizes the Rest Countries API to display information about countries.',
    image: 'images/countries_api.webp',
    technologies: ['Typescript', 'Tailwind', 'React'],
    liveLink: 'https://akrca.netlify.app/',
    sourceLink: 'https://github.com/Akorede3133/rest-countries-api',
    id: 'countries',
  },
  {
    name: 'Budget Management App',
    description: 'This is a budget management app built using React, TypeScript, and Tailwind CSS. The app allows users to manage their expenses and incomes, create budgets, and track their spending.',
    image: 'images/budget_app.webp',
    technologies: ['Typescript', 'Tailwind', 'React'],
    liveLink: 'https://akbudget-app.netlify.app/',
    sourceLink: 'https://github.com/Akorede3133/budget_management_app',
    id: 'budget',
  },
  {
    name: 'Conference Website',
    description: 'The website is designed to provide attendees with essential details about the summit, including schedules, speakers, venue information, registration, and more.',
    image: 'images/conference.webp',
    technologies: ['HTML', 'CSS', 'javascript'],
    liveLink: 'https://akorede3133.github.io/oscafest-conference/',
    sourceLink: 'https://github.com/Akorede3133/oscafest-conference/',
    id: 'conference',
  },
];
/** * ---- Start of Mobile Menu display functionality ---- ** */
hamburgerIcon.addEventListener('click', () => {
  navLink.classList.add('show-link');
  headerHeroSection.classList.add('blur-header-hero-section');
});

closeIcon.addEventListener('click', () => {
  navLink.classList.remove('show-link');
  headerHeroSection.classList.remove('blur-header-hero-section');
});
links.forEach((link) => {
  link.addEventListener('click', () => {
    navLink.classList.remove('show-link');
    headerHeroSection.classList.remove('blur-header-hero-section');
  });
});
/** * ---- End of Mobile Menu display functionality ---- ** */

/** * ---- Start of Dynamic Display of Project Cards ---- ** */
const projectElements = projects.map((project) => (
  `       <article class="project-container">
  <div>
      <a href="">
          <img src="${project.image}" alt="">
      </a>
  </div>
  <div class="project-description">
      <h2>${project.name}</h2>
      <ul class="experience-list">
          <li>CANOPY</li>
          <li>Backend Dev</li>
          <li>2015</li>
      </ul>
      <p>${project.description}</p>
      <ul class="skill-list">
      ${
  project.technologies.map((technology) => (
    `<li>${technology}</li>`
  )).join('')
  }
      </ul>
      <button id=${project.id}>
          See Project
      </button>
  </div>
</article>`
)).join('');
projectSection.insertAdjacentHTML('beforeend', projectElements);
/** * ---- End of Dynamic Display of Project Cards ---- ** */

/** * ---- Start of pop up window functionality ---- ** */
const seeProjectBtns = projectSection.querySelectorAll('.project-description button');
function showPopUp(btn) {
  const objElement = projects.find((project) => project.id === btn.id);
  const element = ` <div class="overlay">
  <div class="head">
      <h2>${objElement.name}</h2>
      <img src="images/pop-up-close-icon.png" class="pop-up-close-icon" alt="">
  </div>
 <div class="project-description">
      <ul class="experience-list">
          <li>CANOPY</li>
          <li>Backend Dev</li>
          <li>2015</li>
      </ul>
      <img class="detail-img" src=${objElement.image} alt="">
 </div>
 <div class="flex-pop">
  <div class="pop-up-desc">
      <p>
        ${objElement.description}
      </p>
  </div>
  <div class="side-pop">
      <ul class="skill-list">
      ${
  objElement.technologies.map((technology) => (
    `<li>${technology}</li>`
  )).join('')
}
      </ul>
      <div class="see-container">
        <a href=${objElement.liveLink}>
          <button>
            <span>see live</span>
            <img src="images/see-live-icon.png" alt="">
          </button>
        </a>
      <a href=${objElement.sourceLink}>
        <button>
          <span>see source</span>
          <img src="images/see-source-icon.png" alt="">
        </button>
      </a>
    </div>
  </div>
 </div>
</div>`;
  popupSection.insertAdjacentHTML('beforeend', element);
}
seeProjectBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    showPopUp(btn);
    popupSection.classList.add('show-popup');
    window.scrollTo(0, 0);
    const closePopBtn = popupSection.querySelector('.pop-up-close-icon');
    const scrollHeight = window.scrollY;
    closePopBtn.addEventListener('click', () => {
      popupSection.classList.remove('show-popup');
      popupSection.innerHTML = '';
      window.scrollTo(0, scrollHeight);
    });
  });
});
/** * ---- End of pop up window functionality ---- ** */

/** * ---- Start of Contact form validation functionality ---- ** */
form.addEventListener('submit', (e) => {
  const value = email.value.replace(/[@.0-9]/gi, '');
  for (let i = 0; i < value.length; i += 1) {
    if (value[i].codePointAt(0) >= 65 && value[i].codePointAt(0) <= 90) {
      e.preventDefault();
      errorPara.classList.add('show-error');
      setTimeout(() => errorPara.classList.remove('show-error'), 2000);
    }
  }
});
/** * ---- End of Contact form validation functionality ---- ** */

/** * ---- Start of Local Storage Functionality ---- ** */
const detailObj = { name: '', email: '', message: '' };
const storage = localStorage.getItem('details') ? JSON.parse(localStorage.getItem('details')) : detailObj;
localStorage.setItem('details', JSON.stringify(storage));
autoFills.forEach((autofill) => {
  autofill.addEventListener('input', (e) => {
    if (e.target.name === 'fullName') {
      storage.name = e.target.value;
      localStorage.setItem('details', JSON.stringify(storage));
    } else if (e.target.name === 'email') {
      storage.email = e.target.value;
      localStorage.setItem('details', JSON.stringify(storage));
    } else {
      storage.message = e.target.value;
      localStorage.setItem('details', JSON.stringify(storage));
    }
  });
});
// Autofills input fields on reload
window.addEventListener('DOMContentLoaded', () => {
  fullName.value = storage.name;
  email.value = storage.email;
  message.value = storage.message;
});
/** * ---- End of Local Storage Functionality ---- ** */
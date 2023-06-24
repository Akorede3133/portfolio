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
const autoFills = document.querySelectorAll('.auto-fills');
const projects = [
  {
    name: 'tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'images/tonic.png',
    technologies: ['HTML', 'CSS', 'javascript'],
    liveLink: 'https://www.google.com',
    sourceLink: 'https://www.github.com/Akorede3133/portfolio',
    id: 'tonic',
  },
  {
    name: 'multi-Post stories',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    image: 'images/multi-stories.png',
    technologies: ['HTML', 'Ruby on rails', 'CSS', 'javascript'],
    liveLink: 'https://www.google.com',
    sourceLink: 'https://www.github.com/Akorede3133/portfolio',
    id: 'stories',
  },
  {
    name: 'facebook 360',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'images/facebook360.png',
    technologies: ['HTML', 'CSS', 'javascript'],
    liveLink: 'https://www.google.com',
    sourceLink: 'https://www.github.com/Akorede3133/portfolio',
    id: 'facebook',
  },
  {
    name: 'uber navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    image: 'images/uber.png',
    technologies: ['HTML', 'Ruby on rails', 'CSS', 'javascript'],
    liveLink: 'https://www.google.com',
    sourceLink: 'https://www.github.com/Akorede3133/portfolio',
    id: 'uber',
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
const detailObj = { name: '', email: '' };
const storage = localStorage.getItem('details') ? JSON.parse(localStorage.getItem('details')) : detailObj;
localStorage.setItem('details', JSON.stringify(storage));
autoFills.forEach((autofill) => {
  autofill.addEventListener('input', (e) => {
    if (e.target.name === 'fullName') {
      storage.name = e.target.value;
      localStorage.setItem('details', JSON.stringify(storage));
    } else {
      storage.email = e.target.value;
      localStorage.setItem('details', JSON.stringify(storage));
    }
  });
});
/** * ---- End of Local Storage Functionality ---- ** */
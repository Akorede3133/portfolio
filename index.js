const navLink = document.querySelector('.nav-link');
const hamburgerIcon = document.querySelector('.toolbar-hamburger');
const closeIcon = document.querySelector('.close-container');
const links = document.querySelectorAll('.nav-link > li');
const headerHeroSection = document.querySelector('.header-hero-section');
const projectSection = document.querySelector('.project-section');
const projects = [
  {
    name: 'tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'images/tonic.png',
    technologies: ['HTML', 'CSS', 'javascript'],
    liveLink: 'https://www.tonicLive.com',
    sourceLink: 'https://www.github.com/Akorede3133',
  },
  {
    name: 'multi-Post strories',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    image: 'images/multi-stories.png',
    technologies: ['HTML', 'Ruby on rails', 'CSS', 'javascript'],
    liveLink: 'https://www.muli-post.com',
    sourceLink: 'https://www.github.com/Akorede3133',
  },
  {
    name: 'facebook 360',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'images/facebook360.png',
    technologies: ['HTML', 'CSS', 'javascript'],
    liveLink: 'https://www.tonicLive.com',
    sourceLink: 'https://www.github.com/Akorede3133',
  },
  {
    name: 'uber navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    image: 'images/uber.png',
    technologies: ['HTML', 'Ruby on rails', 'CSS', 'javascript'],
    liveLink: 'https://www.uber.com',
    sourceLink: 'https://www.github.com/Akorede3133',
  },
];
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
      <button>
          See Project
      </button>
  </div>
</article>`
)).join('');
projectSection.insertAdjacentHTML('beforeend', projectElements);
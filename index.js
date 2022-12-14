'use strict';


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const nav = document.querySelector('.nav')

const section11 = document.querySelector('#section--1')


const openModal = function (e) {
    e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));



btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


const header = document.querySelector('.header');
const allSelections = document.querySelectorAll('.section');

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');


const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'we use cookied to improve our user experience and analytics.';
message.innerHTML = 'we use cookied to improve our user experience and analytics. <button class="btn btn--close-cookie">Got it!</button>';
header.append(message);
document.querySelector('.btn--close-cookie').addEventListener('click', function() {
  message.remove();
});


message.style.background = 'white';
message.style.color = 'orange';
message.style.width = '110%';
message.style.height= '20%';

console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'red');


const logo = document.querySelector('.nav__logo');





const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  
section1.scrollIntoView({ behavior: 'smooth' });

});

const h1 = document.querySelector('h1');
const alertH1 = function (e) {
  alert('Keep a date with your Dentist, UCH Dental center offer best quality services')

};

h1.addEventListener('mouseenter', alertH1);
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 2000);

const tabs = document.querySelectorAll('.operations__tab');

const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  
if (!clicked) return;
tabs.forEach(t => t.classList.remove('operations__tab--active'));

tabs.forEach(t => t.classList.remove('operations__tab--active'));
tabsContent.forEach(c => c.classList.remove('operations__content--active'));
 clicked.classList.add('operations__tab--active'); 

document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});

const handleHover = function (e) {
    if(e.target.classList.contains('nav__link')) {
      const link = e.target;
      const siblings = link.closest('.nav').
      querySelectorAll('.nav__link');
      const logo = link.closest('.nav').querySelector('img');
      siblings.forEach(el => {
        if (el!== link) el.style.opacity = this;
      });
      logo.style.opacity = this;
    };
    };
  
    
    nav.addEventListener('mouseover',
      handleHover.bind(0.2)
    );
    nav.addEventListener('mouseout',
      handleHover.bind(1)
    );
  
  
  const headerr = document.querySelector('.header');
  
  const navHeight = nav.getBoundingClientRect().height;

  // const stickyNav = function(entries) {
  // const [entry] = entries;
  // console.log(entry);
  // if (!entry.isIntersecting) nav.classList.add('sticky');
  // else nav.classList.remove('sticky');
  // };
  
  // const headerObserver = new IntersectionObserver(stickyNav, {
  //   root: null,
  //   threshold: 0,
  //   rootMargin: `${navHeight}px`,
  // });
  // headerObserver.observe(headerr);
  
  // const allSections = document.querySelectorAll('.section');
  
  // const revealSection = function(entries, observer) {
  //   const [entry] = entries;

  // if (!entry.isIntersecting) return;
  
  //   entry.target.classList.remove('section--hidden');

  // };
  
  // const sectionObserver  = new IntersectionObserver(revealSection, {
  //   root: null,
  //   threshold: 0.15,
  // });
  // allSections.forEach(function (section) {
  //   sectionObserver.observe(section);
  //   section.classList.add('section--hidden');
  // });



const imgTargets = document.querySelectorAll('img[data-src]');
console.log(imgTargets);

const loadImg = function (entries, observer) {
const [entry] = entries;
if(!entry.isIntersecting) return;

entry.target.src = entry.target.dataset.src;

entry.target.addEventListener('load', function () {
  entry.target.classList.remove('lazy-img');
});

observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg,
   {
    root: null,
    threshold: 0,
    rootMargin:'-250px'
   })

   imgTargets.forEach(img => imgObserver.observe(img));



document.querySelector('.modale').addEventListener
('click', function (e) {
  e.preventDefault();
if (e.target.classList.contains('nist')) {
  const id = e.target.getAttribute('href');
  document.querySelector(id).scrollIntoView({
      behavior: 'smooth'});
}
});

console.log(h1.querySelectorAll('.highlight'));
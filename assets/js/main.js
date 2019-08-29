const nav = document.querySelector('.nav');
const navMenuButton = document.querySelector('.burger__checkbox');
const navMenuList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-list__item');

const menuSelector = document.querySelectorAll('.menu-selector__btn');
const menuContent = document.querySelectorAll('.menu-content');

const overlay = document.getElementsByClassName('img-overlay')[0];
const overlayImage = document.querySelector('.img-overlay__img');
const overlayClose = document.querySelector('.img-overlay__close');
const galleryItem = document.querySelectorAll('.gallery__item');


//  Shrink navbar while scrolling
const navShrink = () => {
  if (window.scrollY > 100) {
    nav.classList.add('nav--scroll');
  } else {
    nav.classList.remove('nav--scroll');
  }
}

window.addEventListener('scroll', navShrink);

// Responsive Navbar Menu
navMenuButton.addEventListener('click', () => {
  if (navMenuButton.checked === true) {
    navMenuList.style.display = 'flex';
  } else {
    navMenuList.style.display = 'none';
  }
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', () => {
    navMenuList.style.display = 'none';
    navMenuButton.checked = false;
  })
}


// Menu switch
for (let i = 0; i < menuSelector.length; i++) {
  menuContent[0].style.cssText = 'display: grid;';
  menuSelector[i].addEventListener('click', () => {
    if (menuContent[i].style.display !== 'grid') {
      menuSelector.forEach(item => item.classList.remove('menu-selector__btn--active'));
      menuSelector[i].classList.add('menu-selector__btn--active');
      menuContent.forEach(item => item.setAttribute('style', 'display: none;'));
      menuContent[i].setAttribute('style', 'display: grid;');
    }
  });
}


// Photo gallery
const handleImageOpen = (e) => {
  let src = e.currentTarget.querySelector('img').src;
  overlayImage.src = src;
  overlay.classList.add('opened');
}

const closeImage = () => {
  overlay.classList.remove('opened');
}

galleryItem.forEach(item => item.addEventListener('click', handleImageOpen));
overlayClose.addEventListener('click', closeImage);
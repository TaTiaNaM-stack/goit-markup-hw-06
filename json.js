
const burgerButton = document.querySelector('.burger-btn');
const markupMobMenu = document.querySelector('.mobile-menu');
const mobMenuClose = document.querySelector('.mobile-menu-close');

// const mobMenuAlert = document.getElementById('mobile-menu');
// mobMenuAlert.style.displey = 'none';
// mobMenuAlert.style.opacity = '1';
// mobMenuAlert.style.pointerEvents = 'all';
// mobMenuAlert.style.backgroundColor = '#fff';
// mobMenuAlert.style.zIndex = '1000';
markupMobMenu.style.opacity = '0';
burgerButton.addEventListener('click', () => {
  markupMobMenu.classList.toggle('active');
  const isActive = markupMobMenu.classList.contains('active');
  if (isActive) {
    markupMobMenu.style.opacity = '1';
    markupMobMenu.style.pointerEvents = 'all';
    markupMobMenu.style.backgroundColor = '#fff';
    markupMobMenu.style.zIndex = '10';
    markupMobMenu.style.transition = 'opacity 0.3s ease';

  } else {
    markupMobMenu.style.opacity = '0';
    markupMobMenu.style.pointerEvents = 'none';
    markupMobMenu.style.backgroundColor = 'transparent';
    markupMobMenu.style.zIndex = '-1';
  }

});

mobMenuClose.addEventListener('click', () => {
  markupMobMenu.classList.remove('active');
  markupMobMenu.style.opacity = '0';
    markupMobMenu.style.pointerEvents = 'none';
    markupMobMenu.style.backgroundColor = 'transparent';
    markupMobMenu.style.zIndex = '-1';
    markupMobMenu.style.transition = 'opacity 0.3s ease';
});






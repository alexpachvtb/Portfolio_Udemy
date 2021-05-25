const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeMenu = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('menu_active');
    hamburger.classList.remove('hamburger');
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('menu_active');
    hamburger.classList.add('hamburger');
});

const percents = document.querySelectorAll('.scales__item-percent'),
      scales = document.querySelectorAll('.scales__item-orange');
    
percents.forEach((item, i) => {
    scales[i].style.width = item.innerHTML;
});
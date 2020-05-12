const hamburger = document.querySelector('.menu-btn');
const nav = document.querySelector('.menu');

const handleClick = () => {
     hamburger.classList.toggle('open');
     nav.classList.toggle('menu--active');
}

hamburger.addEventListener('click', handleClick);
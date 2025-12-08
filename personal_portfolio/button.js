let btn = document.querySelector('.menu-button');

const menu = document.querySelector('nav');


btn.addEventListener('click',toggleMenu);

function toggleMenu(){
    menu.classList.toggle('hidden-nav');

    btn.classList.toggle('change');
}
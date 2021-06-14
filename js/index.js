'use strict';

const menu = document.getElementById('sp-menu');
const trigger = document.querySelector('.menu-trigger');
const overlay = document.querySelector('.overlay');

menu.addEventListener('click', () => {
    trigger.classList.toggle('active');
    overlay.classList.toggle('show');
})
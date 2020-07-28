import {callModal} from './call-modal.js'

const burger = document.querySelector('.header__btn-burger');
const sidebarBtnClose = document.querySelector('.sidebar__btn-close');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

burger.addEventListener('click', function () {
    sidebar.classList.add('sidebar--show');
    document.body.classList.add('overflow-hidden');
    overlay.classList.add('overlay--active');
});

sidebarBtnClose.addEventListener('click', function () {
    sidebar.classList.remove('sidebar--show');
    document.body.classList.remove('overflow-hidden');
    overlay.classList.remove('overlay--active');
});

overlay.addEventListener('click', function () {
    sidebar.classList.remove('sidebar--show');
    overlay.classList.remove('overlay--active');
    document.body.classList.remove('overflow-hidden');
    callModal.classList.remove('call-modal--show');
});


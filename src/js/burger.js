const burger = document.querySelector('.header__btn-burger');
const sidebarBtnClose = document.querySelector('.sidebar__btn-close');
const sidebar = document.querySelector('.sidebar');

burger.addEventListener('click', function () {
    sidebar.classList.add('sidebar--show');
    sidebar.classList.remove('sidebar--hidden');
});

sidebarBtnClose.addEventListener('click', function () {
    sidebar.classList.add('sidebar--hidden');
    sidebar.classList.remove('sidebar--show');
});


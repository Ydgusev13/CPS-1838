const { call } = require("file-loader");

export const callModal = document.querySelector('.call-modal');
const sidebarBtnCall = document.querySelector('.sidebar__btn-call'); 
const callModalBtnClose = callModal.querySelector('.call-modal__btn-close');
const overlay = document.querySelector('.overlay');

sidebarBtnCall.addEventListener('click', function () {
    callModal.classList.add('call-modal--show');
    document.body.classList.add('overflow-hidden');
    overlay.classList.add('overlay--active');
});

callModalBtnClose.addEventListener('click', function () {
    callModal.classList.remove('call-modal--show');
    document.body.classList.remove('overflow-hidden');
    overlay.classList.remove('overlay--active');
});

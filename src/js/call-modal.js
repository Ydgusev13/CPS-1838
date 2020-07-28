const { call } = require("file-loader");

export const callModal = document.querySelector('.call-modal');
const sidebarBtnCall = document.querySelector('.sidebar__btn-call'); 
const callModalBtnClose = callModal.querySelector('.call-modal__btn-close');

sidebarBtnCall.addEventListener('click', function () {
    callModal.classList.add('call-modal--show');
});

callModalBtnClose.addEventListener('click', function () {
    callModal.classList.remove('call-modal--show');
});

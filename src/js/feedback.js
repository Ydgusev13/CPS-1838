const sidebarBtnChat = document.querySelector('.sidebar__btn-chat');
export const feedback = document.querySelector('.feedback');
const overlay = document.querySelector('.overlay');
const feedbackBtnClose =  feedback.querySelector('.feedback__btn-close');

sidebarBtnChat.addEventListener('click', function () {
    feedback.classList.add('feedback--show');
    document.body.classList.add('overflow-hidden');
    overlay.classList.add('overlay--active');
});

feedbackBtnClose.addEventListener('click', function () {
    feedback.classList.remove('feedback--show');
    document.body.classList.remove('overflow-hidden');
    overlay.classList.remove('overlay--active');
});



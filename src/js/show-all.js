const aboutText2 = document.querySelector('.about__text-2');
const aboutReadNext = document.querySelector('.about__read-next');

aboutReadNext.addEventListener('click', function () {
    
    if (aboutReadNext.textContent === 'Читать далее') {
        aboutText2.classList.remove('about__text-2--hidden');
        aboutReadNext.textContent = 'Свернуть';
        aboutReadNext.className = 'about__roll-up';
    } else {
        aboutText2.classList.add('about__text-2--hidden');
        aboutReadNext.textContent = 'Читать далее';
        aboutReadNext.className = 'about__read-next';
    }
});


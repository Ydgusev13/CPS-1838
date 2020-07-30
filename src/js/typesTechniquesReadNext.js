const typesTechniquesSlidesHidden = document.querySelectorAll('.types-techniques__swiper-slide--hidden');
const typesTechniquesReadNextButton = document.querySelector('.types-techniques__read-next');

typesTechniquesReadNextButton.addEventListener('click', function () {

    if (typesTechniquesReadNextButton.textContent === 'Показать все') {
        for(let i = 0; i < typesTechniquesSlidesHidden.length; i++) {
            typesTechniquesSlidesHidden[i].classList.toggle('types-techniques__swiper-slide--hidden');
        }

        typesTechniquesReadNextButton.className = 'types-techniques__roll-up';
        typesTechniquesReadNextButton.textContent = 'Свернуть';
    } else {
        for(let i = 0; i < typesTechniquesSlidesHidden.length; i++) {
            typesTechniquesSlidesHidden[i].classList.toggle('types-techniques__swiper-slide--hidden');
        }

        typesTechniquesReadNextButton.className = 'types-techniques__read-next';
        typesTechniquesReadNextButton.textContent = 'Показать все';
    }
});
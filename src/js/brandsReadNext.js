const brandsSwiperSlides = document.querySelectorAll('.brands__swiper-slide');
const brandsReadNext = document.querySelector('.brands__read-next');

brandsReadNext.addEventListener('click', function(){

    if (brandsReadNext.textContent === 'Показать все') {

        for(let i = 6; i < brandsSwiperSlides.length; i++) {
            brandsSwiperSlides[i].style.display = "block";
        }

        brandsReadNext.className = 'brands__roll-up';
        brandsReadNext.textContent = 'Свернуть';
    } else {
        for(let i = 6; i < brandsSwiperSlides.length; i++) {
            brandsSwiperSlides[i].style.cssText = "";
        }

        brandsReadNext.className = 'brands__read-next';
        brandsReadNext.textContent = 'Показать все';
    }
});
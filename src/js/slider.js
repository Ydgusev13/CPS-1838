import {Pagination, Swiper} from "swiper";

Swiper.use(Pagination);
const brandsSlider = document.querySelector('.brands__swiper-container');
const typesTechniquesSlider = document.querySelector('.types-techniques__swiper-container');
const priceSlider = document.querySelector('.price__swiper-container');
let brandsSwiper;
let typesTechniquesSwiper;
let priceSwiper;

function mobileSlider() {
  if (window.innerWidth < 768 && brandsSlider.dataset.mobile == 'false') {

    brandsSwiper = new Swiper (brandsSlider, {  
      slideClass: 'brands__swiper-slide',
      wrapperClass: 'brands__swiper-wrapper',
      slidesPerView: 'auto',     
      spaceBetween: 16,
      pagination: {
        el: '.brands__swiper-pagination',
        type: 'bullets',
      }
    });
    
    typesTechniquesSwiper = new Swiper (typesTechniquesSlider, {         
      slideClass: 'types-techniques__swiper-slide',
      wrapperClass: 'types-techniques__swiper-wrapper',
      slidesPerView: 'auto',     
      spaceBetween: 16,
      pagination: {
        el: '.types-techniques__swiper-pagination',
        type: 'bullets', 
      }       
    }); 

    priceSwiper = new Swiper (priceSlider, { 
      slideClass: 'price__swiper-slide',
      wrapperClass: 'price__swiper-wrapper',
      slidesPerView: 'auto',     
      spaceBetween: 16,
      pagination: {
        el: '.price__swiper-pagination',
        type: 'bullets',
        }
    });

    brandsSlider.dataset.mobile = 'true';
    typesTechniquesSlider.dataset.mobile = 'true';
    priceSlider.dataset.mobile = 'true';
  }

  if (window.innerWidth >= 768) {
    brandsSlider.dataset.mobile = 'false';
    typesTechniquesSlider.dataset.mobile = 'false';
    priceSlider.dataset.mobile = 'false';

    if (brandsSlider.classList.contains('swiper-container-initialized')) {
      brandsSwiper.destroy();
    }

    if (typesTechniquesSlider.classList.contains('swiper-container-initialized')) {
      typesTechniquesSwiper.destroy();
    }

    if (priceSlider.classList.contains('swiper-container-initialized')) {
      priceSwiper.destroy();
    }
  }
}

mobileSlider();

window.addEventListener('resize', () => {
  mobileSlider();
});
      


      


      

          
  

      
   
 





import {Pagination, Swiper} from "swiper";

Swiper.use(Pagination);
const brandsSlider = document.querySelector('.brands__swiper-container');
const typesTechniquesSlider = document.querySelector('.types-techniques__swiper-container');
const priceSlider = document.querySelector('.price__swiper-container');
let brandsSwiper;
let typesTechniquesSwiper;
let priceSwiper;

function mobileSlider() {

  let createSwiper = function (swiperName, sliderName, slideClassName, wrapperClassName, paginationEl) {
    swiperName = new Swiper (sliderName, {  
      slideClass: slideClassName,
      wrapperClass: wrapperClassName,
      slidesPerView: 'auto',     
      spaceBetween: 16,
      pagination: {
        el: paginationEl,
        type: 'bullets',
      }
    });
  };

  let setDataSet = function (sliderName, value) {
    sliderName.dataset.mobile = value;
  };

  if (window.innerWidth < 768 && brandsSlider.dataset.mobile == 'false') {
    
    createSwiper(brandsSwiper, brandsSlider, 'brands__swiper-slide', 'brands__swiper-wrapper', '.brands__swiper-pagination');
    createSwiper(typesTechniquesSwiper, typesTechniquesSlider, 'types-techniques__swiper-slide', 'types-techniques__swiper-wrapper', '.types-techniques__swiper-pagination');
    createSwiper(priceSwiper, priceSlider, 'price__swiper-slide', 'price__swiper-wrapper', '.price__swiper-pagination');
    
    setDataSet(brandsSlider, 'true');
    setDataSet(typesTechniquesSlider, 'true');
    setDataSet(priceSlider, 'true');
  };

  if (window.innerWidth >= 768 && brandsSwiper) {

    let destroySwiper = function (sliderName, swiperName) {
      if (sliderName.classList.contains('swiper-container-initialized')) {
        swiperName.destroy();
      };
    };

    setDataSet(brandsSlider, 'false');
    setDataSet(typesTechniquesSlider, 'false');
    setDataSet(priceSlider, 'false');

    destroySwiper(brandsSlider, brandsSwiper); 
    destroySwiper(typesTechniquesSlider, typesTechniquesSwiper); 
    destroySwiper(priceSlider, priceSwiper); 

  };
};

mobileSlider();

window.addEventListener('resize', () => {
  mobileSlider();
});
      


      


      

          
  

      
   
 





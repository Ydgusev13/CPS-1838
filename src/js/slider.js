
  import {Pagination, Swiper} from "swiper";

  Swiper.use(Pagination);

  const brandsSlider = document.querySelector('.brands__swiper-container');

 let brandsSwiper = new Swiper (brandsSlider, {
    
    slideClass: 'brands__swiper-slide',
    wrapperClass: 'brands__swiper-wrapper',
    slidesPerView: 'auto',     
    spaceBetween: 16,
    pagination: {
      el: '.brands__swiper-pagination',
      type: 'bullets',
      }

  });

  const typesTechniquesSlider = document.querySelector('.types-techniques__swiper-container');

  let typesTechniquesSwiper = new Swiper (typesTechniquesSlider, {
     
     slideClass: 'types-techniques__swiper-slide',
     wrapperClass: 'types-techniques__swiper-wrapper',
     slidesPerView: 'auto',     
     spaceBetween: 16,
     pagination: {
       el: '.types-techniques__swiper-pagination',
       type: 'bullets',
       }
 
   }); 

   const priceSlider = document.querySelector('.price__swiper-container');

   let priceSwiper = new Swiper (priceSlider, {
      
      slideClass: 'price__swiper-slide',
      wrapperClass: 'price__swiper-wrapper',
      slidesPerView: 'auto',     
      spaceBetween: 16,
      pagination: {
        el: '.price__swiper-pagination',
        type: 'bullets',
        }
  
    }); 
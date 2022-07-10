// Подключение свайпера
import Swiper, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  Thumbs
} from 'swiper'
Swiper.use([Navigation, Pagination, Autoplay, EffectFade, Thumbs])

// heroSlider

const heroSlider = new Swiper('.hero__right', {
  slidesPerView: 1,
  spaceBetween: 30,
  // Navigation arrows
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },
});

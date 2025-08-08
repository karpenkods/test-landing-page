import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export function initSwipers() {
  const stagesSwiperEl = document.querySelector('.js-stages-swiper')
  const participantsSwiperEl = document.querySelector('.js-participants-swiper')

  const mobile = window.matchMedia('(min-width: 0) and (max-width: 610px)')

  if (stagesSwiperEl) {
    let stagesSwiper = null
    let stagesSwiperInit = false

    function toggleStagesSwiper() {
      if (mobile.matches) {
        if (stagesSwiperInit) return
        stagesSwiperInit = true
        stagesSwiper = new Swiper(stagesSwiperEl, {
          modules: [Navigation, Pagination],
          loop: false,
          lazy: true,
          slidesPerGroup: 1,
          slidesPerView: 1,
          spaceBetween: 20,
          pagination: {
            el: '.stages__slider-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.stages__slider-next',
            prevEl: '.stages__slider-prev'
          }
        })
      } else {
        if (!stagesSwiperInit) return
        stagesSwiper.destroy(true, true)
        stagesSwiperInit = false
      }
    }

    window.addEventListener('load', function () {
      toggleStagesSwiper()
    })

    window.addEventListener('resize', function () {
      toggleStagesSwiper()
    })
  }

  if (participantsSwiperEl) {
    new Swiper(participantsSwiperEl, {
      modules: [Navigation, Pagination, Autoplay],
      loop: true,
      lazy: true,
      spaceBetween: 20,
      slidesPerGroup: 1,
      autoplay: {
        delay: 4000
      },
      breakpoints: {
        0: {
           slidesPerView: 1,
        },
        610: {
           slidesPerView: 3,
        }
      },
      pagination: {
        el: '.participants__slider-pagination',
        type: 'fraction'
      },
      navigation: {
        nextEl: '.participants__slider-next',
        prevEl: '.participants__slider-prev'
      }
    })
  }
}

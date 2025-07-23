var swiper = new Swiper('.swiper-container',{
       autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
      slidesPerView: 'auto',
      centeredSlides: true,
      loop: true,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
	  navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
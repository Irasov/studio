const swiper = new Swiper('.slider-nouve', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider-nouve__next',
      prevEl: '.slider-nouve__prev',
    },
    slidesPerView: 3,
  
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      498: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });

  const swiper2 = new Swiper('.slider-propos', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider-propos__next',
      prevEl: '.slider-propos__prev',
    },
    slidesPerView: 3,
  
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      498: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });

  const swiper3 = new Swiper('.slider-studio', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider-studio__next',
      prevEl: '.slider-studio__prev',
    },
    slidesPerView: 3,
  
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      498: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });

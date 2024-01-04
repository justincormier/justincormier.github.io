// Initiate AOS
AOS.init();

// Swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 40,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});


// init controller
var controller = new ScrollMagic.Controller();


  var scene = new ScrollMagic.Scene({
          triggerElement: ".parallax-section",
          triggerHook: 0,
          duration: 1500,
          offset: 0
        })
        .setPin('.parallax-section') // Locks the element in place
        .setTween(".parallax-section #layer-top", 1, {bottom: 50, scale: 1.07}) // trigger a TweenMax.to tween
        .addTo(controller);



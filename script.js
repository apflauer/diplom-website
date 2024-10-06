var swiper = new Swiper('.swiper-container', {
  slidesPerView: 2,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: false, // Deaktiviert die Navigation
  mousewheel: true, // Aktiviert das Wechseln mit der Maus
  touchEventsTarget: 'container', // Setzt den Touch-Events-Target auf den Container
});

// Verhindert das Scrollen des Bodys, wenn Swiper aktiv ist
swiper.on('touchStart', function (e) {
  e.preventDefault(); // Verhindert das Scrollen des Bodys
});
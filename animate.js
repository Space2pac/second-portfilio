window.addEventListener("scroll", function () {
  if (window.scrollY > 20) {
    $('.navbar').addClass('sticky');
    $('.goTop').fadeIn();
  } else {
    $('.navbar').removeClass('sticky');
    $('.goTop').fadeOut();
  }
  $('.goTop').click(function () {
    scroll(0, 0)
  });
});
window.addEventListener("click", function () {
  if (".menu-toggler", "click") {
    $(".menu-toggler").toggleClass("active")
    $(".navbar-menu").toggleClass("active")
  }
})

$(document).ready(function () {
  $(".works").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true
    }
  })


});
$( document ).ready(function() {
  $('#about1').on('click', function(){
      $('html, body').animate({
          scrollTop: $('#about').offset().top
      }, 1500);
  });

  });
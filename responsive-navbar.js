
$(document).ready(() => {

  $('#mobile-menu').on('click', () => {
    let $navUl = $('.nav-ul');
    $navUl.slideToggle('slow');
  });

  $(window).bind("resize", () => {
    if( $(window).width() > 800) {
      $('.nav-ul').removeAttr("style");
    }
  })
});
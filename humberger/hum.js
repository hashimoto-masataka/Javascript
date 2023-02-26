$(function() {
  $('.menu-trigger').on('click', function(event) {
    $(this).toggleClass('acti');
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});
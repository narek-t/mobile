$(document).ready(function() {
  function removeVisibility() {
    $(".main-nav").removeClass('visible');
    $("button.main-nav__btn").removeClass('active');
    $(".shadow").removeClass('visible');
    $(".all-wrapper").removeClass('overflow-hidden');
  }
  $(".shadow").click(function() {
    removeVisibility();
  });
  $("button.main-nav__btn").click(function() {
    if ($(this).hasClass('active')) {
      removeVisibility();
    } else {
      $(this).addClass('active');
      $(".main-nav").addClass('visible');
      $(".shadow").addClass('visible');
      $(".all-wrapper").addClass('overflow-hidden');
    }
  });


  //swipe
  var myMenu = document.getElementById('main-nav');
  var mc = new Hammer(myMenu);
  // listen to events...
  mc.on("swipeleft", function(ev) {
    removeVisibility();
  });

  //search box
  $("button.search__btn").click(function() {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(".search__layout").removeClass('visible');
      $(".all-wrapper").removeClass('overflow-hidden');
    } else {
      $(this).addClass('active');
      $(".search__layout").addClass('visible');
      $(".all-wrapper").addClass('overflow-hidden');
    }
  });

  //scrollfix
  document.addEventListener('touchmove', function(event) {
    if (event.target.parentNode.className.indexOf('noBounce') != -1 ||
      event.target.className.indexOf('noBounce') != -1) {
      event.preventDefault();
    }
  }, false);

});

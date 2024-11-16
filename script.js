$(document).ready(function() {
  $('.text3b').hide();
  $('.preload').fadeOut();
  setTimeout(function() {
    $("html, body").animate({ scrollTop: 12 }, 750);
  }, 150);

  // animate icons on hover:
  $('.solid1 .solidC a, .solid1 .solidB').hover(function() {
    $('.solid1 .solidB').addClass('iconPulse');
  }, function() {
    $('.solid1 .solidB').removeClass('iconPulse');
  });
  $('.solid1 .solidE a, .solid1 .solidD').hover(function() {
    $('.solid1 .solidD').addClass('iconBounceDown');
  }, function() {
    $('.solid1 .solidD').removeClass('iconBounceDown');
  });
  $('.solid2 .solidC a, .solid2 .solidB').hover(function() {
    $('.solid2 .solidB').addClass('iconFlip');
  }, function() {
    $('.solid2 .solidB').removeClass('iconFlip');
  });
  $('.solid2 .solidE a, .solid2 .solidD').hover(function() {
    $('.solid2 .solidD').addClass('iconShake');
  }, function() {
    $('.solid2 .solidD').removeClass('iconShake');
  });

  // scrolling:
  $('.downArrow').on('click', function() {
    $('html, body').animate({
      scrollTop: 20
    });
  });

  $(window).on('scroll', function() {
    var scrolled = $(window).scrollTop();

    // parallax effect:
    $('.text1').css('top', 0 - (scrolled * 5) + 'px');
    $('.text3a').css('top', 0 - (scrolled * 2.5) + 'px');

    // show, hide text based on scroll position:
    if (scrolled > 12) {
      $('.welcome').fadeOut(250);
    } else {
      $('.welcome').fadeIn(250);
    }

    if (scrolled >= ($('.pic2').position().top) - 120) {
      $('.text2b').fadeOut(250);
    } else {
      $('.text2b').fadeIn(250);
    }

    if (scrolled >= ($('.pic3').position().top) - 6) {
      $('.text3b').fadeIn(1000);
    } else {
      $('.text3b').fadeOut(250);
    }

    // animations on bottom of page:
    if (scrolled + $(window).height() >= $(document).height() - 12) {
      $('.footer:first-child').addClass('bounce1');
      $('.footer:nth-child(2)').addClass('bounce2');
      $('.footer:nth-child(3)').addClass('bounce3');
      $('.footer:nth-child(4)').addClass('bounce4');
    } else if (scrolled + $(window).height() < $(document).height() - 48) {
      $('.footer:first-child').removeClass('bounce1');
      $('.footer:nth-child(2)').removeClass('bounce2');
      $('.footer:nth-child(3)').removeClass('bounce3');
      $('.footer:nth-child(4)').removeClass('bounce4');
    }

    $('.upArrow').on('click', function() {
      $(window).scrollTop(0);
    });

  }); //end scroll

}); //end ready

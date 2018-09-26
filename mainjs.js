$(document).ready(function() {
      $(window).on('scroll', function() {
        if (Math.round($(window).scrollTop()) > 100) {
          $('.nav_bar').addClass('scrolled');
        } else {
          $('.nav_bar').removeClass('scrolled');
        }
      });
    });

// scrolling jquery on about page
    var current = 1; //keeps track of the current div
    var height = $('.roles').height(); //the height of the roles div
    var numberDivs = $('.roles').children().length; //the number of children of the roles div
    var first = $('.roles div:nth-child(1)'); //the first div nested in roles div
    setInterval(function() {
        var number = current * -height;
        first.css('margin-top', number + 'px');
        if (current === numberDivs) {
            first.css('margin-top', '0px');
            current = 1;
        } else current++;
    }, 2000);

// go back function
    function goBack() {
        window.history.back();
    }

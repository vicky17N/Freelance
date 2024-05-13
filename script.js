
// pre loader start
function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut() {
    setInterval(loader, 400);
}
window.onload = fadeOut;
// pre loader end


  // smooth scrolling
  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top,
    }, 500, 'linear')
});


// Function to animate counter
$(document).ready(function(){
  $('.counter-value').each(function(){
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      },{
          duration: 15000,
          easing: 'swing',
          reset:true,
          step: function (now){
              $(this).text(Math.ceil(now));
          }
      });
  });
});

// service page
(function ($) {
  $(function () {
    if (!('ontouchstart' in window)) {
      const videoPropCont = document.querySelectorAll('.js-create_video');

      videoPropCont.forEach(function (item) {
        item.addEventListener('mouseenter', function () {
          var video = this.querySelector('video');

          if (!item.classList.contains('js-active')) {
            item.classList.add('js-active');

            video.play();
            video.loop = false;

            video.addEventListener('ended', function () {
              item.classList.remove('js-active');
              item.classList.remove('js-video-end');
              item.classList.remove('js-video-pause');
            });

            video.addEventListener('timeupdate', function () {
              if ((video.currentTime >= 2) && !item.classList.contains('js-video-end')) {
                video.pause();
                item.classList.add('js-video-pause');
              }
            });
          }
        });

        item.addEventListener('mouseleave', function () {
          var video = this.querySelector('video');

          if (item.classList.contains('js-active')) {
            if (item.classList.contains('js-video-pause')) {
              item.classList.add('js-video-end');
              video.play();
            } else {
              item.classList.add('js-video-end');
            }
          }
        });
      });
    }
  });
})(jQuery);
// service page

// testmonials start
     
$(document).ready(function(){
  $("#testimonial-slider").owlCarousel({
      items:1,
      itemsDesktop:[1000,1],
      itemsDesktopSmall:[979,1],
      itemsTablet:[768,1],
      pagination:true,
      transitionStyle:"backSlide",
      autoPlay:true,
      responsive:true
  });
});
//testmonials end

//blog section
$(document).ready(function () {
  function detect_active() {
    // get active
    var get_active = $("#dp-slider .dp_item:first-child").data("class");
    $("#dp-dots li").removeClass("active");
    $("#dp-dots li[data-class=" + get_active + "]").addClass("active");
  }
  $("#dp-next").click(function () {
    var total = $(".dp_item").length;
    $("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
    $.each($(".dp_item"), function (index, dp_item) {
      $(dp_item).attr("data-position", index + 1);
    });
    detect_active();
  });

  $("#dp-prev").click(function () {
    var total = $(".dp_item").length;
    $("#dp-slider .dp_item:last-child").hide().prependTo("#dp-slider").fadeIn();
    $.each($(".dp_item"), function (index, dp_item) {
      $(dp_item).attr("data-position", index + 1);
    });

    detect_active();
  });

  $("#dp-dots li").click(function () {
    $("#dp-dots li").removeClass("active");
    $(this).addClass("active");
    var get_slide = $(this).attr("data-class");
    console.log(get_slide);
    $("#dp-slider .dp_item[data-class=" + get_slide + "]")
      .hide()
      .prependTo("#dp-slider")
      .fadeIn();
    $.each($(".dp_item"), function (index, dp_item) {
      $(dp_item).attr("data-position", index + 1);
    });
  });

  $("body").on("click", "#dp-slider .dp_item:not(:first-child)", function () {
    var get_slide = $(this).attr("data-class");
    console.log(get_slide);
    $("#dp-slider .dp_item[data-class=" + get_slide + "]")
      .hide()
      .prependTo("#dp-slider")
      .fadeIn();
    $.each($(".dp_item"), function (index, dp_item) {
      $(dp_item).attr("data-position", index + 1);
    });

    detect_active();
  });
});


// hero section
ScrollReveal({origin: 'top',distance: '5000px',duration: 1000,reset: false}).reveal('.hero-section .hero-img', { delay: 400 });
ScrollReveal({origin: 'top',distance: '5000px',duration: 1000,reset: false}).reveal('.hero-section .hero-shapes img', { delay: 400 });
ScrollReveal({origin: 'bottom',distance: '5000px',duration: 1000,reset: false}).reveal('.hero-section .hero-shape', { delay: 400 });

// counter section
ScrollReveal({origin: 'top',distance: '500px',duration: 2000,reset:false}).reveal('.counter-section #counter', { delay: 400 });

//About section
ScrollReveal({origin: 'left',distance: '500px',duration: 2000,reset:false}).reveal('.About-section img', { delay: 400 });
ScrollReveal({origin: 'right',distance: '500px',duration: 2000,reset:false}).reveal('.About-section .intro', { delay: 400 });

//skill section
ScrollReveal({origin: 'left',distance: '500px',duration: 2000,reset:false}).reveal('.skill-section .intro', { delay: 400 });
ScrollReveal({origin: 'right',distance: '500px',duration: 2000,reset:false}).reveal('.skill-section img', { delay: 400 });
ScrollReveal({origin: 'left',distance: '500px',duration: 2000,reset:false}).reveal('.skill-section .container', { delay: 400 });


var srtop = ScrollReveal({
  origin: 'left',
  distance: '5000px',
  duration: 1000,
  reset: false
});

/* SCROLL HOME */
srtop.reveal('.hero-section .intro', { delay: 600 });

//About html

//faq section
$('.first ol li a').click(function () {
  $('.first ol li a.active-1').removeClass('active-1');
  $(this).closest('a').addClass('active-1');
});



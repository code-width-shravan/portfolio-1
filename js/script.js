
let togg = document.querySelector('.togle');
let addd = document.querySelector('.mob-ul');

togg.addEventListener('click', function abc(){
    addd.classList.toggle('sum');
})

// dark background

$(document).ready(function() {
    $(window).scroll(function() {
      if ($(document).scrollTop() > 50) {
        $(".dextop-header").addClass("dardcolor");
      } else {
        $(".dextop-header").removeClass("dardcolor");
      }
    });
  });

  // card slide

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        750:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

//progress bar 
//html
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 500) {
      $(".html").addClass("adhtml");
    } else {
      $(".html").removeClass("adhtml");
    }
  });
});
//css
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 800) {
      $(".css").addClass("adcss");
    } else {
      $(".css").removeClass("adcss");
    }
  });
});

//bootstrap
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 950) {
      $(".Bootstrap").addClass("adBootstrap");
    } else {
      $(".Bootstrap").removeClass("adBootstrap");
    }
  });
});

//java script

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 1100) {
      $(".javascript").addClass("adjavascript");
    } else {
      $(".javascript").removeClass("adjavascript");
    }
  });
});

//jquery

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() >1200) {
      $(".jqueries").addClass("adjqueries");
    } else {
      $(".jqueries").removeClass("adjqueries");
    }
  });
});
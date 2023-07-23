let togg = document.querySelector('.togle');
let addd = document.querySelector('.mob-ul');

togg.addEventListener('click', function abc(){
    addd.classList.toggle('sum');
})

//dardk backgrond header
$(document).ready(function() {
    $(window).scroll(function() {
      if ($(document).scrollTop() > 50) {
        $(".dextop-header").addClass("dardcolor");
      } else {
        $(".dextop-header").removeClass("dardcolor");
      }
    });
  });

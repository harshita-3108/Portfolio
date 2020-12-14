$(document).ready(function(){
  $(function() {
    $(window).on("load", function() {
      $('#loading').fadeOut('slow', function() {
        $(this).remove();
      });
    });
    });

  $(window).scroll(function(){
    if(this.scrollY >40){
      $('.navbar').addClass("sticky");
    }else{
      $('.navbar').removeClass("sticky");
    }
    // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
  });
  // typing text animation script
     var typed = new Typed(".typing", {
         strings: ["Coder", "Developer", "Student", "Learner"],
         typeSpeed: 100,
         backSpeed: 60,
         loop: true
     });
     var typed = new Typed(".typingg", {
         strings: ["Coder", "Developer", "Student", "Learner"],
         typeSpeed: 100,
         backSpeed: 60,
         loop: true
     });
      // slide-up script
      $('.scroll-up-btn').click(function(){
          $('html').animate({scrollTop: 0});
          // removing smooth scroll on slide-up button click
          $('html').css("scrollBehavior", "auto");
      });

  $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });
  // owl carousel script
   $('.carousel').owlCarousel({
       margin: 20,
       loop: true,
       autoplayTimeOut: 2000,
       autoplayHoverPause: true,
       responsive: {
           0:{
               items: 1,
               nav: false
           },
           600:{
               items: 2,
               nav: false
           },
           1000:{
               items: 3,
               nav: false
           }
       }
   });
});

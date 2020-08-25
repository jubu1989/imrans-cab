$(document).ready(function(){



   $('.scrollbar').click(function(){
      $("html,body").animate({
         scrollTop:0
   
      },3000);
   });
   $(window).scroll(function(){
      var mainWindow = $(this).scrollTop();
   
      if(mainWindow<550){
         $('.scrollbar').fadeOut()
      } else{
         $('.scrollbar').fadeIn()
      }
      // fixed-menu
      if(mainWindow>100){
         $('body').addClass('fixed-menu');
      } else{
         $('body').removeClass('fixed-menu');
      }
   
      
   });
   // menu-active class
   $('.navbar-nav li').click(function(){
      $(this).addClass('active').siblings().removeClass('active');
   });
// area finder
$('.navbar-nav a[href^="#"]').click(function(){

     
      var target = this.hash;

      $('html , body').animate({
         scrollTop : $(target).offset().top
      }, 5000);
});




 

   // document ending
});





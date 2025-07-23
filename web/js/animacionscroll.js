$(window).on("load",function(){
  //Esconder todos los elementos para la animaciÃƒÂ³n
  
  $(".loader").fadeOut("slow");

  $('.iden1').children().css("visibility", "hidden");
  $('.iden2').children().css("visibility", "hidden");
  $('.coches').children().css("visibility", "hidden");
  $('.barra').children().css("visibility", "hidden");
  $('.clientes').children().css("visibility", "hidden");
  $('.faq').children().css("visibility", "hidden");
  $('.paymod').children().css("visibility", "hidden");






  

  
  var hecho1 = 0;
  var hecho2 = 0;
  var hecho3 = 0;
  var hecho4 = 0;
  var hecho5 = 0;
  var hecho6 = 0;
  var hecho7 = 0;





  //Cambiar fondo de la barra de menÃƒÂº al scrollear
 $(window).scroll(function() {
    if($(window).width() > 1024){
      if($(window).scrollTop() > 200 ) 
      alturaNav = $('nav').height();
    }

    else{
      if($(window).scrollTop() > 200 ) {
      }
      alturaNav = $('.menuBar').height();
    }
  
  
    
  
  
    
    var windowHeight = $(window).scrollTop();
  var elemento1 = $("#id").offset().top - alturaNav - 70;
  var elemento2 = $("#id").offset().top - alturaNav - 100;
  var elemento3 = $("#coches").offset().top - alturaNav - 100;
  var elemento4 = $(".barra").offset().top - alturaNav - 400;
  var elemento5 = $("#clientes").offset().top - alturaNav - 100;
  var elemento6 = $("#faq").offset().top - alturaNav - 100;
  var elemento7 = $("#mod-pay").offset().top - alturaNav - 100;





  
 
  
   if(windowHeight >= elemento1 && hecho1 == 0){
      $('.iden1').children().addClass('animated fadeInLeft').css("visibility", "visible");
      hecho1 = 1;
   }
  if(windowHeight >= elemento2 && hecho2 == 0){
    $('.iden2').children().addClass('animated fadeInRight').css("visibility", "visible");
      hecho2 = 2;
    }
  if(windowHeight >= elemento3 && hecho3 == 0){
    $('.coches').children().addClass('animated fadeInUp').css("visibility", "visible");
      hecho3 = 3;
    }
  if(windowHeight >= elemento4 && hecho4 == 0){
    $('.barra').children().addClass('animated fadeInUp').css("visibility", "visible");
      hecho4 = 4;
    }
     if(windowHeight >= elemento5 && hecho5 == 0){
    $('.clientes').children().addClass('animated fadeInUp').css("visibility", "visible");
      hecho5 = 5;
    }
    if(windowHeight >= elemento6 && hecho6 == 0){
    $('.faq').children().addClass('animated fadeInUp').css("visibility", "visible");
      hecho6 = 6;
    }
    if(windowHeight >= elemento7 && hecho7 == 0){
    $('.paymod').children().addClass('animated fadeInUp').css("visibility", "visible");
      hecho7 = 7;
    }

  
  
  });
  
});



// JavaScript Document// JavaScript Document
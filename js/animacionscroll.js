$(window).on("load",function(){
  //Esconder todos los elementos para la animaciÃƒÂ³n
  
  $(".loader").fadeOut("slow");

  $('.side-left').children().css("visibility", "hidden");
  $('.side-right').children().css("visibility", "hidden");
  $('.poli-cont').children().css("visibility", "hidden");
  $('.valor-cont').children().css("visibility", "hidden");
  $('.side-left-top').children().css("visibility", "hidden");
  $('.side-right-top').children().css("visibility", "hidden");
  $('.side-left-center1').children().css("visibility", "hidden");
  $('.side-right-center1').children().css("visibility", "hidden");
  $('.side-left-center2').children().css("visibility", "hidden");
  $('.side-right-center2').children().css("visibility", "hidden");
  $('.side-left-bottom').children().css("visibility", "hidden");
  $('.side-right-bottom').children().css("visibility", "hidden");
  $('.loc-cont').children().css("visibility", "hidden");
  $('.dat-cont').children().css("visibility", "hidden");







  

  
  var hecho1 = 0;
  var hecho2 = 0;
  var hecho3 = 0;
  var hecho4 = 0;
  var hecho5 = 0;
  var hecho6 = 0;
  var hecho7 = 0;
  var hecho8 = 0;
  var hecho9 = 0;
  var hecho10 = 0;
  var hecho11 = 0;
  var hecho12 = 0;
  var hecho13 = 0;
  var hecho14 = 0;





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
  var elemento1 = $("#nosotros").offset().top - alturaNav -100;
  var elemento2 = $("#nosotros").offset().top - alturaNav - 100;
  var elemento3 = $("#politicas").offset().top - alturaNav - 100;
  var elemento4 = $("#valores").offset().top - alturaNav - 100;
  var elemento5 = $("#servicios").offset().top - alturaNav - 100;
  var elemento6 = $("#servicios").offset().top - alturaNav - 100;
  var elemento7 = $(".side-left-center1").offset().top - alturaNav - 200;
  var elemento8 = $(".side-left-center1").offset().top - alturaNav - 200;
  var elemento9 = $(".side-left-center2").offset().top - alturaNav - 200;
  var elemento10 = $(".side-left-center2").offset().top - alturaNav - 200;
  var elemento11 = $(".side-left-bottom").offset().top - alturaNav - 200;
  var elemento12 = $(".side-left-bottom").offset().top - alturaNav - 200;
  var elemento13 = $("#contacto").offset().top - alturaNav - 100;
  var elemento14 = $("#contacto").offset().top - alturaNav - 100;













  
 
  
   if(windowHeight >= elemento1 && hecho1 == 0){
      $('.side-left').children().addClass('animated fadeInLeft').css("visibility", "visible");
      hecho1 = 1;
   }

  if(windowHeight >= elemento2 && hecho2 == 0){
    $('.side-right').children().addClass('animated fadeInRight').css("visibility", "visible");
      hecho2 = 2;
    }

  if(windowHeight >= elemento3 && hecho3 == 0){
    $('.poli-cont').children().addClass('animated fadeInUp').css("visibility", "visible");
      hecho3 = 3;
    }

  if(windowHeight >= elemento4 && hecho4 == 0){
    $('.valor-cont').children().addClass('animated fadeInUp').css("visibility", "visible");
      hecho4 = 4;
    }

  if(windowHeight >= elemento5 && hecho5 == 0){
    $('.side-left-top').children().addClass('animated fadeInUp').css("visibility", "visible");
      hecho5 = 5;
    }

    if(windowHeight >= elemento6 && hecho6 == 0){
    $('.side-right-top').children().addClass('animated fadeInUp').css("visibility", "visible");
      hecho6 = 6;
    }

    if(windowHeight >= elemento7 && hecho7 == 0){
    $('.side-left-center1').children().addClass('animated fadeInUp').css("visibility", "visible");
      hecho7 = 7;
    }

    if(windowHeight >= elemento8 && hecho8 == 0){
    $('.side-right-center1').children().addClass('animated fadeInUp').css("visibility", "visible");
      hecho8 = 8;
    }

    if(windowHeight >= elemento9 && hecho9 == 0){
    $('.side-left-center2').children().addClass('animated fadeInUp').css("visibility", "visible");
      hecho9 = 9;
    }

    if(windowHeight >= elemento10 && hecho10 == 0){
    $('.side-right-center2').children().addClass('animated fadeInUp').css("visibility", "visible");
      hecho10 = 10;
    }

    if(windowHeight >= elemento11 && hecho11 == 0){
    $('.side-left-bottom').children().addClass('animated fadeInUp').css("visibility", "visible");
      hecho11 = 11
    }

    if(windowHeight >= elemento12 && hecho12 == 0){
    $('.side-right-bottom').children().addClass('animated fadeInUp').css("visibility", "visible");
      hecho12 = 12;
    }

    if(windowHeight >= elemento13 && hecho13 == 0){
    $('.loc-cont').children().addClass('animated fadeInUp').css("visibility", "visible");
      hecho13 = 13;
    }

    if(windowHeight >= elemento14 && hecho14 == 0){
    $('.dat-cont').children().addClass('animated fadeInUp').css("visibility", "visible");
      hecho14 = 14;
    }

  
  
  });
  
});



// JavaScript Document// JavaScript Document
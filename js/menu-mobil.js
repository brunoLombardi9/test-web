$(document).ready(function(){

  //Transformar menú hamburguesa en cruz al activar
  $('.button-nav-toggle').on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('active');
      if($('.menuBar a').hasClass('active')){
        $('body').css("overflow-y", "hidden");
        $('.navbar').animate({
          left: '0',
          top: '65px',
          paddingTop: '0%',
        });
      }
      else{
        $('body').css("overflow-y", "auto");
        $('.navbar').animate({
          left: '-60%'
        });
      }
  });

  //Cerrar menú al cliquear en li y volver de la cruz al menú hamburguesa
  $('.navbar li a').click(function(){
    if($('.menuBar a').hasClass('active')){
      $('body').css("overflow", "auto");
      $('.navbar').animate({
        left: '-60%',
        top: '65px',
        paddingTop: '0'
      });
      $('.menuBar a ').removeClass('active');
      $('.menuBar a ').addClass('button-nav-toggle');
    }
  });   
});
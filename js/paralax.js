$(document).ready(function()
    {

        $(window).bind('scroll',function(e)
        {
          parallaxScroll();
        });
     
        function parallaxScroll()
        {
            var scrollEje_Y = $(window).scrollTop();


			
			
			$('.cuadrado').css('top', + 100 -  ((scrollEje_Y * 0.04)) + '%');
            $('.auto2').css('left', - 180 +  ((scrollEje_Y * 0.1)) + '%');
            $('.contact').css('background-position-y', + 1100 + ((scrollEje_Y * -.2)) + 'px');
			
           
        }

	});// JavaScript Document
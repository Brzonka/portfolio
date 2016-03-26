$(window).scroll(function(){
	var height = $('.about').offset().top;
	var height2 = $(window).scrollTop();
	if (height2>height){
		$('.menu').addClass('menu--fixed').fadeIn();
	}
	else{
		$('.menu').removeClass('menu--fixed');

	}
})

$(document).ready(function(){
	$('.menu__hamburger').click(function(){
		if($('header').hasClass('page-translate')){
			$('header, main, footer').removeClass('page-translate');
		}
		else if(($(window).trigger("scroll"))&&($('header').hasClass('page-translate'))){
			$('header, main, footer').removeClass('page-translate');

		}
		else{
			$('header, main, footer').addClass('page-translate');
		}
	})
})
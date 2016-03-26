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
			$('header, main, footer, nav').removeClass('page-translate');
			$('.menu__hamburger').removeClass('menu__hamburger--close-style');
		}
		else if(($(window).trigger("scroll"))&&($('header').hasClass('page-translate'))){
			$('header, main, footer, nav').removeClass('page-translate');
			$('.menu__hamburger').removeClass('menu__hamburger--close-style');
		}
		else{
			$('header, main, footer, nav').addClass('page-translate');
			$('.menu__hamburger').removeClass('menu__hamburger--close-style');
		}
	})
})
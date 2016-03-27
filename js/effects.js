$(window).scroll(function(){
	var height = $('.about').offset().top;
	var height2 = $(window).scrollTop();
	if (height2>=height){
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
			$(this).removeClass('menu__hamburger--close-style');
		}
		else if(($(window).trigger("scroll"))&&($('header').hasClass('page-translate'))){
			$('header, main, footer, nav').removeClass('page-translate');
			$(this).removeClass('menu__hamburger--close-style');
		}
		else{
			$('header, main, footer, nav').addClass('page-translate');
			$(this).addClass('menu__hamburger--close-style');
		}
	})
})
$(window).scroll(function(){
	if($('header').hasClass('page-translate')){
			$('header, main, footer, nav').removeClass('page-translate');
			$('.menu__hamburger').removeClass('menu__hamburger--close-style');
	}
});

$(document).ready(function() {
	var offset=[];
	$.each($('.header-of-page, .about, .technology, .projects, .after-hours, .contact'), function(i, element){
			offset[i]=$(element).offset().top;
		});
	$(window).resize(function(){
		$.each($('.header-of-page, .about, .technology, .projects, .after-hours, .contact'), function(i, element){
			offset[i]=$(element).offset().top;
		});
	});
	$(".navigation__list__item__link").click(function() {
		if($(this).attr('href')=="#1"){var h1=offset[0];}
		else if($(this).attr('href')=="#2"){var h1=offset[1];}
		else if($(this).attr('href')=="#3"){var h1=offset[2];}
		else if($(this).attr('href')=="#4"){var h1=offset[3];}
		else if($(this).attr('href')=="#5"){var h1=offset[4];}
		else if($(this).attr('href')=="#6"){var h1=offset[5];}
		$("html, body").stop().animate( { scrollTop: h1 }, 1000);
	});
	$(".prelude__button").click(function() {
		$("html, body").stop().animate( { scrollTop: offset[1] }, 1000);
	});

});

$(document).ready(function(){
	var offset=[];
	$.each($('.header-of-page, .about, .technology, .projects, .after-hours, .contact'), function(i, element){
			offset[i]=$(element).offset().top;
		});
	if($(window).resize()){
		$.each($('.header-of-page, .about, .technology, .projects, .after-hours, .contact'), function(i, element){
			offset[i]=$(element).offset().top;
		});
	}
	$(window).scroll(function(){
	var height=$(window).scrollTop();
	var height_window=$(window).height()

	if(height>(offset[1]-height_window/2)){
		$('.about__header, .about__header-bottom, .about__photo, .about__description').css({"animation-play-state":"running"});}

	if(height>(offset[2]-height_window/2)){
		$('.technology__header, .technology__header-bottom, .technology__list__item').css({"animation-play-state":"running"});}

	if(height>(offset[3]-height_window/2)){
		$('.projects__header, .projects__header-bottom, .projects__description').css({"animation-play-state":"running"});}

	if(height>(offset[4]-height_window/2)){
		$('.after-hours__header, .after-hours__header-bottom, .after-hours__list__item').css({"animation-play-state":"running"});}

	if(height>(offset[5]-height_window/2)){
		$('.contact__header, .contact__header-bottom, .contact__description, .contact__phone, .contact__email, .contact__social-media').css({"animation-play-state":"running"});}

})
})
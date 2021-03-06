$(document).ready(function(){
//Menu Fixed
	$(window).scroll(function(){
		var height = $('.about').offset().top;
		var height2 = $(window).scrollTop() + 50;
		var width_window = $(window).width();
		if (height2>=height){
			$('.menu').addClass('menu--fixed');
		}
		if ((height2>=height)&&(width_window>1000)){
			$('.navigation').addClass('navigation--big-screen--fixed');
		}
		if (width_window<1000){
			$('.navigation').removeClass('navigation--big-screen--fixed');
		}
		if (height2<height){
			$('.menu').removeClass('menu--fixed');
			$('.navigation').removeClass('navigation--big-screen--fixed');
		}
	})
	$(window).resize(function(){
		var height = $('.about').offset().top;
		var height2 = $(window).scrollTop() + 50;
		var width_window = $(window).width();
		if (height2>=height){
			$('.menu').addClass('menu--fixed');
		}
		if ((height2>=height)&&(width_window>1000)){
			$('.navigation').addClass('navigation--big-screen--fixed');
		}
		if (width_window<1000){
			$('.navigation').removeClass('navigation--big-screen--fixed');
		}
		if (height2<height){
			$('.menu').removeClass('menu--fixed');
			$('.navigation').removeClass('navigation--big-screen--fixed');
		}
	})

//Page Translate
	$('.menu__hamburger').click(function(){
		if($('header').hasClass('page-translate')){
			$('header, main, footer, nav, .menu').removeClass('page-translate');
			$(this).removeClass('menu__hamburger--close-style');
		}
		else if(($(window).trigger("scroll"))&&($('header').hasClass('page-translate'))){
			$('header, main, footer, nav, .menu').removeClass('page-translate');
			$(this).removeClass('menu__hamburger--close-style');
		}
		else{
			$('header, main, footer, nav, .menu').addClass('page-translate');
			$(this).addClass('menu__hamburger--close-style');
		}
	})
	$(window).scroll(function(){
		if($('header').hasClass('page-translate')){
				$('header, main, footer, nav, .menu').removeClass('page-translate');
				$('.menu__hamburger').removeClass('menu__hamburger--close-style');
		}
	});
	$(window).resize(function(){
		if($('header').hasClass('page-translate')){
				$('header, main, footer, nav, .menu').removeClass('page-translate');
				$('.menu__hamburger').removeClass('menu__hamburger--close-style');
		}
	});
//Big Screen Navigation
	var width="";
	width=$('.header-of-page').width();
	$(window).resize(function(){
		width=$('.header-of-page').width();
		if(width>1000){
			$('.navigation').addClass('navigation--big-screen');
			$('.menu').addClass('menu--big-screen');
			$('.navigation--big-screen').css({"animation":"1s start-slide-right"});

		}
		else if((width<1000)&&($('.navigation').hasClass('navigation--big-screen'))){
			$('.navigation').removeClass('navigation--big-screen');
			$('.menu').removeClass('menu--big-screen');
		}
	});
	if(width>1000){
		$('.navigation').addClass('navigation--big-screen');
		$('.menu').addClass('menu--big-screen');
	}
	else if((width<1000)&&($('.navigation').hasClass('navigation--big-screen'))){
		$('.navigation').removeClass('navigation--big-screen');
		$('.menu').removeClass('menu--big-screen');
	}
//Naviagtion Animation
	var offset=[];
	$.each($('.header-of-page, .about, .technology, .projects, .after-hours, .contact'), function(i, element){
			offset[i]=$(element).offset().top;
		});
	$(window).resize(function(){
		$.each($('.header-of-page, .about, .technology, .projects, .after-hours, .contact'), function(i, element){
			offset[i]=$(element).offset().top;
		});
	});
	$(".navigation__list__item__link").click(function(){
		$.each($('.header-of-page, .about, .technology, .projects, .after-hours, .contact'), function(i, element){
			offset[i]=$(element).offset().top;
		})
		var h1="";
		if($(this).attr('href')=="#start"){h1=offset[0];}
		else if($(this).attr('href')=="#o-mnie"){h1=offset[1];}
		else if($(this).attr('href')=="#technologie"){h1=offset[2];}
		else if($(this).attr('href')=="#projekty"){h1=offset[3];}
		else if($(this).attr('href')=="#po-godzinach"){h1=offset[4];}
		else if($(this).attr('href')=="#kontakt"){h1=offset[5];}
		$("html, body").stop().animate( { scrollTop: h1 }, 1000);
	});
	$(".prelude__button").click(function() {
		$("html, body").stop().animate( { scrollTop: offset[1] }, 1000);
	});

	$(window).scroll(function(){
		var height=$(window).scrollTop();
		var height_window=$(window).height();
		$.each($('.header-of-page, .about, .technology, .projects, .after-hours, .contact'), function(i, element){
			offset[i]=$(element).offset().top;
		});

		if((height>(offset[1]-height_window/2))&&(height<(offset[2]-height_window/4))){
			$('.about__header, .about__header-bottom, .about__photo, .about__description').css({"animation-play-state":"running"});}

		if((height>(offset[2]-height_window/2))&&(height<(offset[3]-height_window/4))){
			$('.technology__header, .technology__header-bottom, .technology__list__item, .technology__button').css({"animation-play-state":"running"});}

		if((height>(offset[3]-height_window/2))&&(height<(offset[4]-height_window/4))){
			$('.projects__header, .projects__header-bottom, .projects__description, .projects__list__item').css({"animation-play-state":"running"});}

		if((height>(offset[4]-height_window/2))&&(height<(offset[5]-height_window/4))){
			$('.after-hours__header, .after-hours__header-bottom, .after-hours__photoset-grid__img').css({"animation-play-state":"running"});}

		if(height>(offset[5]-height_window/2)){
			$('.contact__header, .contact__header-bottom, .contact__description, .contact__phone, .contact__email, .contact__social-media, .footer-of-page').css({"animation-play-state":"running"});}
	})
	
	var height=$(window).scrollTop();
		var height_window=$(window).height();

		if((height>(offset[1]-height_window/2))&&(height<(offset[2]-height_window/4))){
			$('.about__header, .about__header-bottom, .about__photo, .about__description').css({"animation-play-state":"running"});}

		if((height>(offset[2]-height_window/2))&&(height<(offset[3]-height_window/4))){
			$('.technology__header, .technology__header-bottom, .technology__list__item, .technology__button').css({"animation-play-state":"running"});}

		if((height>(offset[3]-height_window/2))&&(height<(offset[4]-height_window/4))){
			$('.projects__header, .projects__header-bottom, .projects__description, .projects__list__item').css({"animation-play-state":"running"});}

		if((height>(offset[4]-height_window/2))&&(height<(offset[5]-height_window/4))){
			$('.after-hours__header, .after-hours__header-bottom, .after-hours__photoset-grid__img').css({"animation-play-state":"running"});}

		if(height>(offset[5]-height_window/2)){
			$('.contact__header, .contact__header-bottom, .contact__description, .contact__phone, .contact__email, .contact__social-media, .footer-of-page').css({"animation-play-state":"running"});}

//Refresh URL
		$(window).scroll(function(){
		var height=$(window).scrollTop();
		var height_window=$(window).height();
		$.each($('.header-of-page, .about, .technology, .projects, .after-hours, .contact'), function(i, element){
			offset[i]=$(element).offset().top;
		});
		if((height>=(offset[0]-height_window/5))&&(height<(offset[1]))){
			document.location.hash = "start";}

		if((height>=(offset[1]-height_window/5))&&(height<(offset[2]))){
			document.location.hash = "o-mnie";}

		if((height>=(offset[2]-height_window/5))&&(height<(offset[3]))){
			document.location.hash = "technologia";}

		if((height>=(offset[3]-height_window/5))&&(height<(offset[4]))){
			document.location.hash = "projekty";}

		if((height>=(offset[4]-height_window/5))&&(height<(offset[5]))){
			document.location.hash = "po-godzinach";}

		if(height>=(offset[5]-height_window/2)){
			document.location.hash = "kontakt";}
	})
//Gallery

	$('.after-hours__photoset-grid').photosetGrid({
	  highresLinks: true,
	  rel: 'withhearts-gallery',
	  gutter: '7px',

	  onComplete: function(){
	    $('.after-hours__photoset-grid').attr('style', '');
	    $('.after-hours__photoset-grid a').colorbox({
	      photo: true,
	      scalePhotos: true,
	      maxHeight:'90%',
	      maxWidth:'90%'
	    });
	  }
	});
})

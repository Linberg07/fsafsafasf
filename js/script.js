$(document).ready(function(){
	$('.vacancies-body').slick({
		slidesToShow:2,
		dots:true,
		slidesToScroll:2,
		responsive:[{
			breakpoint:768,
			settings:{
				slidesToShow:1,
				slidesToScroll:1,
			}
		}]
	});
	var w = $(window).width();
	if(w<768){
		$('.header-list__beforeLogo').prependTo($('.burger-menu__body'));
		$('.header-list__afterLogo').prependTo($('.burger-menu__body'));
	}else{
		$('.header-list__beforeLogo').insertBefore($('.header-logo__wrap'));
		$('.header-list__afterLogo').insertAfter($('.header-logo__wrap'));
	
	}
	$('.header-burger').click(function(){
		$(this).toggleClass('active');
		$('.burger-menu').toggleClass('active');
		$('body').toggleClass('lock');
	})
})
$(window).resize(function(){
	var w = $(window).width();
	if(w<768){
		$('.header-list__beforeLogo').prependTo($('.burger-menu__body'));
		$('.header-list__afterLogo').prependTo($('.burger-menu__body'));
	}else{
		$('.header-list__beforeLogo').insertBefore($('.header-logo__wrap'));
		$('.header-list__afterLogo').insertAfter($('.header-logo__wrap'));
	
	}
})

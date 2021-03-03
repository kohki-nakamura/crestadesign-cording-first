$(function(){
	$('.burger-btn, .nav-wrapper a').on('click',function(){
		$('.burger-btn').toggleClass('close');
		$('.nav-wrapper').fadeToggle(500);
		$('body').toggleClass('noscroll');
	});
})
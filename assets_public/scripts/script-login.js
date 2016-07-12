$('.li-login-signup a').on('click', function(e) {
	e.preventDefault();

	$(this).parent().addClass('active');
	$(this).parent().siblings().removeClass('active');

	target = $(this).attr('href');
	
	$(target).css('display' , 'block');
	$('div#wrapper-login > section').not(target).hide();

	$(target).fadeIn(600);
});

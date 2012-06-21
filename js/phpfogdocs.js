$(function() {

	var	$topLink	= $("#top-link"), 
		$window		= $(window),
		offset		= $topLink.offset(),
		winHeight	= $(window).height(),
		docHeight 	= $(document.body).height();

	$('a.accordion-toggle').bind('click',function() {
		if ( $(this).find('i.accordion-icon').hasClass('icon-chevron-right') ) {
			$('.accordion-icon').removeClass('icon-chevron-down');
			$('.accordion-icon').addClass('icon-chevron-right');
			$(this).find('i').toggleClass('icon-chevron-down icon-chevron-right');
		} else {
			$(this).find('i').toggleClass('icon-chevron-down icon-chevron-right');
		}
	});

	$window.scroll(function() {
		if ( $window.scrollTop() < offset.top - winHeight + 52 ) {
			$topLink.removeClass('fixed');
			$topLink.removeClass('tbottom');
		} else if ( $window.scrollTop() < ( $(document.body).height() - ( winHeight + 201 ) ) ) {
			$topLink.removeClass('tbottom');
			$topLink.addClass('fixed');
		} else {
			$topLink.removeClass('fixed');
			$topLink.addClass('tbottom');
		}
	});

});

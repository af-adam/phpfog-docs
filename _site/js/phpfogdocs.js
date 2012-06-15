$('a.accordion-toggle').bind('click',function() {
	$(this).find('i').toggleClass('icon-chevron-down icon-chevron-right');
	$('i').not(this.find('i')).removeClass('icon-chevron-down');
	$('i').not(this.find('i')).addClass('icon-chevron-right');
});

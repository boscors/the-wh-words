$(document).ready(function() {
	//changeBoxWidth();
	$(window).resize(function() {
		//changeBoxWidth();
	}
function changeBoxWidth() {
	if ( $( window ).width() > window.innerWidth) {
	    $('.box').css('width', '100%');
	} else {
	    $('.box').css('width', '50%');
	}
}
});
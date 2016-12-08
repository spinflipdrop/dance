(function($){
	$(".open-mm").on('click', function() {
		$("body").addClass("showmenu");
	});

	$(".close-mm").on('click', function() {
		$("body").removeClass("showmenu");
	});
})(jQuery); 
$(document).ready(function(){

	$('li > a').on('mouseenter', function(){
		$(this).css('text-decoration', 'underline')
	})

	.on('mouseleave', function(){
		$(this).css('text-decoration', 'none');
		}
	);

});
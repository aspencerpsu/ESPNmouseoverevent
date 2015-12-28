$(document).ready(function(){

	$('li > a').on('mouseenter', function(){
		$(this).css('text-decoration', 'underline')
	})

	.on('mouseleave', function(){
		$(this).css('text-decoration', 'none');
		}
	);

	$("button").on('click', function(){
		var button_id = $(this).attr('id');
		console.log(button_id);
		if (button_id == ar_l){
			PushNavLeft();
		}
		else
			return console.log('false');
	});

	 function PushNavLeft() {
    $('.mid_nav').animate({
      left: '350px'
    }, 400, 'easeOutQuint'); 
  }
  
  function BackToOrigin(){
    $("#navigation li a").removeClass("open");
    $('#mainpage').animate({
      left: '0px'
    }, 400, 'easeOutQuint');  
  }

});
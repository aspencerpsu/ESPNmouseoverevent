$(document).ready(function(){
	// Setup the handlers once clicked, which are the animations for manipulating
	// the selected buttons
	 function PushNavLeft() {
    $('.mid_nav').animate({
      left: '-=350px'
    }, 600, "easeInOutCirc")
  };
  // designated to return the image gall back to position
  function BackToOrigin(e){
  	e.preventDefault();
    $('.mid_nav').animate({
      left: '+=300px'
    }, 600, "easeInOutCirc")
  }
  // Simple link  color change with a mouseover function
	$('li > a').on('mouseenter', function(){
		$(this).css('text-decoration', 'underline')
	})

	.on('mouseleave', function(){
		$(this).css('text-decoration', 'none');
		}
	);

	// Navigate through a soon-to-be click second navigation
	$("button").on('click', function(e){
		var button_id = $(this).attr('id').toString();
		var thestyle = $('.mid_nav').attr('style', 'left');
		e.preventDefault();
		console.log(thestyle);
		console.log(button_id);
		if (button_id === "ar_r"){
			var distance = parseInt($('.mid_nav').css('left'));
			console.log(distance);
			if (distance <= 0){
				return console.log("cannot push to the left");
			}
			else
				return PushNavLeft();
		}
		  // If the left arrow is clicked, return to original positon using the handler "BackToOrigin"
		else if(button_id === "ar_l"){
			distance = parseInt($('mid_nav').css('left'));
			if (distance <= -300){
				console.log(distance);
				BackToOrigin();
			return console.log("move_left");}
			else
				console.log("cannot move any further");
		}
		else
			return console.log(false);
	});


});
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
      left: '+=350px'
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
	$("#ar_r").on('click', function(e){
		e.preventDefault();
		button_id = $(this).attr('id').toString();
		var thestyle = $('.mid_nav').attr('style', 'left');
		console.log(thestyle);
		// determine the value of the position of the image gallery as a number
		distance = parseInt($('.mid_nav').css('left').toString());
		// If user clicked on the right arrow button and the rel pos. is less than or equal to 50 perform the PushNavLeft function above
		if (button_id === "ar_r" && distance <= 50){
			console.log(thestyle);
			// This function isn't performing the push of the image galleries to the left, needs further review/edits
			PushNavLeft();
			// $('.mid_nav').animate({left:'-350px'}, 500, 'easeInOutCirc');
		}
		else
			return console.log("cannot push to the right");
	});
		  // If the left arrow is clicked, return to original positon using the handler "BackToOrigin"
	$('#ar_l').on('click', function(e){
		// prevent the click action posted on the page.
		e.preventDefault();
		// button recognition for the click events.
		button_id = $(this).attr('id').toString();
		// don't want to use a local variable for this instance
		if (button_id === "ar_l" && parseInt($('.mid_nav').css('left')) <= -300){
			console.log('successful move' + $('.mid_nav').css('left').toString());
			// perform the back-to-origin animation handlers
			BackToOrigin(e);
			}
		else
			return console.log('cannot push to the left');
	});

	$('form').on('submit', function(e){
		e.preventDefault();
		get_text = $('input:text').val(); 
		console.log(get_text);
		$('.adding').text('Your sneaker(s) of \n \n');
		$('.adding:eq(1)').text(get_text.toString());
		$('.adding:eq(2)').text('is coming soon, just wait on it!');
	});


});
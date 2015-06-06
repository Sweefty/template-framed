(function($){
    $(document).ready(function() {
    	$(".fixed-menu-button").click(function(){
    		
    		$('.fixed-overlay').show().animate({
    			opacity : '0.6'
    		}, 250);

    		$('.fixed-menu').css({
    			// height : $(window).height() + "px"
    		}).animate({
    			right : 0
    		}, 250);
    	});

    	$(".fixed-menu-button-close, .fixed-overlay").click(function(){
    		$('.fixed-overlay').animate({
    			opacity : '0'
    		}, 250, function(){
    			$(this).hide();
    		});

    		$('.fixed-menu').css({
    			// height : $(window).height() + "px"
    		}).animate({
    			right : '-250px'
    		}, 250);
    	});
    });
}(jQuery));

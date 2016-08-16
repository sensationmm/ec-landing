jQuery.fn.rotate = function(degrees) {
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
    return $(this);
};

(function($) {
    var wh = window.innerWidth,
    	$sl = $(window).scrollLeft(),
	    $ready = false,
	    $scrolling = false;
    	$rocket = $('.rocket');
    	$rocketExhaust = $('.rocket-exhaust');
        $starsFG = $('.starsForeground'),
        $starsBG = $('.starsBackground'),
        $planetGreen = $('.planet-green');
 

    // init
	var ctrl = new ScrollMagic.Controller({ 
		vertical: false,
	    globalSceneOptions: {
	        triggerHook: 'onLeave'
	    }
	});
	 

	var starsAnimate = new TimelineMax();
	starsAnimate
		.to($starsFG, 1, { backgroundPosition: "100% 0", ease: Linear.easeNone })
		.to($starsBG, 1, { backgroundPosition: "100% 0", ease: Linear.easeNone }, '0');

	new ScrollMagic.Scene({
	    offset: 0,
	    triggerElement: $('body')[0],
	    duration: '500%'
	})
	.setTween(starsAnimate)
	.addIndicators()
	.addTo(ctrl);




	// var iphoneContentHat = new TimelineMax();
	// iphoneContentHat       
	//     .to($screenHat, 1, {yPercent: -90, ease: Power4.easeOut})
	//     .fromTo($screenA, 1, {yPercent: 20, autoAlpha: 0, scale: 0.8}, {yPercent: 0, autoAlpha: 1, scale: 1, ease: Power4.easeOut}, '0')
	//     .from($innerS2, 1, {autoAlpha: 0}, '-=0.3');




	/************************************************************
	 * Green Planet
	 ************************************************************/
	var greenPlanetEnter = new TimelineMax();
	greenPlanetEnter
		.to($planetGreen, 1, {transform: 'scale(3)', ease:Linear.easeNone})
		// .to($planetGreen, 0.5, {rotation:2000, ease:Linear.easeNone}, 0)
		.to($planetGreen, 1, {top:'50%', left: '130%', rotation: 180, ease:Linear.easeNone}, 0);
		// .to($planetGreen, 1, {rotation:-180, transformOrigin:"-300px -100px"},0);

	new ScrollMagic.Scene({
	    offset: 0,
	    triggerElement: $planetGreen,
	    duration: '70%'
	})
	.setTween(greenPlanetEnter)
	.addIndicators()
	.addTo(ctrl);

	var greenPlanetLeave = new TimelineMax();
	greenPlanetLeave
		.to($planetGreen, 1, {transform: 'scale(1)', ease:Linear.easeNone})
		.to($planetGreen, 1, {top:'5%', left: $sl, rotation: -180, ease:Linear.easeNone}, 0)
		.to($planetGreen, 0, {position: 'fixed', left: '25px'});

	new ScrollMagic.Scene({
	    offset: wh*0.9,
	    triggerElement: $planetGreen,
	    duration: '20%'
	})
	.setTween(greenPlanetLeave)
	.addIndicators()
	.addTo(ctrl);


	/************************************************************
	 * Rocket
	 ************************************************************/
	$(window).scrollLeft('0px');
	$rocket.animate({left: '15%'}, {duration: 1000, complete: function() {
		$rocketExhaust.animate({backgroundSize: '70%'}, 100);
		$ready = true;

	}});

	$counter = 0;
	setInterval(function() {
		$counter++;

		//check whether scrolling
		if($ready) {
		    var tempscroll = $(window).scrollLeft();
		    setTimeout(function() {
			    if (tempscroll == $(window).scrollLeft()) {
			        $rocketExhaust.animate({backgroundSize: '70%'}, 100);
			    } else {
			        $rocketExhaust.animate({backgroundSize: '100%'}, 100);
			    }
		    }, 75);
		}

		//rocket hovering once a second
		if($counter%2 == 0) {
			$rocket.animate({top: '-=2px', left: '-=2px'}, 250);
			$rocket.animate({top: '-=2px', left: '+=2px'}, 250);
			$rocket.animate({top: '+=2px', left: '+=2px'}, 250);
			$rocket.animate({top: '+=2px', left: '-=2px'}, 250);

			$rocketExhaust.animate({backgroundSize: '-=5%'}, 100);
			$rocketExhaust.animate({backgroundSize: '+=5%'}, 100);
		}

			$planetGreen.animate({height: '+=0.5%'}, 1000);
			$planetGreen.animate({height: '-=0.5%'}, 1000);

	}, 500);

	var lastLeftLocation = 0;

    $(window).scroll(
        function(e)
        {             
            if(lastLeftLocation > $(window).scrollLeft()) {
                $rocket.rotate(180); //flying left
            } else {
                $rocket.rotate(0);//flying right
            }

            lastLeftLocation = $(window).scrollLeft();
        }
    );
    /************************************************************
	 * End Rocket
	 ************************************************************/
	

})(jQuery);
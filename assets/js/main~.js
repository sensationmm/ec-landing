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
        $solarSystem = $('#solar-system'),
        $planetGreen = $('.planet-green'),
        $planetGreenLabel = $('.planet-green .planet-image div'),
        $moonGreen1 = $('#moon-green-1'),
        $moonGreen2 = $('#moon-green-2'),
        $moonGreen3 = $('#moon-green-3'),
        $moonGreen4 = $('#moon-green-4'),
        $planetRed = $('.planet-red'),
        $planetYellow = $('.planet-yellow'),
        $planetBlue = $('.planet-blue');
 

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
	.addIndicators({name:'stars'})
	.addTo(ctrl);


	//pin solar system
	new ScrollMagic.Scene({
	    offset: wh*0.75,
	    triggerElement: $('body')[0],
	    duration: wh*3
	})
	.setPin('#'+$solarSystem.attr('id'))
	.addIndicators()
	.addTo(ctrl);


	/*************************************************************************************************************/
	/* green planet
	/*************************************************************************************************************/
	var orbitGreen = {
		curviness: 1.25,
		autoRotate: false,
		values: [
			{left: '15.5%', top: '87%'},
			{left: '16.5%', top: '55%'},
			{left: '31%', top: '40%'},
			{left: '46%', top: '27.5%'},
			{left: '85%', top: '14%'},
			{left: '84.5%', top: '49%'},
			{left: '71.5%', top: '67%'},
			{left: '53%', top: '83%'},
			{left: '15.5%', top: '87%'}
		]
	}

	var greenOrbit = new TimelineMax()
		.to('#'+$planetGreen.attr('id'), 1, {bezier:orbitGreen, ease:Linear.easeIn},1)
		// .to($planetGreen, 0.05, {transform: 'scale(1.16)', ease:Linear.easeNone}, 0)
		// .to($planetGreen, 0.1, {transform: 'scale(0.75)', ease:Linear.easeNone}, 0.05)
		// .to($planetGreen, 0.25, {transform: 'scale(0.5)', ease:Linear.easeNone}, 0.15)
		// .to($planetGreen, 0.35, {transform: 'scale(1.25)', ease:Linear.easeNone}, 0.4)
		// .to($planetGreen, 0.15, {transform: 'scale(1.5)', ease:Linear.easeNone}, 0.75)
		// .to($planetGreen, 0.1, {transform: 'scale(2)', ease:Linear.easeNone},0.9);
		.to($planetGreen, 0.2, {transform: 'scale(0.75)', ease:Linear.easeNone}, 1)
		.to($planetGreen, 0.3, {transform: 'scale(0.5)', ease:Linear.easeNone}, 1.2)
		.to($planetGreen, 0.3, {transform: 'scale(1.25)', ease:Linear.easeNone}, 1.5)
		.to($planetGreen, 0.15, {transform: 'scale(1.5)', ease:Linear.easeNone}, 1.8)
		.to($planetGreen, 0.05, {transform: 'scale(2)', ease:Linear.easeNone},1.95);

	var scene = new ScrollMagic.Scene({
		triggerElement: $solarSystem, 
	    duration: wh*3,
		offset: wh*0.85
	})
	.setTween(greenOrbit)
	.addIndicators({name:'planets orbit'})
	.addTo(ctrl);


	var greenContent = new TimelineMax()
		.from($planetGreenLabel, 1, {css: {opacity:0}, ease:Linear.easeNone})
		.from($moonGreen1, 1, {transform: 'scale(0)', top:'50%', left:'50%', ease:Linear.easeNone}, 0)
		.from($moonGreen2, 1, {transform: 'scale(0)', top:'50%', left:'50%', ease:Linear.easeNone}, 0.1)
		.from($moonGreen3, 1, {transform: 'scale(0)', top:'50%', left:'50%', ease:Linear.easeNone}, 0.2)
		.from($moonGreen4, 1, {transform: 'scale(0)', top:'50%', left:'50%', ease:Linear.easeNone}, 0.3)
		.to($moonGreen1, 0.4, {transform: 'scale(1.5)', ease:Linear.easeNone}, 0.5)
		.to($moonGreen1, 0.2, {transform: 'scale(1)', ease:Linear.easeNone}, 1.5)
		.to($moonGreen2, 0.4, {transform: 'scale(1.5)', ease:Linear.easeNone}, 1.5)
		.to($moonGreen2, 0.2, {transform: 'scale(1)', ease:Linear.easeNone}, 2.5)
		.to($moonGreen3, 0.4, {transform: 'scale(1.5)', ease:Linear.easeNone}, 2.5)
		.to($moonGreen3, 0.2, {transform: 'scale(1)', ease:Linear.easeNone}, 3.5)
		.to($moonGreen4, 0.4, {transform: 'scale(1.5)', ease:Linear.easeNone}, 3.5)
		.to($moonGreen4, 0.2, {transform: 'scale(1)', ease:Linear.easeNone}, 4.5);

	var scene = new ScrollMagic.Scene({
		triggerElement: $solarSystem, 
		duration: wh*0.25,
		offset: wh*0.85
	})
	.setTween(greenContent)
	.addTo(ctrl);



	/*************************************************************************************************************/
	/* red planet
	/*************************************************************************************************************/
	var orbitRed = {
		curviness: 1.25,
		autoRotate: false,
		values: [
			{left: '71.5%', top: '67%'},
			{left: '53%', top: '83%'},
			{left: '15.5%', top: '87%'},
			{left: '16.5%', top: '55%'},
			{left: '31%', top: '40%'},
			{left: '46%', top: '27.5%'},
			{left: '85%', top: '14%'},
			{left: '84.5%', top: '49%'},
			{left: '71.5%', top: '67%'}
		]
	}

	var redOrbit = new TimelineMax()
		.to('#'+$planetRed.attr('id'), 1, {bezier:orbitRed, ease:Linear.easeIn})
		// .to($planetRed, 0.15, {transform: 'scale(1.5)', ease:Linear.easeNone}, 0)
		// .to($planetRed, 0.1, {transform: 'scale(2)', ease:Linear.easeNone}, 0.15)
		// .to($planetRed, 0.05, {transform: 'scale(1.16)', ease:Linear.easeNone},0.25)
		// .to($planetRed, 0.1, {transform: 'scale(0.75)', ease:Linear.easeNone}, 0.3)
		// .to($planetRed, 0.25, {transform: 'scale(0.5)', ease:Linear.easeNone}, 0.4)
		// .to($planetRed, 0.35, {transform: 'scale(1.25)', ease:Linear.easeNone}, 0.65);
		.to($planetRed, 0.15, {transform: 'scale(1.5)', ease:Linear.easeNone}, 0)
		.to($planetRed, 0.05, {transform: 'scale(2)', ease:Linear.easeNone}, 0.15)
		.to($planetRed, 0.2, {transform: 'scale(0.75)', ease:Linear.easeNone}, 0.2)
		.to($planetRed, 0.3, {transform: 'scale(0.5)', ease:Linear.easeNone}, 0.4)
		.to($planetRed, 0.3, {transform: 'scale(1.25)', ease:Linear.easeNone}, 0.7);

	var scene = new ScrollMagic.Scene({
		triggerElement: $solarSystem, 
	    duration: wh*3,
		offset: wh*0.85
	})
	// .setTween(redOrbit)
	.addIndicators()
	.addTo(ctrl);



	/*************************************************************************************************************/
	/* yellow planet
	/*************************************************************************************************************/
	var orbitYellow = {
		curviness: 1.25,
		autoRotate: false,
		values: [
			{left: '85%', top: '14%'},
			{left: '84.5%', top: '49%'},
			{left: '71.5%', top: '67%'},
			{left: '53%', top: '83%'},
			{left: '15.5%', top: '87%'},
			{left: '16.5%', top: '55%'},
			{left: '31%', top: '40%'},
			{left: '46%', top: '27.5%'},
			{left: '85%', top: '14%'}
		]
	}

	var yellowOrbit = new TimelineMax()
		.to('#'+$planetYellow.attr('id'), 1, {bezier:orbitYellow, ease:Linear.easeIn})
		// .to($planetYellow, 0.35, {transform: 'scale(1.25)', ease:Linear.easeNone}, 0)
		// .to($planetYellow, 0.15, {transform: 'scale(1.5)', ease:Linear.easeNone}, 0.35)
		// .to($planetYellow, 0.1, {transform: 'scale(2)', ease:Linear.easeNone}, 0.5)
		// .to($planetYellow, 0.05, {transform: 'scale(1.16)', ease:Linear.easeNone}, 0.6)
		// .to($planetYellow, 0.1, {transform: 'scale(0.75)', ease:Linear.easeNone}, 0.65)
		// .to($planetYellow, 0.25, {transform: 'scale(0.5)', ease:Linear.easeNone},0.75);
		.to($planetYellow, 0.3, {transform: 'scale(1.25)', ease:Linear.easeNone}, 0)
		.to($planetYellow, 0.15, {transform: 'scale(1.5)', ease:Linear.easeNone}, 0.3)
		.to($planetYellow, 0.05, {transform: 'scale(2)', ease:Linear.easeNone}, 0.45)
		.to($planetYellow, 0.2, {transform: 'scale(0.75)', ease:Linear.easeNone}, 0.5)
		.to($planetYellow, 0.3, {transform: 'scale(0.5)', ease:Linear.easeNone},0.7);

	var scene = new ScrollMagic.Scene({
		triggerElement: $solarSystem, 
	    duration: wh*3,
		offset: wh*0.85
	})
	// .setTween(yellowOrbit)
	.addIndicators()
	.addTo(ctrl);



	/*************************************************************************************************************/
	/* blue planet
	/*************************************************************************************************************/
	var orbitBlue = {
		curviness: 1.25,
		autoRotate: false,
		values: [
			{left: '31%', top: '40%'},
			{left: '46%', top: '27.5%'},
			{left: '85%', top: '14%'},
			{left: '84.5%', top: '49%'},
			{left: '71.5%', top: '67%'},
			{left: '53%', top: '83%'},
			{left: '15.5%', top: '87%'},
			{left: '16.5%', top: '55%'},
			{left: '31%', top: '40%'}
		]
	}

	var blueOrbit = new TimelineMax()
		.to('#'+$planetBlue.attr('id'), 1, {bezier:orbitBlue, ease:Linear.easeIn})
		// .to($planetBlue, 0.25, {transform: 'scale(0.5)', ease:Linear.easeNone}, 0)
		// .to($planetBlue, 0.35, {transform: 'scale(1.25)', ease:Linear.easeNone}, 0.25)
		// .to($planetBlue, 0.15, {transform: 'scale(1.5)', ease:Linear.easeNone},0.6)
		// .to($planetBlue, 0.1, {transform: 'scale(2)', ease:Linear.easeNone}, 0.75)
		// .to($planetBlue, 0.05, {transform: 'scale(1.16)', ease:Linear.easeNone}, 0.85)
		// .to($planetBlue, 0.1, {transform: 'scale(0.75)', ease:Linear.easeNone}, 0.9);
		.to($planetBlue, 0.3, {transform: 'scale(0.5)', ease:Linear.easeNone}, 0)
		.to($planetBlue, 0.3, {transform: 'scale(1.25)', ease:Linear.easeNone}, 0.3)
		.to($planetBlue, 0.15, {transform: 'scale(1.5)', ease:Linear.easeNone},0.6)
		.to($planetBlue, 0.05, {transform: 'scale(2)', ease:Linear.easeNone}, 0.75)
		.to($planetBlue, 0.2, {transform: 'scale(0.75)', ease:Linear.easeNone}, 0.85);

	var scene = new ScrollMagic.Scene({
		triggerElement: $solarSystem, 
	    duration: wh*3,
		offset: wh*0.85
	})
	// .setTween(blueOrbit)
	.addIndicators()
	.addTo(ctrl);




	


	/*************************************************************************************************************/
	/* Rocket
	/*************************************************************************************************************/
	$(window).scrollLeft('0px'); //reset on refresh
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

		$planetGreen.animate({width: '+=0.5%', height: '+=0.5%'}, 1000);
		$planetGreen.animate({width: '-=0.5%', height: '-=0.5%'}, 1000);
		$planetRed.animate({width: '+=0.5%', height: '+=0.5%'}, 1000);
		$planetRed.animate({width: '-=0.5%', height: '-=0.5%'}, 1000);
		$planetBlue.animate({width: '+=0.5%', height: '+=0.5%'}, 1000);
		$planetBlue.animate({width: '-=0.5%', height: '-=0.5%'}, 1000);
		$planetYellow.animate({width: '+=0.5%', height: '+=0.5%'}, 1000);
		$planetYellow.animate({width: '-=0.5%', height: '-=0.5%'}, 1000);

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
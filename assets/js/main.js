var mobileCheck = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (mobileCheck.Android() || mobileCheck.BlackBerry() || mobileCheck.iOS() || mobileCheck.Opera() || mobileCheck.Windows());
    }
};

var isMobile = (mobileCheck.any()) ? true : false;

$(window).resize(function(e) {
	window.scrollTo(0,0);
});

//reset
$(window).on('beforeunload', function(e) {
	window.scrollTo(0,0);
});

jQuery.fn.rotate = function(degrees) {
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
    return $(this);
};

(function($) {

	if(!isMobile && window.mozInnerScreenX == null) { //non-firefox
		jQuery.scrollSpeed(30, 200);
	} else if(!isMobile) {
		jQuery.scrollSpeed(50, 50); //firefox
	}
 
    // init
	var ctrl = new ScrollMagic.Controller({ 
		vertical: false,
	    globalSceneOptions: {
	        triggerHook: 'onLeave'
	    }
	});

	// ctrl.scrollTo('solarsystem');

    var wh = window.innerWidth,
    	$sl = $(window).scrollLeft(),
	    $ready = false,
	    $scrolling = false,
	    $body = $('body'),
    	$rocket = $('.rocket'),
    	$rocketExhaust = $('.rocket-exhaust'),
        $starsFG = $('#starsForeground'),
        $starsBG = $('#starsBackground'),
        $solarSystem = $('#solar-system'),

        $planetGreen = $('#planet-green'),
        $planetGreenLabel = $('#planet-green .planet-image div.planet-header'),
        $planetGreenInfo = $planetGreen.find('.planet-info'),

        $planetRed = $('#planet-red'),
        $planetRedLabel = $('#planet-red .planet-image div.planet-header'),
        $planetRedInfo = $planetRed.find('.planet-info'),

        $planetYellow = $('#planet-yellow'),
        $planetYellowLabel = $('#planet-yellow .planet-image div.planet-header'),
        $planetYellowInfo1 = $planetYellow.find('#planet-info-red-1'),
        $planetYellowInfo2 = $planetYellow.find('#planet-info-red-2'),

        $planetBlue = $('#planet-blue'),
        $planetBlueLabel = $('#planet-blue .planet-image div.planet-header'),
        $planetBlueInfo = $planetBlue.find('.planet-info'),

        $rocketShadow = $('#rocket-shadow'),
        $planetFinal = $('#planet-final'),
        $planetFinalText = $('#planet-final-text'),
        $planetFinalForm = $('.planet-final-form'),
        $planetFinalLogos = $('.planet-final-logos'),
        $planetFinalGreen = $('#planet-final-green'),
        $planetFinalRed = $('#planet-final-red'),
        $planetFinalYellow = $('#planet-final-yellow'),
        $planetFinalBlue = $('#planet-final-blue');
	 
	/*****************************************************************************************************/
	/** Stars
	/*****************************************************************************************************/
	if(!isMobile && window.mozInnerScreenX == null) {
		var starsAnimate = new TimelineMax();
		starsAnimate
			.to($starsFG, 1, { backgroundPosition:"-20% 0", ease: Linear.easeNone })
			.to($starsBG, 1, { backgroundPosition:"-10% 0", ease: Linear.easeNone }, '0');

		new ScrollMagic.Scene({
		    offset: 0,
		    triggerElement: $('body')[0],
		    duration: wh*10.7 
		})
		.setTween(starsAnimate)
		// .addIndicators({name:'stars'})
		.addTo(ctrl);
	}


	//pin solar system
	var solarsystem = new ScrollMagic.Scene({
	    offset: wh*0.7,
	    triggerElement: $('body')[0],
	    duration: wh*9
	})
	.setPin('#'+$solarSystem.attr('id'))
	// .addIndicators('pin')
	.addTo(ctrl);


	var orbitFull = {
		curviness: 1.25,
		autoRotate: false,
		values: [
			{left: '15%', top: '87%'},
				{left: '25%', top: '48%'},
			{left: '50%', top: '25%'},
				{left: '67%', top: '17%'},
			{left: '85%', top: '14%'},
				{left: '87%', top: '37%'},
			{left: '85%', top: '60%'},
				{left: '60%', top: '85%'},
			{left: '15%', top: '87%'},
		]
	}

	var orbitSW = {
		autoRotate: false,
		values: [
			{left: '15%', top: '87%'},
			{left: '25%', top: '48%'},
			{left: '50%', top: '25%'}
		]
	}

	var orbitNW = {
		autoRotate: false,
		values: [
			{left: '50%', top: '25%'},
			{left: '67%', top: '17%'},
			{left: '85%', top: '14%'}
		]
	}

	var orbitNE = {
		autoRotate: false,
		values: [
			{left: '85%', top: '14%'},
			{left: '87%', top: '37%'},
			{left: '85%', top: '60%'}
		]
	}

	var orbitSE = {
		autoRotate: false,
		values: [
			{left: '85%', top: '60%'},
			{left: '60%', top: '85%'},
			{left: '15%', top: '87%'}
		]
	}


	var startContent = new TimelineMax()
		.from($planetGreenLabel, 1, {css: {opacity:0}, ease:Linear.easeNone})

	var scene = new ScrollMagic.Scene({
		triggerElement: $solarSystem,
		duration: wh*0.25,
		offset: wh*0.4
	})
	.setTween(startContent)
	.addTo(ctrl);

	var showContent = new TimelineMax()

		/*******************************************************************************************************************/
		/* Green Planet
		// /*******************************************************************************************************************/
		.to($planetGreenLabel, 0.05, {css: {opacity:0}, ease:Linear.easeNone}, 0.05)
		.from($planetGreenInfo, 0.05, {css: {opacity:0}, ease:Linear.easeNone}, 0.05)
		.to($planetGreenInfo, 0.05, {css: {opacity:0}, ease:Linear.easeNone}, 0.16)

		.to($planetGreen, 0.06, {bezier:orbitSW, ease:Linear.easeOut}, 0.15)
		.to($planetGreen, 0.06, {transform: 'scale(0.75)', ease:Linear.easeNone}, 0.15)
		.to($planetRed, 0.06, {bezier:orbitSE, ease:Linear.easeIn}, 0.15)
		.to($planetRed, 0.06, {transform: 'scale(2.5)', ease:Linear.easeNone}, 0.15)
		.to($planetYellow, 0.06, {bezier:orbitNE, ease:Linear.easeIn}, 0.15)
		.to($planetYellow, 0.06, {transform: 'scale(1.25)', ease:Linear.easeNone}, 0.15)
		.to($planetBlue, 0.06, {bezier:orbitNW, ease:Linear.easeOut}, 0.15)
		.to($planetBlue, 0.06, {transform: 'scale(0.5)', ease:Linear.easeNone}, 0.15)

		/*******************************************************************************************************************/
		/* Red Planet
		/*******************************************************************************************************************/
		.from($planetRedLabel, 0.05, {css: {opacity:0}, ease:Linear.easeNone}, 0.15)
		.to($planetRedLabel, 0.05, {css: {opacity:0}, ease:Linear.easeNone}, 0.26)
		.from($planetRedInfo, 0.05, {css: {opacity:0}, ease:Linear.easeNone}, 0.26)
		.to($planetRedInfo, 0.05, {css: {opacity:0}, ease:Linear.easeNone}, 0.37)

		.to($planetGreen, 0.06, {bezier:orbitNW, ease:Linear.easeOut}, 0.38)
		.to($planetGreen, 0.06, {transform: 'scale(0.5)', ease:Linear.easeNone}, 0.38)
		.to($planetRed, 0.06, {bezier:orbitSW, ease:Linear.easeIn}, 0.38)
		.to($planetRed, 0.06, {transform: 'scale(0.75)', ease:Linear.easeNone}, 0.38)
		.to($planetYellow, 0.06, {bezier:orbitSE, ease:Linear.easeIn}, 0.38)
		.to($planetYellow, 0.06, {transform: 'scale(2.5)', ease:Linear.easeNone}, 0.38)
		.to($planetBlue, 0.06, {bezier:orbitNE, ease:Linear.easeOut}, 0.38)
		.to($planetBlue, 0.06, {transform: 'scale(1.25)', ease:Linear.easeNone}, 0.38)

		/*******************************************************************************************************************/
		/* Yellow Planet
		/*******************************************************************************************************************/
		.from($planetYellowLabel, 0.05, {css: {opacity:0}, ease:Linear.easeNone}, 0.38)
		.to($planetYellowLabel, 0.01, {css: {opacity:0}, ease:Linear.easeNone}, 0.47)
		.from($planetYellowInfo1, 0.05, {css: {opacity:0}, ease:Linear.easeNone}, 0.47)
		.to($planetYellowInfo1, 0.05, {css: {opacity:0}, ease:Linear.easeNone}, 0.58)

		.to($planetYellow, 0.05, {rotationY:180}, 0.58)
		.to($planetYellowInfo2, 0.05, {rotationY:180}, 0.58)

		.from($planetYellowInfo2, 0.05, {css: {opacity:0}, ease:Linear.easeNone}, 0.58)
		.to($planetYellowInfo2, 0.05, {css: {opacity:0}, ease:Linear.easeNone}, 0.69)
		.to($planetYellow, 0, {rotationY:0}, 0.69)
		.to($planetYellowInfo2, 0, {rotationY:0}, 0.69)

		.to($planetGreen, 0.06, {bezier:orbitNE, ease:Linear.easeOut}, 0.7)
		.to($planetGreen, 0.06, {transform: 'scale(1.25)', ease:Linear.easeNone}, 0.7)
		.to($planetRed, 0.06, {bezier:orbitNW, ease:Linear.easeIn}, 0.7)
		.to($planetRed, 0.06, {transform: 'scale(0.5)', ease:Linear.easeNone}, 0.7)
		.to($planetYellow, 0.06, {bezier:orbitSW, ease:Linear.easeIn}, 0.7)
		.to($planetYellow, 0.06, {transform: 'scale(0.75)', ease:Linear.easeNone}, 0.7)
		.to($planetBlue, 0.06, {bezier:orbitSE, ease:Linear.easeOut}, 0.7)
		.to($planetBlue, 0.06, {transform: 'scale(2.5)', ease:Linear.easeNone}, 0.7)

		/*******************************************************************************************************************/
		/* Blue Planet
		/*******************************************************************************************************************/
		.from($planetBlueLabel, 0.05, {css: {opacity:0}, ease:Linear.easeNone}, 0.7)
		.to($planetBlueLabel, 0.01, {css: {opacity:0}, ease:Linear.easeNone}, 0.8)
		.from($planetBlueInfo, 0.05, {css: {opacity:0}, ease:Linear.easeNone}, 0.8)
		.to($planetBlueInfo, 0.05, {css: {opacity:0}, ease:Linear.easeNone}, 0.95)

		;

	var scene = new ScrollMagic.Scene({
		triggerElement: $solarSystem, 
		duration: wh*9,
		offset: wh*0.7
	})
	.setTween(showContent)
	// .addIndicators('start')
	.addTo(ctrl);



	/*******************************************************************************************************************/
	/* Ending sequence
	/*******************************************************************************************************************/
	var ending = new TimelineMax()
		.to($rocket, 0.075, {top:'76%', left:'22.5%', rotation: -20, ease:Linear.easeNone}, 0)
		.to($rocket, 0.075, {top:'69%', left:'30%', rotation: -30, ease:Linear.easeNone}, 0.075)
		.to($rocket, 0.075, {top:'57%', left:'37.5%', rotation: -50, ease:Linear.easeNone}, 0.15)
		.to($rocket, 0.075, {top:'20%', left:'44.2%', rotation: -90, ease:Linear.easeNone}, 0.225)
		.to($rocketExhaust, 0, {backgroundSize: '70% 70%', ease:Linear.easeOut}, 0.3)
		.to($rocket, 0.7, {top:'55%', rotation: -90, ease:Linear.easeNone}, 0.3)
		.to($rocketExhaust, 0.4, {backgroundSize: '0% 0%', ease:Linear.easeNone}, 0.6)

		.to($planetFinal, 0.4, {top: '55%', ease:Linear.easeNone}, 0.6)
		.from($planetFinalText, 0.3, {css: {opacity:0}, ease:Linear.easeNone}, 1)

		.from($rocketShadow, 0.05, {css: {top: '65%', opacity:0}, ease:Linear.easeNone}, 0.95)

		.to($planetFinalText, 1, {css: {opacity:0}, ease:Linear.easeNone}, 4)
		.from($planetFinalForm, 1, {css: {top:'120%',opacity:0}, ease:Linear.easeNone}, 4.4)
		.from($planetFinalLogos, 1, {css: {opacity:0}, ease:Linear.easeNone}, 5.4)
	;

	var scene = new ScrollMagic.Scene({
		triggerElement: $solarSystem,
	    offset: wh*10.7,
	    duration: wh*3
	})
	.setTween(ending)
	.addTo(ctrl);


	var endingPlanets = new TimelineMax()
		.to($planetFinalGreen, 1, {top:"20%",left:"10%",transform: 'scale(0.7)', ease:Linear.easeNone}, 0)
		.to($planetFinalRed, 1, {top:"7%",left:"28.5%",transform: 'scale(0.7)', ease:Linear.easeNone}, 0)
		.to($planetFinalYellow, 1, {top:"7%",left:"51.5%",transform: 'scale(0.7)', ease:Linear.easeNone}, 0)
		.to($planetFinalBlue, 1, {top:"20%",left:"70%",transform: 'scale(0.7)', ease:Linear.easeNone}, 0);

	var scene = new ScrollMagic.Scene({
		triggerElement: $body[0],
	    offset: wh*11.7,
	    duration: wh*0.5
	})
	.setTween(endingPlanets)
	.addTo(ctrl);


	if(!isMobile && window.mozInnerScreenX == null) {
		//pin stars
		var initialScene = new ScrollMagic.Scene({
		    offset: 0,
		    triggerElement: $('body')[0],
		    duration: wh*15,
		})
		.setPin('#'+$starsFG.attr('id'))
		// .addIndicators('pin')
		.addTo(ctrl);

		new ScrollMagic.Scene({
		    offset: 0,
		    triggerElement: $('body')[0],
		    duration: wh*15
		})
		.setPin('#'+$starsBG.attr('id'))
		// .addIndicators('pin')
		.addTo(ctrl);
	}



	/*************************************************************************************************************/
	/* Rocket
	/*************************************************************************************************************/

	$rocket.animate({left: '15%'}, {duration: 1000, complete: function() {
		$rocketExhaust.animate({backgroundSize: '70%'}, 100);
		$ready = true;
	}});

	$counter = 0;
	var $scrollPos;
	setInterval(function() {

		$scrollPos = ($body.scrollLeft()/$starsFG.css('width').replace('px',''))*100;
		$counter++;

		//check whether scrolling
		if($ready && $scrollPos < 80) {
		    var tempscroll = $(window).scrollLeft();
		    setTimeout(function() {
			    if (tempscroll == $(window).scrollLeft()) {
			        $rocketExhaust.animate({backgroundSize: '70%'}, 100);
			    } else {
			        $rocketExhaust.animate({backgroundSize: '100%'}, 100);
			    }
		    }, 75);
		}

		/*/rocket hovering once a second
		if($counter%2 == 0 && $scrollPos < 80) {
			$rocket.animate({top: '-=2px', left: '-=2px'}, 250);
			$rocket.animate({top: '-=2px', left: '+=2px'}, 250);
			$rocket.animate({top: '+=2px', left: '+=2px'}, 250);
			$rocket.animate({top: '+=2px', left: '-=2px'}, 250);

			$rocketExhaust.animate({backgroundSize: '-=5%'}, 100);
			$rocketExhaust.animate({backgroundSize: '+=5%'}, 100);
		}*/

		// $planetFinalGreen.animate({width: '+=0.5%', height: '+=0.5%'}, 1000);
		// $planetFinalGreen.animate({width: '-=0.5%', height: '-=0.5%'}, 1000);
		// $planetFinalRed.animate({width: '+=0.5%', height: '+=0.5%'}, 1000);
		// $planetFinalRed.animate({width: '-=0.5%', height: '-=0.5%'}, 1000);
		// $planetFinalBlue.animate({width: '+=0.5%', height: '+=0.5%'}, 1000);
		// $planetFinalBlue.animate({width: '-=0.5%', height: '-=0.5%'}, 1000);
		// $planetFinalYellow.animate({width: '+=0.5%', height: '+=0.5%'}, 1000);
		// $planetFinalYellow.animate({width: '-=0.5%', height: '-=0.5%'}, 1000);

	}, 500);

	var lastLeftLocation = 0;

	if($scrollPos < 80) {
	    $(window).scroll(
	        function(e)
	        {             
	            if(lastLeftLocation < $(window).scrollTop()) {
	                $rocket.rotate(180); //flying left
	            } else {
	                $rocket.rotate(0);//flying right
	            }

	            lastLeftLocation = $(window).scrollTop();
	        }
	    );
	}
    /************************************************************
	 * End Rocket
	 ************************************************************/
	

})(jQuery);
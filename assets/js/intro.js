(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 1400,
	height: 1000,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.uxplanet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B2402C").s().p("AifEjQhxgtg9hTQg3hKgEhaQgFhWAohLQAohLBGgkQAvgZBXgHQBfgHBbATQDxAwBACzQAnBtg3BXQgvBLhsAwQhfAphuALQgdADgaAAQhBAAgpgRg");
	this.shape.setTransform(-74.1,310.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B2402C").s().p("AkqJUQhjAAgbhgQgahZAoidQAniYBbi3IAthKQA6hYBAhMQDMj1DCgdQBcgPAmB7QAlB2ggC1QgjDAhmCrQh1DEiuBuQi1BxhsAAIgBAAg");
	this.shape_1.setTransform(263.2,112.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B2402C").s().p("AjoDTQgYhgAjjQQAPhbA6g+QA0g5BJgUQBEgUA+AUQBAAUAeA6QAVApAMBLQAPBcgMBRQgfDnjUAyQgpAJgiAAQh5AAgeh7g");
	this.shape_2.setTransform(44.7,203.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B2402C").s().p("AlVIzQhmiNgxjmQgyjkAXjkQAXjmCbhwQC3iGFqAnQCtATBTB2QBMBugKC0QgJCshVDLQhVDMiPDBQiZDPiVAFIgIAAQiBAAhqiTg");
	this.shape_3.setTransform(-161.7,150.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B2402C").s().p("AmXDQQgxgZAZg9QAVg1BFhDQBBg8BKgrQBYgzBsghQBrghBggEQBogFA+AgQBGAjAHBKQAJBTi3BTQi1BUkfAwQhFAMgxAAQg5AAgegQg");
	this.shape_4.setTransform(135.7,11.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B2402C").s().p("AgrF/QkcgFjKhHQjFhEg5hoQg0heBBhoQA+hkCShSQCShTC0gkQDSgqEHA6QEyBECsCtQCUCThZB4QhPBrjwA+QjSA2j5AAIgnAAg");
	this.shape_5.setTransform(202.4,-180.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B2402C").s().p("AinDOQhUgLgqg4QglgyAGhHQAFhCAqg5QAsg8BCgUQC+g7CMAlQCnAsgFCoQgECeiRAqQg5ARhZAAQhTAAhygQg");
	this.shape_6.setTransform(35.6,-329.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B2402C").s().p("AqAGuQhuhEAQiIQAQiDB9iWQCAidDJiAQBig/CDgmQCCgmCGgEQEygKCPCZQBUBZgkCDQgjB8iGB/QiMCEjNBaQjeBjj+AaQhCAHg5AAQiiAAhbg3g");
	this.shape_7.setTransform(-56.8,-120.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B2402C").s().p("Ag6DgQh7gWgthuQgrhmA6hbQAhgzBAgkQA+giBCgGQBJgHA1AcQA8AgAXBGQA2CjhNBhQg+BMh3AAQgiAAgrgHg");
	this.shape_8.setTransform(-269.7,-43.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B2402C").s().p("AnZGXQg1gggShMQgThOAZhhQA/jtEPi0QCxh2C0gXQChgUBzA5QBvA3AMBhQAMBohxBnQkQD1i+BzQjFB2iJAAQhJAAg3ghg");
	this.shape_9.setTransform(-196.6,-240.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CF4D34").s().p("AJNGUQi90istxGQpIsOtHpSQkHi6kBiRIjOhsQH0h/IEAAQNFAAL5FDQLiE4I5I5QI5I5E4LiQFDL8AANCQAAJzi4JSQiyI9lRH0QlMHtnLF8QnNF/omDqQL79rjs5sg");
	this.shape_10.setTransform(154.7,-16.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DD5848").s().p("EgY+A7MQrik4o6o5Qo4o5k4riQlDr8AAtEQAAtDFDr8QE4riI4o5QI6o5Lik4QL7lDNDAAQNEAAL7FDQLiE4I5I5QI6I5E3LiQFDL8AANDQAANElDL8Qk3Lio6I5Qo5I5riE4Qr7FDtEAAQtDAAr7lDg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-411.1,-411.1,822.2,822.3);
p.frameBounds = [rect];


(lib.rocketai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCCPQg8gBgpgrQgpgsACg5QABg8ArgpQAsgpA5ACQA8ABApAsQApArgCA5QgBA8gsApQgpAng4AAIgDAAg");
	this.shape.setTransform(180.7,44.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DE5847").s().p("AiRCSQg9g9AAhVQAAhUA9g9QA9g9BUAAQBVAAA9A9QA9A9AABUQAABVg9A9Qg9A9hVAAQhUAAg9g9g");
	this.shape_1.setTransform(180.7,44.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DE5847").s().p("AhZBEQhNgNhPgbIg+gZQD+h0DMAvQBoAYA1AtQhtBNicAAQg+AAhGgMg");
	this.shape_2.setTransform(89.3,44.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DE5847").s().p("Ah5h1QgJhWgTguQB+A3BiBnQAyA0AZAnQgZAogyA0QhgBnh9A3QAsjGgTipg");
	this.shape_3.setTransform(222.3,45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3EEEE").s().p("Al2ENQkOhBhTgXQgJgTgKgiQgShCAAhDQAAhEASg9IATguQBTgYEOhAQDHgvDuACQDpABB9AsQCQAzBzByQA5A6AcAtQgcAug5A5QhzByiQA0Qh9AsjpACIgOAAQjnAAjAgug");
	this.shape_4.setTransform(160.8,45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3EEEE").s().p("AgfCVQgFgPgGgZQgMgzABg2IAAgGQgBg3AMgzIALgoIBWAAQgWAxgKBjQALBmAVAvg");
	this.shape_5.setTransform(83.1,45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CB493F").s().p("AgvBJQgugFgxgUIgmgTIAnAHQAvAGAqgEQCFgMAehkIBGARIAAALQhIB5h9AAQgPAAgQgCg");
	this.shape_6.setTransform(87.4,72.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DE5847").s().p("AhmBbQhlgwgyhAIAnAHQAwAGAqgEQCEgMAfhmIDXA0QgIAngbAqQg0BZhbAaQgVAFgXAAQg5AAhNgkg");
	this.shape_7.setTransform(94.6,77.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CB493F").s().p("Ag0gkQgqgEgvAGIgnAGIApgTQAzgVAxgFQCYgRBECKIAAALIhGARQgehliFgLg");
	this.shape_8.setTransform(87.4,17.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DE5847").s().p("Ah8ANQgqgEgwAGIgnAHQAyhABlgwQBqgzBIAVQBbAZA0BZQAbAqAIAnIjXA0QgfhmiEgMg");
	this.shape_9.setTransform(94.6,12.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(58.5,0,178.9,90.5);
p.frameBounds = [rect];


(lib.rocketfire = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BFD340").s().p("AhPBxQhpguhQhEQEIi2CaAmQBOATAZA3IAABNIAGAiQAFAkgLAJQhIBEhjAAQhLAAhagog");
	this.shape.setTransform(14,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DE5847").s().p("AmCAEIgQgJQFYjqEIAYQBTAHBBAhQAhAQAQAPIAAEjQgPAPgfAQQg/AghQAHQgWACgXAAQjxAAk6jXg");
	this.shape_1.setTransform(-0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.5,-21.9,81.1,43.8);
p.frameBounds = [rect];


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010101").s().p("AngWgQkpgLkQiAQKclYFInZQEKmDAhnJQAYlYhrllQhAjUhcinQEJBQDaCsQDZCrCMDvQC5E6AQFsQARFqibFLQh/EPjdDHQjWDAkPBiQjyBYkBAAIg6gBg");
	this.shape.setTransform(105,144.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,210.1,288.4);
p.frameBounds = [rect];


(lib.padfront = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#092832").s().p("Ehr2AS4MgADglvQByBQEAAvQB1AWFaAnQLTBVcPAwQZCApdRAAQedAATLgZQYTghRfhUQGugiEHgtQE2g2B4hNMAAAAllg");
	this.shape.setTransform(-10.3,-6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-701,-126.8,1381.4,241.7);
p.frameBounds = [rect];


(lib.mountains = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B1832").s().p("Ehl8AiiMAVRg/IIMTk0IKhVUIOqrCMAocAEDIXssuIXHOxIHDJoILKyBIRopRIIlVhMANgAv4g");
	this.shape.setTransform(44.6,73);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-607.9,-149.1,1305,444.4);
p.frameBounds = [rect];


(lib.firerocket = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BFD340").s().p("AhPBxQhpguhQhEQEIi2CaAmQBOATAZA3IAABNIAGAiQAFAkgLAJQhIBEhjAAQhLAAhagog");
	this.shape.setTransform(-0.1,-18.7,1.333,1.333,-90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DE5847").s().p("AmCAEIgQgJQFYjqEIAYQBTAHBBAhQAhAQAQAPIAAEjQgPAPgfAQQg/AghQAHQgWACgXAAQjxAAk6jXg");
	this.shape_1.setTransform(0,0.3,1.333,1.333,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29.2,-54,58.4,108.1);
p.frameBounds = [rect];


(lib.authenticityplanet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#52A1CD").s().p("AE9CyQh4pImGmxQkllEmmjXQj6iAjqg/QEuipFUgzQFgg0FeBTQFxBXExDfQEmDYDBE3QDBE4A9FoQA/FyhXFzQhtHNk5FgQkvFVmqCkQEPuSiSrOg");
	this.shape.setTransform(47.9,-6.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6BB3E4").s().p("AmsceQlzhYkxjfQkmjXjBk4QjBk4g9lnQg/lyBXlzQBYlzDfkxQDXkmE4jBQE4jAFng+QFyg/FzBXQFzBYExDfQEmDXDBE4QDBE4A9FnQA/FyhXFzQhYFzjfExQjXEmk4DBQk4DBlnA9QidAaicAAQjVAAjXgyg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-187.2,-187.2,374.6,374.6);
p.frameBounds = [rect];


(lib.rocketinspace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rocketai();
	this.instance.setTransform(0.5,0,1.601,1.601,-89.3,0,0,147.9,45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8));

	// FlashAICB
	this.instance_1 = new lib.firerocket();
	this.instance_1.setTransform(-1.2,159.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:0.4,y:159.6},0).wait(1).to({x:-2.9,y:160.3},0).wait(1).to({x:2.1,y:159.2},0).wait(1).to({x:-2.9,y:160.3},0).wait(1).to({x:0.4,y:159.6},0).wait(1).to({x:-2.9,y:160.3},0).wait(1).to({x:-1.2,y:159.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.9,-143.7,145.9,357.7);
p.frameBounds = [rect, new cjs.Rectangle(-73.9,-143.7,145.9,357.4), new cjs.Rectangle(-73.9,-143.7,145.9,358.1), new cjs.Rectangle(-73.9,-143.7,145.9,357), new cjs.Rectangle(-73.9,-143.7,145.9,358.1), new cjs.Rectangle(-73.9,-143.7,145.9,357.4), new cjs.Rectangle(-73.9,-143.7,145.9,358.1), new cjs.Rectangle(-73.9,-143.7,145.9,357.7)];


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Am/ViQkZhbjdjAQjVi5iBj8QiAj9gYkaQgZkhBbkZQBbkYDAjdQC5jWD9iAQD8iBEagYQEhgZEZBbQEYBbDdDAQDWC5CAD9QCBD8AYEaQAZEhhbEZQhbEYjADdQi5DWj9CAQj9CBkZAYQg/AGg8AAQjjAAjchIg");
	mask.setTransform(194.2,202.4);

	// Layer 3
	this.instance = new lib.Path();
	this.instance.setTransform(238.7,207.6,1,1,0,0,0,105,144.2);
	this.instance.alpha = 0.102;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C0D62F").s().p("A5TnZIAfhfMAyHAQSIgeBfg");
	this.shape.setTransform(178.7,251.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C0D62F").s().p("A5SnZIAehfMAyHAQSIgfBfg");
	this.shape_1.setTransform(181.8,242.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0D62F").s().p("A5hmtIA8i3MAyGAQSIg7C3g");
	this.shape_2.setTransform(163.4,298.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D1DE42").s().p("A5VnRIAkhvMAyHAQSIgkBvg");
	this.shape_3.setTransform(173.1,269);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C0D62F").s().p("A57lbIBwlcMAyIAQSIhyFcg");
	this.shape_4.setTransform(194.7,202.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C0D62F").s().p("A5hmtIA8i2MAyGAQRIg7C3g");
	this.shape_5.setTransform(203.3,176.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C0D62F").s().p("A5VnRIAkhvMAyHAQSIgkBvg");
	this.shape_6.setTransform(213,146.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C0D62F").s().p("A5lmeIBGjYMAyFAQVIhGDXg");
	this.shape_7.setTransform(226.8,103.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D1DE42").s().p("A6MkoICSnCMAyHAQTIiSHBg");
	this.shape_8.setTransform(236.3,74.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D1DE42").s().p("Am/ViQkZhbjdi/QjVi6iBj9QiAj9gYkZQgZkhBbkZQBbkYDAjeQC5jVD9iBQD8iAEagZQEhgZEZBcQEYBbDdC/QDWC6CAD9QCBD9AYEZQAZEhhbEZQhbEZjADcQi5DWj9CAQj9CBkZAYQg/AGg8AAQjjAAjchIg");
	this.shape_9.setTransform(194.2,202.4);

	this.instance.mask = this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(49.2,57.4,290.1,290.1);
p.frameBounds = [rect];


(lib.planetyellowd2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(7.9,-22.3,1,1,0,0,0,202,180.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-194.1,-202.4,404.1,360.2);
p.frameBounds = [rect];


(lib.planetsfaraway = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.planetyellowd2();
	this.instance.setTransform(249.8,-38,0.126,0.126,0,0,0,8,-22.7);

	this.instance_1 = new lib.uxplanet("synched",0);
	this.instance_1.setTransform(-7.8,174.2,0.179,0.179);

	this.instance_2 = new lib.authenticityplanet("synched",0);
	this.instance_2.setTransform(-111.2,-128.5,0.063,0.063);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#67AE89").s().p("AidDlQhPi0hlicIhbiBQECA7DnCFIAEACQAYAOAiAVIB/BVIAGAFQBbBFBSBQQiEAFiAAAQioAAiegIg");
	this.shape.setTransform(-352.1,54.6,0.148,0.148);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D9F76").s().p("AjNExQhWkUiTj3QgvhOgwhEQgaglgQgUQEpBEEDCjQD9CgC+DpIAxBAQApA3AnA+IAXAmQmWgwl3hFg");
	this.shape_1.setTransform(-349.9,57.3,0.148,0.148);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D9F76").s().p("AFYIVQj5g3k0gXQg7mRjGl1Qg+h3hGhnIg+hVQEqBEEECkQD9ChC+DpIABABIArA5IAIAKIAjAwIBMB8IBiDFIAzCKIALAmIAFAOQiZg4iogmg");
	this.shape_2.setTransform(-348.6,60.3,0.148,0.148);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#67AE89").s().p("AmJmEQhUjTh1i8IhqiZQEEA7DoCGIADABQAiAUAdASIABABQCXBgCEB/IALAKIAqArIBDBJQARAUATAYIANAQQA8BMAuBHIAnBBIBsDWIAeBNIAZBMIAXBRIAIAfIAMAzIAGAhQAGAaADAaIAQB3QADAdABAdIACAcQACAnAAAwIAAAIQnuBYnrAYQCcqXkJqag");
	this.shape_3.setTransform(-348.1,64.9,0.148,0.148);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4D9F76").s().p("ApgUcQE1njA7oFQAumdh0mjQhTktiekSQgzhXg0hKQgbgngTgYQEEA8DoCFIADACQAiATAdASIABABQCXBgCEB/IALALIAqAqIBDBKQARATATAYIANAQQA8BMAuBIIAnBAIBsDZIAeBMIAZBNIAXBQIAIAdIAMA0IAGAhQAGAZADAaIAQB3QADAdABAdIACAcQACAnAAAxQAAA0gDAzIgCAhQgDAmgEAfIgEAlIgKBAIgHAlIgOBCIgHAgQgJAlgPAwIgDAKQgJAggWA+Ig0B6IgcA6IgIASQiJAXikgIQhGgDhgALIixAVQhzANhvAAQh7AAh0gQg");
	this.shape_4.setTransform(-348.1,70.6,0.148,0.148);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#67AE89").s().p("AuFYRQJDo0DFp0QCcn3hcoKQhDl4i7leQg8hvhChfQgigygYgdQEEA7DoCGIAEABQAfAUAdASIACABQCZBgCDB/IAMAKIApArIBEBJQAQAUAUAYIAMAQQA8BMAuBHIAnBBIBsDYIAeBNIAZBMIAYBRIAHAfIAMAzIAHAhQAFAaAEAaIAPB3QADAdABAdIACAbQACAmABAwIgDBUIgGBdIgdDAIgXBgIgRA+IgGASQgIAcgRAtIgGARIgXA6IgIATQgOAigRAkIgvBaIglBBIgGAIIgkA6Ig7BSQgaAkgUAWIhCBOQgPASgkAjIgPAQIgrAoIgPAPIg4AvIhQA/Ig9AsIgOAJIgzAhIgUAMQgWANgoAYQnCgkmchXg");
	this.shape_5.setTransform(-351,75.8,0.148,0.148);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4D9F76").s().p("Aw2bZQL1pZElqtQDookhIpDQg1mfjJmGQhAh8hIhsQglg2gcgiQErBEECCkQD/CiC+DqQC/DuBnEdQBqEoAAE8QAAFviOFQQiKFEj6D7Qj7D7lDCJQlQCOlwAAQixAAisghg");
	this.shape_6.setTransform(-353.6,77.4,0.148,0.148);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#76BE9A").s().p("AjwCpQmohVljiqQFviuGYAAQFpAAFNCLQFBCED6D0QiHAGiBAAQojAAnChcg");
	this.shape_7.setTransform(-360.8,54.2,0.148,0.148);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5CAD86").s().p("AqLA1Qj+hQjEhWIiShGQDRh/DqhCQDxhED9AAQHoAAGlD1QGYDtDxGXQxAiAsrkIg");
	this.shape_8.setTransform(-359.8,56.9,0.148,0.148);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5CAD86").s().p("AR3IOQmOhEoWACQo/ABqrigQjWgxjHg8IicgyQD5lsGEjTQGRjZHLAAQEuAAEcBiQETBfDpCwQDlCvCkDrQCnDxBSEZQjWhQkEgtg");
	this.shape_9.setTransform(-362.6,60,0.148,0.148);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#76BE9A").s().p("Aq/NgQmLhJlYh2QjQhHiRhHQA2k8ChkUQCckQDwjMQDxjOEohvQExhyFKAAQFvAAFPCOQFFCJD7D7QD6D6CKFDQCOFRAAFwIAAAHQqsB6qHAAQpXAAo5hpg");
	this.shape_10.setTransform(-364.2,64.7,0.148,0.148);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5CAD86").s().p("AB6TfQmGh3kOg7Qkmg8jkg1QoBh4jmjxQgFg/AAhGQAAlwCOlPQCJlED7j7QD6j7FFiJQFQiOFvAAQFwAAFQCOQFFCJD6D7QD7D6CJFFQCOFPAAFwQAADcg0DUQgyDPhiC8QiGAYingIQhRgDiGAQQi1AWg/AEQgzADg0AAQkkAAlMhkg");
	this.shape_11.setTransform(-364.4,70.3,0.148,0.148);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#76BE9A").s().p("Av1TsQj/hujGh8Qg/gmgxgkIglgbQhei7gxjLQgyjQAAjZQAAluCOlRQCJlED7j7QD6j7FFiJQFQiOFvAAQFwAAFQCOQFFCJD6D7QD7D6CJFFQCOFRAAFuQAAH6kFGuQj+GjmtDqQwnhWsvlhg");
	this.shape_12.setTransform(-364.4,75.5,0.148,0.148);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5CAD86").s().p("Aq/aDQlFiJj6j7Qj7j6iJlFQiOlQAAlwQAAluCOlRQCJlED7j7QD6j7FFiJQFQiOFvAAQFwAAFQCOQFFCJD6D7QD7D6CJFFQCOFRAAFuQAAFwiOFQQiJFFj7D6Qj6D7lFCJQlQCOlwAAQlvAAlQiOg");
	this.shape_13.setTransform(-364.4,77.1,0.148,0.148);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-391.1,-140.3,666.3,388);
p.frameBounds = [rect];


// stage content:
(lib.Introd6 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// in space
	this.instance = new lib.rocketinspace();
	this.instance.setTransform(132.9,693.6,0.557,0.557,0,31.8,31.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(57).to({_off:false},0).wait(1).to({regY:35.1,scaleX:0.54,scaleY:0.54,x:147.1,y:670},0).wait(1).to({scaleX:0.53,scaleY:0.53,skewX:31.9,skewY:31.7,x:168,y:636},0).wait(1).to({scaleX:0.51,scaleY:0.51,skewX:32,skewY:31.8,x:189.9,y:600.2},0).wait(1).to({scaleX:0.5,scaleY:0.5,skewX:32.1,skewY:32,x:212.6,y:563.5},0).wait(1).to({scaleX:0.48,scaleY:0.48,skewX:32.4,skewY:32.2,x:237.1,y:523.9},0).wait(1).to({scaleX:0.47,scaleY:0.47,skewX:32.7,skewY:32.5,x:260.4,y:486.5},0).wait(1).to({scaleX:0.46,scaleY:0.46,skewX:33,skewY:32.9,x:283.9,y:449.5},0).wait(1).to({scaleX:0.44,scaleY:0.44,skewX:33.5,skewY:33.3,x:308.2,y:411.6},0).wait(1).to({scaleX:0.43,scaleY:0.43,skewX:34,skewY:33.9,x:333.8,y:372.4},0).wait(1).to({scaleX:0.41,scaleY:0.41,skewX:34.8,skewY:34.7,x:358.1,y:336},0).wait(1).to({scaleX:0.4,scaleY:0.4,skewX:35.9,skewY:35.8,x:383.2,y:299.6},0).wait(1).to({scaleX:0.38,scaleY:0.38,skewX:37.6,skewY:37.5,x:409.7,y:262.7},0).wait(1).to({scaleX:0.37,scaleY:0.37,skewX:39.6,skewY:39.6,x:430.8,y:235.1},0).wait(1).to({scaleX:0.35,scaleY:0.35,skewX:43.6,skewY:43.6,x:455.1,y:205.8},0).wait(1).to({scaleX:0.34,scaleY:0.34,skewX:55.8,skewY:55.7,x:482.6,y:177.5},0).wait(1).to({scaleX:0.32,scaleY:0.32,skewX:74.4,skewY:74.3,x:523.2,y:157},0).wait(1).to({regY:0,scaleX:0.31,scaleY:0.31,skewX:85.7,skewY:85.7,x:577.7,y:145.6},0).wait(1).to({regY:35.1,scaleX:0.31,scaleY:0.31,skewX:92.3,skewY:92.2,x:585.6,y:144.7},0).wait(1).to({scaleX:0.32,scaleY:0.32,skewX:102,skewY:102,x:608,y:145.4},0).wait(1).to({scaleX:0.33,scaleY:0.33,skewX:117.3,skewY:117.3,x:635.9,y:151.8},0).wait(1).to({scaleX:0.34,scaleY:0.34,rotation:137.6,skewX:0,skewY:0,x:666,y:169.3},0).wait(1).to({scaleX:0.35,scaleY:0.35,rotation:158.4,x:692.6,y:204.1},0).wait(1).to({scaleX:0.36,scaleY:0.36,rotation:173.5,x:708.8,y:256.4},0).wait(1).to({scaleX:0.37,scaleY:0.37,rotation:180.3,x:712.9,y:309.7},0).wait(1).to({scaleX:0.39,scaleY:0.39,rotation:180.6,y:370.8},0).wait(1).to({scaleX:0.4,scaleY:0.4,rotation:179.7,y:415.5},0).wait(1).to({scaleX:0.41,scaleY:0.41,rotation:176.9,x:714,y:464.4},0).wait(1).to({scaleX:0.43,scaleY:0.43,rotation:172.2,x:717.2,y:508.3},0).wait(1).to({scaleX:0.44,scaleY:0.44,rotation:161.4,x:725.3,y:555.1},0).wait(1).to({scaleX:0.45,scaleY:0.45,rotation:142,x:741.1,y:596.4},0).wait(1).to({scaleX:0.47,scaleY:0.47,rotation:111.5,x:773.5,y:630.5},0).wait(1).to({regY:0,scaleX:0.48,scaleY:0.48,rotation:89,x:838.4,y:643.9},0).wait(1).to({regY:35.1,scaleX:0.47,scaleY:0.47,rotation:84.1,x:843.2,y:644},0).wait(1).to({scaleX:0.46,scaleY:0.46,rotation:78.5,x:870.4,y:641.2},0).wait(1).to({scaleX:0.45,scaleY:0.45,rotation:72.7,x:901.5,y:634.5},0).wait(1).to({scaleX:0.44,scaleY:0.44,rotation:67,x:935.4,y:623.2},0).wait(1).to({scaleX:0.43,scaleY:0.43,rotation:0,skewX:61.2,skewY:61.1,x:969.9,y:607.8},0).wait(1).to({scaleX:0.42,scaleY:0.42,skewX:54.3,skewY:54.3,x:1005,y:587.3},0).wait(1).to({scaleX:0.4,scaleY:0.4,skewX:46.4,skewY:46.3,x:1040.3,y:560},0).wait(1).to({scaleX:0.39,scaleY:0.39,skewX:36.1,skewY:36.1,x:1072.2,y:527},0).wait(1).to({scaleX:0.37,scaleY:0.37,skewX:22.2,skewY:22.1,x:1097.5,y:487.7},0).wait(1).to({scaleX:0.36,scaleY:0.36,skewX:2.2,skewY:2.1,x:1112.5,y:438.8},0).wait(1).to({scaleX:0.34,scaleY:0.34,skewX:-21,skewY:-21.1,x:1107.9,y:385.4},0).wait(1).to({scaleX:0.32,scaleY:0.32,skewX:-22.2,skewY:-22.3,x:1087.6,y:337},0).wait(1).to({scaleX:0.31,scaleY:0.31,skewX:-21,skewY:-21.2,x:1070.9,y:297},0).wait(1).to({scaleX:0.29,scaleY:0.29,skewX:-17.6,skewY:-17.7,x:1053,y:249.9},0).wait(1).to({scaleX:0.27,scaleY:0.27,skewX:-11.4,skewY:-11.6,x:1038.8,y:202.5},0).wait(1).to({scaleX:0.26,scaleY:0.26,skewX:2.6,skewY:2.4,x:1031.3,y:154.1},0).wait(1).to({scaleX:0.24,scaleY:0.24,skewX:35.4,skewY:35.2,x:1038.8,y:110.2},0).wait(1).to({scaleX:0.22,scaleY:0.22,skewX:80.6,skewY:80.4,x:1080.6,y:79},0).wait(1).to({regY:0,scaleX:0.21,scaleY:0.21,skewX:103.8,skewY:103.6,x:1135,y:78.8},0).wait(1).to({regY:35.1,scaleX:0.21,scaleY:0.21,skewX:111.1,skewY:110.9,x:1141.9,y:80.3},0).wait(1).to({scaleX:0.22,scaleY:0.22,skewX:120,skewY:119.8,x:1159.7,y:87.2},0).wait(1).to({scaleX:0.23,scaleY:0.23,skewX:129.7,skewY:129.5,x:1179.4,y:99.1},0).wait(1).to({scaleX:0.23,scaleY:0.23,skewX:140.7,skewY:140.5,x:1200.5,y:117.7},0).wait(1).to({scaleX:0.24,scaleY:0.24,skewX:151.6,skewY:151.3,x:1220.1,y:143.7},0).wait(1).to({scaleX:0.25,scaleY:0.25,skewX:164.2,skewY:164,x:1235.4,y:174.7},0).wait(1).to({scaleX:0.26,scaleY:0.26,skewX:182,skewY:181.8,x:1243.6,y:212.5},0).wait(1).to({scaleX:0.28,scaleY:0.28,skewX:217.9,skewY:217.7,x:1237.5,y:251.5},0).wait(1).to({scaleX:0.29,scaleY:0.29,skewX:269.5,skewY:269.3,x:1191.7,y:277.7},0).wait(1).to({scaleX:0.3,scaleY:0.3,skewX:284.6,skewY:284.3,x:1109.5,y:268.7},0).wait(1).to({scaleX:0.32,scaleY:0.32,skewX:288.3,skewY:288,x:1055.1,y:253.9},0).wait(1).to({scaleX:0.33,scaleY:0.33,skewX:290.4,skewY:290.1,x:1001.7,y:236.2},0).wait(1).to({regY:0,scaleX:0.35,scaleY:0.35,skewX:291.3,skewY:291.1,x:908.3,y:201.4},0).wait(1).to({regY:35.1,scaleX:0.33,scaleY:0.33,skewX:291.4,skewY:291.2,x:891,y:195.1},0).wait(1).to({scaleX:0.31,scaleY:0.31,skewX:293.4,skewY:293.2,x:855.8,y:181.4},0).wait(1).to({scaleX:0.28,scaleY:0.28,skewX:295.7,skewY:295.5,x:815.6,y:164.1},0).wait(1).to({scaleX:0.26,scaleY:0.26,skewX:299,skewY:298.8,x:773.4,y:143.6},0).wait(1).to({scaleX:0.23,scaleY:0.23,skewX:310.6,skewY:310.4,x:733,y:119.4},0).wait(1).to({scaleX:0.21,scaleY:0.21,skewX:350.8,skewY:350.5,x:703.1,y:85.1},0).wait(1).to({scaleX:0.18,scaleY:0.18,skewX:409.5,skewY:409.3,x:715.7,y:37.5},0).wait(1).to({regY:0,scaleX:0.15,scaleY:0.15,skewX:437,skewY:436.7,x:763.5,y:12.3},0).wait(1).to({regY:35.1,scaleX:0.16,scaleY:0.16,skewX:447.5,skewY:447.2,x:779.9,y:9.1},0).wait(1).to({scaleX:0.17,scaleY:0.17,skewX:463.4,skewY:463.1,x:804.3,y:9.4},0).wait(1).to({scaleX:0.18,scaleY:0.18,skewX:494.6,skewY:494.4,x:830.7,y:18.7},0).wait(1).to({scaleX:0.19,scaleY:0.19,skewX:550.8,skewY:550.5,x:846.5,y:46.2},0).wait(1).to({scaleX:0.2,scaleY:0.2,skewX:585.1,skewY:584.9,x:828.2,y:83.6},0).wait(1).to({scaleX:0.21,scaleY:0.21,skewX:597.1,skewY:596.9,x:795.1,y:112.2},0).wait(1).to({scaleX:0.23,scaleY:0.23,skewX:603.9,skewY:603.7,x:758.2,y:134.6},0).wait(1).to({scaleX:0.24,scaleY:0.24,skewX:610.3,skewY:610,x:718.3,y:152.9},0).wait(1).to({scaleX:0.25,scaleY:0.25,skewX:617.5,skewY:617.3,x:676.3,y:167},0).wait(1).to({scaleX:0.27,scaleY:0.27,skewX:634.4,skewY:634.1,x:631.2,y:174.8},0).wait(1).to({scaleX:0.28,scaleY:0.28,skewX:631.4,skewY:631.2,x:578.8,y:172.4},0).wait(1).to({scaleX:0.3,scaleY:0.3,skewX:628.7,skewY:628.4,x:531.4,y:172.3},0).wait(1).to({scaleX:0.31,scaleY:0.31,skewX:624.9,skewY:624.6,x:483.1,y:174.7},0).wait(1).to({scaleX:0.33,scaleY:0.33,skewX:618.5,skewY:618.3,x:438,y:180.3},0).wait(1).to({scaleX:0.35,scaleY:0.35,skewX:606.5,skewY:606.3,x:394.2,y:191.6},0).wait(1).to({scaleX:0.36,scaleY:0.36,skewX:590.3,skewY:590.1,x:350.5,y:215},0).wait(1).to({scaleX:0.38,scaleY:0.38,skewX:565.1,skewY:564.8,x:313.9,y:252.5},0).wait(1).to({scaleX:0.39,scaleY:0.39,skewX:543.9,skewY:543.7,x:297.5,y:297.3},0).wait(1).to({scaleX:0.41,scaleY:0.41,skewX:515.4,skewY:515.1,x:298.5,y:342},0).wait(1).to({scaleX:0.42,scaleY:0.42,skewX:484.7,skewY:484.5,x:322.8,y:382.3},0).wait(1).to({regY:0,scaleX:0.44,scaleY:0.44,skewX:460.8,skewY:460.6,x:381.3,y:407.9},0).wait(1).to({regY:35.1,scaleX:0.43,scaleY:0.43,skewX:449.6,skewY:449.3,x:384,y:408.5},0).wait(1).to({scaleX:0.43,scaleY:0.43,skewX:447.1,skewY:446.9,x:408.3,y:408.2},0).wait(1).to({scaleX:0.42,scaleY:0.42,skewX:444.8,skewY:444.6,x:435.1,y:406.6},0).wait(1).to({scaleX:0.42,scaleY:0.42,skewX:442.3,skewY:442.1,x:464.1,y:403.6},0).wait(1).to({scaleX:0.41,scaleY:0.41,skewX:439.7,skewY:439.5,x:494.6,y:399.1},0).wait(1).to({scaleX:0.4,scaleY:0.4,skewX:437,skewY:436.7,x:526,y:393},0).wait(1).to({scaleX:0.4,scaleY:0.4,skewX:434,skewY:433.7,x:557.1,y:385.3},0).wait(1).to({scaleX:0.39,scaleY:0.39,skewX:430.6,skewY:430.4,x:589,y:375.6},0).wait(1).to({scaleX:0.38,scaleY:0.38,skewX:426.9,skewY:426.6,x:621.6,y:363.5},0).wait(1).to({scaleX:0.38,scaleY:0.38,skewX:422.7,skewY:422.5,x:654.4,y:348.7},0).wait(1).to({scaleX:0.37,scaleY:0.37,skewX:418.1,skewY:417.8,x:686.2,y:331.4},0).wait(1).to({scaleX:0.36,scaleY:0.36,skewX:412.8,skewY:412.6,x:717.7,y:310.5},0).wait(1).to({scaleX:0.35,scaleY:0.35,skewX:410.9,skewY:410.7,x:747.4,y:285.8},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:778.1,y:260.2},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:809.6,y:234},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:841.9,y:207.1},0).wait(1).to({scaleX:0.32,scaleY:0.32,skewX:411.2,skewY:410.9,x:875,y:179.6},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:909.2,y:151.3},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:944.5,y:122.1},0).wait(1).to({scaleX:0.29,scaleY:0.29,skewY:411,x:981.1,y:91.9},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:1019.3,y:60.3},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:1059.5,y:27.1},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:1102.4,y:-8.3},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:1149.5,y:-47.3},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:1204.7,y:-92.9},0).wait(1).to({regY:0,scaleX:0.21,scaleY:0.21,skewX:411.3,x:1310.3,y:-180},0).wait(12));

	// takeoff
	this.instance_1 = new lib.rocketai();
	this.instance_1.setTransform(661,808,1.605,1.605,-90,0,0,58.5,45.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({y:801.7},0).wait(1).to({y:804.9},0).wait(1).to({y:798.6},0).wait(1).to({y:801.7},0).wait(1).to({y:795.5},0).wait(1).to({y:798.6},0).wait(1).to({y:792.3},0).wait(1).to({y:795.5},0).wait(1).to({y:789.2},0).wait(1).to({y:792.3},0).wait(1).to({y:784},0).wait(1).to({y:789.2},0).wait(1).to({y:784},0).wait(1).to({y:789.2},0).wait(1).to({y:784},0).wait(1).to({y:792.3},0).wait(1).to({y:789.2},0).wait(1).to({y:795.5},0).wait(1).to({y:792.3},0).wait(1).to({y:798.6},0).wait(1).to({y:795.5},0).wait(1).to({y:801.7},0).wait(1).to({y:798.6},0).wait(1).to({regX:58.4,scaleX:0.96,scaleY:2.05,y:798.7},7).to({scaleX:2.09,scaleY:1.61},5).to({scaleX:1.56,y:471.9},4).wait(1).to({regX:147.9,scaleX:1.56,y:198.9},0).wait(1).to({regX:58.4,x:661.1,y:226.7},0).wait(1).to({regX:147.9,y:-90.6},0).wait(1).to({scaleX:1.57,y:-240.7},0).wait(1).to({y:-367.2},0).wait(1).to({regX:58.4,y:-332.8},0).to({_off:true},1).wait(131));

	// pad front
	this.instance_2 = new lib.padfront();
	this.instance_2.setTransform(700,901.8,0.951,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},57).wait(131));

	// fire
	this.instance_3 = new lib.rocketfire();
	this.instance_3.setTransform(659,767.5,0.094,1,-90,0,0,40.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({scaleX:1.21,scaleY:1.33,x:659.8},0).wait(1).to({regY:0.1,scaleX:2.32,scaleY:1.66,x:660.7,y:767.4},0).to({regY:0,scaleX:2.73,scaleY:1.52,x:660.6,y:763.3},8).wait(1).to({scaleY:1.57},0).wait(1).to({y:766.3},0).wait(1).to({y:760.3},0).wait(1).to({y:761.3},0).wait(1).to({y:757.3},0).wait(1).to({y:755.8},0).wait(1).to({y:755.3},0).wait(1).to({y:751.3},0).wait(2).to({y:750.8},0).wait(1).to({x:660.1,y:747.3},0).wait(1).to({x:660.6,y:743.8},0).wait(1).to({y:746.3},0).wait(1).to({y:747.3},0).wait(1).to({y:745.8},0).wait(1).to({x:660.1,y:749.3},0).wait(1).to({x:660.6,y:752.3},0).wait(1).to({x:660.1,y:750.8},0).wait(1).to({x:659.6,y:756.3},0).wait(1).to({x:660.1,y:756.8},0).wait(1).to({x:660.6,y:758.8},0).wait(1).to({x:659.6,y:744.3},0).wait(1).to({y:762.3},0).wait(1).to({y:740.3},0).wait(1).to({y:735.3},0).wait(1).to({x:660.6,y:751.3},0).wait(1).to({y:749.3},0).wait(1).to({y:760.8},0).wait(1).to({x:659.6,y:731.3},0).wait(1).to({x:660.6,y:728.3},0).wait(1).to({x:660.1,y:743.8},0).wait(1).to({x:660.6,y:736.3},0).wait(1).to({y:740.3},0).wait(1).to({y:732.3},0).wait(1).to({y:726.8},0).wait(2).to({y:674.5},0).wait(1).to({regX:-40.6,scaleX:2.73,x:658.5,y:814.6},0).wait(1).to({y:718.6},0).wait(1).to({x:659.9,y:649.9},0).wait(1).to({regX:0,x:659.5,y:380.4},0).wait(1).to({x:659.1,y:224.4},0).wait(1).to({x:658.7,y:72.9},0).wait(1).to({x:658.4,y:-71},0).wait(1).to({x:658.1,y:-198.2},0).wait(1).to({regX:-40.6,x:657.9,y:-150.3},0).to({_off:true},1).wait(131));

	// smoke copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(152,111,66,0.8)").s().p("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");
	this.shape.setTransform(693,827.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(152,111,66,0.8)").s().p("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");
	this.shape_1.setTransform(663.9,779.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(152,111,66,0.8)").s().p("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AJIAQANQAZAXARAaQAMAUAIAUIABAEQAQAjAEAlIAbAOIADABIAHACQAPAEAOAGIAcANIAOAIQAeATAVATIAPAPIADACQAPAFAOAIIAUANIAYATIAKAHQARAMAQAOQAZAVAVAZQANAPALAQIAJAHIAIAGIAJgDIAKgCQASgEATABIALACQANACANADIACAAIAQAAIADABQAUABARAGQAJACAIADQAcAMAVAUQARAQAMASIASAVQAMAQALARIAIgDQAVgEAVABIALABQAdAEAdALQAXAJASAPQANAJALALIAFAGQAZANAWAVQAIAGAHAIIAJAIIAEAGIALANQAgAkARArIAJgEIAGgCIADgCIASgGQAagHAZgDQAagCAYADIACAAIAIgBQAjgBAjAGIAMACIAVAFIAIACQBXAWA7A4IASARQAQAPAOARIANARIAUAcIACACQApAAAlAIQANACANAEIAiAJIAUAHIAVAIIAQAIIABAAQAyAVApAiIALAKQAiAeAaAlIAfAKIAFACIAWAEIAXAGQAqANAlAVIAeATQAZgCAaADQAkgDAmAIIAWAGQARAEAQAHQAlAOAeAYQAfAZAYAfQAZASAWAXIAKAMQAgAkAUApIASASQANgFAOgBIARgBIAIAAQAgACAhANIAQAIQBGAXAvA7IANARQALAQAJARQALAXAHAXQAJAaAEAcQADAcgBAcIAAABQACAWgBAVIAAADQAGAdgFAiIgGAYIgIAXIgGANQgTAnggAcQgSARgXALQgMAIgNAFIgbAKQgGAXgJAXQgLAZgOAXQgJAOgLAOQgvA/hEAhIAAAAQgRAJgVAHIgKAEQgtANgxgFIgMgCIgIgEIgIgGQgLAZgQAWQgWAagXAVQgdAagqAPIgXAIQgoAKgngGIABAAQghAagsARIgTAGQgeAKgeABQgrgUgjgmIgIgKIgOANQgdAYgnAPQgvATgwAEIgBABIgLANQgTAUgcAJQg6AUgsgXIgEgDIgGAYQgNAtgZAqIgFAIIgHAQIgKAcQgIAPgGAPQgMARgOAPQgYAZgiARIgfAPIgPAFQggAJgeABIgDgBIgDAAIgTgTQgMANgLAPQgVAcgfAiIgNAOQgcAFgaAJQgfAKgqASIAAABIgpAPIgFgDQg+gjgqgiIgtgkIgfAiIgJALIgtASIgFACIgDADIgQALQggAZgrAWIgBAAIgXAAIgtAAIghgSIgQgJIgBgBIgpgbIgogOIgEgBIgagKIgGgFQgMgUgJgRIgDgHIgWgGQgQgFgRgDIABAeIABAGIgBAQQgBAugRAtQgHAUgLAUQgeA9g7AvIgBACIgMAHQguAkg3AOIgJAFIgcAKQgeAWgiAQQg0AZg7AHQgkAFgkgCQgfgCgegHIgXgGQgnAFgngDQgeALghAHQg6AOg/gCIgKgBQgPgBgNgCQgyABgwgKQg0ADg1gIIgCAAQhEgLg/gcQgxgWgtghIgQgMQgogNgogWIgFgCQgqgYglgfIgXgLIgFgDQgQAHgRAFIgEACIgVAHIgHACQhJAYhIgGIgTAIIgTAGIgXAJIgbAIIgGACIgCABQhsAjhvgQIgLgCIgDACIgYAOIgLAGIgHAFIgJAFQgvAdgvAQQgUAQgWAOQgyA5g8AsQgxAkg3AaIgYAMQhLAjhMAOQg7ARg7AGIgJAEIgjAPQgrAQgsALIgHABIgfAJQg3AOg6AFQgzAEg1gDQgZgCgZgDIgagEQgkgHgkgKIgKgDQgcgHgbgLQgtgQgqgUIgFgEQgogLgngRIgRAAIgEgBIgggEIgggFQgxgJg0gTIgIgDQgcgKgcgPIgDgBQg6gbg4gsIgQgNIgigZIgIgFIgKgGIgMgJQgagNgYgPIgcASQgiATgjAQIgVAJQg9Adg+AQQgrALgrAFQhGAIhHgHIgzgGIgkgGIgEgBIgWADIgDAAIgIABIgNABQhBAIhAgEIgRgBIgZgDIgXgDQhGgKhBgZIgCAAIgbgDIgNgCQgxgFgwgOQgpgIgpgPIgJgDIgeAJIgIADIgdANQg9AbhDANIgYAGQghAHghADIgLABQh7ALhzgjQgzgQgwgZQgagNgagQQgsgcgngiIgigfIgBgCIgFgCIgBABQgvAeg+AQIgHABIgFABIgCAAQgwASgyAEQgNACgNABIgFAAQgYACgYgCIgIAAQgtASgwAJQgiAGghABQgyAag4AJQgmAKgoADIgLAAIgHAJIgBADIgBACQgNASgNARIgGAIQgaAkgeAdIgOAPQgUAUgXASQgUAQgUAOQgdAZggAUQgUANgUAKIgRANIgEACQgwAqg2AeIgKAGIghAWQgeASggAPIgHAEQg1AYg0APQgaALgcAJIgBAAIgYAGIgcALIgLAEIgMAEIgDABIAAAAQgkAkgrAeIgEADIgEADQg9AuhEAcQghAOgiAJQgWAGgWAEQgcAKgdAIIgSAEQgZAGgZAEIgHABIgIADIgDACIgkARQgeAOgfALQgcAKgdAIIgjAIIgEABQgVAGgXAFIgPACQhCAMhDAAIgJABIgPAAQgdAAgdgCg");
	this.shape_2.setTransform(633.4,724.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(152,111,66,0.8)").s().p("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IADACIAIADQAPAFANAHQAPAIANAJIAOALQAbAZAQAXIAJARIADACQAQAGAPAJIAUAOQANAKALAMIALAHQARAOARAPQAZAZAUAaQAMASAKASIAIAIIAHAIIAIAAIAIACQAQADAPAGIAJAEIATAMIADAAQAIAAAJABIADAAQAUACASAHIARAHQAdAQASAXQAQATAIAVIATAXQAMARAKASIAIAAQAUACASAIIAJADQAZAMAWASQASAOAMASQAIAMAGAMIADAHQAbAPAXAWIAPAQIAJAIIAFAHIALAOQAhAnASAvIAIgBIAGgBIADAAIAQABQAXACAUAGQAWAGARAKIACABIAIAAQAkACAkAKIALADIAXAIIAIADQBWAhA1BEIAPAUIAAAAQAPASAMAUIAMATIASAfIABACQAkANAZARIAZAKQARAHAQAIIATALIATAMIAQAKIABABQAxAcAkApIALAMQAeAkAWAqIAYARIAEADIAWAIIAYAJQAqASAjAaQAQALAOANQAYAEAXAKQAmABAmAMIAXAKQAQAHAPAJQAjAUAaAdQAcAgARAjQAaATAXAaIALANQAgAnAUAtIAQAUQANAAAMAEIAPADIAHADQAdALAaATIANAMQBGAgArBCIAMAUQAKARAHATQAKAZAFAZQAJAbADAeQADAcgDAeIAAABQAEAWAAAXIABADQAMAcABAjIgBAZIgDAZIgEAOQgNAqgbAjQgPAUgVAOQgIALgKAIIgTARQgDAZgHAZQgIAbgMAaIgRAfQgqBIhDApIABAAQgIAKgMAMIgHAGQgcAXgpALIgKACIgFgBIgFgCQgGAbgKAZQgUAdgUAaQgLAagZAXIgNANQgaATgdAIIABAAQgQAcgaAaIgMAKQgUAQgVALQgRgPgOgUIgDgFIgJAPQgSAegcAXQgkAdgnATIgBABIgDAKQgGASgOALQgfAYgWgEIgDAAIgCAZQgEAwgSAvIgDAIIgFARIgCAcQgEAPAAAQIgHAaQgGAWgSATIgPARIgIAIQgSAOgRAKIgCAAIgBAAIgKgVQgEAIgCANQgGAYgRApIgIAQQgPgEgLAIQgNAJgaAbIAAACQgMAMgQANIgDgEQgmgxgOgdQgHgRgKgKQgGATgJAUIgFAMQgLADgIAIIgCABIgBACIgGALQgNAXgZAeIgBAAIgKAAQgJAAgMAEIgQgVIgHgJIABgBQgHgLgJgHQgKgCgMAAIgCAAIgRAAIgDgCQgFgVgDgSIgBgGIgKgHQgHgEgIABIAGAeIACAFIACASQAFAvgMAwQgGAWgJAWQgbBEg9A0IgBABIgLAJQgyAng6ANIgLAEQgPAFgPADQgdAagjAVQg1Aeg+AKQgmAGgmgCQghgCgggIIgYgGQgpABgogIQgfAPgiAJQg8AShDgBIgMgBIgdgCQg2AAgxgOQg3AGg4gHIgDAAQhJgJhDgfQg0gYguglIgRgNQgrgJgsgSIgFgCQgvgVgpgfIgZgHIgGgCQgRAIgRAGIgGABIgWAIIgIACQhOAWhLgPIgSAKIgTAJIgYALIgcAMIgGADIgBAAQhtAyh2gJIgMgBIgEACIgaANIgMAGIgIAEIgKAFQgzAYgzAKQgWARgWAPQg4A6hCArQg1Ajg8AYIgaALQhSAehRAHQg/ALg+gDIgJAFIgmAQQgsATgvALIgIACIghAKQg5AQg+AFQg3AFg3gEQgbgCgagFIgcgFQgmgJglgNIgKgDQgegJgdgMQgvgTgqgYIgFgEQgsgKgqgSIgQAEIgDAAQgPADgQACQgPACgQAAQgxADg4gJIgJgBQgegFgfgKIgDAAQhBgQhAglIgTgMIgmgWIgJgFIgKgGIgOgIQgcgJgbgNIggARQglASgmANIgYAHQhCAbhDALQguAHguABQhJABhHgQQgagGgagHQgTgFgRgGIgFgCIgWAEIgEABIgHABIgOACQhEANhFgDIgSAAIgbgCIgXgCQhMgJhFgaIgCAAIgcABIgNABQgyADgzgGQgpABgrgFIgKgCIgfAMIgIAEIgeAPQhAAghFARIgaAHQgiAJgiAGIgMACQiBARh9gfQg3gOg0gYQgcgNgcgPQgwgcgrgiIglggIgCgCIgFgCIAAAAQg1AUhAADIgIAAIgFAAIgCgBQgzAHgygGIgagDIgGAAQgYgDgYgEIgJgCQguAWgyANQgiAKgjAEQg1Acg7ALQgoALgrADIgMAAIgHAJIgDADIgBABQgPARgQAOIgIAHQghAfgjAZIgRALQgYARgaANIgtAWQgiARgkANQgVAHgWAEIgTAMIgFADQg0Apg8AbIgLAGIglATQghAQgiAMIgJADQg5ASg3AGQgdAHgeADIgBABIgZAAIgdAEIgMABIgNABIgDABIAAABQglAngtAgIgFADIgEADQhAAzhJAdQgjANglAIQgYAGgYADQgdALgfAIIgSAEQgbAHgbADIgIABIgGAFIgEACIgiAXQgcATgeAQQgbAPgdAMIghAOIgEABQgWAKgWAIIgOAFQhCAXhFAJIgJACQglAGgmADIgFABQgnADgmAAIgGAAIglAFIgUABIgiADQgfAEghAAQg7AAg8gMg");
	this.shape_3.setTransform(601.9,667.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(152,111,66,0.8)").s().p("EhA6A14Qg2gBg3gKIgbgFIgegHQgqgLgpgQQghgLgggOIgkgQQgjgRghgVIghgVQg3gmgwgwQhPhAhAhcQgdgogYguIgGgLIAAgBIgFgIIgJgTIgSgnQgdg8gTg+QgvifARi1IgNgIIAAgBIgLgGIgCgCQgrgjgogwQgxhBgYhVIgKAAIgQACQg5ACg5gSQghgLgegSQgfgSgagZIgKgKQghgUgagbQgbgBgagJQgQgFgOgHIgMgGIgVgMQgQgKgNgLIgLABQgaADgagFIgbgGQgPgFgPgIQgVgKgSgPQgYgUgTgaQgqg6gDhMIAAgEIAAgHQAAhTAtg/QATgaAYgTQAQgOATgKQARgJASgFQAkgLAjACQARABAQAEIATgMQAQgJARgGQAOgFAOgEQAqgMArAFQAYgQAagKIAJgEIARgHIAEgCQATgHASgEIAPgDQAggNAjgHQAdgGAdAAQASgOAVgLIAKgFIAUgJIAPgFQAQgGASgEQAPgEARgBQAVgDAWAAIAMAAIABAAQA1gGAxAPIALAEQAngFAnACIACgBIAOgOQARgQATgMIANgIQAVgMAXgGIAXgIIANgDQAkgIAjADQAeABAdALIAHACIANAGQAPAGANAIIAFAEIAHAGIAEgCQAggOAigCQASgBAUADIARgEQAigGAhADIASgLIAIgFQAJgKAKgJIAUgSQAogfAugOQATgFATgDQASgEAUgBIAUgBIAJABQAMAAALABQAzACAsAUQAcgJAdgDIAKAAIABgBQAegBAcAGIAIACIALAFIAEgDIAAAAQAQgOATgLIATgKIATgIIAXgGQAsgLAtAHIACABIAPACQAagUAfgLIAFgCIACgCQAKgOAMgMIALgMQAbgaAhgSQAQgJARgGIAUgGQApgLAnADQAZACAYAHIAXAIIABABIANgKQAHgHAJgGQAJgIALgHQAMgJANgHQAggSAlgLQAZgHAbgDIAWgRIACgBIANgIIATgOQAPgLARgIIAPgIIAAgBQAZgwAmglQAMgMAOgLQALgKAMgJQANgJANgIQAOgJAOgGQAOgGAOgFQAdgKAfgEQAUgCATAAQAlABAiAKIAFgBIAPgJQAQglAXggIAPgTIAIgIIAAAAIAAAAQAPgYATgXIARgRIAEgFQAlgpAvgfIAGgMIASgbQA1hNBUg0QAyggA3gQIANgEQAlgPAogHIANgCIAGgEQARgKASgIIAPgGQAPgUATgTQBChCBigdQAWgGAWgDIAYgBIAIgKIAYgUIAHgMQAKgTANgTIADgFQAphNBRgxQAXgPAZgMQAVgKAWgIQAVgHAVgFQANgTATgSIATgOIAOgIIAMgQQAuhBBOgsQAhgUAlgNIAHgNQAJgQAOgQIAKgKIAFgGQAaghAqgYIAUgeQAEgXAGgXQAMgqATgmQAMgWAOgTQAegtAqggQBHg2BQgQQAZgFAYAAIAEABIALgIIARgMQAegSAggPQAHgOAJgNQAJgPAKgOQAKgNAKgLQAngxA4glQAXgPAYgOQAPgSARgRIAagXQAOgOAQgNIABAAIAAgEIAFgOQAchIA3hBQAlgwA1glIAFgEIAMgLIAXgUIAXgRIAQgMQAhggAtgXQAcgNAegHIAMgJIABgCQAHgMALgMIAKgKIACgBQADgBAEgGIAGgEQAEgKAGgHIABgCQAqhWBVgqIAGgDIAGgDQALgIALgGQAPgJAOgFIACgFIABgCIAEgFIAGgJQAGgGAJgFQAIgGAMgEIAOgDIADgCIADgEIADgDIAGgXIAEgMIAHgQQAMgcARgXQAegqAsgbIAMgIIAOgIIANgSIAEgEIALgNQAUgTAYgLQANgHAOgEIAEgFQADgHAGgGQALgZATgaIANgPIALgNIARgUIASgQQAMgLAOgKIAQgMIAPgJIAGgKQAPgYAXgZIAWgWIAMgMIAGgFQAQgOASgNIAVgQQAPgUARgTIACgBIADgEQAOgPAQgPIAGgFQAIgVAOgVQAdguA3gdQAdgQAggGIAJgCQAOgYAXgZQAUgUAbgOQAjgZAugNIAWgWIAVgTQAMgxAfgtQAYgmAlgaQAXgRAagMQATgdAdgYQAVgQAagGQAlgMAqACIAQACIALgKQgCgQADgUIACgJQAGgrAigwQAig0BEghQAdgQAhgHQAkgJAmABQBMADA8AmQBAAmAfA4IABAEQAhAzgCAuQAQAIAOAKIACgDIAFgCIABgBIAHgQIADgGQAlhMBPgvQA0ggA+gIQAagDAbABIAWABIAQABIACACQBFALA4AqQAVAPARASQAuASAhAfQAfAiAQAeIAEACQANAFAKAHQAOAKAJALIAKAMIADADQAHANAHACQBnA6A3BaQAPAVAKAWIAEAJQAVAXASAYQAOAUAKAUIAGAIQA1BBADBBIACAKIAPARQAYAcANAiQAJAYADAYIABAEQAMAqAAApIAQAaIADACIAJAEQAPAHANAIQAPAKAMALQAIAHAFAHQAaAeAJAbIAFAUIACACQARAHAQAKQALAHAKAJQANALALANIALAJQASAOARASQAZAbATAdQALAUAJAVIAHAJIAGAJIAHAEIAGAFQAOAKAKALIAHAIQAIAKAFAJIADAAIARABIAEAAQAVADATAJQAJADAIAFQAdATAQAbQAOAXAFAXQAKAMAIANQANASAJAVIAIADQASAIAPAOIAIAGQAUAVAQAYQAMATAFAWQADAOACAPIAAAHQAcAQAYAZIAQARIAJAJIAFAHIAMAPQAjAqARAyIAJADIAFACIADABIAOAIQAVAMAOAPQARAPAKARIABACIAIAAQAnAGAkAPIALAFIAXALIAIAEQBXAsAuBQIANAXQANAVAKAXIAKAUQAIARAHASIABADQAeAaANAbQANAGALAIQARAKAQAMIARAOIASAQIAPANIABABQAvAjAhAxIAKAOQAaArAQAuIASAaIACAEIAYALIAXANQAqAXAjAgIAdAdQAWALAVAPQAoAFAmASIAXAOQAQAJAOAMQAiAaAVAjQAYAnAKAnQAbAVAYAbIALAPQAiAqATAxIAPAXQALAFAKAIIAOAJIAGAFQAZAVAUAZQAFAIAEAIQBGApAnBKIALAWQAJAUAGAUQAIAbAEAZQAIAdACAgQACAggEAgIABABQAFAXAAAYIACADQATAaAHAkQADAMACAOQABANAAANIgBAPQgFAugXApQgNAYgTASQgDANgGAMQgFAMgGALQAAAbgFAcQgFAcgKAdIgOAjQglBRhBAzIABAAQABALgDAQIgCAIQgLAhghAdIgIAGIgBADIgBABQAAAdgGAcIghBAQAIAZgIAgIgEASQgKAegUAVIACABQADAegJAjIgFAOQgIAXgMAUQAKgKAIAAIACABIgCARQgGAkgTAfQgWAogfAhIgBACIAFAJQAJAOgBAOQgCAbAAASIAAABQACANAAANQAFA0gKAzIgCAKIgDASIAGAbQACAQAGAPQAHAKAGALQALATAAAUIACAVIAAALIgEASIAIALQALAVgEAuIAAACIAAAKIAAABQAGAGgEAXIAGAEIAAABIABABIADAKQAIAWgGAmQAAAAAAAAQABAAAAgBQAAAAAAAAQABAAAAAAQAFABABAHQgBgOADgJQAAgEACgEIABgBIADgEQABgMADgKIAAgGQAAgGADgCQAEgDAAAEQAHAOAFAQIACAGIAFASQAMAxgIA0QgEAYgHAYQgXBLg/A5IgBABIgMAJQgzArhAANIgLADIggAGQgdAegkAYQg3AkhAANQgnAHgqgBQgjgCghgIIgZgHQgsgCgpgOQggASgjAMQg/AXhHgBIgNAAIgfgCQg5gCg0gRQg5AJg8gGIgDAAQhPgIhGghQg2gagxgpIgRgPQgugEgxgPIgGgCQg0gSgtgeQgNAAgOgCIgGgBQgSAJgTAGIgFABIgZAHIgIADQhVAUhNgZIgSANIgTAMIgXAOIgdAPQgDACgEABIgBABQhtBCh+gCIgNAAIgEABIgdANIgNAEIgJAEIgKAEQg5AUg3ADQgXASgXARQg9A8hIAqQg7AhhBAWIgcAJQhZAZhWABQhDAEhBgMIgKAFQgUAKgUAIQgvAVgxAMIgIACIgjALQg9AThBAGQg6AFg6gFQgdgDgcgGIgdgGQgogLgngPIgKgEQgggKgegOQgxgXgsgcIgGgFQgvgJgsgSIgPAJIgDABQgOAHgPAGIgfALQgxAPg8ACIgJABQghABgigGIgDAAQhGgDhJgfIgVgKQgWgJgVgKIgJgFIgMgGIgPgHQgfgGgegJIgjAPQgoAQgqALIgaAFQhIAYhIAGQgxADgwgEQhOgFhLgaIg1gTIglgRIgEgDIgYAGIgEABIgIABIgOAEQhHAQhKAAIgTAAIgcAAIgZgCQhQgHhKgcIgCAAIgcAGIgNADQgzAMg1ACQgrALgsAEIgKAAIggAQIgJAEIgeASQhDAlhIAUIgbAJQgkAMgkAIIgNACQiHAaiHgcQg7gMg3gWQgfgNgegPQg1gbgugjQgWgQgUgRIgBgBIgGgDQg6AIhDgJIgIgCIgGgCIgCgBQg1gFgzgRIgagIIgGgBQgagGgYgJIgIgDQgvAbg0ASQgkAMgkAIQg4Adg+AOQgrALgtAEIgNABIgJAIIgDACIgCABQgSAPgTAMIgJAGQgoAbgpASIgUAJQgcAMgdAJQgaAIgZAFQgmAKgnADQgYACgYgBIgVALIgFADQg6AohCAYIgLAFIgqARQgkANglAJIgJACQg+AMg8gCQgfABgfgCIgBAAIgbgEQgQgBgPgDIgMgBIgOgDIgDABIAAAAQgmArgwAjIgGADIgDADQhDA4hOAdQgmAOgoAHQgaAEgZACQgfANggAIIgUAEQgcAIgdADIgIAAIgHAGIgDADQgPAQgRAOQgaAYgdAVQgaAUgcAQQgQALgRAJIgEACQgUAOgWAMIgPAHQhBAihIATIgJACQgmANgnAJIgFABQgoAJgoAGIgGABIgnAKIgUAEIgjAJQhOAUhQAAIgigBg");
	this.shape_4.setTransform(569.1,608.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(152,111,66,0.8)").s().p("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AfAMAeQAKAaAEAZIAFAJQArBRgPBJIgBALIAPASQAXAgAKAmQAIAbABAZIABAFQAJAtgCAsIALAgIADACIAJAFQAQAIANAKQAPAMALAOQAHAIAFAIQAXAkADAgQABAMgBAKIACADQASAHARALQALAIAKAJQANANALAPIALAJQATAQARAUQAZAdASAhQAMAWAHAXIAGAMIAFAKIAFAIIAEAIQALARAHARIADAMQAGANACAMIACAAQAJAAAKABIAEABQAWADATALQAJAEAIAGQAeAWAOAfQAMAbABAZQAKAOAIAOQAMAUAKAWIAHAGQAQAPAMAUIAHAKQAQAdAIAfQAGAZgDAaQgBARgDAQIgCAIQAdARAZAbIARATIAJAKIAGAHIALARQAlAsASA3IAIAGIAFAEIADADIAMAPQASAXAIAXQAMAZACAYIAAADIAKACQAoAJAkAUIAMAGIAYAOIAIAFQBXA5AmBcIAKAbIAAAAQAMAYAIAZIAIAXQAHATAGAUIABADQAXAoAAAlIAYATQARANAOAPIARASIAPAUIAPAQIABACQAuAqAdA6IAIAPQAXAyAKA0QAHARAEARIABAFIAYAPIAYAQQAqAdAhAlQAPARANARQAVASATAWQApAJAmAYIAYARQAQANANAOQAgAhARApQATAuAEArQAbAXAZAeIAMAQQAjAuASA1IANAaQAKAKAJANIAMAOIAFAHQAVAfANAhIAGATQBFAzAjBTIAKAWQAHAVAFAWQAHAdABAdQAIAgABAhQACAjgFAhIABABQAGAYABAaIADACQAaAXAOAmQAFANAFAPQAEANACAOIABAQQADAxgSAwQgKAcgRAWQACAQgCAPIgDAfQADAdgDAdQgCAggIAfQgEAUgHATQgeBag/A9IAAAAQALAMAGAUIADALQAIAsgZAvIgHALIAEAGIADAFQAFAfAAAfIgbBJQAcAZALApIAGAYQAFAogJAkIABABQAXAgAKAsIADATQAEAfgDAeQAngFAeAUIAIAGIAEAUQAGAqgHAoQgJAzgWAxIgBACIANAHQAYAMAOAPQAdAfAXAoIABADQAFAOADAOQANA3gCA4IAAAKIgBAUIAPAcQAHAOANAQQAQAGARAJQAeAPATAXQAKALAJAOIAIAMQAMAZAJAcIADABIADACQADgPAGgLQAMgDARAJQAcARALA1QACAKAAALQAMgVAWAGQAcAGAIAwIABACQADAUgEAWIABgDQANhNAtgUQAbgMATAHQALAVAHAaIADAPQAQgJAXADIADABIADABQAHAEAGAFQAeAVANAwIAAgBQAIgCAJAAQASAAAOAMQAJgRAMgJQAFgFAIgDIACAAQAVgIAQAGQALAIAIARIABADQADALAAALIAFADQAHgZALgRIACgFQAHgHAJgBQAPgDAKAJQAJANAIAQIADAGIAIASQAUAzgEA5QgCAZgGAaQgTBUhAA9IgCABIgMAKQg2AvhEALIgMADQgSAEgRABQgcAigkAbQg5ArhDAPQgpAKgtgCQglgBgjgJIgbgIQgugGgqgUQghAXgkAOQhCAchLAAIgNAAQgRAAgQgCQg9gDg2gVQg8AMhBgEIgCAAQhVgHhKgkQg5gcgzguIgRgQQgyACg1gMIgHgCQg5gOgygeQgOADgPAAIgGAAQgUAJgUAHIgGABIgaAHIgJACQhbAUhRgkIgRAPIgTAPIgXASIgeASIgHAEIgBABQhtBSiHAGIgNABIgFABQgQAHgQAEIgNAEIgKADIgMADQg+ARg7gFQgYAUgZARQhCA+hOApQhAAghHATIgeAHQhhAVhbgHQhHgDhFgVIgLAFQgUALgVAJQgyAXg0ANIgJACIgkANQhAAWhFAGQg+AGg9gHQgfgEgdgGIgfgIQgqgMgogTIgLgEQgigMgggQQgzgagtggIgGgGQgygIgvgTIgOAPIgDACQgNALgOAKQgOALgRAJQgxAchAAOIgKACQgjAHglgBIgDAAQhMALhTgYIgXgIQgYgIgXgKIgKgEIgNgFIgQgHQgigCgigGIgmAOQgsAOguAIIgcAEQhNAUhNABQg1AAg0gJQhRgNhOgkQgbgNgbgOIglgWIgEgDIgaAHIgEABIgIACIgOAEQhLAWhPABIgUACIgeAAIgagCQhWgFhOgcIgCAAIgdAKIgOAFQg2AWg4AKQgrAWgtANIgKADIghATIgIAFIggAUQhGAqhKAYIgdALQgmAPgmAKIgNADQiNAhiSgXQg/gKg8gVQgigMgggPQg4gbgzgjQgYgQgWgRIgBgCIgGgDIAAAAQhBgFhFgWIgIgEIgHgDIgCgBQg4gRgzgeIgbgMIgGgDQgagKgZgNIgIgFQgxAgg0AXQglAQgmALQg8AfhBAQQgtAMgwAFIgOABIgLAHIgDACIgCABQgWANgWAKIgKAFQgwAVgvANIgXAFQggAIggAEQgdADgdABQgrACgqgGQgbgDgagHIgXAJIgFADQhAAnhIAWIgMAEIgtAOQgoAKgoAFIgKACQhDAGhAgLQgigEgggJIgBAAIgdgJIghgLIgNgFIgOgGIgEAAIAAABQgmAvg0AkIgFAEIgEAEQhGA9hUAdQgoAOgsAFQgbAEgbABQggAOgiAIIgVAFQgeAIgfACIgJABIgGAHIgDAEIgdAkQgZAdgbAbQgZAZgbAWIghAZIgEACQgUASgWAQIgOALQhBAshKAdIgJAFQgmASgpAPIgFADQgqAPgqALIgGACIgoARIgWAGIgjAPQhiAohoAIQgjAEgjAAQgXAAgYgCg");
	this.shape_5.setTransform(578.8,548.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(152,111,66,0.8)").s().p("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AFAVAEACQBmBWAqB3QALAbAGAcIADAMQAMAnAGAlQAFAggBAeIAEALQAhBigiBQIgEAMIAPAUQAWAkAIApQAGAegCAbIABAFQAHAxgEAuQADAUABATIADADIAKAGQAQAJANAMQAPAOALAQQAGAJAFAKQAUArgDAkQgCAOgEALIACAEQAUAGARAMQALAJAKALQAOAOAKARIAMAKQATARASAWQAaAgAQAkQALAZAHAZIAEAOIAEALIADAMIADANQAIAYACAXIABAPQACARgCAQIADAAQAKgBAJACIAFAAQAXAFAUANIARALQAeAaAMAjQAKAfgDAbQAKAPAIAQQAMAVAJAYIAHAJQAOAWAKAbIAFANQALAnAAAmQAAAfgKAeQgGATgIASIgFAJQAfATAaAdIAQAUIAKALIAGAJIAMARQAnAwASA6IAIAKIAEAGIADAFIALAWQAOAjADAhQAGAigGAgIgBAEIAKADQAqAMAlAaIANAHIAYASIAIAGQBXBFAeBqIAIAeQAKAbAGAcIAGAaQAGAUAEAWIABAEQAQA3gNAuQANAMALAMQAQARAOASIAPAWQAIAMAGAMIANAVIABABQAtAzAYBCIAIASQATA4AEA5QADAWAAAWIABAGQAMAIAMAKIAYAUQAqAjAgArQAPATAMAVQAUAZAQAcQArAOAnAeIAXAVQAQAQAMARQAeAnANAwQAOA1gEAwQAdAYAaAhIANARQAjAyASA5IAMAdQAIAPAHASIAKAUIAEALQARAoAGApQABALAAAMQBFA+AgBYIAIAbQAGAXAEAYQAFAgAAAeQAHAiAAAkQABAlgGAjIAAABQAIAZADAbIADACQAiAVAUAnQAJANAHAPQAGAPAFAPIAEARQALA0gMA4QgIAfgOAbQAGATADASQAEATABATQAGAfAAAgQAAAigFAjQgDAWgFAVQgYBjg9BHIAAAAQAWAOAQAZIAHANQAbA3gQBCIgFAQIAJAKIAGAJQAMAhAEAiIgTBTQAwAZAfAyQAIAOAHAQQAXAyABA0IACABQArAiAdA3IALAXQARAnAHAnQBFABA1AqIAOALIAKAXQAUAwAEAxQAFBAgNBBIgBACIAWAFQAoAJAeARQA7AiAwBAIAEAFIAMAeQAXA6AHA+IAAALIACAUIAZAcQALAPAUAQQAbACAcAGQAyAMAmAZQAUAMASAQIAQAQQAbAeAYAmIAFACIAFACQAIgQALgNQAVgIAcAHQAuANAZA8QAFALADAMQAbgeAnAEQAyAFAaA7IABACQAMAbABAfIAEgIQAohcBOgQQAsgJAjAQQATAWAPAdIAJARQAegRAmACIAIAAIAEABQAMADAMAFQA0AUAiA5IABgBQAOgEAQAAQAiABAbAQQASgTAWgJQALgFAMgDIADAAQAlgGAdANQAXANASAbIADAFQAJAPAFASIAJAGQANgbATgRIAEgFQAOgHAQgCQAZgCAUANQAMAOALAQIAFAGIAKATQAcA0ABA9QAAAbgFAdQgOBbhDBDIgCABIgMALQg4AzhJAKIgNACQgUADgSAAQgbAmglAgQg7AxhGASQgrALgvgBQgpgBgkgKIgcgIQgxgKgrgaQgiAbglARQhFAghPACIgPAAIgjgCQhBgEg4gaQg/AQhFgDIgDAAQhagFhOgnQg8geg1gzIgSgRQg1AHg6gJIgIgBQg+gMg3gdQgPAGgQADIgHABQgUAKgWAHIgGABIgdAHIgJACQhiAShTguIgSASIgSARIgYAVIgeAWIgHAFIgCABQhtBjiPAOIgPABIgFACQgRAGgSAEIgOADIgLACIgNADQhEAMg/gNQgZAVgaATQhJBAhUAnQhFAghNAPIghAGQhoAQhggPQhNgLhHgeIgMAGQgWALgWAKQg0AZg3APIgKACIgmAPQhDAYhJAHQhCAGhAgIQghgFgfgHIgggJQgsgPgrgWIgLgEQgjgOgigSQg1gdguglIgHgGQg1gIgygTIgOAUIgCADQgMAQgOAPQgNAPgRAOQgxAphEAaIgLAEQgmANgnAFIgEAAQhSAYhcgRIgagGQgagFgagJIgKgEIgPgFIgSgHQglADglgDIgpAMQgwANgyAFIgeACQhUARhSgFQg4gEg3gOQhWgVhQguQgcgQgbgSQgTgOgSgOIgFgEIgbAJIgEABIgIACIgQAFQhNAbhUAEIgWACIgfABIgcgBQhbgDhUgeIgCAAIgdAPIgOAHQg4Agg7ATQgsAggxAZIgLAEQgOAMgRALIgJAGIghAXQhJAvhOAcIgdANQgoARgoANIgOAEQiUApidgSQhEgJhAgUQgkgLgjgPQg8gag4gjQgZgRgYgSIgCgBIgGgDIgBgBQhGgRhIglIgIgFIgIgEIgDgDQg5geg0gpIgbgSIgHgEQgbgOgZgSIgIgGQgyAmg2AbQgnAUgnAOQg/AihFARQgwAOgzAGIgOABIgNAGIgEABIgCABQgZALgaAIIgMADQg3ARg2AGIgaACQgkAEgkgCQgggBgfgFQgwgGgvgPQgdgJgcgNIgZAIIgGADQhGAmhPATIgMAEIgxAKQgsAIgrABIgLAAQhJAAhEgVQgjgJgjgOIgBgBIgfgPIgjgTIgNgHIgPgKIgEAAIAAAAQgnAzg3AnIgGAEIgEAEQhJBDhaAdQgrAOguAEQgdADgdAAQghAQglAIIgWAFQggAIghACIgJAAIgGAKIgCAEQgNAWgPAUQgWAkgaAgQgXAegbAbIghAgIgDADQgUAWgVAUIgPAOQhAA4hMAoIgKAFQgnAagqAVIgFADQgsAWgsARIgGADIgqAXIgWAKQgSALgSAJQhmA5huAVQg+AOhAACIghABIgkAAg");
	this.shape_6.setTransform(605.6,485.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(152,111,66,0.8)").s().p("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JgVA6IAEADQAOALAJANQALASAEAVQACALABALIACAEQADAZADADQBmBkAjCHQAIAeAEAgIACAMQAIAwAAAtQAAAlgHAkIADANQAWByg1BZIgIANQAIALAHALQAVAnAGAuQAEAggFAdIABAGQAFA0gHAyQABAXgDAWIAEADIAKAHQAQALANAOQAPAQAKASQAHALAEALQARAxgKApQgFARgHAMIACAEQAVAGASAOQAMAKAKAMQAOAPAJATQAHAFAGAGQAUASASAYQAaAjAQAoQAKAbAFAcIADAPIADANIACAQIAAARQAGAggDAdIgDATQAAAVgGATIADAAQAKAAALABIAEABQAZAFAUAPQAJAGAIAIQAeAdAKAoQAIAjgHAdIATAhQALAYAJAZIAGAMQANAeAGAiIADARQAGAxgHAsQgHAlgSAjQgLAWgOATIgHALQAgAUAbAgIARAVIAKAMIAHAJIAMATQApAzATA+IAHAOIADAJIADAGIAJAfQALAugDAqQABAtgPApIgBAEIAKAEQAsAQAlAfIANAJIAaAWIAIAHQBXBTAVB3IAFAiQAJAeAEAfIADAcQAFAWADAYIAAAEQAKBHgbA5QANAOAKAPQAQAVANAVIANAaIANAdIAMAYIABABQArA8AVBKIAGAUQAPBBgCA+QgBAbgEAaIAAAIIAZAVQAMALAMAMQAqAqAfAyQAOAVALAYQATAgAOAkQAsASAnAlQANAMALANQAPASAMAUQAbAuAJA4QAJA8gLA1QAeAaAaAjIAOATQAkA1ARA+QAGAQAFAQQAHAVAEAXQAFANADANIAEANQAMAzgBAxIgDAcQBFBGAbBkIAGAcQAFAZADAaQADAjgCAgQAGAkAAAmQAAAogHAkIAAABQAKAbADAcIAFADQApARAbApQAMANAKAQQAJAQAIAQIAHASQATA4gHA/QgEAkgNAfQALAVAIAWQAIAXAGAYQAJAhADAiQADAlgCAmQgCAXgDAYQgSBtg8BSIABAAQAhAPAZAeIANAPQAvBDgHBWQgBALgCAKIAOAOIAJANQATAjAKAmQgHAvgFAuQBFAYAzA8QAOARANATQAoA9AMBEIACABQBBAlAxBBIATAcQAeAvASAyQBjAHBPBAIATARIARAaQAhA3AQA6QAUBMgDBSIgBACIAfADQA4AGAuATQBdAnBJBYIAGAHIARAgQAhA9APBDIADAMIAEAWQAQAOASAOQARAOAbAQQAmgCAoAFQBGAIA6AbQAeAOAbASIAZASQAsAkAmAwIAIAEIAHADQANgTAQgNQAfgPAmAFQBBAJApBDQAIANAGAOQAqgpA5ADQBIADAtBGIACADQAVAhAHAlIAGgKQBFhsBvgLQA/gFAzAZQAcAXAYAgIANATQAugYA3AAIAKgBIAGABQASACARAEQBNATA2BDIACgBQAVgFAYAAQAxABApAUQAcgVAhgKQARgFARgBIAEgBQA1gEArAVQAiATAdAkIAEAGQAQAVAKAYIANAJQAVgcAZgRIAHgEQAVgJAXgBQAlgCAeASQAPANAPARIAFAGIAOATQAjA2AGBCQADAdgEAfQgJBkhGBIIgBABIgMALQg8A4hOAJIgOABQgVACgTgBQgaArgnAkQg8A3hJAVQguAOgygBQgrgBgngKIgdgKQgzgNgtghQgjAfgmAUQhHAmhUACIgQAAQgTAAgSgCQhFgFg7geQhCAUhKgCIgCAAQhhgEhSgpQg/ghg3g4IgTgSQg5AMg/gFIgIgBQhEgIg7gcQgRAIgSAGIgHACQgVALgXAHIgHACIgeAHIgLABQhpAQhWg5IgRAVIgSAVIgYAXIgfAaIgIAGIgBABQhuB2iYAWIgPACIgGABQgTAGgTADIgPACIgMACIgOACQhKAHhDgVQgbAXgbAUQhPBChbAmQhLAfhSALQgSADgSACQhwALhmgYQhSgThLgoIgMAHQgXAMgXALQg4Acg6APIgKACIgnARQhHAbhOAHQhGAHhDgKQgigFghgJQgSgEgQgGQgvgQgsgZIgMgFQglgQgjgVQg4gggwgqIgHgHQg5gGg1gUIgMAaIgCAEQgKAVgOATQgNAUgQATQgxA3hJAnIgMAFQgpAUgqAKIgEABQhYAmhmgJIgdgEQgdgEgcgIIgLgDIgPgFIgUgGQgoAHgpABIgtAKQg0AKg2ADIgggBQhbAOhYgKQg8gIg5gTQhbgdhSg6QgdgUgbgWQgUgQgSgSIgFgEIgcAKIgEABIgJADIgQAGQhRAghaAGIgWADIgiACIgdAAQhhgChZgfIgCABIgeATIgOALQg6Aqg+AcQgsArg0AjIgLAHIghAbIgJAHIgiAZQhLA1hSAgIgfAPQgpAUgrAPIgOAFQicAyiogOQhIgHhFgSQgmgLgmgOQhBgZg8gkQgcgRgagTIgCgBIgGgEIgBAAQhNgfhKgzIgJgHIgIgGIgDgDQg9grg0g3IgcgXIgHgGQgcgSgZgWIgIgIQgzArg4AhQgoAXgqASQhCAkhIAUQgzAOg2AHIgPACIgOAFIgFABIgDAAQgdAJgdAFIgNADQg/ALg9gBIgdgBQgpgBgngHQgkgGgigKQg1gPgzgYQgggQgegTIgcAHIgGACQhMAnhWAPIgMADIg2AHQgwAFgugDIgMgBQhOgHhJgeQgmgPglgVIgBgBQgRgKgPgLQgUgNgRgOIgPgKIgPgOIgEgBIAAABQgoA3g6AqIgHAEIgEAEQhNBJhfAdQguAOgyADQgfACgegCQgjASgmAIIgYAFQgiAJgjACIgKAAIgFALIgCAFQgMAZgNAYQgUAqgZAmQgWAkgaAgIghAmIgDAEQgTAagVAZIgPAQQg/BFhOAzIgLAHQgnAggsAcIgFAEQguAdguAXIgGAFIgsAcIgWANQgTAOgTANQhpBKh0AjQhDAWhGAJIgjAEIgnADIgYAAQgqAAgqgDg");
	this.shape_7.setTransform(633.5,421.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(152,111,66,0.8)").s().p("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AtA/AHBSQAHBXgjBEIAFAEQANANAJAPQAKAVACAYQACAOgBAMIACAFQABAdACADQBmBzAaCYQAHAhACAjIABAOQADA4gGA1QgGAsgMApIABAPQALCEhKBhIgKAOQAIAMAGANQAUAqADAyQACAjgHAfIABAHQACA4gJA0QgCAbgGAaIADADIALAIQARANANAQQAOASAKAVQAGAMADANQAPA4gRAuQgIASgKANIACAFQAWAHATAOQAMALAKANQAOASAJAUIAOAMQAUAUATAaQAaAmAOArQAKAeAEAfIACARIABAOIAAAVIgBAVQACAngHAkIgGAWQgDAbgKAWIACAAQALgBALACIAFABQAaAGAVASQAJAGAIAJQAfAhAHAtQAGAngMAgIATAjQAMAZAIAcIAFAPQALAlADAqIABAUQABA8gQA0QgNArgaAnQgRAagTAVIgJALQAhAWAcAiQAJALAIAMIALANIAHAKIANAUQAqA2AUBDIAGASIAEAMIACAHIAHAnQAHA6gJA1QgFA3gYAxIgBAGIAKAFQAuAUAmAlIANAKIAbAZIAIAJQBXBgANCGIACAlIAAABQAHAhABAjQACAPAAAPQAEAYABAaIAAAFQACBXgpBEQANAQAJASQAQAZALAZIANAeQAGARAEAQIAMAcIABACQApBEAQBUQADALACALQALBIgIBDQgFAhgJAfIgBAJIAaAZIAYAbQArAxAdA4QANAZALAaQASAoAKArQAvAWAnAsQANAOALAQQAPAVALAXQAZA2AEA+QAEBEgTA6QAfAcAcAlIAOAVQAlA6ARBCQAFARADATQAGAaACAdQAEAPACARIACAQQAIA+gJA5QgCAOgFAQQBFBUAWBsIAFAgQAEAbABAcQACAlgEAjQAFAmgBAoQgBAqgIAnIAAABQALAcAFAeIAGABQAwAPAkArQAOANANARQAMAQALARIAJATQAcA9gBBGQgBApgLAjQARAZANAZQANAbAKAcQAMAjAGAmQAHAnAAApQAAAagCAZQgLB4g6BdIABAAQAsARAkAiIASATQBEBOACBrQABANgBANIASATIAOAQQAZAmAQAqQgEAzgBA0QBcAYBIBGQATATATAXQA5BJAZBVIACABQBXAnBGBMIAcAhQArA4AdA9QCEAMBoBYIAaAXQAMAOAMAPQAvA+AcBEQAkBYAGBlIAAACIAoAAQBJADA/AWQB/AqBjByIAIAKQAMAQALAQQArBCAZBIIAEANIAHAXIAsAdQAWANAjARQAxgHA0ADQBbAEBQAdQAoAPAlAVQARAKARAMQA9ApA2A7IAKAEIAJAEQATgUAVgPQApgVAxADQBVAEA5BLQALAOAJAQQA5gzBNACQBfABBBBSIACAEQAdAlAOAtIAJgMQBih8CSgGQBSgDBEAjQAmAYAhAkQAKAKAIALQA+gfBIgDIAOgBIAIABQAYAAAXAEQBkASBNBNIACgBQAdgGAgAAQBBAAA3AaQAngZAtgJQAVgFAYgBIAFgBQBFgCA5AdQAvAZAnAtIAHAJQAWAbAPAeIASAMQAcgeAhgQIAJgFQAcgKAgAAQAxgBAoAWQASANASARIAGAGIARAUQAsA4ALBGQAFAfgCAiQgFBthHBNIgCACIgNALQg+A9hTAHIgPABQgWABgVgCQgaAvgnApQg+A+hMAYQgwAPg2AAQgtAAgpgLQgQgFgPgGQg1gSgvgmQgjAigoAXQhKAshZADIgSABIgmgCQhKgHg9gjQhFAYhPgBIgDAAQhmgBhWgtQhEgjg5g9IgTgUQg9AShEgCIgIAAQhKgEhBgcQgRAMgUAIIgHADQgXAMgZAHIgHACQgQAEgQADIgMACQhwAOhZhFIgRAXIgSAZIgYAbQgPAPgQAOIgJAIIgBAAQhuCJiiAfIgQADIgHABQgUAFgUACIgRACIgNABIgPAAQhQADhIgeQgbAZgdAWQhWBEhiAkQhQAehZAIQgTACgTABQh5AFhsggQhXgbhOgzIgNAIQgZANgYAMQg7Aeg8AQIgLADIgqATQhKAehSAIQhLAHhGgLQgkgGgjgKQgTgFgRgHQgxgTgugcIgNgGQgngRgkgXQg7glgxgtIgHgJQg9gFg4gUIgLAfIgCAFQgJAagNAZQgNAZgQAXQgxBHhOAzIgMAHQgrAbgvAPIgEACQheA1hxgCQgQAAgPgBQgggDgegGIgMgDIgRgEIgVgHQgsAMgtAFQgYAFgYAEQg4AIg6gBIgjgCQhhAKhegRQhAgMg9gYQhfgmhVhFQgegYgbgZIgmgpIgFgFIgeAMIgFABIgJAEIgQAHQhVAkhfAJIgYAEIgkADIgfABQhmAAheghIgCABIggAZIgOANQg8A1hBAmQgtA3g2AtIgMAKIgjAeIgKAIIghAcQhPA7hUAkIghASQgrAXgtARIgPAGQijA8i0gKQhNgFhKgRQgpgKgogOQhGgYhBglQgegRgcgTIgCgBIgHgEIgBgBQhUgthNhCIgJgJIgJgIIgDgDQhAg6g0hDIgcgeIgIgGQgdgXgZgbIgIgJQg1Axg6AlQgpAcgrAVQhGAnhMAWQg2AQg5AIIgQABIgQAEIgGABIgCAAQghAHghACIgPACQhIAFhDgHIghgFQgtgGgrgMQgngLgmgQQg6gYg4giQgigWgggaIgfAFIgHADQhSAlhdANIgNABQgeADgdABQgzACgygHIgMgCQhVgOhNgoQgpgVgngcIgBgBIgigbQgVgRgSgTIgPgOIgQgRIgFgBIAAAAQgoA7g+AuIgHAEIgEAEQhRBPhlAdQgxAOg2ACQghACgggEQgkATgpAJIgZAFQgjAJgmACIgLAAIgEAMIgCAGIgWA5QgTAwgXAsQgUAqgaAmQgPAWgRAWIgDAEQgSAfgVAeIgPATQg/BShQA+IgLAIQgoAogtAiIgGAGQgvAkgxAeIgGAFIgtAkIgYAQQgTARgTAQQhuBch7AyQhHAehLAQIgmAHQgVAEgVADQgyAFg0AAIgPAAg");
	this.shape_8.setTransform(662.6,353.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(152,111,66,0.8)").s().p("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");
	this.shape_9.setTransform(693,284.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},47).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[]},1).wait(131));

	// launch pad top d2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#204C59").s().p("EhIoAEeQ+Gh2ABioQgBimeGh3UAeGgB3AqiAAAUAqjAAAAeGAB3QeFB3ABCmQgBCo+FB2UgeGAB3gqjgABUgqiAABgeGgB3g");
	this.shape_10.setTransform(690.5,774.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(56).to({_off:true},1).wait(131));

	// mountains 
	this.instance_4 = new lib.mountains("synched",0);
	this.instance_4.setTransform(643.9,676.4,1.009,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},57).wait(131));

	// planets far away 
	this.instance_5 = new lib.planetsfaraway();
	this.instance_5.setTransform(883.6,204.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(57).to({_off:false},0).wait(115).to({alpha:0},6).wait(10));

	// planets
	this.instance_6 = new lib.planetyellowd2();
	this.instance_6.setTransform(1222.5,84.3,0.101,0.101,0,0,0,7.9,-21.8);

	this.instance_7 = new lib.uxplanet("synched",0);
	this.instance_7.setTransform(959.7,180.5,0.055,0.055);

	this.instance_8 = new lib.authenticityplanet("synched",0);
	this.instance_8.setTransform(485.4,40.6,0.05,0.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#67AE89").s().p("AidDlQhPi0hlicIhbiBQECA7DnCFIAEACQAYAOAiAVIB/BVIAGAFQBbBFBSBQQiEAFiAAAQioAAiegIg");
	this.shape_11.setTransform(192.3,122.5,0.082,0.082);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4D9F76").s().p("AjNExQhWkUiTj3QgvhOgwhEQgaglgQgUQEpBEEDCjQD9CgC+DpIAxBAQApA3AnA+IAXAmQmWgwl3hFg");
	this.shape_12.setTransform(193.5,124,0.082,0.082);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4D9F76").s().p("AFYIVQj5g3k0gXQg7mRjGl1Qg+h3hGhnIg+hVQEqBEEECkQD9ChC+DpIABABIArA5IAIAKIAjAwIBMB8IBiDFIAzCKIALAmIAFAOQiZg4iogmg");
	this.shape_13.setTransform(194.2,125.7,0.082,0.082);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#67AE89").s().p("AmJmEQhUjTh1i8IhqiZQEEA7DoCGIADABQAiAUAdASIABABQCXBgCEB/IALAKIAqArIBDBJQARAUATAYIANAQQA8BMAuBHIAnBBIBsDWIAeBNIAZBMIAXBRIAIAfIAMAzIAGAhQAGAaADAaIAQB3QADAdABAdIACAcQACAnAAAwIAAAIQnuBYnrAYQCcqXkJqag");
	this.shape_14.setTransform(194.5,128.3,0.082,0.082);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4D9F76").s().p("ApgUcQE1njA7oFQAumdh0mjQhTktiekSQgzhXg0hKQgbgngTgYQEEA8DoCFIADACQAiATAdASIABABQCXBgCEB/IALALIAqAqIBDBKQARATATAYIANAQQA8BMAuBIIAnBAIBsDZIAeBMIAZBNIAXBQIAIAdIAMA0IAGAhQAGAZADAaIAQB3QADAdABAdIACAcQACAnAAAxQAAA0gDAzIgCAhQgDAmgEAfIgEAlIgKBAIgHAlIgOBCIgHAgQgJAlgPAwIgDAKQgJAggWA+Ig0B6IgcA6IgIASQiJAXikgIQhGgDhgALIixAVQhzANhvAAQh7AAh0gQg");
	this.shape_15.setTransform(194.5,131.4,0.082,0.082);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#67AE89").s().p("AuFYRQJDo0DFp0QCcn3hcoKQhDl4i7leQg8hvhChfQgigygYgdQEEA7DoCGIAEABQAfAUAdASIACABQCZBgCDB/IAMAKIApArIBEBJQAQAUAUAYIAMAQQA8BMAuBHIAnBBIBsDYIAeBNIAZBMIAYBRIAHAfIAMAzIAHAhQAFAaAEAaIAPB3QADAdABAdIACAbQACAmABAwIgDBUIgGBdIgdDAIgXBgIgRA+IgGASQgIAcgRAtIgGARIgXA6IgIATQgOAigRAkIgvBaIglBBIgGAIIgkA6Ig7BSQgaAkgUAWIhCBOQgPASgkAjIgPAQIgrAoIgPAPIg4AvIhQA/Ig9AsIgOAJIgzAhIgUAMQgWANgoAYQnCgkmchXg");
	this.shape_16.setTransform(192.9,134.3,0.082,0.082);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4D9F76").s().p("Aw2bZQL1pZElqtQDookhIpDQg1mfjJmGQhAh8hIhsQglg2gcgiQErBEECCkQD/CiC+DqQC/DuBnEdQBqEoAAE8QAAFviOFQQiKFEj6D7Qj7D7lDCJQlQCOlwAAQixAAisghg");
	this.shape_17.setTransform(191.4,135.2,0.082,0.082);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#76BE9A").s().p("AjwCpQmohVljiqQFviuGYAAQFpAAFNCLQFBCED6D0QiHAGiBAAQojAAnChcg");
	this.shape_18.setTransform(187.5,122.3,0.082,0.082);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#5CAD86").s().p("AqLA1Qj+hQjEhWIiShGQDRh/DqhCQDxhED9AAQHoAAGlD1QGYDtDxGXQxAiAsrkIg");
	this.shape_19.setTransform(188,123.9,0.082,0.082);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5CAD86").s().p("AR3IOQmOhEoWACQo/ABqrigQjWgxjHg8IicgyQD5lsGEjTQGRjZHLAAQEuAAEcBiQETBfDpCwQDlCvCkDrQCnDxBSEZQjWhQkEgtg");
	this.shape_20.setTransform(186.4,125.5,0.082,0.082);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#76BE9A").s().p("Aq/NgQmLhJlYh2QjQhHiRhHQA2k8ChkUQCckQDwjMQDxjOEohvQExhyFKAAQFvAAFPCOQFFCJD7D7QD6D6CKFDQCOFRAAFwIAAAHQqsB6qHAAQpXAAo5hpg");
	this.shape_21.setTransform(185.6,128.1,0.082,0.082);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#5CAD86").s().p("AB6TfQmGh3kOg7Qkmg8jkg1QoBh4jmjxQgFg/AAhGQAAlwCOlPQCJlED7j7QD6j7FFiJQFQiOFvAAQFwAAFQCOQFFCJD6D7QD7D6CJFFQCOFPAAFwQAADcg0DUQgyDPhiC8QiGAYingIQhRgDiGAQQi1AWg/AEQgzADg0AAQkkAAlMhkg");
	this.shape_22.setTransform(185.5,131.2,0.082,0.082);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#76BE9A").s().p("Av1TsQj/hujGh8Qg/gmgxgkIglgbQhei7gxjLQgyjQAAjZQAAluCOlRQCJlED7j7QD6j7FFiJQFQiOFvAAQFwAAFQCOQFFCJD6D7QD7D6CJFFQCOFRAAFuQAAH6kFGuQj+GjmtDqQwnhWsvlhg");
	this.shape_23.setTransform(185.5,134.1,0.082,0.082);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#5CAD86").s().p("Aq/aDQlFiJj6j7Qj7j6iJlFQiOlQAAlwQAAluCOlRQCJlED7j7QD6j7FFiJQFQiOFvAAQFwAAFQCOQFFCJD6D7QD7D6CJFFQCOFRAAFuQAAFwiOFQQiJFFj7D6Qj6D7lFCJQlQCOlwAAQlvAAlQiOg");
	this.shape_24.setTransform(185.5,135,0.082,0.082);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_8},{t:this.instance_7}]},56).to({state:[]},1).wait(131));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(730.6,531.1,1317.4,985.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(710.7,531.1,1364.7,985.5), new cjs.Rectangle(702.8,531.1,1345.2,985.5), new cjs.Rectangle(694.5,531.1,1353.5,985.5), new cjs.Rectangle(685.8,531.1,1362.2,985.5), new cjs.Rectangle(676.7,531.1,1371.4,985.5), new cjs.Rectangle(667.1,446.9,1380.9,1069.8), new cjs.Rectangle(657.1,269.6,1390.9,1247), new cjs.Rectangle(646.7,119.5,1401.3,1397.2), new cjs.Rectangle(635.9,-7.1,1453.6,1523.7), new cjs.Rectangle(624.6,-112.9,1536.8,1629.5), new cjs.Rectangle(753.6,564.3,1105.2,747.9), new cjs.Rectangle(792,564.3,1066.8,695.3), new cjs.Rectangle(815.7,564.3,1043.1,657), new cjs.Rectangle(839.5,564.3,1019.3,617.5), new cjs.Rectangle(863.6,564.3,995.2,577.9), new cjs.Rectangle(887.6,564.3,971.2,539.3), new cjs.Rectangle(911.6,564.3,947.2,499.9), new cjs.Rectangle(936,564.3,922.8,460.7), new cjs.Rectangle(960.3,564.3,898.5,422.6), new cjs.Rectangle(985,564.3,873.8,388.1), new cjs.Rectangle(1009.7,564.3,849.1,388.1), new cjs.Rectangle(1034.7,564.3,824.1,388.1), new cjs.Rectangle(1059.8,564.3,799,388.1), new cjs.Rectangle(1084.9,564.3,773.9,388.1), new cjs.Rectangle(1110.1,564.3,748.7,388.1), new cjs.Rectangle(1132.4,564.3,726.4,388.1), new cjs.Rectangle(1167.5,564.3,691.3,388.1), rect=new cjs.Rectangle(1192.5,564.3,666.3,388.1), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(1192.5,564.3,666.3,408.7), new cjs.Rectangle(1192.5,564.3,666.3,463.4), new cjs.Rectangle(1192.5,564.3,666.3,518.5), new cjs.Rectangle(1192.5,564.3,666.3,568.3), new cjs.Rectangle(1192.5,564.3,666.3,602.7), new cjs.Rectangle(1192.5,564.3,666.3,610.7), new cjs.Rectangle(1192.5,564.3,666.3,624.1), new cjs.Rectangle(1192.5,564.3,666.3,620.4), new cjs.Rectangle(1192.5,564.3,666.3,618.8), new cjs.Rectangle(1192.5,564.3,666.3,614.4), new cjs.Rectangle(1192.5,564.3,666.3,605.2), new cjs.Rectangle(1192.5,564.3,666.3,591.7), new cjs.Rectangle(1192.5,564.3,666.3,574.6), new cjs.Rectangle(1192.5,564.3,666.3,555), new cjs.Rectangle(1192.5,564.3,666.3,530.4), new cjs.Rectangle(1192.5,564.3,666.3,497.1), new cjs.Rectangle(1192.5,564.3,666.3,452.9), new cjs.Rectangle(1192.5,564.3,666.3,397.7), rect=new cjs.Rectangle(1192.5,564.3,666.3,388.1), rect, rect, rect, rect, rect, new cjs.Rectangle(1192.5,562.5,666.3,389.9), new cjs.Rectangle(1192.5,555.5,683.6,396.9), new cjs.Rectangle(1192.5,561.2,692.1,391.2), new cjs.Rectangle(1192.5,564.3,709.1,388.1), new cjs.Rectangle(1192.5,564.3,726.6,388.1), new cjs.Rectangle(1192.5,564.3,745.1,388.1), new cjs.Rectangle(1192.5,564.3,760.7,388.1), new cjs.Rectangle(1192.5,564.3,771.3,388.1), new cjs.Rectangle(1192.5,564.3,777.5,388.1), new cjs.Rectangle(1192.5,564.3,768.6,388.1), new cjs.Rectangle(1192.5,564.3,714,388.1), rect=new cjs.Rectangle(1192.5,564.3,666.3,388.1), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(1192.5,543,666.3,409.4), new cjs.Rectangle(1192.5,514,666.3,438.4), new cjs.Rectangle(1192.5,498.1,666.3,454.3), new cjs.Rectangle(1192.5,496.6,666.3,455.8), new cjs.Rectangle(1192.5,494.7,666.3,457.7), new cjs.Rectangle(1192.5,495.3,666.3,457.1), new cjs.Rectangle(1192.5,518.3,666.3,434.1), new cjs.Rectangle(1192.5,557.2,666.3,395.2), rect=new cjs.Rectangle(1192.5,564.3,666.3,388.1), rect, rect, rect, rect, rect, new cjs.Rectangle(1183.4,564.3,675.4,388.1), new cjs.Rectangle(1130.8,564.3,728,388.1), new cjs.Rectangle(1079.6,564.3,779.2,388.1), new cjs.Rectangle(1032.8,564.3,826,388.1), new cjs.Rectangle(996.3,564.3,862.5,388.1), new cjs.Rectangle(977.6,564.3,881.2,388.1), new cjs.Rectangle(968.5,564.3,890.3,388.1), new cjs.Rectangle(962.8,564.3,896,388.1), new cjs.Rectangle(961.5,564.3,897.3,388.1), new cjs.Rectangle(985.5,564.3,873.3,388.1), new cjs.Rectangle(1005.6,564.3,853.2,388.1), new cjs.Rectangle(1030.1,564.3,828.7,388.1), new cjs.Rectangle(1057.9,564.3,800.9,388.1), new cjs.Rectangle(1088,564.3,770.8,388.1), new cjs.Rectangle(1119.9,564.3,738.9,388.1), new cjs.Rectangle(1152.9,564.3,705.9,388.1), new cjs.Rectangle(1187.1,564.3,671.7,388.1), rect=new cjs.Rectangle(1192.5,564.3,666.3,388.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(1192.5,556,666.3,396.4), new cjs.Rectangle(1192.5,525.6,666.3,426.8), new cjs.Rectangle(1192.5,493.6,666.3,458.8), new cjs.Rectangle(1192.5,459.6,658.1,492.8), new cjs.Rectangle(1192.5,422.2,698.3,530.2), new cjs.Rectangle(1192.5,378.4,751.1,574), rect=new cjs.Rectangle(1192.5,291.9,853.3,660.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
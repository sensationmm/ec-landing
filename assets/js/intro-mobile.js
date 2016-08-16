(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 750,
	height: 1334,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/FlashAICB.png", id:"FlashAICB"}
	]
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



(lib.FlashAICB = function() {
	this.initialize(img.FlashAICB);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1629,1775);


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


(lib.Startssymbols = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FlashAICB();
	this.instance.setTransform(-814.5,-887.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-814.5,-887.5,1629,1775);
p.frameBounds = [rect];


(lib.sky2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#000000","#000000"],[0,1],-703.7,0,703.7,0).ss(1,1,1).p("Eht3hOHMDbvAAAMAAACcPMjbvAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#1381A1","#042339"],[0,1],0,500,0,-500).s().p("Eht2BOIMAAAicPMDbtAAAMAAACcPg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-704.2,-501,1408.4,1002);
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


(lib.padfront = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#092832").s().p("EhtdAR8MAAAgjXQGrAjIrAhUAl4ACOA1kAAAUA1iAAAAl4gCOQMagvIVg1MAAAAj3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-700.6,-114.8,1401.4,229.7);
p.frameBounds = [rect];


(lib.mountains = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B1832").s().p("EhtXAtFMAAAhJgIOiwpIHnWTIPGF9IMAktIKTU2IOVqzMAniAD+IXLscIWnOcIG5JZIK6xmIRPpEIIaVCIQIlxMAAAA0lg");
	this.shape.setTransform(0,0,1.023,1.023);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-715.9,-295.1,1432,590.3);
p.frameBounds = [rect];


(lib.launchpadtop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#204C59").s().p("Ehd+AFXQorghmsgjIgNgCIAAoiQGxgkIzghUAl3gCOA1lAAAUA1iAAAAl4ACOQMWAuIVA1IAAHnQoVA0sWAvUgl4ACOg1iAAAUg1lAAAgl3gCOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-701.1,-48.5,1402.3,97.2);
p.frameBounds = [rect];


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BFD340").s().p("AbIKPQp2hLpVh6QtCiqqLjuQstkonbmEIEOhHQCCBMDlBxQHLDhHwC4QYwJKVRgxIgSEUQjDgOk8glg");
	this.shape.setTransform(226.6,70.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,453.2,141.3);
p.frameBounds = [rect];


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE5847").s().p("EgXZAg/QO9prHSsEQF6p3AmrCQAdoUiloQQhtlbiDjOQFnB9EfDhQEpDqDiFdQDzF0BSGzQBPGlhSGmQhTGpjnFwQjwF8lxEMQnLFNoiBQQikAYigAAQlnAAlXh4g");
	this.shape.setTransform(149.9,223.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,299.8,446.4);
p.frameBounds = [rect];


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BFD340").s().p("AbBMmQqGiApfixQtPj3qKkyQssmBnEnMICkAeQCGBdDsCOQHYEaIADvQZjL8WKAtIggDIQjKgclDhAg");
	this.shape.setTransform(228.6,89.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,457.3,179.8);
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


(lib.blacksky = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#052B41","#000000"],[0,1],0,511.4,0,-511.3).s().p("EhteBP5MAAAifxMDa9AAAMAAACfxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-700.7,-511.3,1401.4,1022.7);
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
	mask.graphics.p("AOiY9Qo6iBpUjHQpfjKoajyQoHjqmEjwQAYkzBckPQBikgCojlQAqg5BLhfQBKhdAwg3QDbj7E1isQEuioFohMQHJhhHFBYQG2BVF5D1QF5D1D/FvQEJF8BhHGQAcCJAGBIQAFBGAFB4QAEB3gBBIQgCEjhiEnQhaEOimEFQnFgromh7g");
	mask.setTransform(262.7,176.3);

	// Layer 3
	this.instance = new lib.Path();
	this.instance.setTransform(306.3,95.9,1,1,0,0,0,228.6,89.9);
	this.instance.alpha = 0.801;

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(226.6,348.6,1,1,0,0,0,226.6,70.6);
	this.instance_1.alpha = 0.801;

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BFD340").s().p("AOiY9Qo6iBpUjHQpfjKoajyQoHjqmEjwQAYkzBckPQBikgCojlQAqg5BLhfQBKhdAwg3QDbj7E1isQEuioFohMQHJhhHFBYQG2BVF5D1QF5D1D/FvQEJF8BhHGQAcCJAGBIQAFBGAFB4QAEB3gBBIQgCEjhiEnQhaEOimEFQnFgromh7g");
	this.shape.setTransform(262.7,176.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(33.7,0,458,352.7);
p.frameBounds = [rect];


(lib.developmentplanet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_0();
	this.instance.setTransform(3443.1,-196.2,2.346,2.346,0,0,0,150,223.1);
	this.instance.alpha = 0.199;

	this.instance_1 = new lib.ClipGroup();
	this.instance_1.setTransform(3268.5,-257.9,2.346,2.346,0,0,0,267.5,209.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BFD340").s().p("AiSPuQm3hVl4j1Ql5j1j/lvQkJl5hhnJQgciFgMiPQN9G5QuFkQQjFfPJC2QjwEMk0C1Qk/C7luBNQjvAyjuAAQjZAAjXgpg");
	this.shape.setTransform(3189,81.3,2.346,2.346);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DE5847").s().p("EApyAabQppgxr9ipQsZiutFkYQtHkXrjlPQrKlEoLlJQoMlLj8kfQkFkqBFjPQBFjQGDhRQF2hPJpAxQJqAxL+CpQMYCvNFEXQNHEXLjFPQLKFEIMFJQILFLD8EfQEFEphFDQQhFDPmDBSQjoAxlFAAQjIAAjrgTgEgqrgTVQkhA9gzCaQg0CbDDDeQC7DWGHD3QGGD0IUDyQInD6JxDQQJwDQJOCCQI7B+HNAlQHMAkEXg7QEgg9A0iaQA0ibjDjeQi8jWmGj3QmHj0oUjyQonj6pyjQQpujQpQiCQo6h+nMglQiwgOiWAAQjxAAisAlg");
	this.shape_1.setTransform(3261.4,-217,2.346,2.346);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(2290.9,-749.7,1941.2,1077.4);
p.frameBounds = [rect];


(lib.planetsfaraway = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.uxplanet("synched",0);
	this.instance.setTransform(44.7,339.5,0.278,0.278);

	this.instance_1 = new lib.authenticityplanet("synched",0);
	this.instance_1.setTransform(-111.2,-128.6,0.13,0.13,0,0,0,0,-0.8);

	this.instance_2 = new lib.developmentplanet("synched",0);
	this.instance_2.setTransform(139,-60.3,0.075,0.075,0,0,0,3263.5,-213.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#67AE89").s().p("AidDlQhPi0hlicIhbiBQECA7DnCFIAEACQAYAOAiAVIB/BVIAGAFQBbBFBSBQQiEAFiAAAQioAAiegIg");
	this.shape.setTransform(-262.1,44.7,0.414,0.414);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D9F76").s().p("AjNExQhWkUiTj3QgvhOgwhEQgaglgQgUQEpBEEDCjQD9CgC+DpIAxBAQApA3AnA+IAXAmQmWgwl3hFg");
	this.shape_1.setTransform(-256,52.3,0.414,0.414);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D9F76").s().p("AFYIVQj5g3k0gXQg7mRjGl1Qg+h3hGhnIg+hVQEqBEEECkQD9ChC+DpIABABIArA5IAIAKIAjAwIBMB8IBiDFIAzCKIALAmIAFAOQiZg4iogmg");
	this.shape_2.setTransform(-252.3,60.8,0.414,0.414);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#67AE89").s().p("AmJmEQhUjTh1i8IhqiZQEEA7DoCGIADABQAiAUAdASIABABQCXBgCEB/IALAKIAqArIBDBJQARAUATAYIANAQQA8BMAuBHIAnBBIBsDWIAeBNIAZBMIAXBRIAIAfIAMAzIAGAhQAGAaADAaIAQB3QADAdABAdIACAcQACAnAAAwIAAAIQnuBYnrAYQCcqXkJqag");
	this.shape_3.setTransform(-250.8,73.8,0.414,0.414);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4D9F76").s().p("ApgUcQE1njA7oFQAumdh0mjQhTktiekSQgzhXg0hKQgbgngTgYQEEA8DoCFIADACQAiATAdASIABABQCXBgCEB/IALALIAqAqIBDBKQARATATAYIANAQQA8BMAuBIIAnBAIBsDZIAeBMIAZBNIAXBQIAIAdIAMA0IAGAhQAGAZADAaIAQB3QADAdABAdIACAcQACAnAAAxQAAA0gDAzIgCAhQgDAmgEAfIgEAlIgKBAIgHAlIgOBCIgHAgQgJAlgPAwIgDAKQgJAggWA+Ig0B6IgcA6IgIASQiJAXikgIQhGgDhgALIixAVQhzANhvAAQh7AAh0gQg");
	this.shape_4.setTransform(-250.8,89.7,0.414,0.414);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#67AE89").s().p("AuFYRQJDo0DFp0QCcn3hcoKQhDl4i7leQg8hvhChfQgigygYgdQEEA7DoCGIAEABQAfAUAdASIACABQCZBgCDB/IAMAKIApArIBEBJQAQAUAUAYIAMAQQA8BMAuBHIAnBBIBsDYIAeBNIAZBMIAYBRIAHAfIAMAzIAHAhQAFAaAEAaIAPB3QADAdABAdIACAbQACAmABAwIgDBUIgGBdIgdDAIgXBgIgRA+IgGASQgIAcgRAtIgGARIgXA6IgIATQgOAigRAkIgvBaIglBBIgGAIIgkA6Ig7BSQgaAkgUAWIhCBOQgPASgkAjIgPAQIgrAoIgPAPIg4AvIhQA/Ig9AsIgOAJIgzAhIgUAMQgWANgoAYQnCgkmchXg");
	this.shape_5.setTransform(-259.2,104.2,0.414,0.414);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4D9F76").s().p("Aw2bZQL1pZElqtQDookhIpDQg1mfjJmGQhAh8hIhsQglg2gcgiQErBEECCkQD/CiC+DqQC/DuBnEdQBqEoAAE8QAAFviOFQQiKFEj6D7Qj7D7lDCJQlQCOlwAAQixAAisghg");
	this.shape_6.setTransform(-266.5,108.8,0.414,0.414);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#76BE9A").s().p("AjwCpQmohVljiqQFviuGYAAQFpAAFNCLQFBCED6D0QiHAGiBAAQojAAnChcg");
	this.shape_7.setTransform(-286.5,43.7,0.414,0.414);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5CAD86").s().p("AqLA1Qj+hQjEhWIiShGQDRh/DqhCQDxhED9AAQHoAAGlD1QGYDtDxGXQxAiAsrkIg");
	this.shape_8.setTransform(-283.8,51.4,0.414,0.414);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5CAD86").s().p("AR3IOQmOhEoWACQo/ABqrigQjWgxjHg8IicgyQD5lsGEjTQGRjZHLAAQEuAAEcBiQETBfDpCwQDlCvCkDrQCnDxBSEZQjWhQkEgtg");
	this.shape_9.setTransform(-291.7,59.9,0.414,0.414);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#76BE9A").s().p("Aq/NgQmLhJlYh2QjQhHiRhHQA2k8ChkUQCckQDwjMQDxjOEohvQExhyFKAAQFvAAFPCOQFFCJD7D7QD6D6CKFDQCOFRAAFwIAAAHQqsB6qHAAQpXAAo5hpg");
	this.shape_10.setTransform(-296.1,73,0.414,0.414);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5CAD86").s().p("AB6TfQmGh3kOg7Qkmg8jkg1QoBh4jmjxQgFg/AAhGQAAlwCOlPQCJlED7j7QD6j7FFiJQFQiOFvAAQFwAAFQCOQFFCJD6D7QD7D6CJFFQCOFPAAFwQAADcg0DUQgyDPhiC8QiGAYingIQhRgDiGAQQi1AWg/AEQgzADg0AAQkkAAlMhkg");
	this.shape_11.setTransform(-296.7,88.7,0.414,0.414);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#76BE9A").s().p("Av1TsQj/hujGh8Qg/gmgxgkIglgbQhei7gxjLQgyjQAAjZQAAluCOlRQCJlED7j7QD6j7FFiJQFQiOFvAAQFwAAFQCOQFFCJD6D7QD7D6CJFFQCOFRAAFuQAAH6kFGuQj+GjmtDqQwnhWsvlhg");
	this.shape_12.setTransform(-296.7,103.3,0.414,0.414);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5CAD86").s().p("Aq/aDQlFiJj6j7Qj7j6iJlFQiOlQAAlwQAAluCOlRQCJlED7j7QD6j7FFiJQFQiOFvAAQFwAAFQCOQFFCJD6D7QD7D6CJFFQCOFRAAFuQAAFwiOFQQiJFFj7D6Qj6D7lFCJQlQCOlwAAQlvAAlQiOg");
	this.shape_13.setTransform(-296.7,107.8,0.414,0.414);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-371.6,-152.7,583.3,606.4);
p.frameBounds = [rect];


// stage content:
(lib.D2intromob = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// in space
	this.instance = new lib.rocketinspace();
	this.instance.setTransform(-22.5,933.3,0.713,0.713,0,31.8,31.6,0.7,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).wait(1).to({regX:0,regY:35.1,scaleX:0.69,scaleY:0.69,skewX:30.1,skewY:29.9,x:2.4,y:897.6},0).wait(1).to({scaleX:0.66,scaleY:0.66,skewX:29.2,skewY:29.1,x:38.3,y:841.1},0).wait(1).to({scaleX:0.64,scaleY:0.64,skewX:28.7,skewY:28.5,x:72.3,y:785.7},0).wait(1).to({scaleX:0.61,scaleY:0.61,skewX:28.2,skewY:28,x:105,y:730.7},0).wait(1).to({scaleX:0.59,scaleY:0.59,skewX:27.9,skewY:27.7,x:135.4,y:678.3},0).wait(1).to({scaleX:0.57,scaleY:0.57,skewX:27.5,skewY:27.4,x:163.2,y:629.3},0).wait(1).to({scaleX:0.55,scaleY:0.55,skewX:27.2,skewY:27,x:188.8,y:583.3},0).wait(1).to({scaleX:0.52,scaleY:0.52,skewX:26.7,skewY:26.6,x:214.2,y:536.6},0).wait(1).to({scaleX:0.5,scaleY:0.5,skewX:26,skewY:25.9,x:239.4,y:488.9},0).wait(1).to({scaleX:0.48,scaleY:0.48,skewX:25,skewY:24.9,x:262.6,y:443.3},0).wait(1).to({scaleX:0.46,scaleY:0.46,skewX:22.8,skewY:22.7,x:284.5,y:397.9},0).wait(1).to({scaleX:0.44,scaleY:0.44,skewX:15.1,skewY:15.1,x:302.8,y:355.7},0).wait(1).to({scaleX:0.41,scaleY:0.41,skewX:-8.7,skewY:-8.7,x:312.2,y:302.5},0).wait(1).to({scaleX:0.39,scaleY:0.39,rotation:-24,skewX:0,skewY:0,x:299,y:245.4},0).wait(1).to({scaleX:0.37,scaleY:0.37,rotation:-33.5,x:276.3,y:199},0).wait(1).to({scaleX:0.35,scaleY:0.35,rotation:-50.4,x:248.4,y:159.9},0).wait(1).to({regX:0.6,regY:0.1,scaleX:0.33,scaleY:0.33,rotation:-88.2,x:200.4,y:135.2},0).wait(1).to({regX:0,regY:35.1,scaleX:0.34,scaleY:0.34,rotation:-99,x:183.3,y:135.4},0).wait(1).to({scaleX:0.34,scaleY:0.34,rotation:-113.8,x:153.2,y:141.6},0).wait(1).to({scaleX:0.34,scaleY:0.34,rotation:-125.2,x:122.3,y:157},0).wait(1).to({scaleX:0.34,scaleY:0.34,rotation:-135,x:93,y:179.7},0).wait(1).to({scaleX:0.34,scaleY:0.34,rotation:-144,x:66.6,y:208.6},0).wait(1).to({scaleX:0.34,scaleY:0.34,rotation:-155,x:44.9,y:242.1},0).wait(1).to({scaleX:0.35,scaleY:0.35,rotation:-172.6,x:30.2,y:280.1},0).wait(1).to({scaleX:0.35,scaleY:0.35,rotation:-208.8,x:32.4,y:324.6},0).wait(1).to({scaleX:0.35,scaleY:0.35,rotation:-225.4,x:61.7,y:364.9},0).wait(1).to({scaleX:0.35,scaleY:0.35,rotation:-234.4,x:98.6,y:396.3},0).wait(1).to({scaleX:0.35,scaleY:0.35,rotation:-242.7,x:138.6,y:420.9},0).wait(1).to({scaleX:0.36,scaleY:0.36,rotation:-254.3,x:179.9,y:438.3},0).wait(1).to({scaleX:0.36,scaleY:0.36,rotation:-285.5,x:222.5,y:445.8},0).wait(1).to({scaleX:0.36,scaleY:0.36,rotation:-297.5,x:265.8,y:427.8},0).wait(1).to({scaleX:0.36,scaleY:0.36,rotation:-302.5,x:303.6,y:404.4},0).wait(1).to({scaleX:0.36,scaleY:0.36,rotation:-303.6,x:344.9,y:374},0).wait(1).to({scaleX:0.37,scaleY:0.37,rotation:-302,x:371.9,y:353.8},0).wait(1).to({scaleX:0.37,scaleY:0.37,rotation:-297.9,x:398.2,y:335.2},0).wait(1).to({scaleX:0.37,scaleY:0.37,rotation:-292.6,x:421.4,y:321},0).wait(1).to({scaleX:0.37,scaleY:0.37,rotation:-285.4,x:443.6,y:309.7},0).wait(1).to({regX:0.8,regY:0.1,scaleX:0.37,scaleY:0.37,rotation:-275.5,x:478.7,y:300.6},0).wait(1).to({regX:0,regY:35.1,scaleX:0.37,scaleY:0.37,rotation:-261.7,x:493.9,y:297.2},0).wait(1).to({scaleX:0.36,scaleY:0.36,rotation:-245.9,x:525.5,y:300.5},0).wait(1).to({scaleX:0.36,scaleY:0.36,rotation:-239.1,x:558.1,y:312.3},0).wait(1).to({scaleX:0.36,scaleY:0.36,rotation:-228.2,x:590,y:330},0).wait(1).to({scaleX:0.35,scaleY:0.35,rotation:-216.2,x:619.6,y:355.3},0).wait(1).to({scaleX:0.35,scaleY:0.35,rotation:-203.3,x:644.3,y:388.4},0).wait(1).to({scaleX:0.34,scaleY:0.34,rotation:-190.8,x:661.6,y:428.6},0).wait(1).to({scaleX:0.34,scaleY:0.34,rotation:-179.4,x:670.4,y:475.8},0).wait(1).to({scaleX:0.33,scaleY:0.33,rotation:0,skewX:-167.1,skewY:-167.2,x:670.1,y:522.7},0).wait(1).to({scaleX:0.33,scaleY:0.33,skewX:-150.2,skewY:-150.3,x:658.9,y:566.8},0).wait(1).to({scaleX:0.32,scaleY:0.32,skewX:-130.3,skewY:-130.3,x:631.7,y:608.4},0).wait(1).to({scaleX:0.32,scaleY:0.32,skewX:-112.8,skewY:-112.9,x:588.4,y:640.7},0).wait(1).to({scaleX:0.31,scaleY:0.31,skewX:-100.8,skewY:-100.9,x:538.1,y:659.7},0).wait(1).to({scaleX:0.3,scaleY:0.3,skewX:-91.7,skewY:-91.8,x:484,y:668.8},0).wait(1).to({scaleX:0.3,scaleY:0.3,skewX:-76.6,skewY:-76.7,x:432.3,y:669.6},0).wait(1).to({scaleX:0.29,scaleY:0.29,skewX:-55,skewY:-55.1,x:378.9,y:649.5},0).wait(1).to({scaleX:0.29,scaleY:0.29,skewX:-40,skewY:-40.1,x:336.9,y:615.9},0).wait(1).to({scaleX:0.28,scaleY:0.28,skewX:-24.5,skewY:-24.6,x:305.4,y:572},0).wait(1).to({scaleX:0.27,scaleY:0.27,skewX:-9,skewY:-9.1,x:286.9,y:521.1},0).wait(1).to({scaleX:0.27,scaleY:0.27,skewX:4.9,skewY:4.8,x:282.6,y:465},0).wait(1).to({scaleX:0.26,scaleY:0.26,skewX:15.2,skewY:15,x:290.5,y:411.7},0).wait(1).to({scaleX:0.26,scaleY:0.26,skewX:23,skewY:22.9,x:307.3,y:360.3},0).wait(1).to({scaleX:0.25,scaleY:0.25,skewX:28.8,skewY:28.7,x:330.1,y:312.5},0).wait(1).to({scaleX:0.25,scaleY:0.25,skewX:24.1,skewY:24,x:356.3,y:269.7},0).wait(1).to({scaleX:0.24,scaleY:0.24,skewX:29.7,skewY:29.5,x:379.9,y:223.6},0).wait(1).to({scaleX:0.24,scaleY:0.24,skewX:25.6,skewY:25.4,x:406.8,y:175.9},0).wait(1).to({scaleX:0.23,scaleY:0.23,skewX:28.5,skewY:28.3,x:426.5,y:137},0).wait(1).to({scaleX:0.23,scaleY:0.23,skewX:39.9,skewY:39.7,x:445.1,y:107.3},0).wait(1).to({scaleX:0.22,scaleY:0.22,skewX:61.9,skewY:61.7,x:471.2,y:82.7},0).wait(1).to({scaleX:0.22,scaleY:0.22,skewX:85.7,skewY:85.5,x:505.8,y:70.8},0).wait(1).to({scaleX:0.21,scaleY:0.21,skewX:86.6,skewY:86.4,x:558,y:70},0).wait(1).to({scaleX:0.21,scaleY:0.21,skewX:88.4,skewY:88.2,x:584.1,y:69.4},0).wait(1).to({regX:1.1,regY:-1.8,scaleX:0.21,scaleY:0.21,skewX:103.7,skewY:103.5,x:606.2,y:70.6},0).wait(1).to({regX:0,regY:35.1,scaleX:0.21,scaleY:0.21,skewX:109,skewY:108.8,x:613.9,y:72.9},0).wait(1).to({scaleX:0.21,scaleY:0.21,skewX:115.5,skewY:115.3,x:628.8,y:78.5},0).wait(1).to({scaleX:0.2,scaleY:0.2,skewX:124.6,skewY:124.4,x:645.1,y:87.2},0).wait(1).to({scaleX:0.2,scaleY:0.2,skewX:137,skewY:136.8,x:661.5,y:100},0).wait(1).to({scaleX:0.2,scaleY:0.2,skewX:154.2,skewY:154,x:675.8,y:117.9},0).wait(1).to({scaleX:0.2,scaleY:0.2,skewX:174.2,skewY:174,x:684.5,y:141.8},0).wait(1).to({scaleX:0.2,scaleY:0.2,skewX:191.4,skewY:191.2,x:684.4,y:170.6},0).wait(1).to({scaleX:0.19,scaleY:0.19,skewX:240.1,skewY:239.9,x:670,y:197.1},0).wait(1).to({scaleX:0.19,scaleY:0.19,skewX:255.5,skewY:255.3,x:639.3,y:210.2},0).wait(1).to({scaleX:0.19,scaleY:0.19,skewX:262.7,skewY:262.5,x:605.1,y:217.1},0).wait(1).to({scaleX:0.19,scaleY:0.19,skewX:266.8,skewY:266.6,x:573.1,y:220.3},0).wait(1).to({scaleX:0.18,scaleY:0.18,skewX:270.1,skewY:269.9,x:540.5,y:221.4},0).wait(1).to({scaleX:0.18,scaleY:0.18,skewX:273,skewY:272.8,x:507.6,y:220.9},0).wait(1).to({scaleX:0.18,scaleY:0.18,skewX:275.6,skewY:275.4,x:476.2,y:218.9},0).wait(1).to({scaleX:0.18,scaleY:0.18,skewX:278.3,skewY:278.1,x:445.8,y:215.7},0).wait(1).to({scaleX:0.17,scaleY:0.17,skewX:285.6,skewY:285.4,x:415.1,y:211.6},0).wait(1).to({scaleX:0.17,scaleY:0.17,skewX:290.5,skewY:290.3,x:383.7,y:206.4},0).wait(1).to({scaleX:0.17,scaleY:0.17,skewX:297.2,skewY:297,x:352.5,y:193.9},0).wait(1).to({scaleX:0.17,scaleY:0.17,skewX:301.6,skewY:301.4,x:325.2,y:179.8},0).wait(1).to({scaleX:0.16,scaleY:0.16,skewX:305.9,skewY:305.6,x:300.4,y:164.7},0).wait(1).to({scaleX:0.16,scaleY:0.16,skewX:341.4,skewY:341.2,x:280.5,y:142},0).wait(1).to({scaleX:0.16,scaleY:0.16,skewX:354.9,skewY:354.7,x:272.7,y:114.9},0).wait(1).to({scaleX:0.16,scaleY:0.16,skewX:366.7,skewY:366.4,x:270.9,y:90.1},0).wait(1).to({scaleX:0.16,scaleY:0.16,skewX:379.4,skewY:379.2,x:274.2,y:66.2},0).wait(1).to({scaleX:0.15,scaleY:0.15,skewX:396,skewY:395.7,x:281.7,y:45.8},0).wait(1).to({scaleX:0.15,scaleY:0.15,skewX:416.4,skewY:416.2,x:293.6,y:30.4},0).wait(1).to({scaleX:0.15,scaleY:0.15,skewX:437.2,skewY:436.9,x:310.5,y:20},0).wait(1).to({scaleX:0.15,scaleY:0.15,skewX:453.4,skewY:453.1,x:329.2,y:16.1},0).wait(1).to({regX:1.8,regY:-1.4,scaleX:0.15,scaleY:0.15,skewX:463.8,skewY:463.6,x:351.9,y:18.5},0).wait(1).to({regX:0,regY:35.1,scaleX:0.15,scaleY:0.15,skewX:470.2,skewY:469.9,x:361.9,y:20.1},0).wait(1).to({scaleX:0.16,scaleY:0.16,skewX:477.4,skewY:477.2,x:383.5,y:27.6},0).wait(1).to({scaleX:0.17,scaleY:0.17,skewX:497.7,skewY:497.5,x:404.1,y:38.7},0).wait(1).to({scaleX:0.19,scaleY:0.19,skewX:551.8,skewY:551.5,x:418.1,y:62.1},0).wait(1).to({scaleX:0.2,scaleY:0.2,skewX:587.3,skewY:587.1,x:401.3,y:96.3},0).wait(1).to({scaleX:0.21,scaleY:0.21,skewX:598.5,skewY:598.3,x:368,y:123.3},0).wait(1).to({scaleX:0.23,scaleY:0.23,skewX:603.8,skewY:603.6,x:332.4,y:143.9},0).wait(1).to({scaleX:0.25,scaleY:0.25,skewX:630.3,skewY:630.1,x:289.1,y:161.2},0).wait(1).to({scaleX:0.26,scaleY:0.26,skewX:627.4,skewY:627.2,x:251.7,y:160.2},0).wait(1).to({scaleX:0.28,scaleY:0.28,skewX:615.1,skewY:614.9,x:207.6,y:163.5},0).wait(1).to({scaleX:0.3,scaleY:0.3,skewX:601.2,skewY:601,x:163.8,y:176.5},0).wait(1).to({scaleX:0.32,scaleY:0.32,skewX:587.2,skewY:587,x:121.3,y:200.9},0).wait(1).to({scaleX:0.34,scaleY:0.34,skewX:576.6,skewY:576.4,x:83.6,y:235.3},0).wait(1).to({scaleX:0.36,scaleY:0.36,skewX:570.6,skewY:570.5,x:47.6,y:280.7},0).wait(1).to({scaleX:0.38,scaleY:0.38,skewX:548.9,skewY:548.7,x:16.8,y:328.2},0).wait(1).to({scaleX:0.39,scaleY:0.4,skewX:528.4,skewY:528.2,x:8,y:376.5},0).wait(1).to({scaleX:0.41,scaleY:0.41,skewX:505,skewY:504.9,x:14.6,y:420.8},0).wait(1).to({regX:-0.4,regY:34.4,scaleX:0.43,scaleY:0.43,skewX:471.8,skewY:471.6,x:49.6,y:461.9},0).wait(1).to({regX:0,regY:35.1,scaleX:0.42,scaleY:0.42,skewX:468.8,skewY:468.6,x:62.7,y:466.5},0).wait(1).to({scaleX:0.42,scaleY:0.42,skewX:459.7,skewY:459.5,x:81.2,y:474.8},0).wait(1).to({scaleX:0.41,scaleY:0.41,skewX:443.9,skewY:443.7,x:100.8,y:477.7},0).wait(1).to({scaleX:0.4,scaleY:0.4,skewX:429.1,skewY:429,x:125.4,y:474.6},0).wait(1).to({scaleX:0.39,scaleY:0.39,skewX:418,skewY:417.8,x:154,y:464},0).wait(1).to({scaleX:0.38,scaleY:0.38,skewX:411.3,skewY:411.1,x:180.2,y:449.3},0).wait(1).to({scaleX:0.37,scaleY:0.37,skewX:407.1,skewY:406.9,x:203.8,y:432.8},0).wait(1).to({scaleX:0.36,scaleY:0.36,skewX:403.5,skewY:403.3,x:230.7,y:410.9},0).wait(1).to({scaleX:0.35,scaleY:0.35,skewX:400.7,skewY:400.5,x:258.6,y:385.3},0).wait(1).to({scaleX:0.34,scaleY:0.34,skewX:398.7,skewY:398.5,x:284.6,y:359},0).wait(1).to({scaleX:0.32,scaleY:0.32,skewX:397.2,skewY:397,x:309.2,y:332.4},0).wait(1).to({scaleX:0.31,scaleY:0.31,skewX:396.1,skewY:395.9,x:332.9,y:305.3},0).wait(1).to({scaleX:0.3,scaleY:0.3,skewX:395.2,skewY:395,x:356.8,y:276.6},0).wait(1).to({scaleX:0.28,scaleY:0.28,skewX:394.4,skewY:394.2,x:382,y:245},0).wait(1).to({scaleX:0.27,scaleY:0.27,skewX:393.8,skewY:393.6,x:406.9,y:212.5},0).wait(1).to({scaleX:0.25,scaleY:0.25,skewX:393.3,skewY:393.1,x:431.4,y:179.5},0).wait(1).to({scaleX:0.24,scaleY:0.24,skewX:392.9,skewY:392.7,x:457.9,y:142.8},0).wait(1).to({scaleX:0.22,scaleY:0.22,skewX:392.5,skewY:392.3,x:484.5,y:104.8},0).wait(1).to({scaleX:0.2,scaleY:0.2,skewX:392.3,skewY:392.1,x:511.2,y:65.6},0).wait(1).to({scaleX:0.19,scaleY:0.19,skewX:392.2,skewY:391.9,x:539.3,y:23.4},0).wait(1).to({regX:1.4,regY:-1.9,scaleX:0.16,scaleY:0.16,skewX:392,skewY:391.8,x:575.2,y:-31.7},0).to({_off:true},1).wait(32));

	// takeoff
	this.instance_1 = new lib.rocketai();
	this.instance_1.setTransform(375.5,1056.2,1.572,1.572,-90,0,0,58.1,45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({y:1046.2},0).wait(1).to({regY:45.6,x:375.7,y:1040.1},0).wait(1).to({regX:58.2,y:1043.1},0).wait(1).to({y:1036.9},0).wait(1).to({regX:58.1,y:1040.1},0).wait(1).to({y:1033.9},0).wait(1).to({regX:58.2,y:1036.9},0).wait(1).to({y:1030.8},0).wait(1).to({regX:58.1,y:1033.9},0).wait(1).to({y:1027.8},0).wait(1).to({regX:58.2,y:1030.8},0).wait(1).to({regX:58.3,regY:45.5,x:375.5,y:1022.5},0).wait(1).to({regX:58.1,regY:45.6,x:375.7,y:1027.8},0).wait(1).to({regX:58.3,regY:45.5,x:375.5,y:1022.5},0).wait(1).to({regX:58.1,regY:45.6,x:375.7,y:1027.8},0).wait(1).to({regX:58.3,regY:45.5,x:375.5,y:1022.5},0).wait(1).to({regX:58.2,regY:45.6,x:375.7,y:1030.8},0).wait(1).to({regX:58.1,y:1027.8},0).wait(1).to({y:1033.9},0).wait(1).to({regX:58.2,y:1030.8},0).wait(1).to({y:1036.9},0).wait(1).to({regX:58.1,y:1033.9},0).wait(1).to({y:1040.1},0).wait(1).to({regX:58.2,y:1036.9},0).wait(1).to({regX:57.9,scaleX:0.94,scaleY:2,x:375.9},8).to({regX:58.2,scaleX:2.04,scaleY:1.57,x:375.7},5).to({regX:57.8,regY:45.9,scaleX:1.53,scaleY:1.57,y:716.8},4).wait(1).to({regX:147.9,regY:45.2,x:374.5,y:425.3},0).wait(1).to({y:284.9},0).wait(1).to({scaleX:1.53,y:148.9},0).wait(1).to({scaleY:1.57,y:12.2},0).wait(1).to({y:-130.9},0).wait(1).to({y:-291.7},0).wait(1).to({regX:58.3,regY:45.5,scaleX:1.53,x:375.5,y:-442.5},0).to({_off:true},1).wait(172));

	// pad front
	this.instance_2 = new lib.padfront();
	this.instance_2.setTransform(374,1274.5,0.553,2.232,0,0,0,0.4,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},58).wait(173));

	// fire
	this.instance_3 = new lib.rocketfire();
	this.instance_3.setTransform(375.5,1014.8,1.182,1.304,-90,0,0,40.1,0.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(1).to({regX:40.4,scaleX:2.27,scaleY:1.63,x:375.7,y:1020.8},0).to({regY:0.2,scaleX:2.67,scaleY:1.49,x:375.3,y:1008.9},8).wait(1).to({scaleY:1.54,y:1003.9},0).wait(1).to({y:1006.7},0).wait(1).to({regX:40.5,y:998.7},0).wait(1).to({regX:40.3,y:1003},0).wait(1).to({regX:40.4,y:997.9},0).wait(1).to({y:999.4},0).wait(1).to({y:994},0).wait(1).to({regX:40.5,y:996.8},0).wait(1).to({y:989.8},0).wait(1).to({regX:40.4,y:991.6},0).wait(1).to({regX:40.5,regY:0.3,x:375.5,y:987.9},0).wait(1).to({regX:40.4,regY:0.2,x:375.3,y:989.8},0).wait(1).to({y:985.1},0).wait(1).to({regX:40.5,y:990.9},0).wait(1).to({regX:40.4,y:986.7},0).wait(1).to({regY:0.3,x:375.5,y:994.1},0).wait(1).to({regX:40.5,regY:0.2,x:375.3,y:991.9},0).wait(1).to({regX:40.4,regY:0.3,x:375.5,y:996.6},0).wait(1).to({regX:40.5,y:993.8},0).wait(1).to({regX:40.4,y:1000.4},0).wait(1).to({regY:0.2,x:375.3,y:997.4},0).wait(1).to({regY:0.3,x:375.5,y:1004.2},0).wait(1).to({regX:40.5,y:1001.6},0).wait(1).to({regX:40.3,y:1000.4},0).wait(1).to({regX:40.5,y:1000.2},0).wait(1).to({regY:0.2,x:375.3,y:997.8},0).wait(1).to({regX:40.4,y:999.1},0).wait(1).to({regX:40.5,y:1000.1},0).wait(1).to({regX:40.4,regY:0.3,x:375.5,y:1001.5},0).wait(1).to({regY:0.2,x:375.3,y:995.5},0).wait(2).to({regY:0.3,x:375.5,y:993.8},0).wait(1).to({regX:40.5,regY:0.2,x:375.3,y:994.1},0).wait(1).to({regX:40.3,y:989.4},0).wait(1).to({regX:40.4,y:993.4},0).wait(1).to({y:988.1},0).wait(2).to({regX:40.5,y:912.7},0).wait(1).to({regX:-40.7,regY:0.3,scaleX:2.67,x:375.5,y:1053.8},0).wait(1).to({regX:-40.8,regY:0.2,scaleY:1.54,x:375.1,y:899.9},0).wait(1).to({regX:-40.9,regY:0.4,x:375.2,y:900.1},0).wait(1).to({regX:0,regY:0,scaleX:2.5,scaleY:1.54,x:374.6,y:624.1},0).wait(1).to({scaleX:2.34,scaleY:1.55,y:461.7},0).wait(1).to({scaleX:2.19,scaleY:1.55,y:304.8},0).wait(1).to({scaleX:2.04,scaleY:1.56,y:155.5},0).wait(1).to({scaleX:1.9,scaleY:1.56,y:15.9},0).wait(1).to({scaleX:1.76,scaleY:1.57,y:-131},0).wait(1).to({regX:-41,regY:0.6,scaleX:1.53,scaleY:1.57,x:375.2,y:-295.5},0).to({_off:true},1).wait(172));

	// smoke copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(152,111,66,0.8)").s().p("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");
	this.shape.setTransform(370.1,1063.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(152,111,66,0.8)").s().p("Egv7AWQQgtgCgsgJQgfgGgegKQgQgFgPgGIgFgCQgrgLgpgTQgigOgfgUQgPgJgPgLIgfgWIgNgKQgSgPgRgQQgegZgagdIgLgOQgUgYgRgaIgKgQQgNgWgLgYQgWgwgNg2IgCgMIAAAAIgDgPQgZiAAlh7IgKABIgCAAIgGABIgJAAQgeAAgggKQgvgPgjglQgogSgcgkIgJgNIgNgJIgEgDQgOgMgLgOQgUAKgZgBIgHABIgOgBQgMgBgMgDQgngKgcgeIgCgCIgBgBQgMgKgHgMQgTgZgFggIgBgEIgBgHQgCgUADgSQAFgXAMgVIACgCQALgNANgKQAFgEAGgCIADgBIANgEIAFgCQAbgFAXALIABAAQAKgQAMgNIANgNQAkgfAtgIIAHgCIAOgCIACgBIAKgBIAWgBQAVgHAWgDQATgCASABQAIgNALgLIAGgFQASgRAVgJIAUgHQAOgFAOgCIAJgBQAogEAiAUQAGgDAIgBQAUgDAUADQAIgEAMgDIAAgBIAIgHIAEgDQALgHAMgFQAGgDAGgBIAOgEIAEgBIAJgCIAUgCIAQgCIAKgBIAPgBIAIAAIAEgCIANgDIAEgCQASgFATACIAPACIAEAAQAVAFATANIAOAFIAKAEIAGACQAKADALAFIAGADIADADIADACIACgBIADgBIAAAAQAXgPAWgCIAMgBIADABIACAAIAEAAIABgBQAMgIAOgFIAOgDIAJgCQAOgBALACIAGgCQAJgDAKgCIACgCIAJgNIAOgOQAOgMAQgIIACgBIAHgDQAPgGAPgBQAKgJAMgIIAEgCIAQgIQAJgEAKgDIAQgEIAIgCIAGgBQAXgDAUAEIAHAAIARgFIAGgCIACgBIASgEQAUgDAVAEIAHABIAOAEQANgHAPgDIAHgCIAAAAIAEgFIAFgGIAEgGIAIgIQAMgNAPgKQAOgKAPgGIABAAIAGgCIAIgDIANgFIAFgCQAJgMAOgKIAEgDQAGgEAHgEIAIgDIAIgDQAYgJAYgBIAOAAQAOABAOADIAPgEIANgCIAAgBQAIgPALgOIAHgGIABgCQAGgIAIgHIAEgEIABgBIAAAAIAIgJIACgFQAPgnAhgfQAPgPAUgMIAEgCIAEgDQAKgHALgFIAEgCIACgCQAJgHAKgGIAPgTQAbgeApgUQAIgEAKgDIAKgEQAQgPAYgRIABgBIANgHQAdgQAlgKIARgEIAQgCIAegMQAbgJAjAAQAMAAALACIAEAAIALAAIACgBIAHABIAHgJIAMgLQARgZAagVIAOgKQAPgMAVgJQAdgOAfgIQASgDARgBQAMgBALABIAIgCIAJgBIABgBIAHAAQAMgBALABIAKgJQAQgNASgMIAMgGIANgHIAAAAIAEgFQASgSAZgRQARgNAWgKIADgBIAEgDIAPgFIALgFIAGgDQAPgIASgGQALgEANgCIAGgCIABgBIAFgDQAEgMAFgLIAAgDIABgCIAGgIQADgGAEgFQAUgfAhgTIABgBIAKgGIALgGIACgDIABgBIADgDIAFgFIAFgEIADgCIAFgDIABgBIANgGIADgBIAEgEIALgFIAHgDQAHgDAIgBQANgDAQAAIAEABIAFAAIAGAAIAEAAIAJABIACgBIADgCIAFgFIAFgFIACgEQAKgOAPgOIAFgFIAFgFIAIgGIAHgGIALgGIAFgEIAGgDIADgDIATgQIAKgHIAFgDIARgJIAUgKIAGgCIABgBIANgFIADgBIAHgFIADgHQAKgTATgQQALgIALgFIABgBQAHgMAMgMQAIgKAMgIQAUgSAbgNIAJgEQAKgLAQgMQATgPAcgLIABAAIAegSQAfgRAogHIANgCIAHgBIAagGIAHgCQAOgBARABIADABQAogmA4gBIACAAQA7ABApAqQARARAKATIAMgIQAUgOAXgEQAXgDAYAFQAQADAOAHQAOAEANAGIAMAEIAJAEIAEgDQA1ggBLgPQAbgGAdgCIAogCQASgMAUgIIAQgFIALgEIADAAQArgLAwAGIAGABIACAAQAfALATARQAPANAKANIABAAQAKAGAHAIIAEAFIABABQADAEADACQATAOAQARQAQgBANADQAQAEANAGIAEABQATAKANALIACABIAEAAQANAHALAJIAKAKIABAAQAOAOAIANIABABIADACIAKAGIAJAIIAEAFQAJALAEALIACAHIABACIAKAHIAGAGIAEAFIAFAGIAEAEIALANQAHAKAGALQAGAPAEAQIABAGQADALABALIADAAIAHAAIAFgBQAHgCAHAAIAGAAIAGAAIAMACIAKAEIAXAGIAPAHIADABQASAKALAIIAGAEIABACIAVAFIAGADIADABIAJAEIAKAEIAUAIIAJAGIABABIAIAFQAMAJAHAIQAKAIAHAIIAAABIADABQANAEANAGIAEADIALAGIAOAJQAUANANARIAIAFIAGAHIAAABIAJAMIAEAHIAGAKQANAVABAVIAAABIAAACIADADIAEADIAJgBIAKAAIAHABIAFABIAAABQAQABAPAGIADABQANAFAKAGIAJAGIACABIARAFQAPAFAOAGIAFADQAOAHAMAIQAOADAOAHQALAGAJAGQANAJAKALQALALAGAMIARAMIABABQAdADAWAKIAHAEIACABIAZAPQAYAIAUAMIAGAEIALAGIAMAJIAMAKIANAKIAMAIIABAAQAPADAOAGIALAGIAJAFQASALANAPIALAOIADACQATAPAMAQIAFACQALAGALAIIALAIQAOAJAJAJIABAAQASADASAIQAdANASAUIAEAGIAGAEQAOAJAMALIAOATIAAABQAnASAYAfQATAYAHAcIADADQAjAHAiAQQASAJASAMQA1ALAtAiQArAfAcAsIAMAEIASAJIAKACIAIAEQApgPArAKQAPAEAOAGQAPAGANAJIAQAFIASAFQAQACAPAGQAVAGASANQAMAHALAKQAfgIAgAFIADgBIACABQAVgLAYAAIALAAQAWACATAJIAJAFQAWgDAWAGQAcAIAWAXIAHAGQAHAJAGAJIADABQASADASAMQAEgEAGgDQAJgGAKgEQAngTAkADQAXgMAbgEQAogGAmAKIANgBIAIAAQAWABATAFQAVgDAWAEQAoAGAgAaQAKAHAJAJIAGAEIACAAQARACASAIIAFgBQAugRAyAEQAaACAYAHQAzAPAoAmQARAAATADIAIABQAgAHAaAQQAfgLAkAFIABAAQAlAFAcAUQAMAJALANIAKAMIABACQALASAIATIAIAIIAGgEQAKgGALgDQAPgEASACQAcADATARQAIAGAGAJQAZAhgJApIAAAEQgJA0gpAkQgbAYgjAIQgTAEgUgBQgNAAgMgDQgNARgSANIgIAHQgfAbgnAMQggAJgkgBQhGgDg1gvIgMAIIgOAGQgkAYgtAGQgTADgUAAQgagBgZgGQgYgCgYgJQgRAGgUAEQgYADgZAAQgugBgpgTIgPgCQgcgGgbgOIgFgDIgNgHIgKgHQgjARgqAEQgqAEglgKIgLAGQgRAKgVAFIgSAEIgLABQgzAFgqgVQgPgEgOgHIgJAMQgSAXgYAUIgFADQhBBIheAQIgGABQgRADgPAAIgRABQgzgBgugUQguAbgzAMQgUAJgVAHQglAMgnAFIgIACIgbADIgKABQgvADgsgHQhDgLg6ghIgPgHIgGACIgcAJIggAIQgSAEgRACIgIAAIgPAFIgHABQgjAIgkgCIgGAAIgKABQghACgfgFIgUACIgEAAQgOABgPgBIgSgCIgRgDQgQgEgRgFQgXgEgZgJIgRgHIgHgDQgUgIgRgLIgEgDIgPAAQgbABgZgGIgIARIgBACQgNAcgTAWIgBABQgYAagfAUIgLAGIgMAIIgIAEQgaAPgdAKIgGADQgfAPgkAGIgXADQgNACgNABQgmABgjgHIgNgDIgGACQgkAHglAAIgJgBQgcAAgdgFIgTgDQgbgCgZgFQgcgFgagIIgTgIIgEgCIgUgDIgDgBIgRgEIgIgCQgjgJgggQIgZgNIgNgIIgCgBIgRgMQgUgNgRgQIgCgCIgSAFIgDABIgOAEIgbAHIgdAGIgCAAIgZAIIgOADIgDABIgOADIgUAEQgdAGgdABQghACghgDIgBABQgGAGgIAGIgDADIgHAHQgYAWgYARIgXARQgbAfggAbIgEAEQgYATgXARIgSALQglAXgmAPQgjARglAMQgcAJgfAGQgtAJgwABQgbABgbgCQgsgDgrgKQgVgGgWgHQg8gUg1giIgagRQgqgfgngpIgDgEIgSgTIgEgEQgTgUgQgXIgFgEIgQgLIgEgDQgTgKgRgNQhjBZh+AXIgsAGIgNABIgpABQgkAAghgFQgWgDgXgFQhlgYhUhEIgPgJIgDgCIgCAAIgQADIgEABQgqAQgwAGIgNABQgQABgQgBIgLAAQhzgDhbhIIgJgIQgSgPgPgQIgNgNIgFgGIgCgCIAAABIgMAKIgCABIAAABQgTAUgYASIgEACIgDADIgTAQIgDADIgEACQgjAagpAMQgXAGgYADIgNABQgSABgTgCIgPAFQgUAGgVACIgDAAQgTAGgWACIgGAAIgDAGIgBADIgCACIgOAYIgHANIgCAGIgDAHIgCAEIgHATIgIARQgHAPgJAOIgPAaIgCACQgMAYgQAWIgDAEIgXAfQgUAYgXAVIgMALQgVAYgZAVIgEADQgTARgVAPIgNAKIgdAYIgMAKIgEADIgEAEIgPANQgUASgWAQQgQANgSALIgQAKQgNAJgOAHQgtAZgwAQQhPAahXABIgDABIgegBg");
	this.shape_1.setTransform(371.4,1018.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(152,111,66,0.8)").s().p("Eg2ZAgsQgigGgigIIgigLIgFgCQgxgLgugTQgmgQgjgUQgRgKgRgMQgSgKgSgMIgNgKQgVgQgUgRQghgagfgfIgNgPQgYgZgTgdIgMgRQgPgYgOgZQgbg0gSg5IgEgNIgBgBIgEgQQgjiIAdiMIgKgBIgBAAIgGgBIgIgCQgbgIgegRQgqgZgegtQgigagWgqIgHgPIgPgHIgFgDQgQgJgOgMQgXAKgbgBIgHAAIgQgBQgNgCgOgDQgqgLggggIgDgDIgBgBQgOgKgKgLQgWgZgKgiIgBgEIgDgIQgEgUAAgTQABgaAJgYIABgBQAFgKAHgIIAGgGIABgBQADgDAFgBIADgCQARgHAPACIABAAQAGgQAKgOIALgNQAdgiAogNIAGgDIANgFIACAAIAJgDIAUgDQASgKAVgFQASgFARgBQAIgOALgLIAGgGQARgRAWgLQAKgFAKgDQANgGAPgDIAJgCQAngGAjAQQAJgDAKgBQAbgEAZAHQAMgIANgGIAAAAIAMgJIAFgEQAOgKAQgGIARgGIASgEIAFgBIAMgCQAOgCAOABIAWgDIANgBQAKgBAKAAIAJAAIAFgDQAIgFAIgDIAEgCQAYgLAZAAQAKgBAKABIAHAAQAcAEAYASIAVADIAOAEIAIAAQAPgCAPADIAIADIAFACIAFACIAEgCIAEgBIABAAQAggOAeAHIAOAEIAFACIACABIAEACIABgCQAPgNASgHQAJgDAKgCIALgCQASgCAPADIAIgGQAKgGAMgFIACgDIAOgRQAKgJAKgHQAVgOAXgHIACgBIAKgCQAVgGAVABQAMgNAPgLIAGgDQAKgHAKgFQANgFANgEIAVgHIAKgCIAKgCQAegEAbAIIAIABQAJgHALgGIAHgEIADgBQALgGALgEQAagIAdADIAJABIATAEQAUgFAUADIAKABIAAABIAEgIIAGgJIAEgHIAJgNQAPgTAUgPQASgNAUgJIAAAAIAIgCIAMgFIAQgGIAHgDQAJgUAPgPIAFgGIAQgNIAJgGIAKgGQAdgQAggEIATgBQASAAASAFIASgMQAGgFAIgEIABgBQAMgUAQgRQADgFAFgEIACgCQAJgKAKgJIAHgFIABgBIAAAAIALgLIADgIQARg2ArgnQAWgVAZgOIAFgDIAGgEQAOgIAOgGIAGgDIADgDQALgKANgJIANgeQAYgwAzgiQALgHAMgFIAMgGQAHgcAYggIABgCIALgPQAcgiAsgXIAUgJIAVgIQAHgRAQgTQAZgcArgPQAQgFAPgBIACgEQACgGAGgHIACgCIAHgHIAHgNQAGgIAHgIQAIgnAYgmIAMgSQAPgXAWgTQAggbAngUQAWgJAVgGQAPgEAPgCIAGgJIAIgIIABgBIAHgGQAMgKAMgHIALgNQASgWAYgSIAOgJIAPgMIABAAIACgIQAMggAYghQARgXAXgVIADgCIAFgFIAPgLQAGgGAGgEIAHgHQAOgSAWgPQANgIAPgFIAFgHIABgBIADgIQABgQAEgRIgBgDIABgDIAFgLQACgJAFgGIAAgBQAUgtAogeIACgCIALgKIANgLIABgFIAAgBIACgGIADgJIAEgIIACgEIAFgGIABgCQAGgGAIgFIACgEIADgHIAIgNIAHgIQAGgIAJgHQAOgLAUgGIAFgCIAGgBIAFgHIAEgEIAJgHIADgDIADgEIAFgHIAHgHIABgGQADgWAOgXIAGgJIAFgHIAIgLIAHgJIAMgMIAHgGIAHgFIADgGQAFgOAKgOIAKgNIAFgGQAIgKALgIQAKgLAMgJIAGgEIAAAAIACgCIAOgKIADgDIAFgKIADgKQAJgcAZgWQANgMAPgHIACgBQADgSALgUQAIgQANgNQATgdAigWIALgHQAFgTAOgWQASgdAhgVIAAgCQAJgSAOgUQAcglAxgVIASgGQgCgDAAgFQAAgLAPgSIAGgGQAPgLAWgGIAFgCQArgpA9gBIADAAQBBAAAuAwQASASALAWIALgFQAVgHAVAEQAUADAUALQANAGALAKQAPAEAPAGIALAAIAJAAIAEgEQAtgsBPgZQAcgKAfgFQAWgEAVgBQAVgLAWgIIARgEIANgEIADAAQAwgHAzALIAHADIACABQAmAVASAgQANAYADAUIACACQAMAJAHANIADAIIACACQACAHACACQAaAWASAbQARAKAMAQQAPATAHASIACADQASAcAAAWIAAACIADABQARANAJARQAFAIADAJIABACQAMAXAFAWIABAAIAEADIANAKIAKAMIAFAIQAKASAAAQIgBALIABACQAIADAHAGIAIAJIAFAGIAGAIIAFAGQAIAHAGAKQAKAOAHAQQAIAUADAWIAAAJQADAQgBAOIAAABIACADIADAHIAAAAQAEgBAEAAQAKgBAKACIAHACIAIAEQAHAEAFAFQAFAHACAGQAPAIALALIAPARIADAFQAOAXACATIgBAKIAAADQANAFANAHIAIAFIAEADIAKAHIANAJQAMAIAKAIIAKALIAAABIABACIAIAKQAKAQAGAQQAHAPACAOIAAABIAEACQASAHAQAKIAFAEIAOAKIASAPQAXAWANAbIAGAHIAGAMIAJAUIADAKIAGAQQALAfgFAcIgBACIABADIACAEIAGAFIALAFIAKAGIAHAFIAHAFIAAAAQATALAOAQIAEAFQAMAOAIANIAFAPIABACQALAFALAHQATALAPANIAGAFQAQAOAMAQQATAGARAMQAOAKAKALQAOAPAJATQAJATADASQAMAIAKAKIACACQAjARAVAbIAGAHIACAEQANASAGAQQAeATAUAZIAHAJIAJALIAKASIAMASIAKAUIANAPIACAAQAVADARAMIANAIIAMAJQAXATAMAYQAGAMADALIADAEQAYAVAOAZIAFAGQANANAKAQIAJARQAKASAEAQIAAAAQAaAGAWAOQAlAXASAiIAEAIIAIAHQASAOAOAQIAMAeIAAACQA1AUAkApQAaAfALAmIAEAEQAvALAqAcQAYARAUATQBJANA7AyQA4AwAdBAIAQAEQAOAEANAFIANADIALADQA6gIA3AbQATAKARAMQASANAPAQIAUAIIAZAJQAVABAWAFQAdAGAbAOQASAIAPALQArAAApAQIAEABIADABQAbgRAhgBIAPABQAdADAZAQQAGAEAFAFQAcgLAgAGQAoAHAeAgIAIAIQAKAMAHAOIAEgBQAagIAcAHQAGgFAIgDQANgGAPgEQA4gRAwATQAggQAkgEQA4gGAwAWIATgBIAKAAQAdAAAaAIQAdgHAfADQA2AGArAmQANALAKANIAJAGIADgBQAXgFAaAHIAFgCQAygPA1AIQAaAEAZAKQA0AVAlArQARADARAGIAIADQAcAMAWAUQAagDAbAKIABABQAbALATATQAHAKAEAMIAEAKIABACQAIAVAEAVIAGAIIADgBIAOgDQAJgBAMAEQASAGAJAPIAGAOQAKAcgPAdIgCACQgPA4gvAkQggAYgnAGQgVAFgWgCQgOAAgNgEQgRAOgUAJIgJAHQglAbgsALQgkAIgngDQhMgGg5g0IgOAEIgPADQgpAZgyAGQgVACgWgBQgdgCgagHQgbABgagFQgUAHgVADQgbAEgcgBQgzgDgsgXIgPACQgdAAgegIIgFgBIgOgDIgKgFQgmAWgtAIQgsAIgqgGIgMAGQgUAJgWAFIgVAEIgMABQg4AFgwgYQgPgBgQgFIgJANQgWAYgbAVIgGAEQhLBJhpAPIgHABIgiADIgUgBQg4gBgzgVQg1AUg3ADQgWALgXAHQgoAQgsAHIgIABIgeAGIgLABQgyAGgygGQhKgIhCghIgPgIIgIABQgPAEgPACQgSADgSAAQgUACgTAAIgHAAIgRACIgIAAQglACgngGIgGgBIgLAAQglABgigGIgTAGIgDABQgOAEgOACIgSACIgTABQgQABgRgCQgZABgagEIgTgEIgIgBQgWgFgUgHIgFgDIgPACQgdAEgcgDIgLAQIgCADQgRAagYAUIgCABQgdAYgkAQIgMAFIgNAIIgJAEQgeAQggAJIgHACQgkAPgnAFIgZADQgOACgPAAQgqABgmgIIgPgDIgHABQgoAFgogDIgKgBQgfgDgfgHIgVgGQgcgFgbgIQgdgJgcgMIgVgLIgDgCIgWgBIgEgBIgRgCIgKgBQgngFglgNIgcgLIgOgGIgCgCIgUgJQgXgMgUgPIgDgCIgUAEQgBABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgPAEIgfAFIgfADIgCABIgbAKIgOAFIgEABIgOAGIgVAGQgfAJgfAFQgiAIgiADIgCABIgPAOIgEADIgIAIQgZAYgbATIgaATQgfAhgkAcIgFAEQgbAVgaASIgVAMQgpAXgrAQQgnARgqAMQggAJghAEQgzAJg1gBQgeAAgegEQgwgGgugNQgYgHgXgJQhBgZg5goIgbgUQgvgkgogvIgEgEIgUgVIgEgEQgVgXgSgZIgGgCIgSgHIgEgCQgVgGgTgIQhwBfiMAYQgYAEgZACIgNABQgXABgYgBQgmAAglgGQgZgEgYgGQhwgdhchMIgRgIIgDgBIgCAAIgSAEIgFABQgvARg0AGIgPABQgRABgSAAIgLAAQh/gFhlhQIgKgIQgUgRgRgRIgOgQIgGgHIgCgBIAAABIgNAFIgDACQgTAXgbAUIgEADIgDADIgVASIgFADIgDADQgnAegtAOQgYAIgaADIgOACQgVABgUgBIgQAFQgXAFgXACIgDAAQgWAIgXACIgHAAIgFAGIgCADIgBABQgJANgJALIgKAMIgEAFIgDAIIgCAEIgIAWIgIATQgHAQgJAQIgQAeIgCACQgOAbgQAZIgDAEQgMARgNARQgVAcgYAYIgNAMQgXAcgbAXIgDAEQgWATgXARIgOALIgfAcIgNALIgEADIgFAFIgQAOQgXAUgYARQgTAPgSANIgRALIgdAUQgxAeg1AUQhWAiheAGIgDAAIghABIgGAAQgwAAgtgHg");
	this.shape_2.setTransform(372.9,971.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(152,111,66,0.8)").s().p("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LIAGAJIAGAKIAHAGQAKAKAIAMQANATAIAUQAJAbACAcIAAAMQACAUgDASIAAABIABAGQABAJgBAGIAAAAQAFgCAFABQANAAAMAFIAJAEIAKAIQAIAHAEAIQAGAMgBAKQASAPALASQAJANAFAPIADAHQAMAngJAdIgHAQIgCAFQAQAHAQAMIAJAIIAFAEIAMALIAPAOQAOALAKANIALAQIAAABIABADIAHAQQALAYACAWQAFAXgDAUIAAACIAFACQAXAKATAPIAHAFIARAOQALAKAKALQAaAfANAmIAGAJIAEAQIAAAAQAFAOAEAPIACANIAGAVQAJAqgLAkIgBACIABADIADAGIAGAHIAMAKIAMANIAHAJIAIAJIAAABQAXAUAOAbIAEAHQALAYAFAWIACAXIAAADQAOAIAMALQAXARASAVIAGAIQASAVAMAXQAYAJAUASQAQAOAMARQAPAVAIAaQAIAcgBAYQAOALANANIADAEQAqAeASAsIAGAMIADAGQALAdABAaQAkAdAVAmIAGAOIAJARQAFAOADAMQAGAOAFAOQAFAPACAOQAIAKAGAMIADAAQAaAFAVAQIARAMIAOANQAbAaALAjQAGAQABAQIAFAEQAdAdAQAjIAFAIQANAVAJAYQAEALADANQAHAcgCAYQAhAIAcAVQAsAgASAwIAEAMIAKAJQAWATAQAXIALAoIABADQBDAWAuA3QAiAnAPAwIAGAEQA7ARAzAoQAdAYAXAbQBdAPBKBDQBFBAAeBXIAVADQASADARAFIAQADIAPAFQBLgBBDAsQAXAQAUASQAVAUARAWIAZALIAgANQAbAAAcAEQAnAFAjAPQAXAJAVANQA3AHAyAdIAFABIAFACQAhgYAqgBIATABQAlAFAeAXIANAMQAjgSAqAGQAzAGAnApIAKALQAMAPAJASIAFgDQAigSAmABQAJgFAJgEQASgHATgDQBKgPA8AjQApgVAvgDQBHgFA8AiIAYgCIAMgBQAlABAhAMQAkgNAoADQBGAFA1AyQAQAPANASIAKAHIAEgCQAdgMAjAHIAFgCQA3gNA3AMQAbAGAZAMQA2AbAjAwQAQAHAPAKIAGAEQAaASARAXQAVAGASAPIABABQARARAJAUQABAKgCAKIgBAJIgBACQAFAXAAAXIAEAKIABAAIAGADIAJAJQAHAJgCAOIgBAMQgEAWgYARIgCABQgXA8g1AjQgkAYgrAGQgXAEgYgCQgQgBgOgEQgUAKgXAGIgLAHQgqAbgwAJQgpAIgrgFQhSgKg+g6IgPABIgQgBQguAag3AFQgXADgYgCQgggCgdgJQgcAFgdgDQgWAIgXADQgeAFgegCQg4gEgvgcIgQAFQgeAHghgBIgGAAIgOABIgMgCQgoAbgvAMQgvAMgvgDIgNAHQgXAJgYAFIgXADIgNABQg+AEg0gbQgRACgRgBIgLAMQgYAbgfAWIgGAEQhWBLh0AOIgJAAQgSACgSAAIgWAAQg+gDg3gXQg8ANg8gFQgYAMgZAJQgsASgwAJIgIABIghAIIgLACQg3AJg3gEQhSgFhJgjIgRgIIgJAAQgQADgRAAQgUAAgUgCQgVABgVgDIgHgBIgTAAIgJgBQgogDgogNIgIgCIgLABQgoAAgmgJIgTALIgCACQgNAHgOAGIgSAGIgTAGQgRAEgRACQgbAGgcABIgVAAIgJAAQgYgBgWgEIgFgBIgSACQgfAHgeAAIgOAQIgCADQgXAZgdATIgBAAQgjAWgpAMIgOADIgPAJIgKAEQghAQgjAJIgIACQgoAOgsAEIgbABQgPACgRABQgtABgrgJIgQgDIgIABQgsACgrgHIgLgCQghgFgigKQgLgDgLgFQgegIgdgLQgfgNgdgPIgWgPIgEgDIgYABIgEgBIgTAAIgLAAQgqAAgqgKIgggIIgQgGIgCgBIgXgIQgZgKgYgOIgDgBIgWADIgDAAIgRADIghAEIgjABIgCAAIgdAOIgOAGIgEACIgPAHIgWAJQghANgiAIQgjAPgjAIIgCACIgRAPIgEAEIgJAJQgbAagdAWIgcAUQgkAjgpAdIgGAEQgcAWggAUIgWAMQguAZgwAQQgsASguALQgjAIgmAEQg4AIg6gDQgggCghgFQg1gIgxgRQgagJgZgLQhGgdg+gvIgdgWQgygqgrg0IgDgFIgWgYIgFgEQgXgZgVgbIgGgBIgUgCIgEgBQgXgBgWgEQh8BniaAYQgbAEgbACIgPAAQgaABgZgBQgrgBgogHQgbgFgagHQh6ghhlhVIgUgHIgDgBIgCAAIgTAFIgGACQgzATg6AGIgQABQgUABgSAAIgNgBQiLgFhvhYIgLgKQgVgSgTgTIgQgRIgGgIIgCgBIgBAAIgOACIgDABQgVAagcAXIgFADIgEAEIgXATIgFADIgEADQgpAigxARQgaAKgdAEIgPACQgWADgWgBIgTAEQgYAFgaAAIgDABQgXAJgbADIgHABIgGAFIgDADIgCACQgLAMgLAKIgNAKIgFAFIgDAJIgCAFIgIAYIgJAVQgIASgIARIgSAiIgCADQgOAdgSAcIgDAEIgbAmQgVAfgaAcIgNAOQgZAegdAbIgEAEQgYAWgZATIgOANIgiAfIgOALIgFAEIgFAFIgSAQQgZAWgbATIgoAfIgSANQgQAMgQAKQgzAkg5AZQhdAphnALIgDAAIglADIggABQgmAAgmgEg");
	this.shape_3.setTransform(374.9,921.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(152,111,66,0.8)").s().p("EhBWA3BQgpgEgpgHIgrgKIgGgBQg7gMg5gVQgugQgqgXQgWgLgVgNQgXgLgWgNIgQgKQgbgQgZgTQgqgdgngjIgRgRQgfgdgaghIgPgTQgVgcgSgdQgog7gchBIgGgPIgBgBIgIgSQg5ibANisIgIgIIgCgBIgEgEIgHgGQgXgYgWgfQghgvgTg8QgWgsgJg3IgDgUIgTgCIgHgBQgVgEgVgIQgcAIgggBIgJAAIgSgCQgRgCgQgFQgygOgogkIgEgDIgCgBQgRgKgOgLQgfgZgUglIgDgFIgEgIQgLgWgFgXQgGgdABgeIgBAAQgHgCgGgGIgGgFIgBgBIgEgFIgBgDQgEgMgCgNIAAAAQACgRAFgPIAFgPQAQgnAdgaIAEgFIAKgIIABgBIAHgFIAQgKQAPgPARgKQAPgKAQgGQAHgOALgNIAFgHQASgTAVgOQAJgGAKgFQAOgHAOgFIAJgDQAogMAkAJQAOgFAPgBQAsgFAkARQAPgPATgNIABgBIARgOIAIgFQAVgPAYgKQANgFAOgDQAOgDANgBIAIgCIASgCQAWgBAVACQAQgEARgBIAUgCQAQgBAPABIAOACIAHgHQAJgJALgHIAHgFQAhgXAngEQAPgDAQAAIAKAAQAtACAlAcQAQgCASABIAWACQAGgDAGgCQAXgKAagBIANABIAJABIAIAAIAIgBIAGgBIACAAQA2gMAsAZQAMAGAJAHIAGAFIADADIAFAGIADgDQAUgXAagMQANgHAQgDIAQgDQAagDAYAGIAKgNQANgOARgMIADgEQALgMAMgLQAQgNARgKQAigTAmgDIAEgBIAOgBQAjgDAhAIQARgWAWgRIAJgGQAOgLAQgIQATgJAUgFQAPgHAQgFQAIgDAIgBIAOgDQAvgFAqAOIALACQAMgOAOgNIAKgIIADgEQAQgNAQgIQAmgTAsABIAQAAQAOABAPAEQAiAAAeAQIAOAIIABABIAFgMIAIgQIAFgMQAFgKAHgKQAUggAdgZQAbgWAegNIACAAIALgEIARgIQAMgGANgEIALgEQAIgiATgeIAGgJQAIgOAMgMIAMgLIAOgMQApgfAwgJQAOgDAPAAQAcgBAbAHQAJgQANgPQAIgLALgJIACgDQASgdAagZQAGgHAHgFIAEgEQAOgQAQgNIAKgHIACgCIAAAAQAKgIAKgGIADgMQAVhVBBg/QAhggAngUIAIgEIAKgGQAUgNAYgIIAJgDIAEgFQAPgRASgOQACgZAGgcQAVhYBHg+QAPgNARgKIASgLQgLg3AWhAIABgEQADgQAFgQQAZhEA7g0QAOgMAOgKQAPgLAPgHQgHglANgvQAVhFA/gtQAWgQAYgJIgCgMQgDgSAGgVIAAgGQABgLAEgLQAEgLAFgKQAGgPAKgNQgLhDAShKQAEgSAGgQQAOguAZgnQAlg5A4gtQAegWAfgQQAWgLAXgIIACgVIAGgXIAAgDIAGgRQALgcAQgZIANgXQAXglAhggQAKgJAKgIIAVgVIABAAIgBgQQgCg8AXhAQAPgwAcgpIADgFIAGgLQAIgMAJgLQAGgLAIgJIAIgPQAMgnAcgfQASgTAVgNIAFgPIgBgDIgDgSQgEgaAAgbIgBgFIgBgFIAEgPQACgPAFgKIAAgBQAThLA5g2IADgDIANgUQAJgLAJgJIgCgJIAAgCIgCgLQgBgIAAgJIABgQIACgIQABgHADgHIABgDQAHgNAKgMIABgHIgCgPQABgPADgPIAFgTQAFgSAKgQQAQgdAdgVIAHgFIAJgHIABgUIAEgMQADgMAGgLIAEgIIAEgHIAIgMIAIgLIgBgMQgIglALgrIAFgPIAGgNQADgKAFgLQADgIAFgJQAHgLAJgLIAJgLIAJgKIAAgLQABgaAIgcIAJgaIAFgNQAKgTAMgRQALgVAQgUIAHgHIABgBIACgDQAIgLALgMIAEgEQgBgLACgLIACgQQAGgwAkgjQATgTAXgKIAGgCQgHgeAIglQAHgcAPgZQAUg0AvgoIAQgNQgGglALgrQAOg6AsgsIgBgDQgDgkALgsQAVhOBGg0IAagRQgLgHgJgNQgTgeALgtIAGgSQAPgfAggWIAHgEQA0gzBJAAIADAAQBNABA3A6QAVAVANAaIAMAEQAVAIAQASQAQASAKAVQAHAOADAPQASADASAIIAJgIIAGgIIAEgGQAkhIBTgtQAfgTAkgKQAYgHAagDQAZgMAcgFIAVgEIAQgDIACACQA7gCA4AZIAIAFIAEADQA1AqAOA+QAKAvgLAmIADACQASAQAFAZIACAPIABACQACAPACACQAlAnAWAvQAXAiAJArQALAygHAtIACAHQAOA/gbAvIgDAFIACABQAWAaAHAhQAEARgBAQIABADQAKAsgEAoIACABIAGAFQAKAHAIAJQAJAKAFAMQAFAHACAHQALAfgHAaQgDALgFAIIACADQAMAFALAIIANAOIAHALIAHAMIAIAIQAMAMAKAPQAQAWAJAZQAKAhABAkIgBAOQACAYgFAXIAAABIAAAKQAAAMgDAJIAAAAQAGgBAHABQAQABAOAHIAKAHQAHAFAFAGQAJAKAEANQAGARgEAOQAVAWAMAZQAIATAFAUIADALQAIA1gUApQgGANgHAJIgEAGQAUAKASARIALALIAGAFIAOAPIARASQAQAPALASIALAWIAAABQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAHAVQAJAggBAeQADAegIAbIAAADIAGADQAbAMAYAUIAHAGIAVATQANANALAOQAfAoAMAwIAFAMIADAUIAAABQAGARACATIACARQAEANACAOQAHA1gSAsIgCADIACADIAEAHIAHAKIAOAPQAHAJAFAKQAFAHADAHIAIANIAAABQAbAdANAnIAEAKQALAiACAeIgCAgIAAAFQARALAOAOQAbAYAUAcIAHALQATAcANAfQAcANAXAYQAUASANAWQARAcAGAiQAHAkgFAfQARANAPASIADAEQAyAsAPA+IAGARIADAIQALAogEAkQAqApAUAzIAHATQAEALADAMQAFASABARQAHASADAUQAEAUABASQAJAOAGAPIADABQAgAFAaAVIATAQIARARQAgAiAKArQAFAVAAAUIAGAGQAiAlASAsIAFALQAOAdAIAhQADASABARQAFAlgIAhIAAAAQAoALAhAbQA0AqASA+QACAHABAJIANALQAaAZATAcQAEAZAGAaIAAAGQBSAXA6BDQAqAwATA6IAHAEQBHAXA8A1QAjAfAbAiQBxARBYBWQBTBRAfBsIAaADQAWACAWAGIAUAEIATAFQBcAGBPA+QAcAWAXAZQAYAaASAeIAfAOIAnAQQAhgCAjADQAwAFAsAQQAdALAaAPQBDAOA8AqIAGABIAGADQAoggAzAAQAMAAAMACQAsAFAjAfQAJAHAHAJQArgZAzAEQBAAGAvAzIALANQAPATAKAVIAGgFQArgdAwgFQAMgFAMgEQAWgIAYgDQBcgMBIAzQAygZA5gDQBYgEBIAvQAOgDAPgBIAPAAQAtAAAoAPQArgRAxACQBXAFBAA/QATATAPAWIAMAJIAFgDQAjgTAsAFIAGgBQA7gMA5ARQAcAIAZAPQA4AgAhA2QAOAKANAOIAGAGQAXAXANAbQAOAPAJAVIABABQAHAWgCAVQgEALgIAJIgHAHIgCABQABAagEAaIACAKIgBADIgCAJIgEAPQgEAMgMAMIgLAKQgSARggAEIgDAAQgfA/g7AkQgoAXgvAGQgaADgagDQgRgBgQgFQgXAHgaACIgMAHQgvAbg2AIQgtAHgugHQhYgNhEhAIgQgDIgRgEQgzAbg9AEQgZACgagCQgigDgggKQgeAIggAAQgXAJgaAEQgiAFgggDQg9gFgzghIgQAIQgfAPgjAFIgHABIgQAFIgMABQgqAggyARQgzARgzAAIgPAGQgZAKgaAEIgZADIgPABQhDADg5gdQgSAFgSABIgNANQgcAcghAXIgHAFQhiBNh/AMIgJABIgoABIgYgBQhDgEg9gYQhDAGhBgPQgaAOgbAKQgwAVgzAKIgKACIgjAKIgMADQg7AMg9gCQhZgDhSgjIgSgJIgKAAQgSAAgRgBQgWgCgWgFQgXgCgXgEIgIgCIgUgDIgJgBQgsgKgqgSIgIgDIgNAAQgrAAgpgLIgSAPIgDADQgMALgOAJIgSAKIgTALQgRAIgSAGQgcAMgeAFIgXAEIgKABQgaAEgZgBIgGgBIgTAFQghAKghACIgRAQIgDADQgcAYgiARIgCAAQgoAUguAIIgQACIgQAIIgLAFQglAPgnAJIgIACQgtANgwADIgdAAQgRACgSABQgxABgvgJIgSgEIgJAAQgvAAgvgKIgMgDQgkgIgkgNQgMgEgMgFQgggLgegQQghgQgegTIgYgTIgEgDIgaADIgFAAIgUABIgMABQguAEgvgGIgjgGIgTgFIgBAAIgagHQgdgIgbgMIgDgBIgZACIgDAAIgSACIglABIgmgBIgCABIgeAQIgOAIIgFADIgPAJIgYALQgjARgkAMQgkAVglAPIgCACIgSARIgFAEIgJAJQgeAdggAYIgeAWQgpAmgtAdIgHAEQgfAZgjAUIgZANQgzAbg1AQQgwASgzAKQgoAIgpAEQg+AGg+gFQgkgDgkgHQg4gLg2gUQgcgKgbgNQhLgjhCg1IgfgZQg2gwgtg6IgEgEIgYgbIgFgFQgagbgWgdIgHAAIgWADIgEgBQgZAEgZABQiIBviqAYQgeAEgdACIgQABQgcAAgcgBQgugCgsgIQgegGgdgIQiEgmhtheIgXgGIgDAAIgCAAIgVAGIgGACQg5AUg/AHIgSABQgVABgUAAIgOgBQiXgGh5hhIgNgKQgXgUgUgVIgRgTIgIgIIgCgCIgBAAIgPgCIgEAAIAAABQgWAdgeAZIgFADIgEAEQgMALgOAKIgFAEIgEADQgtAng0AUQgdALgfAFIgQADQgZADgXgBIgVAEQgbAFgbgBIgDABQgaALgdAEIgIABIgIAFIgDACIgCACQgOAMgOAJIgPAJIgHAEIgDAKIgBAGIgJAaIgJAXIgRAnIgTAlIgCAEQgPAggTAeIgDAFQgOAVgPAVQgWAigbAgIgOAPQgbAigfAeIgEAFQgaAYgbAVIgQAOIglAjIgPAMIgFAEQgCAEgDACIgUASQgcAXgcAVIgsAjIgUAOQgQAOgRAMQg4Apg9AeQhkAxhvAQIgEAAIgoAFQgdACgeAAQgeAAgdgCg");
	this.shape_4.setTransform(378.1,870.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(152,111,66,0.8)").s().p("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IgEAGIAAACQAZAgAGAqQADAVgCAUIABAEQAIA3gIAxIACACIAIAGQALAIAKALQAKANAGAOQAFAJACAIQAMAngLAfQgFANgGAJIACAEQAOAFANAKQAJAIAGAKIAJAMIAIAOQAGAEAEAGQAOANALATQATAbAKAdQAMAngBArIgBARQABAdgGAcIAAABIgCANQgCAQgFANIABAAQAIgCAHACQATACARAKIAMAJQAHAHAGAIQAKANAFARQAFAWgGATQAXAcAMAhQAJAYAFAaIABAOQAGBGgfA0QgKAQgKANIgGAHQAYANAUAVIANAOIAHAHIAQATQALALAJAMQAQATAMAWQAHANAFAPIAAABIACAGIAHAaQAIApgDAlQAAAmgNAiIgBADIAIAEQAgAPAbAYIAJAIIAYAXQAPAQAMASQAjAxAMA8IAEANIADAZIAAABQAFAWACAXQACAJAAALQADAQACARQAFBAgZA0IgDAEIADAEIAEAIIAIAMQAJALAHALQAIAMAGANIAIATIAJAQIAAACQAeAnANAzIAFANQAKArgBAoQgCAVgEAUIAAAFQASAPARATQAfAeAWAkIAIANQAVAkANAnQAgAQAcAeQAWAWAOAcQATAjAFAqQAGAsgKAnQAUAQASAVIAEAGQA5A6ANBRIAGAVIACAKQAKA0gJAuQAxA0AUBCIAGAXIAHAeQAEAXAAAVQAGAXADAYQADAagCAXQAKAPAIATIADABQAmAHAdAaQAMAIALALQALAKAJALQAkArAKA2QAEAbgBAZIAGAGQAoAuATA1IAGAPQAPAlAGAqQADAXAAAVQABAwgOApIAAAAQAvANAmAiQA+A1ARBMQACAJABAKIAPAOQAfAeAUAjQAEAfAFAgIABAHQBgAZBHBQQAxA4AXBEIAKAFQBTAdBGBCQAoAmAeArQCHATBnBoQBhBiAfCDIAgACQAbADAaAFIAYAFQALACALADQBvAOBbBQQAgAcAbAhQAbAhAUAlIAkARIAuATQAogEAqADQA6AEA0ASQAjALAgARQBPAXBGA2IAIACIAHAEQAvgnA9gBQAOAAAOACQA0AIApAmQAJAJAJALQAyghA9ADQBNAFA3A9IAOAQQASAWALAaIAHgHQAzgpA8gKQAOgGAOgEQAbgIAcgDQBwgLBUBFQA7geBFgCQBpgEBTA8QARgEASgBIARAAQA2AAAvATQAzgXA7ACQBmAEBLBNQAXAXARAaIAPALIAGgEQAqgaA0ADIAHgBQA/gKA7AWQAdAKAaASQA5AmAfA8QANAOAMARIAFAHQASAeAJAfQAJAYgBAaIAAABQgCAdgNAVQgLAMgOAHIgNAFIgDABQgCAdgIAcIgBALIgDAFQgFAJgFAHIgSAVQgOAQgYAJIgTAIQghAMgqgJIgDgBQgnBDhBAjQgsAXg0AFQgcADgdgEQgSgCgRgFQgbAEgcgDIgOAHQg0Abg8AHQgyAGgxgJQhfgRhJhGIgSgGIgRgHQg5AbhCAEQgcACgcgDQglgEgigMQggANgjADQgZAJgdAEQgkAGgjgEQhCgGg3gnIgQANQghAVglANIgIACIgRAJIgMAEQgtAmg2AVQg1AVg4AEIgQAGQgcAJgdAFIgaADIgRAAQhIACg/ggQgTAIgUAFIgNAOQggAdglAYIgIAFQhsBPiMALIgKAAIgrABIgagBQhJgFhCgaQhKgChGgYQgcAQgdALQg1AYg3AMIgKACIgmAMIgNAEQg/AQhCgBQhiAAhaglIgUgIIgKgCQgUgBgTgDQgYgFgXgHQgZgEgZgHIgJgDIgWgFIgJgCQgwgQgsgYIgIgDIgNgBQgwgCgsgMIgRAUIgDADQgMAPgNAMIgRAPIgUAQQgRAMgUAKQgdARghALIgYAIIgLADQgcAHgcADIgHAAIgUAGQgjANgkAGIgUAPIgDACQgiAYgnAPIgCAAQgvARgzAEIgRABIgSAIIgNAFQgoAQgqAIIgKACQgxAMg0ACIgfgBIgmADQg2ABgzgKIgUgEIgJAAQg0gDgygOIgNgDQgngLgmgQIgagMQgigOgggUQgjgTgfgYIgagWIgEgDIgcAEIgFAAQgLADgLABIgNACQgyAIg1gCIgmgEIgVgDIgBgBIgdgEQgggHgegKIgDgBIgcABIgDAAIgUABQgUAAgUgBIgpgEIgCACIgfATIgQAKIgEADIgRAKIgYAPQgmAVgmAPQglAcgnAVIgCACIgUATIgFAFIgKAJQggAggjAaIghAYQgtAogxAfIgHAEQglAagmAWIgbAOQg3Abg7ASQg1ASg4AJQgsAIgsACQhEAFhEgHQgngEgngJQg9gNg5gXQgegNgegPQhQgohGg7IghgdQg7g1gvhAIgDgFIgagdIgGgGQgdgcgYghIgHADIgYAHIgEAAQgcAJgcAGQiVB3i5AYQggAFggABIgSAAQgeABgfgCQgygDgwgJQgggGgfgKQiOgqh3hoIgZgEIgEAAIgCAAIgWAHIgIACQg9AWhFAHIgTABQgXACgXgBIgPAAQijgIiEhpIgOgMQgZgVgWgXIgSgVIgIgJIgDgCIgBAAIgQgHIgEAAIAAABQgYAgggAcIgFAEIgFAEIgcAXIgGADIgEAEQgwArg5AXQgeANgiAGIgRAEQgbADgaAAIgWAEQgdAEgegCIgDABQgcANgfAFIgJABIgKAFIgDACIgDACQgQALgRAIIgSAIIgIADIgDAMIgBAGIgKAcIgJAZIgSArIgTAqIgCADQgRAkgUAgIgDAFIgfAuQgXAngdAiIgOASQgdAlghAhIgFAFQgbAbgeAYIgRAQIgnAlIgQAOIgFAEQgDAEgDADIgWATQgeAZggAXIguAnIgWAPQgRAQgTAOQg7AvhBAiQhsA5h4AVIgDABIgsAGQguAFguAAIglgBg");
	this.shape_5.setTransform(382.4,818.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(152,111,66,0.8)").s().p("EhNjBOqQgxgBgxgGIgygJIgIgBQhHgMhDgWQg3gSgygZQgbgNgZgPQgcgLgagNIgUgKQgggSgggUQgzgggwgoIgVgSQgmghghgmIgUgVQgagggXghQg1hDgnhKIgIgQIgCgBIgKgWQhRiugEjPIgHgOIgBgBIgEgHIgFgMQgSgqgQguQgWhFgHhNQgJg+ADhFIADgYIgZADIgIABQgaABgcgEQgiAHglgCIgLgBIgVgCQgTgDgTgFQg7gRgwgpIgGgEIgCgBQgWgKgSgLQgpgZgegnIgEgGIgHgKQgQgXgMgaQgOgigHgkIgDABQgSAHgUgEIgSgEIgEgBQgKgCgHgEIgGgDQgagRgTgeIgBgBQgEgSgBgQIABgRQABgtASgmIACgHIAGgNIABgBIAFgHIALgRQALgUAOgRQAMgNANgMQAIgQAKgOIAGgHQAQgWAVgQQAJgIAKgGQAOgKAOgHIAIgEQAogRAnABQATgHAVgBQA8gGAwAcQAUgYAZgUIACgBQALgLALgIIAKgHQAegVAhgNQARgGAUgEQASgEASgBIALgCIAZgCQAegCAcAEQAXgFAXgDIAagCQAWAAAVACIATACIAJgLQALgNAOgMIAJgHQAtgjA0gJQAVgFAWgBIAOgBQA+ABAyAmQAXgEAZgBIAfAAQAIgGAIgDQAggTAlgFIATgCIAMABIANgCIALgCIAJgBIAEAAQBLgJA8AsQAQAKAMANIAIAIIAEAGIAGAJIAEgFQAaggAigSQASgJAVgFIAVgFQAkgEAgAJIANgUQAQgWAXgUIAEgFQAPgQARgOQAWgSAagMQAwgXA1AAIAGgBIASABQAygBAtAPQAXgeAegZIALgIQATgQAWgLQAZgNAcgHQAUgKAWgGQAKgFAMgCIATgDQBBgIA4AWIAQAEQANgXASgVIANgNIAFgFQAUgUAWgOQAygeA8gBIAWgBQAVACATAEQAxAGApAcIAUAQIABABQACgIAEgIQAEgNAGgKIAGgRIAPgdQAZgtAogkQAkgeApgSIACAAIAQgGIAXgKQAQgJARgGIAQgFQAGgzAWgrIAIgPQAKgUAPgSIAPgRIATgSQA0gvBCgOQATgFAUAAQAngDAkAJQALgaAPgXQALgSAOgPIADgFQAZgnAkggQAJgKAKgIIAFgEQAUgWAWgRIAOgKIADgCQAOgKAPgJIADgQQAah2BXhWQAugsA1gZIALgGIANgIQAdgRAggLIANgEIAGgHQATgYAYgTQgCglAEgoQAQiCBdhcQAUgUAXgPQAKgJANgHQgdhTAThjIABgGQABgZAFgYQAVhqBLhSQARgUATgPQATgRAVgMQgWhAALhMQAQhvBThOQAegbAggRIgFgVQgJgdAFgjIgBgKQABgUAEgSQADgQAFgOQAIgVAMgTQgehiALhwQADgaAGgaQAMhEAdg9QAqhYBJhHQAmgkAqgbQAdgTAfgOIgBgjQABgTACgUIAAgEIAGgdQAKgwATgrQAHgRAJgQQAcg2ArguQAMgOAOgMIAbgeIABgBIgFgXQgPhbAUhiQANhIAhg/IAEgIIAHgRIASgkQAIgRAJgPQAEgLAFgLQAKg9AjgyQAXgeAbgUQABgMADgMIgBgEQgGgPgFgPQgKgkgCgmIgDgGIgBgIIABgUQACgWAGgNIAAgCQARhrBLhPIAFgEQAHgQAJgNQALgRAMgNIgGgNQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIgEgQQgFgMgCgNQgCgMAAgMIACgOQABgKADgKIABgFQAHgUAMgSIAAgLIgGgZQgDgXABgZQABgPACgOQAEgeAMgbQASgvAmgkQAEgFAGgEIALgMQgCgQAAgSIADgVQADgVAHgTIAFgNIAFgKIAKgRIALgRIgEgQQgVg2AKhAIAEgXIAGgTIAIgeQAEgNAFgMQAIgSALgPIALgSIAMgPIgCgQQgFgoAHgqIAJgmIAFgVQAKgcAPgcQAMggAUgeIAIgLIABgBIACgFIAYgjIAFgHQgDgRAAgSIAAgWQAFhEAwgyQAZgbAfgNIAJgDQgQgrAFg2QAFgqASgkQAUhNA9g8IAWgTQgSg3AIhBQAJhaA3hDIgCgEQgPg5AIhEQAOh7BchUQARgPARgMQgVgNgRgVQgpgzAIhJQABgQAEgOQAPg1ArgmIAKgIQA9g7BVgBIAEAAQBaABBABGQAYAZAPAdIAOAPQAUAXALAhQALAhAAAhQABAVgFAVQAVAEAWAIIAGgRIAEgPIACgJQAZhkBbhEQAjgbAmgQQAcgLAegGQAegLAhgEIAZgCIAUgDIACAEQBFAEA+AoIAKAHIAFAFQBFBBAKBeQAHBHgaA3IADAEQAZAYADAlIABAVIABAEIADAaQAwA4AcBDQAcA8AGBHQAIBUgWBJIABALQAJBlg2BIIgGAIIgBADQAcAmAFAyQACAagDAYIAAAFQAHBDgNA6IACACIAJAHQAOAKALANQALAPAHARQAFAKADALQAMAtgPAlQgGAQgIAKIACAFQARAGAPALQAKAKAHAKIALAPIAIAQQAHAFAEAGQARAQANAVQAVAgAMAiQANAugCAyIgCAUQABAigIAgIAAABIgDAQQgDAVgHAQIABAAQAIgCAJACQAXAEATANIANALQAJAJAHAKQALARAEAUQAFAcgIAXQAZAjANApQAJAeAEAgIABASQADBVgrBBQgNATgNAPIgJAKQAcAPAXAaIAPARIAIAIIASAXQAMAOAKAPQASAXAMAbQAHAQAGASIAAABIACAHIAHAgQAIAxgHAtQgCAugSApIgCAEIAJAEQAlASAfAeIAKAJQAPANANAOQARAUAOAVQAnA7AKBHIAEAQIACAdIAAABQAGAaABAbIABAZQAEASABAVQADBLghA9IgCAEIACAFIAGAJIAJAPQAJANAIAOQAJAQAGAQQAFAMADAMIAKAVIAAACQAiAxANA/QADAIABAIQAKA2gEAxQgEAagGAYIgBAHQAWASATAWQAjAmAYArIAJAQQAXAsANAwQAlATAgAkQAZAbAPAhQAUAqAEAyQAFA2gOAuQAWATAVAZIAFAHQBBBJAKBjIAGAaIACANQAJBAgOA4QA3BAAUBQIAGAcIAGAkQADAcgBAYQAGAcABAeQADAfgEAcQAMAUAHAXIAEABQAsAIAiAfQANALANAMQAMAMAKAOQApAzAJBBQAEAggDAdIAHAIQAuA2AVBAIAGARQAQAuAFAzQABAcgBAaQgCA6gUAyIAAAAQA2AQAsAoQBGBAARBbQACALABAMQAKAIAIAJQAjAjAXAqQACAkAFAmIABAIQBwAbBTBeQA5BBAcBPIALAFQBgAjBQBPQAtAuAiAzQCdAVB3B7QBvB0AgCbIAlABQAhACAeAGIAcAFIAZAGQCBAVBpBjQAlAjAeAoQAeAoAWAtIAqAUIA1AXQAvgGAwADQBEADA+ATQApAMAlATQBcAfBRBEIAJADIAIADQA2guBHAAQARAAAPACQA9AJAuAuQALALAKANQA6gpBIADQBZADBABIQAJAJAHAJQAUAaANAeIAJgIQA7g2BHgQQARgGAQgFQAggJAhgCQCDgIBiBWQBEgiBQgCQB7gDBfBIQAUgEAUgBIAVAAQA+AAA3AWQA6gcBFABQB4ADBWBbQAaAbATAgIASAMIAGgFQAxgiA+ADIAHgBQBEgIA+AaQAdANAbAVQA6ArAcBCQANASAJAUIAEAJQAQAkADAkQADAggKAhIgBABQgMAjgYAWQgRAMgVAGQgKADgJABIgFAAQgFAggMAeIgEAMIgFAHQgJANgJAJQgPAQgQAMQgaATgkAIIgcAFQgwAGgzgWIgEgCQgvBHhIAjQgwAXg4AEQgfACgfgEQgTgCgTgGQgfAAgfgHIgQAHQg5AbhBAGQg3AEg0gKQhmgVhPhMIgTgKIgTgLQg9AdhIADQgeABgfgEQgngEglgNQgjAQglAGQgcAKgeAFQgoAGgmgFQhHgIg7grIgRAQQghAcgpAUIgIAEIgSANIgNAHQgwAsg4AaQg4AZg9AIIgSAGQgfAJgfAFIgdACIgSABQhOAAhEgiQgVALgVAIIgPAOQgjAfgoAZIgJAFQh4BRiYAJIgKABIgvAAIgcgCQhPgGhIgbQhQgJhMgiQgeARggANQg4Abg8AOIgLACQgUAIgUAGIgOAFQhEAThIABQhqADhigmIgWgJIgLgCQgVgDgVgFQgagHgZgKQgbgGgagKIgKgDIgYgIIgJgEQg0gVgugeQgFgCgDgDIgPAAQgzgDgwgPIgRAZIgCAEQgLASgNARIgRATIgUAUQgSARgVAPQgeAWgjAQIgaAMIgNAEQgeAMgfAHIgHAAIgWAHQglARgmAJIgYAPIgEACQgnAXgtANIgCAAQg2AOg3AAIgUgBIgTAJIgNAFQgtAQguAHIgKACQg1AMg5AAQgSAAgQgCIgoADQg7ABg4gLIgVgEIgKgBQg4gFg2gRIgNgFQgrgNgogTIgcgOQgkgSgigXQgkgYghgcIgcgaIgEgEIgeAHIgFAAIgZAGIgNADQg3ANg5ACIgrgCIgWgCIgBAAIghgCQgjgGghgJIgEAAIgdAAIgEAAIgWAAQgWgBgVgCIgtgGIgCABQgPAMgSALIgPALIgFAEIgSAMIgZASQgoAZgpATQglAjgqAcIgCACIgVAUIgGAGIgKAKQgjAiglAdIgkAaQgzAqg1AfIgIAFQgoAcgqAWIgeAQQg8Acg/ASQg7ASg9AJQgvAHgxACQhKAEhJgKQgqgFgqgKQhBgQg+gbQghgPgfgRQhVgthMhCIgjggQg+g7gyhGIgDgFIgcggIgHgGQgfgfgagjIgIAEIgaAMIgFABQgeAPgeAKQijB/jJAZQgjAEgiABIgUABQghAAgggCQg3gEg0gKQgigHgigLQiZgviAhyIgcgCIgEAAIgCAAIgYAIIgIADQhDAXhKAHIgVACQgZABgYAAIgQgBQixgJiPhyIgPgMQgbgYgYgZIgUgWIgIgKIgDgCIgBgBIgSgLIgEAAIAAABQgaAjgiAeIgFAFIgFAEIgeAZIgHAEIgFAEQgzAwg9AaQghAOgjAIIgUADQgcAFgcAAIgYADQggAEgggDIgDABQgfAPghAGIgJACIgMAEIgEACIgEABQgSALgTAHIgVAHIgJADIgEAMIgBAHIgKAfIgKAbQgJAYgKAXQgJAXgLAWIgCAEQgRAngWAjIgDAFQgPAagSAZQgYAqgeAmIgPAUQgfAogjAkIgFAGQgeAdggAaIgSASQgVAWgVATIgRAPIgGAFQgCAEgEADIgYAVQghAbgiAYIgxAsIgYAQQgSASgUAPQg/A1hFAnQh0BCiBAaIgEABQgXAFgYADQg9AJg8AAIgSgBg");
	this.shape_6.setTransform(387.4,764.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(152,111,66,0.8)").s().p("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");
	this.shape_7.setTransform(392.7,709.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(152,111,66,0.8)").s().p("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");
	this.shape_8.setTransform(397.9,653);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(152,111,66,0.8)").s().p("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");
	this.shape_9.setTransform(403.1,594.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(152,111,66,0.8)").s().p("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");
	this.shape_10.setTransform(408.5,535.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},48).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[]},1).wait(172));

	// launch pad top
	this.instance_4 = new lib.launchpadtop();
	this.instance_4.setTransform(373.6,1041.1,0.55,1.024,0,0,0,0.4,0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#204C59").s().p("AAAgDIAAADIAAAEg");
	this.shape_11.setTransform(819.9,1017.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11,p:{y:1017.9}},{t:this.instance_4,p:{regY:0.2,scaleY:1.024,y:1041.1}}]}).to({state:[{t:this.shape_11,p:{y:1237.9}},{t:this.instance_4,p:{regY:0.1,scaleY:0.55,y:1238}}]},58).to({state:[]},1).to({state:[]},146).wait(26));

	// mountains 
	this.instance_5 = new lib.mountains("synched",0);
	this.instance_5.setTransform(448,741.5,1.024,1.007,0,0,0,0.7,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},58).wait(173));

	// planets far away 
	this.instance_6 = new lib.planetsfaraway();
	this.instance_6.setTransform(441.2,201.4,0.887,0.887,0,0,0,0.5,0.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(59).to({_off:false},0).wait(142).to({alpha:0},6).to({_off:true},18).wait(6));

	// planets
	this.instance_7 = new lib.uxplanet("synched",0);
	this.instance_7.setTransform(447,238.4,0.071,0.071,0,0,0,9.8,3.5);

	this.instance_8 = new lib.authenticityplanet("synched",0);
	this.instance_8.setTransform(253.4,69.9,0.054,0.054,0,0,0,10.2,5.5);

	this.instance_9 = new lib.developmentplanet("synched",0);
	this.instance_9.setTransform(624.2,66.5,0.024,0.024,0,0,0,3295.3,-206);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#67AE89").s().p("AidDlQhPi0hlicIhbiBQECA7DnCFIAEACQAYAOAiAVIB/BVIAGAFQBbBFBSBQQiEAFiAAAQioAAiegIg");
	this.shape_12.setTransform(97.3,194.2,0.09,0.09);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4D9F76").s().p("AjNExQhWkUiTj3QgvhOgwhEQgaglgQgUQEpBEEDCjQD9CgC+DpIAxBAQApA3AnA+IAXAmQmWgwl3hFg");
	this.shape_13.setTransform(98.6,195.9,0.09,0.09);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4D9F76").s().p("AFYIVQj5g3k0gXQg7mRjGl1Qg+h3hGhnIg+hVQEqBEEECkQD9ChC+DpIABABIArA5IAIAKIAjAwIBMB8IBiDFIAzCKIALAmIAFAOQiZg4iogmg");
	this.shape_14.setTransform(99.4,197.7,0.09,0.09);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#67AE89").s().p("AmJmEQhUjTh1i8IhqiZQEEA7DoCGIADABQAiAUAdASIABABQCXBgCEB/IALAKIAqArIBDBJQARAUATAYIANAQQA8BMAuBHIAnBBIBsDWIAeBNIAZBMIAXBRIAIAfIAMAzIAGAhQAGAaADAaIAQB3QADAdABAdIACAcQACAnAAAwIAAAIQnuBYnrAYQCcqXkJqag");
	this.shape_15.setTransform(99.8,200.6,0.09,0.09);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4D9F76").s().p("ApgUcQE1njA7oFQAumdh0mjQhTktiekSQgzhXg0hKQgbgngTgYQEEA8DoCFIADACQAiATAdASIABABQCXBgCEB/IALALIAqAqIBDBKQARATATAYIANAQQA8BMAuBIIAnBAIBsDZIAeBMIAZBNIAXBQIAIAdIAMA0IAGAhQAGAZADAaIAQB3QADAdABAdIACAcQACAnAAAxQAAA0gDAzIgCAhQgDAmgEAfIgEAlIgKBAIgHAlIgOBCIgHAgQgJAlgPAwIgDAKQgJAggWA+Ig0B6IgcA6IgIASQiJAXikgIQhGgDhgALIixAVQhzANhvAAQh7AAh0gQg");
	this.shape_16.setTransform(99.8,204,0.09,0.09);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#67AE89").s().p("AuFYRQJDo0DFp0QCcn3hcoKQhDl4i7leQg8hvhChfQgigygYgdQEEA7DoCGIAEABQAfAUAdASIACABQCZBgCDB/IAMAKIApArIBEBJQAQAUAUAYIAMAQQA8BMAuBHIAnBBIBsDYIAeBNIAZBMIAYBRIAHAfIAMAzIAHAhQAFAaAEAaIAPB3QADAdABAdIACAbQACAmABAwIgDBUIgGBdIgdDAIgXBgIgRA+IgGASQgIAcgRAtIgGARIgXA6IgIATQgOAigRAkIgvBaIglBBIgGAIIgkA6Ig7BSQgaAkgUAWIhCBOQgPASgkAjIgPAQIgrAoIgPAPIg4AvIhQA/Ig9AsIgOAJIgzAhIgUAMQgWANgoAYQnCgkmchXg");
	this.shape_17.setTransform(98,207.2,0.09,0.09);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4D9F76").s().p("Aw2bZQL1pZElqtQDookhIpDQg1mfjJmGQhAh8hIhsQglg2gcgiQErBEECCkQD/CiC+DqQC/DuBnEdQBqEoAAE8QAAFviOFQQiKFEj6D7Qj7D7lDCJQlQCOlwAAQixAAisghg");
	this.shape_18.setTransform(96.4,208.2,0.09,0.09);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#76BE9A").s().p("AjwCpQmohVljiqQFviuGYAAQFpAAFNCLQFBCED6D0QiHAGiBAAQojAAnChcg");
	this.shape_19.setTransform(92,194,0.09,0.09);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5CAD86").s().p("AqLA1Qj+hQjEhWIiShGQDRh/DqhCQDxhED9AAQHoAAGlD1QGYDtDxGXQxAiAsrkIg");
	this.shape_20.setTransform(92.6,195.7,0.09,0.09);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#5CAD86").s().p("AR3IOQmOhEoWACQo/ABqrigQjWgxjHg8IicgyQD5lsGEjTQGRjZHLAAQEuAAEcBiQETBfDpCwQDlCvCkDrQCnDxBSEZQjWhQkEgtg");
	this.shape_21.setTransform(90.9,197.5,0.09,0.09);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#76BE9A").s().p("Aq/NgQmLhJlYh2QjQhHiRhHQA2k8ChkUQCckQDwjMQDxjOEohvQExhyFKAAQFvAAFPCOQFFCJD7D7QD6D6CKFDQCOFRAAFwIAAAHQqsB6qHAAQpXAAo5hpg");
	this.shape_22.setTransform(89.9,200.4,0.09,0.09);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5CAD86").s().p("AB6TfQmGh3kOg7Qkmg8jkg1QoBh4jmjxQgFg/AAhGQAAlwCOlPQCJlED7j7QD6j7FFiJQFQiOFvAAQFwAAFQCOQFFCJD6D7QD7D6CJFFQCOFPAAFwQAADcg0DUQgyDPhiC8QiGAYingIQhRgDiGAQQi1AWg/AEQgzADg0AAQkkAAlMhkg");
	this.shape_23.setTransform(89.8,203.8,0.09,0.09);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#76BE9A").s().p("Av1TsQj/hujGh8Qg/gmgxgkIglgbQhei7gxjLQgyjQAAjZQAAluCOlRQCJlED7j7QD6j7FFiJQFQiOFvAAQFwAAFQCOQFFCJD6D7QD7D6CJFFQCOFRAAFuQAAH6kFGuQj+GjmtDqQwnhWsvlhg");
	this.shape_24.setTransform(89.8,207,0.09,0.09);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#5CAD86").s().p("Aq/aDQlFiJj6j7Qj7j6iJlFQiOlQAAlwQAAluCOlRQCJlED7j7QD6j7FFiJQFQiOFvAAQFwAAFQCOQFFCJD6D7QD7D6CJFFQCOFRAAFuQAAFwiOFQQiJFFj7D6Qj6D7lFCJQlQCOlwAAQlvAAlQiOg");
	this.shape_25.setTransform(89.8,208,0.09,0.09);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).to({state:[]},58).wait(173));

	// stars
	this.instance_10 = new lib.Startssymbols();
	this.instance_10.setTransform(377.2,504.3,1.357,1.357);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(203).to({alpha:0},5).to({_off:true},12).wait(11));

	// sky 
	this.instance_11 = new lib.sky2("synched",0);
	this.instance_11.setTransform(373.9,359.5,0.55,1.158,0,0,0,0.2,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(58).to({scaleY:1.36,y:449.1},0).to({_off:true},1).wait(172));

	// medium sky
	this.instance_12 = new lib.blacksky("synched",0);
	this.instance_12.setTransform(375.3,668.9,0.552,1.307,0,0,0,0.2,0.4);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(59).to({_off:false},0).wait(144).to({startPosition:0},0).to({alpha:0},6).to({_off:true},9).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-353.1,-33.1,2210.6,2408.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-353.1,-50,2210.6,2425.6), rect=new cjs.Rectangle(-353.1,-33.1,2210.6,2408.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-353.1,-33,2210.6,2408.7), rect, rect, rect, rect=new cjs.Rectangle(-353.1,-33.1,2210.6,2408.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(486.2,732.5,517.2,537.7), rect, rect, rect, rect, rect=null, rect, rect, rect, rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
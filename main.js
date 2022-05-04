var video;
var slider;
// var song;

// function preload() {
//     song = loadSound('gothbabe/gothbabe.mp3');
// }

function setup() {
    canvas = createCanvas(windowWidth, 300, WEBGL);
    canvas.id('p5canvas');

    video = createCapture(VIDEO);
    video.size(1280, 960);
    video.id('p5video');
    video.hide();
    function videoLoad() {
        video.loop();
    }

    // song.play();

    var seriously = new Seriously();
    var src = seriously.source('#p5video');
    var target = seriously.target('#p5canvas');

    var temperatureButton = createButton("normal");
    temperatureButton.mousePressed(temperature);
    function temperature() {
        var temperature = seriously.effect('temperature');
        // temperature.amount = '#effect-slider';
        temperature.source = src;
        target.source = temperature;
    // gives normal image somehow?
    }

    var blurButton = createButton("blur*");
    blurButton.mousePressed(blur);
    function blur() {
        var blur = seriously.effect('blur');
        blur.amount = '#effect-slider';
        blur.source = src;
        target.source = blur;
    }

    var tvglitchButton = createButton("tv glitch**");
    tvglitchButton.mousePressed(tvglitch);
    function tvglitch() {
        var tvglitch = seriously.effect('tvglitch');
        // tvglitch.amount = '#effect-slider';
        tvglitch.source = src;
        target.source = tvglitch;
    }

    var daltonizeButton = createButton("daltonize");
    daltonizeButton.mousePressed(daltonize);
    function daltonize() {
        var daltonize = seriously.effect('daltonize');
        // daltonize.amount = '#effect-slider';
        daltonize.source = src;
        target.source = daltonize;
    }

    var exposureButton = createButton("exposure");
    exposureButton.mousePressed(exposure);
    function exposure() {
        var exposure = seriously.effect('exposure');
        // exposure.amount = '#effect-slider';
        exposure.source = src;
        target.source = exposure;
    }

    var faderButton = createButton("fader*");
    faderButton.mousePressed(fader);
    function fader() {
        var fader = seriously.effect('fader');
        fader.amount = '#effect-slider';
        fader.source = src;
        target.source = fader;
    }

    var hexButton = createButton("hex");
    hexButton.mousePressed(hex);
    function hex() {
        var hex = seriously.effect('hex');
        // hex.amount = '#effect-slider';
        hex.source = src;
        target.source = hex;
    }

    var invertButton = createButton("invert");
    invertButton.mousePressed(invert);
    function invert() {
        var invert = seriously.effect('invert');
        // invert.amount = '#effect-slider';
        invert.source = src;
        target.source = invert;
    }

    var dbButton = createButton("direction blur*");
    dbButton.mousePressed(directionblur);
    function directionblur() {
        var directionblur = seriously.effect('directionblur');
        directionblur.amount = '#effect-slider';
        directionblur.source = src;
        target.source = directionblur;
    }
    
    var edgeButton = createButton("edge");
    edgeButton.mousePressed(edge);
    function edge() {
        var edge = seriously.effect('edge');
        // edge.amount = '#effect-slider';
        edge.source = src;
        target.source = edge;
    }

    var kaleidoscopeButton = createButton("kaleidoscope");
    kaleidoscopeButton.mousePressed(kaleidoscope);
    function kaleidoscope() {
        var kaleidoscope = seriously.effect('kaleidoscope');
        // kaleidoscope.amount = '#effect-slider';
        kaleidoscope.source = src;
        target.source = kaleidoscope;
    }

    var filmgrainButton = createButton("film grain*");
    filmgrainButton.mousePressed(filmgrain);
    function filmgrain() {
        var filmgrain = seriously.effect('filmgrain');
        filmgrain.amount = '#effect-slider';
        filmgrain.source = src;
        target.source = filmgrain;
    }

    var nvButton = createButton("night vision");
    nvButton.mousePressed(nightvision);
    function nightvision() {
        var nightvision = seriously.effect('nightvision');
        // nightvision.amount = '#effect-slider';
        nightvision.source = src;
        target.source = nightvision;
    }

    var pixelateButton = createButton("pixelate");
    pixelateButton.mousePressed(pixelate);
    function pixelate() {
        var pixelate = seriously.effect('pixelate');
        // pixelate.amount = '#effect-slider';
        pixelate.source = src;
        target.source = pixelate;
    }

    var rippleButton = createButton("ripple");
    rippleButton.mousePressed(ripple);
    function ripple() {
        var ripple = seriously.effect('ripple');
        // ripple.amount = '#effect-slider';
        ripple.source = src;
        target.source = ripple;
    }
    
    var sketchButton = createButton("sketch");
    sketchButton.mousePressed(sketch);
    function sketch() {
        var sketch = seriously.effect('sketch');
        // sketch.amount = '#effect-slider';
        sketch.source = src;
        target.source = sketch;
    }

    var ofButton = createButton("optical flow");
    ofButton.mousePressed(opticalflow);
    function opticalflow() {
        var opticalflow = seriously.effect('opticalflow');
        // opticalflow.amount = '#effect-slider';
        opticalflow.source = src;
        target.source = opticalflow;
    }

    var splitButton = createButton("freeze");
    splitButton.mousePressed(split);
    function split() {
        var split = seriously.effect('split');
        // split.amount = '#effect-slider';
        split.source = src;
        target.source = split;
    //freezes?
    }

    seriously.go();

    slider = createSlider(0.001, 1, 0.5, 0.01);
    slider.id('effect-slider');
}
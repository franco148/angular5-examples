//Hide complexity behind a single method.
//Home Teather example
var BlurayPlayer = /** @class */ (function () {
    function BlurayPlayer() {
    }
    BlurayPlayer.prototype.on = function () {
        console.log('Bluray player turning on...');
    };
    BlurayPlayer.prototype.turnOff = function () {
        console.log('Bluray turning off...');
    };
    BlurayPlayer.prototype.play = function () {
        console.log('Playing bluray disc...');
    };
    return BlurayPlayer;
}());
var Amplifier = /** @class */ (function () {
    function Amplifier() {
    }
    Amplifier.prototype.on = function () {
        console.log('Amp is turning on...');
    };
    Amplifier.prototype.turnOff = function () {
        console.log('Amp turning off...');
    };
    Amplifier.prototype.setSource = function (source) {
        console.log('Setting source to ' + source);
    };
    Amplifier.prototype.setVolume = function (volumeLevel) {
        console.log('Setting volume to ' + volumeLevel);
    };
    return Amplifier;
}());
var Lights = /** @class */ (function () {
    function Lights() {
    }
    Lights.prototype.dim = function () {
        console.log('Lights are dimming..');
    };
    return Lights;
}());
var Tv = /** @class */ (function () {
    function Tv() {
    }
    Tv.prototype.turnOn = function () {
        console.log('TV turning on...');
    };
    Tv.prototype.turnOff = function () {
        console.log('TV turning off...');
    };
    return Tv;
}());
var PopcornMaker = /** @class */ (function () {
    function PopcornMaker() {
    }
    PopcornMaker.prototype.turnOn = function () {
        console.log('Popcorn maker turning on...');
    };
    PopcornMaker.prototype.turnOff = function () {
        console.log('Popcorn maker turning off...');
    };
    PopcornMaker.prototype.pop = function () {
        console.log('Popping corn!');
    };
    return PopcornMaker;
}());
var HomeTheaterFacade = /** @class */ (function () {
    function HomeTheaterFacade(bluray, amp, lights, tv, popcorn) {
        this.bluray = bluray;
        this.amplifier = amp;
        this.lights = lights;
        this.tv = tv;
        this.popcornMaker = popcorn;
    }
    HomeTheaterFacade.prototype.watchMovie = function () {
        this.popcornMaker.turnOn();
        this.popcornMaker.pop();
        this.lights.dim();
        this.tv.turnOn();
        this.amplifier.on();
        this.amplifier.setSource('bluray');
        this.amplifier.setVolume(11);
        this.bluray.on();
        this.bluray.play();
    };
    HomeTheaterFacade.prototype.endMovie = function () {
        this.popcornMaker.turnOff();
        this.tv.turnOff();
        this.amplifier.turnOff();
        this.bluray.turnOff();
    };
    return HomeTheaterFacade;
}());
var bluray = new BlurayPlayer();
var amp = new Amplifier();
var lights = new Lights();
var tv = new Tv();
var popcorn = new PopcornMaker();
var homeTheater = new HomeTheaterFacade(bluray, amp, lights, tv, popcorn);
homeTheater.watchMovie();

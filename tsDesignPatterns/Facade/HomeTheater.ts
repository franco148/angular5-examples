//Hide complexity behind a single method.
//Home Teather example

class BlurayPlayer {
    on() {
        console.log('Bluray player turning on...');
    }

    turnOff() {
        console.log('Bluray turning off...');
    }

    play() {
        console.log('Playing bluray disc...');
    }
}

class Amplifier {
    on() {
        console.log('Amp is turning on...');
    }

    turnOff() {
        console.log('Amp turning off...');
    }

    setSource(source: string) {
        console.log('Setting source to ' + source);
    }

    setVolume(volumeLevel: number) {
        console.log('Setting volume to ' + volumeLevel);
    }
}

class Lights {
    dim() {
        console.log('Lights are dimming..');
    }
}

class Tv {
    turnOn() {
        console.log('TV turning on...');
    }

    turnOff() {
        console.log('TV turning off...');
    }
}

class PopcornMaker {
    turnOn() {
        console.log('Popcorn maker turning on...');
    }

    turnOff() {
        console.log('Popcorn maker turning off...');
    }

    pop() {
        console.log('Popping corn!');
    }
}


class HomeTheaterFacade {
    
    private bluray: BlurayPlayer;
    private amplifier: Amplifier;
    private lights: Lights;
    private tv: Tv;
    private popcornMaker: PopcornMaker;

    constructor(bluray: BlurayPlayer, amp: Amplifier, lights: Lights, tv: Tv, popcorn: PopcornMaker) {
        this.bluray = bluray;
        this.amplifier = amp;
        this.lights = lights;
        this.tv = tv;
        this.popcornMaker = popcorn;
    }

    public watchMovie() {
        this.popcornMaker.turnOn();
        this.popcornMaker.pop();

        this.lights.dim();

        this.tv.turnOn();

        this.amplifier.on();
        this.amplifier.setSource('bluray');
        this.amplifier.setVolume(11);

        this.bluray.on();
        this.bluray.play();
    }

    public endMovie() {
        this.popcornMaker.turnOff();
        
        this.tv.turnOff();

        this.amplifier.turnOff();

        this.bluray.turnOff();
    }
}


let bluray = new BlurayPlayer();
let amp = new Amplifier();
let lights = new Lights();
let tv = new Tv();
let popcorn = new PopcornMaker();


let homeTheater = new HomeTheaterFacade(bluray, amp, lights, tv, popcorn);
homeTheater.watchMovie();






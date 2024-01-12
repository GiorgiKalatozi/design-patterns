// Subsystem components
class Amplifier {
  turnOn(): void {
    console.log("Amplifier is on");
  }

  turnOff(): void {
    console.log("Amplifier is off");
  }
}

class Lights {
  dim(): void {
    console.log("Lights are dimmed");
  }

  brighten(): void {
    console.log("Lights are brightened");
  }
}

class Projector {
  start(): void {
    console.log("Projector is starting");
  }

  stop(): void {
    console.log("Projector is stopping");
  }
}

// Facade
class HomeTheaterFacade {
  private amplifier: Amplifier;
  private lights: Lights;
  private projector: Projector;

  constructor() {
    this.amplifier = new Amplifier();
    this.lights = new Lights();
    this.projector = new Projector();
  }

  watchMovie(): void {
    console.log("Get ready to watch a movie!");
    this.amplifier.turnOn();
    this.lights.dim();
    this.projector.start();
  }

  endMovie(): void {
    console.log("Movie night is over!");
    this.amplifier.turnOff();
    this.lights.brighten();
    this.projector.stop();
  }
}

// Client code
const homeTheater = new HomeTheaterFacade();

// Client uses the simplified interface provided by the facade
homeTheater.watchMovie(); // Turns on amplifier, dims lights, starts projector
homeTheater.endMovie(); // Turns off amplifier, brightens lights, stops projector

// weaker form of association.

class Engine {
  // Engine implementation
}

class Car {
  private engine: Engine;

  constructor(engine: Engine) {
    this.engine = engine;
  }
}

// Aggregation example
const carEngine = new Engine();
const myCar = new Car(carEngine);

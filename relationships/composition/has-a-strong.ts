// Example 1

class Wheel {
  // Implementation
}

class Door {
  // Implementation
}
class Seat {
  // Implementation
}

class Vehicle {
  private readonly wheels: string[];
  private readonly doors: string[];
  private readonly seats: string[];

  constructor() {
    this.wheels = Array(4).fill(new Wheel());
    this.doors = Array(4).fill(new Door());
    this.seats = Array(4).fill(new Seat());
  }

  drive() {
    // Implementation
  }
}

const vehicle = new Vehicle();
// The Wheel, Door, and seats will be garbage collected (deleted) when they're no longer in use

// Note that you cannot keep the Door or any other object alive after destroying the Vehicle object.
// This is why it's called composition: the Vehicle class/object is composed of Doors, Wheels, and Seats.

// Example 2

// class Engine {
//     // implementation
// }

// class Car {
//     private engine: Engine;

//     constructor() {
//         this.engine = new Engine();
//     }
// }

// // Composition example
// const myCar = new Car();

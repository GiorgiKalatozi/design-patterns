enum VehicleType {
  CAR = "CAR",
  BUS = "BUS",
  TRUCK = "TRUCK",
  HELICOPTER = "HELICOPTER",
  BOAT = "BOAT",
}
// Example 1 with abstract class
abstract class Vehicle {
  abstract drive(): void;
}

class Car extends Vehicle {
  drive(): void {
    console.log("Driving a car!");
  }
}

class Truck extends Vehicle {
  drive(): void {
    console.log("Driving a truck!");
  }
}

class Helicopter extends Vehicle {
  drive(): void {
    console.log("Driving a helicopter!");
  }
}

class Boat extends Vehicle {
  drive(): void {
    console.log("Driving a boat!");
  }
}

class Bus extends Vehicle {
  drive(): void {
    console.log("Driving a bus!");
  }
}

class VehicleFactory {
  public createVehicle(type: VehicleType): Vehicle {
    switch (type) {
      case VehicleType.CAR:
        return new Car();
      case VehicleType.TRUCK:
        return new Truck();
      case VehicleType.HELICOPTER:
        return new Helicopter();
      case VehicleType.BOAT:
        return new Boat();
      case VehicleType.BUS:
        return new Bus();
      default:
        throw new Error(`Unknown vehicle type: ${type}`);
    }
  }
}

const vehicleFactory = new VehicleFactory();
const car = vehicleFactory.createVehicle(VehicleType.CAR);
car.drive(); // Output: Driving a car!

const helicopter = vehicleFactory.createVehicle(VehicleType.HELICOPTER);
helicopter.drive(); // Output: Driving a helicopter!

// Example 2 with interface
// Burger interface
interface Burger {
  prepare(): void;
}

// Concrete burger classes
class Cheeseburger implements Burger {
  prepare() {
    console.log("Preparing Cheeseburger");
  }
}

class VeggieBurger implements Burger {
  prepare() {
    console.log("Preparing Veggie Burger");
  }
}

// Burger factory interface
interface BurgerFactory {
  createBurger(): Burger;
}

// Concrete burger factory classes
class CheeseburgerFactory implements BurgerFactory {
  createBurger(): Burger {
    return new Cheeseburger();
  }
}

class VeggieBurgerFactory implements BurgerFactory {
  createBurger(): Burger {
    return new VeggieBurger();
  }
}

// Client code
function orderBurger(factory: BurgerFactory): void {
  const burger = factory.createBurger();
  burger.prepare();
}

// Example usage
const cheeseburgerFactory = new CheeseburgerFactory();
const veggieBurgerFactory = new VeggieBurgerFactory();

orderBurger(cheeseburgerFactory);
// Output: Preparing Cheeseburger

orderBurger(veggieBurgerFactory);
// Output: Preparing Veggie Burger

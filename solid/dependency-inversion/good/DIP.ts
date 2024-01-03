// Good: Abstraction and dependency injection
interface Switchable {
  turnOn(): void;
  turnOff(): void;
}

class LightBulb implements Switchable {
  turnOn(): void {
    // Implementation
  }

  turnOff(): void {
    // Implementation
  }
}

class Switch {
  private device: Switchable;

  constructor(device: Switchable) {
    this.device = device;
  }

  operate(): void {
    this.device.turnOn();
    // Operation using the Switchable abstraction
  }
}

// In this improved example, the Switch class depends on the Switchable interface
// instead of the concrete LightBulb class. The LightBulb class implements the
// Switchable interface, and the dependency is injected into the Switch class. This
// adheres to the Dependency Inversion Principle.

// Example 2

// interface Database {
//     connect(): void;
//     save(data: any): void;
//     disconnect(): void;
//   }

//   class OrderService {
//     private database: Database; // Dependency on abstraction

//     constructor(database: Database) {
//       this.database = database;
//     }

//     saveOrder(order: Order): void {
//       this.database.connect();
//       this.database.save(order);
//       this.database.disconnect();
//     }
//   }

//   // Inject different database implementations at runtime:
//   const orderService1 = new OrderService(new MySQLDatabase());
//   const orderService2 = new OrderService(new MongoDBDatabase());

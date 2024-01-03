// Bad: High-level module directly depends on low-level module
class LightBulb {
  public turnOn(): void {
    // Implementation
  }

  public turnOff(): void {
    // Implementation
  }
}

class Switch {
  private bulb: LightBulb;

  constructor() {
    this.bulb = new LightBulb();
  }

  public operate(): void {
    // Operation using the LightBulb
  }
}

// In this example, the Switch class directly depends on the LightBulb class, violating DIP.
// If there are changes in the LightBulb class, it could potentially affect the Switch class.

// Example 2

// class OrderService {
//   private database = new MySQLDatabase(); // Direct dependency on concrete implementation
//
//   saveOrder(order: Order): void {
// this.database.connect();
// this.database.save(order);
// this.database.disconnect();
//   }
// }
//

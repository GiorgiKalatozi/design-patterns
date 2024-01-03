// Bad: Single large interface
interface Worker {
  work(): void;
  eat(): void;
  sleep(): void;
}

class Human implements Worker {
  work(): void {
    console.log("Working...");
  }

  eat(): void {
    console.log("Eating...");
  }

  sleep(): void {
    console.log("Sleeping...");
  }
}

class Robot implements Worker {
  work(): void {
    console.log("Working...");
  }

  eat(): void {
    // Robots don't eat, but forced to implement the method
    console.log("Charging...");
  }

  sleep(): void {
    // Robots don't sleep, but forced to implement the method
    console.log("Powering down...");
  }
}

// In this example, the Worker interface is too broad, and both Human and Robot
// have to implement methods that are irrelevant to their nature. This violates the ISP
// because classes are forced to depend on methods they don't use.

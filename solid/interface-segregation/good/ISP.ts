// Good: Segregated interfaces
interface Workable {
  work(): void;
}

interface Eatable {
  eat(): void;
}

interface Sleepable {
  sleep(): void;
}

class Human implements Workable, Eatable, Sleepable {
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

class Robot implements Workable {
  work(): void {
    console.log("Working...");
  }
}

// In this improved example, the Worker interface is split into smaller, more focused
// interfaces (Workable, Eatable, Sleepable). Now, classes can choose to
// implement only the interfaces they need, adhering to the Interface Segregation
// Principle. The Robot class, for instance, implements only the Workable interface
// as it doesn't need to eat or sleep.

class Animal {
  public breathe() {
    console.log("Breathing...");
  }
}

class Dog extends Animal {
  public bark() {
    console.log("Woof!");
  }
}

const dog = new Dog();
dog.breathe(); // Output: Breathing... (Inherited from Animal)
dog.bark(); // Output: Woof!

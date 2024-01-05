// Bad example
class Animal {
  makeSound(): void {
    console.log("Some generic sound");
  }
}

class BadDog extends Animal {
  // Overriding without adding any meaningful behavior
}

// Good example
class GoodDog extends Animal {
  makeSound(): void {
    console.log("Woof! Woof!");
  }
}

//
class GoodAnimal {
  eat(): void {
    console.log("Eating...");
  }

  sleep(): void {
    console.log("Sleeping...");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof!");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("Meow!");
  }
}

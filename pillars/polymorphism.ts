// Bad
class BadBird {
  makeSound(): void {
    console.log("Chirp! Chirp!");
  }
}

class BadCat {
  makeSound(): void {
    console.log("Meow!");
  }
}

const badBird = new BadBird();
const badCat = new BadCat();

badBird.makeSound(); // Output: Chirp! Chirp!
badCat.makeSound(); // Output: Meow!

// Good
interface Animal {
  makeSound(): void;
}

class GoodBird implements Animal {
  public makeSound(): void {
    console.log("Chirp! Chirp!");
  }
}

class GoodCat implements Animal {
  public makeSound(): void {
    console.log("Meow!");
  }
}

const goodBird: Animal = new GoodBird();
const goodCat: Animal = new GoodCat();

goodBird.makeSound(); // Output: Chirp! Chirp!
goodCat.makeSound(); // Output: Meow!

//
class Shape {
  public draw(): void {
    // Default implementation
  }
}

class Circle extends Shape {
  public override draw(): void {
    // Draw a circle
  }
}

class Square extends Shape {
  public override draw(): void {
    // Draw a square
  }
}

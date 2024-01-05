// Bad
class BadShape {
  public calculateArea(): number {
    // No abstraction, implementation details exposed
    console.log("Calculating area...");
    return 0;
  }
}

// Good example
abstract class Shape {
  abstract calculateArea(): number;
}

class Circle extends Shape {
  private radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  public calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

const myCircle = new Circle(5);
console.log(myCircle.calculateArea()); // Output: 78.54

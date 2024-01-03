abstract class Shape {
  abstract area(): number; // Method needs to be implemented by subclasses
}

class Square extends Shape {
  constructor(private side: number) {
    super();
  }

  public area(): number {
    return this.side * this.side;
  }
}

class Circle extends Shape {
  // This violates LSP!
  constructor(private radius: number) {
    super();
  }

  public area(): number {
    // Not consistent with Shape! Throws error instead of returning area
    throw new Error("Not implemented yet");
  }

  public perimeter(): number {
    // Adds functionality not expected by Shape
    return 2 * Math.PI * this.radius;
  }
}

function printArea(shape: Shape) {
  try {
    console.log("Area:", shape.area());
  } catch (error) {
    console.error("Error:", error);
  }
}

const square = new Square(5);
const circle = new Circle(3);

printArea(square); // Works fine, prints area
printArea(circle); // Error: "Not implemented yet"

// Why it's bad:

// Circle violates LSP: You can't replace a Square with a Circle in the printArea function
// because Circle.area() throws an error, while Shape expects an area calculation.
// This breaks the contract established by the Shape class.

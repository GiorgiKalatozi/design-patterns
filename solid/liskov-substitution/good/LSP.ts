abstract class Shape {
  abstract area(): number;
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
  constructor(private radius: number) {
    super();
  }

  public area(): number {
    // Consistent with Shape! Calculates area using formula
    return Math.PI * Math.pow(this.radius, 2);
  }
}

// Util function
function printArea(shape: Shape) {
  try {
    console.log("Area:", shape.area());
  } catch (error) {
    console.error("Error:", error);
  }
}

const square = new Square(5);
const circle = new Circle(3);

printArea(square); // Works fine
printArea(circle); // Works fine, prints area using circle's formula

// No Error! Both Square and Circle seamlessly fit the "Shape" mold
// Remember, LSP ensures that subclasses are reliable replacements for
// their parent class, making your code more predictable and robust.

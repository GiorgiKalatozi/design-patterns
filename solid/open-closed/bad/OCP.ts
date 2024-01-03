// Bad: Open for modification
class Rectangle {
  public readonly width: number;
  public readonly height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
}

// Bad: Closed for extension
class AreaCalculator {
  public calculateArea(rectangle: Rectangle): number {
    return rectangle.width * rectangle.height;
  }
}

// Bad: Closed for extension
class Shape {
  constructor(private width: number, private height: number) {}

  public calculateArea(): number {
    return this.width * this.height;
  }
}

// Adding a new shape type (e.g., circle) would require modifying the Shape class

// In this example, if you want to add a new shape (e.g., Circle),
// you would need to modify the AreaCalculator class.
// This violates the Open/Closed Principle because the class
// is not open for extension without modifying its code.

// // Good: Open for extension
// OCP with interface
interface Shape {
  calculateArea(): number;
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  public calculateArea(): number {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  constructor(private radius: number) {}

  public calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

// Good: Closed for modification / Existing code using Shape remains unchanged:
function calculateTotalArea(shapes: Shape[]): number {
  return shapes.reduce((total, shape) => total + shape.calculateArea(), 0);
}

const rectangle = new Rectangle(5, 3);
const circle = new Circle(2);
const totalArea = calculateTotalArea([rectangle, circle]);
console.log("Total area:", totalArea);

// // Good: Open for extension
// OCP with abstract class
// abstract class Shape {
//   abstract draw(): void;
//   abstract calculateArea(): number;
// }

// class Rectangle extends Shape {
//   private readonly width: number;
//   private readonly height: number;

//   constructor(width: number, height: number) {
//     super();
//     this.width = width;
//     this.height = height;
//   }

//   public draw(): void {
//     console.log("Drawing Square");
//   }

//   public calculateArea(): number {
//     return this.width * this.height;
//   }
// }

// class Circle extends Shape {
//   private readonly radius: number;

//   constructor(radius: number) {
//     super();
//     this.radius = radius;
//   }

//   public draw(): void {
//     console.log("Drawing Circle");
//   }

//   public calculateArea(): number {
//     return Math.PI * Math.pow(this.radius, 2);
//   }
// }

// // Good: Closed for modification
// class DrawingSystem {
//   public drawShape(shape: Shape): void {
//     shape.draw();
//   }
// }

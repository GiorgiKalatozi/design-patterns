// Subject interface
interface Image {
  display(): void;
}

// Real Subject
class RealImage implements Image {
  private filename: string;

  constructor(filename: string) {
    this.filename = filename;
    this.loadImage();
  }

  private loadImage(): void {
    console.log(`Loading image: ${this.filename}`);
  }

  display(): void {
    console.log(`Displaying image: ${this.filename}`);
  }
}

// Proxy
class ImageProxy implements Image {
  private realImage: RealImage | null = null;
  private filename: string;

  constructor(filename: string) {
    this.filename = filename;
  }

  display(): void {
    if (this.realImage === null) {
      this.realImage = new RealImage(this.filename);
    }
    this.realImage.display();
  }
}

// Client code
const imageProxy1 = new ImageProxy("image1.jpg");
imageProxy1.display(); // Image is loaded
imageProxy1.display(); // Image is already loaded, no additional loading

const imageProxy2 = new ImageProxy("image2.jpg");
// Image is not loaded yet

imageProxy2.display(); // Image is loaded only when needed

// Example 2
interface ISubject {
  getName(): string;
  setName(name: string): void;
}

class RealSubject implements ISubject {
  private name: string = "Real Subject";

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }
}

class ProxySubject implements ISubject {
  private subject: RealSubject;

  constructor() {
    this.subject = new RealSubject();
  }

  getName(): string {
    console.log("Proxy intercepting getName()");
    return this.subject.getName();
  }

  setName(name: string): void {
    console.log("Proxy intercepting setName()");
    this.subject.setName(name);
  }
}

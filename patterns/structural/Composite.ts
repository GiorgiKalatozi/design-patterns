// Component interface
interface FileSystemComponent {
  display(): void;
}

// Leaf (File)
class File implements FileSystemComponent {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  display(): void {
    console.log(`File: ${this.name}`);
  }
}

// Composite (Directory)
class Directory implements FileSystemComponent {
  private name: string;
  private children: FileSystemComponent[] = [];

  constructor(name: string) {
    this.name = name;
  }

  add(component: FileSystemComponent): void {
    this.children.push(component);
  }

  remove(component: FileSystemComponent): void {
    const index = this.children.indexOf(component);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  display(): void {
    console.log(`Directory: ${this.name}`);
    for (const child of this.children) {
      child.display();
    }
  }
}

// Client code
const file1 = new File("Document.txt");
const file2 = new File("Image.jpg");
const file3 = new File("Spreadsheet.xlsx");

const directory1 = new Directory("Folder1");
directory1.add(file1);
directory1.add(file2);

const directory2 = new Directory("Folder2");
directory2.add(file3);

const rootDirectory = new Directory("Root");
rootDirectory.add(directory1);
rootDirectory.add(directory2);

// Display the entire file system
rootDirectory.display();

// example 2
// Component interface
interface Graphic {
  draw(): void;
}

// Leaf
class Circle implements Graphic {
  draw() {
    console.log("Drawing a circle");
  }
}

class Square implements Graphic {
  draw() {
    console.log("Drawing a square");
  }
}

// Composite
class Drawing implements Graphic {
  private children: Graphic[] = [];

  add(child: Graphic) {
    this.children.push(child);
  }

  remove(child: Graphic) {
    this.children = this.children.filter((c) => c !== child);
  }

  draw() {
    this.children.forEach((child) => child.draw());
  }
}

// Usage
const drawing = new Drawing();
drawing.add(new Circle());
drawing.add(new Square());
drawing.add(new Drawing()); // Nested composite

drawing.draw(); // Output: Drawing a circle, Drawing a square

// Aggregation represents a "whole-part" relationship,
// weaker form of association.

// Example 1
class Engine {
  // Engine implementation
}

class Car {
  private engine: Engine;

  constructor(engine: Engine) {
    this.engine = engine;
  }
}

// Aggregation example
const engine = new Engine();
const myCar = new Car(engine);

// Example 2
class Library {
  public books: Book[] = [];

  public addBook(book: Book) {
    this.books.push(book);
  }
}

class Book {
  // ...
}

// Books can exist independently of a Library.
const book = new Book();
const library = new Library();
library.addBook(book);

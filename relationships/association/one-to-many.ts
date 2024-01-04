class Author {
  name: string;
  books: Book[];

  constructor(name: string) {
    this.name = name;
    this.books = [];
  }

  public writeBook(title: string): void {
    this.books.push(new Book(title, this));
  }
}

class Book {
  title: string;
  author: Author;

  constructor(title: string, author: Author) {
    this.title = title;
    this.author = author;
  }
}

// Usage
const jkRowling = new Author("J.K. Rowling");
jkRowling.writeBook("Harry Potter and the Prisoner of Azkaban");
jkRowling.writeBook("Harry Potter and the Philosopher's Stone");
jkRowling.writeBook("Harry Potter and the Half-Blood Prince");
jkRowling.writeBook("Harry Potter and the Order of the Phoenix");

class Author {
  private name: string;
  public books: Book[] = [];

  constructor(name: string) {
    this.name = name;
  }

  public addBook(title: string) {
    this.books.push(new Book(this, title));
  }
}

class Book {
  public title: string;
  public author: Author;

  constructor(author: Author, title: string) {
    this.author = author;
    this.title = title;
  }
}

const shakespeare = new Author("William Shakespeare");
shakespeare.addBook("Hamlet");
shakespeare.addBook("Romeo and Juliet");

console.log(`Shakespeare wrote ${shakespeare.books.length} books`);

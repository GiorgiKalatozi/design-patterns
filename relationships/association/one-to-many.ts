class Author {
  public name: string;
  public books: Book[] = [];

  constructor(name: string) {
    this.name = name;
  }

  public writeBook(title: string): void {
    this.books.push(new Book(title, this));
  }
}

class Book {
  public title: string;
  public author: Author;

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

// Example 2
// Professor and their Students
class Professor {
  public name: string;
  public students: Student[] = [];

  constructor(name: string) {
    this.name = name;
  }

  teachStudent(student: Student): void {
    this.students.push(student);
  }
}

class Student {
  public name: string;
  public professor: Professor;

  constructor(name: string, professor: Professor) {
    this.name = name;
    this.professor = professor;
  }
}

// Usage
const profSmith = new Professor("Prof. Smith");
const student1 = new Student("Student 1", profSmith);

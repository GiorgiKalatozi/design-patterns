class School {
  public name: string;
  private students: Student[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }
}

class Student {
  private name: string;
  private school: School;

  constructor(name: string, school: School) {
    this.name = name;
    this.school = school;
  }
}

// Usage
const highSchool = new School("High School 1");
const student1 = new Student("Student A", highSchool);
const student2 = new Student("Student A", highSchool);
const student3 = new Student("Student A", highSchool);

highSchool.addStudent(student1);
highSchool.addStudent(student2);
highSchool.addStudent(student3);

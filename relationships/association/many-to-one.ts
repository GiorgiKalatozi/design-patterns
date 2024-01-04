class School {
  public readonly name: string;
  private readonly students: Student[] = [];

  constructor(name: string) {
    this.name = name;
  }

  public addStudent(student: Student) {
    this.students.push(student);
    student.school = this; // Set student reference to school
  }
}

class Student {
  public name: string;
  public school: School | undefined;

  constructor(name: string, school: School) {
    this.name = name;
    this.school = school;
  }
}

const oxford = new School("Oxford University");
const giorgi = new Student("Giorgi", oxford);
oxford.addStudent(giorgi); // Add student with school reference

console.log(`Giorgi attends ${giorgi.school?.name}`);

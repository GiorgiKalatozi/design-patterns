// Example 1
// Husband and Wife

class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Marriage {
  private husband: Person;
  private wife: Person;

  constructor(husband: Person, wife: Person) {
    this.husband = husband;
    this.wife = wife;
  }
}

// Usage
const john = new Person("John");
const jane = new Person("Jane");

const marriage = new Marriage(john, jane);

// Example 2
// Doctor and Patient during an appointment:

class Doctor {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Patient {
  private name: string;
  private attendingDoctor: Doctor;

  constructor(name: string, attendingDoctor: Doctor) {
    this.name = name;
    this.attendingDoctor = attendingDoctor;
  }
}

// Usage
const drJohnson = new Doctor("Dr. Johnson");
const patient1 = new Patient("Patient 1", drJohnson);

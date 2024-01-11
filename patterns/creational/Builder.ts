interface IPerson {
  name: string;
  age?: number;
  address?: string;
  occupation?: string;
}

class PersonBuilder {
  private name: string;
  private age?: number;
  private address?: string;
  private occupation?: string;

  constructor(name: string) {
    this.name = name;
  }

  public setAge(age: number): this {
    this.age = age;
    return this;
  }

  public setAddress(address: string): this {
    this.address = address;
    return this;
  }

  public setOccupation(occupation: string): this {
    this.occupation = occupation;
    return this;
  }

  public build(): IPerson {
    return {
      name: this.name,
      age: this.age,
      address: this.address,
      occupation: this.occupation,
    };
  }
}

const john: IPerson = new PersonBuilder("John Doe")
  .setAge(18)
  .setOccupation("Software Engineer")
  .build();

console.log(john);

// Example 2

// Product class representing a computer
class Computer {
  private parts: string[] = [];

  addPart(part: string) {
    this.parts.push(part);
  }

  showParts() {
    console.log(`Computer parts: ${this.parts.join(", ")}`);
  }
}

// Builder interface
interface ComputerBuilder {
  buildCPU(): void;
  buildRAM(): void;
  buildStorage(): void;
  getResult(): Computer;
}

// ConcreteBuilder implementing the ComputerBuilder interface
class GamingComputerBuilder implements ComputerBuilder {
  private computer: Computer = new Computer();

  public buildCPU() {
    this.computer.addPart("High-end CPU");
  }

  public buildRAM() {
    this.computer.addPart("16GB RAM");
  }

  public buildStorage() {
    this.computer.addPart("1TB SSD");
  }

  public getResult() {
    return this.computer;
  }
}

// Director class managing the construction process
class ComputerDirector {
  construct(builder: ComputerBuilder) {
    builder.buildCPU();
    builder.buildRAM();
    builder.buildStorage();
  }
}

// Client code
const gamingBuilder = new GamingComputerBuilder();
const director = new ComputerDirector();

director.construct(gamingBuilder);
const gamingComputer = gamingBuilder.getResult();

gamingComputer.showParts();

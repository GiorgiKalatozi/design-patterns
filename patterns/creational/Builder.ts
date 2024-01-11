class Person {
  private name;
  private weight;
  private height;
  private gender;

  constructor(name: string, weight: number, height: number, gender: string) {
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.gender = gender;
  }
}

class PersonBuilder {
  private name: string;
  private gender: string;
  private weight: number = 0;
  private height: number = 0;

  constructor(name: string, gender: string) {
    this.name = name;
    this.gender = gender;
  }

  public setWeight(weight: number) {
    this.weight = weight;
    return this;
  }

  public setHeight(height: number) {
    this.height = height;
    return this;
  }

  public build() {
    return new Person(this.name, this.weight, this.height, this.gender);
  }
}

const john: Person = new PersonBuilder("John Doe", "male")
  .setHeight(70)
  .setHeight(180)
  .build();

console.log(john);

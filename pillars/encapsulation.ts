// Bad
class BadCar {
  speed: number;

  constructor() {
    this.speed = 0;
  }
}

const badCar = new BadCar();
badCar.speed = -50; // Modifying speed directly, violating encapsulation

// Good
class GoodCar {
  private speed: number;

  constructor() {
    this.speed = 0;
  }

  public accelerate(increase: number): void {
    if (increase > 0) {
      this.speed += increase;
    }
  }

  public getSpeed(): number {
    return this.speed;
  }
}

const goodCar = new GoodCar();
goodCar.accelerate(-50); // No effect, encapsulation maintained

// Bad

class BadUser {
  public password: string; // Exposing password directly

  constructor(password: string) {
    this.password = password;
  }
}

// Good
class GoodUser {
  private _password: string;

  constructor(password: string) {
    this._password = password;
  }

  get password(): string {
    return this._password;
  }

  set password(newPassword: string) {
    // Perform validation and encryption before updating
    this._password = newPassword;
  }
}

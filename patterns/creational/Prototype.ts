// Prototype interface
interface IRobot {
  clone(): IRobot;
  getInfo(): string;
}

// Concrete prototypes
class BasicRobot implements IRobot {
  public getInfo(): string {
    return "Basic Robot";
  }

  public clone(): IRobot {
    return new BasicRobot();
  }
}

class AdvancedRobot implements IRobot {
  public getInfo(): string {
    return "Advanced Robot";
  }

  public clone(): IRobot {
    return new AdvancedRobot();
  }
}

// Client code
const basicRobotPrototype: IRobot = new BasicRobot();
const advancedRobotPrototype: IRobot = new AdvancedRobot();

// Creating new robots by cloning prototypes
const newBasicRobot1: IRobot = basicRobotPrototype.clone();
console.log(newBasicRobot1.getInfo()); // Output: Basic Robot

const newBasicRobot2: IRobot = basicRobotPrototype.clone();
console.log(newBasicRobot2.getInfo()); // Output: Basic Robot

const newAdvancedRobot: IRobot = advancedRobotPrototype.clone();
console.log(newAdvancedRobot.getInfo()); // Output: Advanced Robot

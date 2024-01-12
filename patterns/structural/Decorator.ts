// Component interface
interface Coffee {
  cost(): number;
  description(): string;
}

// Concrete Component
class SimpleCoffee implements Coffee {
  cost(): number {
    return 5; // base cost of simple coffee
  }

  description(): string {
    return "Simple Coffee";
  }
}

// Decorator
abstract class CoffeeDecorator implements Coffee {
  protected coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  abstract cost(): number;
  abstract description(): string;
}

// Concrete Decorators
class MilkDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 2; // cost of milk
  }

  description(): string {
    return this.coffee.description() + ", Milk";
  }
}

class SugarDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 1; // cost of sugar
  }

  description(): string {
    return this.coffee.description() + ", Sugar";
  }
}

// Client code
const simpleCoffee = new SimpleCoffee();
console.log("Cost:", simpleCoffee.cost()); // Output: 5
console.log("Description:", simpleCoffee.description()); // Output: Simple Coffee

const milkCoffee = new MilkDecorator(simpleCoffee);
console.log("Cost:", milkCoffee.cost()); // Output: 7
console.log("Description:", milkCoffee.description()); // Output: Simple Coffee, Milk

const sweetMilkCoffee = new SugarDecorator(milkCoffee);
console.log("Cost:", sweetMilkCoffee.cost()); // Output: 8
console.log("Description:", sweetMilkCoffee.description()); // Output: Simple Coffee, Milk, Sugar

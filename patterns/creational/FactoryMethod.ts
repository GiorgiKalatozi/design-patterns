// Burger interface
interface Burger {
  prepare(): void;
}

// Concrete burger classes
class Cheeseburger implements Burger {
  prepare() {
    console.log("Preparing Cheeseburger");
  }
}

class VeggieBurger implements Burger {
  prepare() {
    console.log("Preparing Veggie Burger");
  }
}

// Burger factory interface
interface BurgerFactory {
  createBurger(): Burger;
}

// Concrete burger factory classes
class CheeseburgerFactory implements BurgerFactory {
  createBurger(): Burger {
    return new Cheeseburger();
  }
}

class VeggieBurgerFactory implements BurgerFactory {
  createBurger(): Burger {
    return new VeggieBurger();
  }
}

// Client code
function orderBurger(factory: BurgerFactory): void {
  const burger = factory.createBurger();
  burger.prepare();
}

// Example usage
const cheeseburgerFactory = new CheeseburgerFactory();
const veggieBurgerFactory = new VeggieBurgerFactory();

orderBurger(cheeseburgerFactory);
// Output: Preparing Cheeseburger

orderBurger(veggieBurgerFactory);
// Output: Preparing Veggie Burger

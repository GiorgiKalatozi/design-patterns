// Strategy interface
interface PaymentStrategy {
  pay(amount: number): void;
}

// Concrete strategies
class CreditCardPayment implements PaymentStrategy {
  public pay(amount: number) {
    console.log(`Paying ${amount} with credit card`);
  }
}

class PayPalPayment implements PaymentStrategy {
  public pay(amount: number) {
    console.log(`Paying ${amount} with PayPal`);
  }
}

// Context
class ShoppingCart {
  private paymentStrategy: PaymentStrategy = { pay(amount) {} };

  public setPaymentStrategy(strategy: PaymentStrategy) {
    this.paymentStrategy = strategy;
  }

  public checkout(amount: number) {
    this.paymentStrategy.pay(amount);
  }
}

// Usage
const cart = new ShoppingCart();
cart.setPaymentStrategy(new CreditCardPayment()); // Choose a strategy
cart.checkout(100); // Output: Paying 100 with credit card

// Example 2
// Strategy interface
interface ShippingStrategy {
  calculateCost(weight: number): number;
}

// Concrete strategies
class StandardShipping implements ShippingStrategy {
  public calculateCost(weight: number): number {
    return weight * 0.5; // $0.5 per pound for standard shipping
  }
}

class ExpressShipping implements ShippingStrategy {
  public calculateCost(weight: number): number {
    return weight * 1.5; // $1.5 per pound for express shipping
  }
}

class FreeShipping implements ShippingStrategy {
  public calculateCost(weight: number): number {
    return 0; // Free shipping
  }
}

// Context (Shipping calculator)
class ShippingCalculator {
  private strategy: ShippingStrategy;

  constructor(strategy: ShippingStrategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: ShippingStrategy): void {
    this.strategy = strategy;
  }

  public calculateShippingCost(weight: number): number {
    return this.strategy.calculateCost(weight);
  }
}

// Client code
const standardShipping = new StandardShipping();
const expressShipping = new ExpressShipping();
const freeShipping = new FreeShipping();

const shippingCalculator = new ShippingCalculator(standardShipping);

console.log(
  "Standard Shipping Cost: $" + shippingCalculator.calculateShippingCost(10)
);

// Switching to Express Shipping dynamically
shippingCalculator.setStrategy(expressShipping);
console.log(
  "Express Shipping Cost: $" + shippingCalculator.calculateShippingCost(10)
);

// Switching to Free Shipping dynamically
shippingCalculator.setStrategy(freeShipping);
console.log(
  "Free Shipping Cost: $" + shippingCalculator.calculateShippingCost(10)
);

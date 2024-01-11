// Adaptee (Legacy class with incompatible interface)
class LegacySystem {
  oldMethod(): void {
    console.log("Executing old method...");
  }
}

// Target interface (Expected interface in the new system)
interface NewSystem {
  newMethod(): void;
}

// Adapter class that bridges the gap
class Adapter implements NewSystem {
  private adaptee: LegacySystem;

  constructor(adaptee: LegacySystem) {
    this.adaptee = adaptee;
  }

  newMethod(): void {
    console.log("Adapter is translating the request...");
    this.adaptee.oldMethod();
  }
}

// Client code in the new system
function clientCode(system: NewSystem): void {
  system.newMethod();
}

// Using the Adapter Pattern
const legacySystem = new LegacySystem();
const adaptedSystem = new Adapter(legacySystem);

clientCode(adaptedSystem);

// Target interface
// interface IPaymentProcessor {
//     pay(amount: number): void;
//   }

//   // Adaptee (external library)
//   class StripePayment {
//     public charge(amount: number, token: string) {
//       console.log(`Processing payment with Stripe: $${amount}`);
//     }
//   }

//   // Adapter
//   class StripeAdapter implements IPaymentProcessor {
//     private stripe: StripePayment = new StripePayment();

//     public pay(amount: number) {
//       this.stripe.charge(amount, "fake-token");
//     }
//   }

//   // Client
//   function makePayment(processor: IPaymentProcessor) {
//     processor.pay(100);
//   }

//   // Usage
//   const adapter = new StripeAdapter();
//   makePayment(adapter); // Output: Processing payment with Stripe: $100

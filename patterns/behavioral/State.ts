// State interface
interface DocumentState {
  open(): void;
  close(): void;
  save(): void;
}

// Concrete states
class Draft implements DocumentState {
  open() {
    console.log("Document already open in draft state");
  }

  close() {
    console.log("Closing document");
  }

  save() {
    console.log("Saving document as a draft");
  }
}

class Final implements DocumentState {
  open() {
    console.log("Document already open in final state");
  }

  close() {
    console.log("Closing document");
  }

  save() {
    console.log("Saving document as final");
  }
}

// Context
class Document {
  private state: DocumentState;

  constructor() {
    this.state = new Draft(); // Initial state
  }

  setState(state: DocumentState) {
    this.state = state;
  }

  open() {
    this.state.open();
  }

  close() {
    this.state.close();
  }

  save() {
    this.state.save();
  }
}

// Usage
const document = new Document();
document.open(); // Output: Document already open in draft state
document.save(); // Output: Saving document as a draft
document.setState(new Final());
document.save(); // Output: Saving document as final

// Example 2
// State interface
interface OrderState {
  processOrder(): void;
  cancelOrder(): void;
  shipOrder(): void;
  // Other state-specific methods...
}

// Context
class Order {
  private state: OrderState;

  constructor() {
    this.state = new PendingState(this);
  }

  setState(state: OrderState): void {
    this.state = state;
  }

  processOrder(): void {
    this.state.processOrder();
  }

  cancelOrder(): void {
    this.state.cancelOrder();
  }

  shipOrder(): void {
    this.state.shipOrder();
  }
}

// Concrete States
class PendingState implements OrderState {
  constructor(private order: Order) {}

  processOrder(): void {
    console.log("Order is being processed.");
    this.order.setState(new ProcessingState(this.order));
  }

  cancelOrder(): void {
    console.log("Order is canceled.");
    this.order.setState(new CanceledState(this.order));
  }

  shipOrder(): void {
    console.log("Cannot ship pending order. Process the order first.");
  }
}

class ProcessingState implements OrderState {
  constructor(private order: Order) {}

  processOrder(): void {
    console.log("Order is already being processed.");
  }

  cancelOrder(): void {
    console.log("Order is canceled during processing.");
    this.order.setState(new CanceledState(this.order));
  }

  shipOrder(): void {
    console.log("Order is shipped.");
    this.order.setState(new ShippedState(this.order));
  }
}

class ShippedState implements OrderState {
  constructor(private order: Order) {}

  processOrder(): void {
    console.log("Order is already shipped. Cannot process again.");
  }

  cancelOrder(): void {
    console.log("Order is shipped. Cannot cancel.");
  }

  shipOrder(): void {
    console.log("Order is already shipped.");
  }
}

class CanceledState implements OrderState {
  constructor(private order: Order) {}

  processOrder(): void {
    console.log("Cannot process canceled order.");
  }

  cancelOrder(): void {
    console.log("Order is already canceled.");
  }

  shipOrder(): void {
    console.log("Cannot ship canceled order.");
  }
}

// Client code
const order = new Order();

order.processOrder(); // Order is being processed.
order.shipOrder(); // Cannot ship pending order. Process the order first.
order.cancelOrder(); // Order is canceled.

order.processOrder(); // Order is being processed.
order.shipOrder(); // Order is shipped.
order.cancelOrder(); // Cannot cancel. Order is shipped.

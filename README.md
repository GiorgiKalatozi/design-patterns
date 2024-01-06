# SOLID Principles, Design Patterns and Relationships in Object-Oriented Programming 🚀

This repository is a comprehensive guide to understanding and applying the SOLID principles, class relationships, and various design patterns in object-oriented programming (OOP). These principles and patterns serve as fundamental building pillars for the creation of maintainable, scalable, resilient, and flexible software architectures. 🏗️

## Table of Contents

- [Introduction](#introduction)
- [SOLID Principles](#solid-principles)
  - [Single Responsibility Principle (SRP)](#single-responsibility-principle-srp-one-class-one-job-%EF%B8%8F)
  - [Open/Closed Principle (OCP)](#openclosed-principle-ocp-)
  - [Liskov Substitution Principle (LSP)](#liskov-substitution-principle-lsp-)
  - [Interface Segregation Principle (ISP)](#interface-segregation-principle-isp-)
  - [Dependency Inversion Principle (DIP)](#dependency-inversion-principle-dip)
- [Design Patterns](#design-patterns)
  - [Creational Patterns](#creational-patterns)
  - [Structural Patterns](#structural-patterns)
  - [Behavioral Patterns](#behavioral-patterns)
- [Class Relationships](#class-relationships)
  - [Inheritance](#inheritance)
  - [Association](#association)
  - [Composition](#composition)
  - [Aggregation](#aggregation)

## Introduction

Understanding and applying SOLID principles and design patterns are crucial aspects of building robust, scalable, and maintainable software systems. This repository provides practical examples and explanations for each principle and pattern, helping developers enhance their OOP skills. 🧠

# SOLID Principles

## Single Responsibility Principle (SRP): One Class, One Job 🛠️

The SRP states that a class should have only one reason to change, meaning it should have only one responsibility or job. In other words, a class should have a single, well-defined purpose. This principle aims to enhance code maintainability, readability, and testability.

The Single Responsibility Principle (SRP) is a fundamental principle in object-oriented design, promoting the creation of well-structured and maintainable code. SRP advocates that every class or module should have one, and only one, reason to change. This principle encourages developers to view each class as a specialist with a focused expertise, rather than trying to handle a myriad of diverse concerns. 🎯

### How It Works:

1. **Uncover Responsibilities:**
   Identify the distinct reasons why a class might need modification.

2. **Divide and Conquer:**
   Create separate classes for each responsibility, encapsulating related data and behavior.

3. **Cohesive Units:**
   Ensure each class has a clear, focused purpose, promoting understanding and maintainability.

### Benefits:

- **Reduced Complexity:**
  Classes become simpler and easier to comprehend, as they handle a single concern. 🧩

- **Improved Maintainability:**
  Changes to one responsibility are isolated, minimizing unintended side effects and reducing the risk of introducing bugs. 🛡️

- **Enhanced Reusability:**
  Focused classes are more likely to be adaptable and reusable in different contexts. 🔄

- **Simplified Testing:**
  Smaller, independent classes are easier to test in isolation, ensuring code quality. 🧪

### Remember:

- **Guideline, Not a Rigid Rule:**
  SRP is a guideline, not a rigid rule. Use judgment and consider the context of your application.

- **Aim for Focused, Cohesive Classes:**
  Aim for focused, cohesive classes that promote understanding and maintainability.

- **Embrace the Benefits of SRP:**
  Embrace the benefits of SRP for cleaner, more robust, and adaptable code. 🧹

### Usage:

Apply the Single Responsibility Principle in your codebase to create modular, maintainable, and robust software architectures. Embrace the concept of classes with well-defined responsibilities to enhance code readability and reduce the overall complexity of your projects. 🌐

## Open/Closed Principle (OCP) 🚪🔒

The OCP encourages classes to be open for extension but closed for modification. This means that new functionality can be added without altering existing code. In simpler terms, the behavior of a module can be extended without modifying its source code.

The Open/Closed Principle (OCP) lies at the heart of building adaptable and maintainable software. It states that software entities (such as classes, modules, functions) should be open for extension but closed for modification. In simpler terms, you should be able to add new functionalities without having to touch existing code. 🏗️

The Open/Closed Principle encourages the use of abstraction, polymorphism, and interfaces to achieve flexibility and extensibility without altering existing code. It promotes a design where new functionalities can be introduced by adding new code, not by changing existing code.

### How does it work? 🤔

Imagine your code as a building. OCP encourages a design where you can add new floors and features through extensions (like building upon the existing structure) without having to demolish and rebuild the entire foundation. This leads to several benefits:

- **Reduced risk of regressions:** Modifying existing code often introduces bugs and unintended consequences. OCP minimizes this risk by keeping the core code untouched. 🚑

- **Increased flexibility and adaptability:** New features can be easily added through extensions, making your code future-proof and responsive to changing needs. 🌈

- **Improved maintainability:** With extensions handling new functionalities, the core code remains clean and manageable, simplifying maintenance and updates. 🧰

### Remember:

- **OCP doesn't mean no modifications ever**, but rather minimizing them to focus on core functionality.
- Choose appropriate abstraction mechanisms like interfaces and abstract classes to facilitate extensions. 🧩

- Embrace modularity and design your code with extensibility in mind.

By applying the Open/Closed Principle, you can write cleaner, more robust, and adaptable software that thrives in the face of change. Happy coding! 🚀

## Liskov Substitution Principle (LSP) 🔄

The Liskov Substitution Principle (LSP) is one of the SOLID principles, named after Barbara Liskov. It states that objects of a superclass should be able to replace objects of the subclass without affecting the correctness of the program. In other words, if a program is using a base class, it should be able to use any of its derived classes without knowing it, and the program should still behave correctly. It ensures that inheritance is used appropriately.

### Why LSP?

The Liskov Substitution Principle (LSP) forges trust in software inheritance. It states that objects of a subtype should be replaceable with objects of its supertype without altering the correctness of the program. In simpler terms, subclasses should seamlessly fit into the shoes of their parent classes, ensuring consistent behavior.

**Imagine:** Your code builds a house. LSP guarantees that replacing a wooden door with a metal one (subtypes of Door) won't cause the house to collapse or the locks to malfunction. Both doors fulfill the essential needs of a door, even though they differ in material.

### LSP in TypeScript:

- Subtypes extend supertype behaviors (methods, properties)
- Subtype implementations shouldn't break existing code relying on supertype behavior
- Subtype behavior should be consistent with supertype expectations

### Key Points:

- Subtypes shouldn't weaken preconditions (assumptions made by supertype code)
- Postconditions (guarantees made by supertype methods) should hold for subtypes
- Subtypes can extend functionality without breaking supertype contracts

By following the Liskov Substitution Principle in TypeScript, you ensure a robust and reliable foundation for your object-oriented designs. Happy coding! 🌐

## Interface Segregation Principle (ISP) 🧩

The Interface Segregation Principle (ISP) is a cornerstone of the SOLID principles, emphasizing that a class should not be forced to implement interfaces it does not use. In simpler terms, a class should not be burdened with methods it doesn't need. This principle promotes the idea of having smaller, specific interfaces instead of large, general-purpose ones.

### Why ISP?

The ISP suggests that a class should not be forced to implement interfaces it does not use. It promotes the idea of having smaller, specific interfaces instead of large, general-purpose ones.

### Why is ISP Important?

1. **Prevents Unnecessary Dependencies:**
   Large interfaces force implementing classes to depend on methods they might not need, leading to unnecessary dependencies.

2. **Promotes Cohesion:**
   Specific interfaces encourage classes to focus on a well-defined set of functionalities, promoting cohesion and clearer design.

3. **Enhances Maintainability:**
   Smaller interfaces make it easier to maintain and update code since changes are less likely to affect unrelated parts of the system.

**Imagine:** Interfaces are like contracts between classes. ISP ensures these contracts are specific and focused, preventing unwanted dependencies and promoting flexibility.

### ISP in TypeScript:

- "Clients shouldn't be forced to depend on methods they don't use."
- Split large interfaces into smaller, more cohesive ones.
- Clients implement only the interfaces they need, reducing coupling.

### Benefits:

- **Reduced Coupling:**
  Classes depend on fewer methods, making changes easier.
- **Improved Refactoring:**
  Changes to one interface don't ripple through unrelated parts of the code.
- **Enhanced Testability:**
  Smaller interfaces make mocking and testing simpler.
- **Better Code Organization:**
  Clearer separation of concerns.

### Key Points:

- Focus on "client needs" when designing interfaces.
- Favor smaller, more specific interfaces over large, monolithic ones.
- Use multiple interfaces to combine behaviors for classes that need them.

ISP leads to cleaner, more flexible, and less coupled code in TypeScript. Embrace it for harmonious interfaces and adaptable designs! 🚀

## Dependency Inversion Principle (DIP) 🔄

Dependency Inversion (DI) flips the script on how classes rely on each other. Instead of high-level modules depending on low-level details, they depend on abstractions. This brings a wave of benefits like increased flexibility, maintainability, and testability.

### Imagine

Think of high-level code as the captain of a ship, and low-level code as the engine room crew. DI lets the captain give orders using a simple interface (steering wheel), without needing to know the intricacies of engine operation.

### DI in TypeScript

- High-level modules depend on abstractions (interfaces, abstract classes).
- Low-level details are implemented via concrete classes that fulfill the abstractions.
- Dependency injection: Provide concrete implementations to high-level modules at runtime or through configuration.

### Why is it good?

- **Loose Coupling:** Changes in low-level details (engine room) don't affect the captain's navigation.
- **Increased Flexibility:** Swap engine implementations (e.g., sails for motors) without modifying the captain's commands.
- **Improved Testability:** Mock concrete implementations to test high-level modules in isolation.
- **Enhanced Maintainability:** Code becomes clearer, easier to reason about, and simpler to adapt.

### People like it because

- It leads to more robust and adaptable software.
- It promotes modularity and separation of concerns.
- It simplifies testing and reduces regression risks.
- It makes code cleaner and easier to understand.

### When to use it

- Whenever you have high-level modules dependent on low-level details.
- When you want to decouple code for increased flexibility and maintainability.
- When testing high-level modules in isolation is desirable.

### Key Points

- Focus on high-level modules depending on abstractions, not concrete implementations.
- Inject concrete implementations through constructor injection, configuration, or other mechanisms.
- DI is a powerful tool for building flexible, maintainable, and testable code.
- Embrace DI to navigate your own software ship with confidence, leaving the intricacies of the engine room to their specialized crew through well-defined interfaces!
- **Abstractions First:** Define abstractions before implementations to ensure adherence to DIP.
- **Use Dependency Injection:** Inject dependencies through constructors or methods rather than creating them internally.
- **Inversion of Control (IoC):** Consider using IoC containers to manage dependencies and achieve inversion of control.

---

DIP is a powerful principle that contributes to building maintainable, scalable, and flexible software architectures. It plays a vital role in achieving a robust and adaptable design.

## Object-Oriented Programming Relationships

One of the key advantages of Object-Oriented programming languages is code reuse, made possible by relationships between classes. Object-oriented programming generally supports four types of relationships: Inheritance, Association, Composition, and Aggregation. These relationships are based on "is a," "has a," and "part of" relationships.

## Inheritance

Inheritance represents an "IS-A" type of relationship, where a new class is created by using the code of an existing class. It's akin to stating "A is a type of B." Examples include "Apple is a fruit" or "Ferrari is a car."

## Association

In the context of object-oriented software design, association refers to the relationship between one object's functionality and another's. It differs from inheritance and involves objects from different classes knowing about each other and interacting. Association can take various forms, such as one-to-one, one-to-many, many-to-one, and many-to-many.

### Examples of Association

#### One-to-One

- **Husband and wife:** A classic one-to-one association where each is married to just one other person.
- **Teacher and student assigned for a one-on-one project:** Each student works directly with one specific teacher for the project's duration.
- **Doctor and patient during an appointment:** In an individual consultation, the doctor focuses on and interacts solely with one patient.

#### One-to-Many

- **Author and their books:** One author writes many books, while each book belongs to only one author.
- **Professor and their students:** One professor lectures and interacts with a class of many students, but each student attends the class of only one professor.
- **Chef and their dishes:** A chef creates numerous dishes, while each dish is attributed to a single chef.

#### Many-to-One

- **Students and their school:** Many students attend one school, but each student can only belong to one school at a time.
- **Employees and their department:** Many employees work within one department, but each employee belongs to only one department within the company.
- **Books and their genre:** Many books fall into one specific genre, but each genre encompasses numerous books.

#### Many-to-Many

- **Movies and actors:** Many actors star in multiple movies, and many movies feature multiple actors.
- **Students and clubs:** A student can join multiple clubs, while each club has multiple members.
- **Ingredients and recipes:** Many ingredients are used in various recipes, and many recipes utilize different ingredient combinations.

## Association and Inheritance

This repository explores the core concepts of association and inheritance in object-oriented programming. Understanding the distinctions between these two concepts is crucial for designing robust and maintainable software systems.

### Core Differences

- **Inheritance:** Implies that two objects are of the same type, with one being a more generalized or more specific version of the other. It establishes an "IS-A" relationship.

- **Association:** Represents a "has-a" relationship between two different objects. It establishes connections through various relationships like one-to-one, one-to-many, many-to-one, and many-to-many.

## Types of Association

### One-to-One

In a one-to-one association, one instance of a class is associated with exactly one instance of another class.

### One-to-Many

In a one-to-many association, one instance of a class is associated with multiple instances of another class.

### Many-to-One

In a many-to-one association, multiple instances of a class are associated with exactly one instance of another class.

### Many-to-Many

In a many-to-many association, multiple instances of one class are associated with multiple instances of another class.

## Types of Relationships

### IS-A Relationship

Inheritance creates an IS-A relationship between objects, showcasing the hierarchy and specialization within a system.

### HAS-A Relationship

Association is known as a HAS-A relationship, signifying that objects are connected but not of the same type.

## Modality of Inheritance

The modality of inheritance is influenced by programming language features. For instance, Java supports single inheritance, while C++ supports multiple inheritance.

### Multiple Inheritance

Some programming languages, like C++, allow a class to inherit attributes and methods from more than one parent class.

## Composition

Composition is a specific form of association, occurring when an object's lifecycle is tightly bound to another object's lifecycle. It establishes a "part-of" relationship.

### Part-of Relationship

In composition, when the main object is deleted, all associated objects also cease to exist. This tight interdependence reflects scenarios where one object is a crucial part of another, for example, "engine is part of car" or "heart is part of body."

# Composition in OOP - Vehicle Example

Composition is a fundamental concept that promotes building complex objects by combining simpler objects.There are a lot of real-life examples of composition in OOP. We are going to present the most used composition example here: the Vehicle example.

## Usage

### Vehicle Example

In the `Vehicle.js` file, a `Vehicle` class is defined, showcasing composition in action:

```javascript
// Vehicle.js
class Vehicle {
  constructor() {
    this.wheels = Array(4).fill(new Wheel());
    this.doors = Array(4).fill(new Door());
    this.seats = Array(4).fill(new Seat());
  }

  move(a, b) {
    // Moving logic
  }
}
// Do something with Vehicle
// The Wheel, Door, and seats will be garbage collected when they're no longer in use -->
```

Note that you cannot keep the Door or any other object alive after destroying the Vehicle object. This is why it's called composition: the Vehicle class/object is composed of Doors, Wheels, and Seats.

## Composition

Composition is a stronger form of Aggregation, where the contained class has a strong lifecycle dependency on the container class. If the container is destroyed, the contained class is also destroyed.

### Characteristics of Composition:

- **"Has-A" Relationship:** Composition represents a "has-a" relationship where a "whole" class owns its "part" classes.

- **Automatic Destruction:** When the whole object is destroyed, its parts are also destroyed automatically.

- **Dependency Between Classes:** Composition is a Has-A relationship between classes where both classes are dependent on each other. One object cannot exist without the existence of another object.

- **Example:** A car class might be composed of wheel, engine, and seat classes. The car owns these parts and manages their lifecycle.

### Usage:

Composition is employed to create complex objects by combining simpler ones.

## Aggregation

Aggregation represents a "has-a" relationship where one class contains another class, but the contained class can exist independently. It's a weaker form of association.

### Characteristics of Aggregation:

- **"Has-A" Relationship:** Aggregation is a Has-A relationship between two objects where each object can exist without another object.

- **Independent Lifecycles:** The "part" objects in Aggregation have their own independent lifecycles. They can exist without the "whole" object.

- **Example:** A library class might aggregate various book objects. The library uses the books, but they can exist and be used elsewhere as well.

- **Special Form of Association:** Aggregation is a special form of association. In association, there is no entity that works as an owner, but in aggregation, one entity works as the owner.

### Usage:

Aggregation is suitable when objects need to be associated, but each object should be able to exist independently.

In summary, while both Composition and Aggregation involve relationships between classes, the key difference lies in the strength of the association and the dependency between the involved classes.

## Aggregation Example: Car and Engine Relationship

In the provided example, the relationship between the `Car` class and the `Engine` class exemplifies aggregation. Aggregation represents a "whole-part" relationship, where one class contains another class, but the part (in this case, the `Engine`) can exist independently of the whole (`Car`).

### Example Code:

```typescript
class Engine {
  // Engine implementation
}

class Car {
  private engine: Engine;

  constructor(engine: Engine) {
    this.engine = engine;
  }
}

const engine = new Engine();
const myCar = new Car(engine);
```

## Explanation of Aggregation Example

In the provided example, the relationship between the `Car` class and the `Engine` class showcases an aggregation scenario. Aggregation represents a "whole-part" relationship, where one class contains another class, but the part (in this case, the `Engine`) can exist independently of the whole (`Car`).

### Key Points:

1. **Aggregation Relationship:**

   - The `Car` class establishes an aggregation relationship with the `Engine` class. This signifies that a `Car` is composed of an `Engine` as a part.

2. **Private Member Variable:**

   - Within the `Car` class, there is a private member variable named `engine`, which is of type `Engine`. This indicates that a `Car` has an `Engine` as an integral part of its structure.

3. **Independence of Engine:**

   - The `Engine` can exist independently of the `Car`. This means you can create an `Engine` object (`const engine = new Engine()`) without requiring it to be associated with a specific `Car`.

4. **Flexibility of Aggregation:**
   - The example demonstrates the flexibility of aggregation, highlighting that the "part" (Engine) retains its independence. This independence allows the `Engine` to be utilized in various contexts outside the context of a specific `Car`.

#

Understanding and implementing aggregation provides a powerful tool for designing modular and flexible object-oriented systems. This example serves as a practical illustration of how aggregation allows for the creation and use of individual components independent of their association with a larger structure.

## Dependency

Dependency represents a "uses-a" relationship where one class depends on another class, but there is no ownership or containment involved. Changes in one class may affect the other, but they are independent entities.

### Key Points:

- **No Ownership or Containment:**

  - In a dependency relationship, there is no strong ownership or "part-of" relationship between classes.

- **Independent Entities:**

  - Classes involved in a dependency relationship are independent entities. Changes in one class may influence the behavior or state of another, but they are not owned or contained by each other.

- **Term "Dependency":**
  - The term "dependency" implies that one component relies on another, indicating a relationship where a change in one component can affect the behavior or state of another.

### Dependency Injection:

- **Definition:**

  - "Dependency injection" is a specific technique for implementing dependency relationships.

- **Injection Techniques:**

  - It involves injecting dependencies into a class from the outside, achieved through constructor injection, method injection, or property injection.

- **Flexibility and Maintainability:**
  - Dependency injection promotes flexibility and maintainability by managing dependencies from the outside.

## Inheritance

Inheritance is an Is-A relationship between classes where a parent class is a general class, and a child class is a specific class.

### Key Points:

- **Is-A Relationship:**

  - Inheritance is an "is-a" relationship where a child class inherits properties and methods from its parent class.

- **Example:**

  - For example, the relationship between a cat, dog, and their general class, which is animal. An animal can be specified as a cat or dog, and cat and dog can be generalized as an animal.

- **Code Reuse:**

  - This relationship promotes code reuse, eliminating the need to re-write common functionalities in each specific class.

- **Specialization:**
  - The child class can specialize or override inherited behavior to fulfill its specific needs.

### Conclusion:

Understanding dependency relationships and inheritance is fundamental in designing flexible and maintainable object-oriented systems. Dependency injection offers a specific technique for managing dependencies, while inheritance facilitates code reuse through a hierarchical "is-a" relationship.

# Abstraction

In object-oriented programming (OOP), abstraction is a fundamental concept that involves simplifying complex systems by modeling classes based on the essential properties and behaviors they possess while hiding unnecessary details. Abstraction allows developers to focus on relevant aspects of an object and ignore the irrelevant ones. It is achieved through the use of abstract classes and interfaces.

## In-depth Explanation:

### Abstract Classes:

- An abstract class is a blueprint for other classes and may contain abstract methods, which are methods without a body.
- Abstract classes cannot be instantiated; they are meant to be subclassed by other classes.
- Subclasses must provide concrete implementations for the abstract methods.

### Interfaces:

- Interfaces define a contract for classes to follow, specifying a set of methods and properties.
- A class can implement multiple interfaces, enforcing a specific structure for the implementing classes.
- Interfaces do not provide implementations; they only declare the signatures of methods and properties.

## Example in TypeScript:

Let's model different shapes using an abstract class `Shape` and an interface `Drawable` to represent objects that can be drawn. Subclasses will then implement the `Drawable` interface and provide concrete implementations for the abstract methods in the `Shape` class.

```typescript
// Drawable interface
interface Drawable {
  draw(): void;
}

// Abstract class Shape
abstract class Shape implements Drawable {
  constructor(protected x: number, protected y: number) {}

  // Abstract method
  abstract calculateArea(): number;

  // Concrete method
  displayLocation(): void {
    console.log(`Shape is located at (${this.x}, ${this.y})`);
  }

  // Implementation of the Drawable interface
  draw(): void {
    console.log("Drawing the shape...");
  }
}

// Concrete class Circle
class Circle extends Shape {
  constructor(x: number, y: number, private radius: number) {
    super(x, y);
  }

  // Implementation of abstract method
  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// Concrete class Rectangle
class Rectangle extends Shape {
  constructor(
    x: number,
    y: number,
    private width: number,
    private height: number
  ) {
    super(x, y);
  }

  // Implementation of abstract method
  calculateArea(): number {
    return this.width * this.height;
  }
}

// Usage
const circle = new Circle(5, 5, 3);
const rectangle = new Rectangle(10, 10, 4, 6);

circle.displayLocation();
circle.draw();
console.log("Circle Area:", circle.calculateArea());

rectangle.displayLocation();
rectangle.draw();
console.log("Rectangle Area:", rectangle.calculateArea());
```

Singleton design pattern is a creational pattern that ensures a class has only one instance and provides a global point of access to that instance. This pattern is useful when exactly one object is needed to coordinate actions across the system.

Here's a breakdown of the Singleton pattern and an example in TypeScript:

Singleton Design Pattern:
Characteristics:
Single Instance: The Singleton pattern ensures that a class has only one instance and provides a global point of access to it.

Global Access: The instance is globally accessible. Any other part of the program can easily obtain a reference to the singleton instance.

Lazy Initialization: The instance is created only if it is requested for the first time. This is often called "lazy initialization" and helps improve performance by avoiding unnecessary instantiation.

Global Point of Access: The Singleton class provides a method to access its unique instance.

class Singleton {
private static instance: Singleton;

// The Singleton's constructor should always be private to prevent instantiation from outside the class
private constructor() {}

// Public method to get the instance of the Singleton class
public static getInstance(): Singleton {
if (!Singleton.instance) {
Singleton.instance = new Singleton();
}
return Singleton.instance;
}

// Additional methods and properties can be added here
}

// Example usage
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // Output: true

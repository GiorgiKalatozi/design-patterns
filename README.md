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

Association
In object-oriented general software design, the relationship between one object's functionality and another's is known as an association. Note that an association between two objects is not the same thing as inheritance between two classes. Association means that one object uses another object or a function/method in that other object. In other words, association is defined as the relationship between objects when one object has one or more references to other objects.

Below are the core differences between association and inheritance:

Inheritance implies that two objects are the same type of object. One object just happens to be either a more generalized or more specific version of the other object. Association occurs between two different objects.

Inheritance is said to be an IS-A relationship whereas association is known as a HAS-A relationship.

The modality of inheritance depends on the programming language features. For example, Java does not support multiple inheritance, but C++ does. On the other hand, any language can have one-to-one, one-to-many, and many-to-many associations between objects.
There are two types of associations between objects: composition and aggregation. Let's understand what those are.

Composition
Composition is a form of association that occurs when an object's life is tightly bound to another object's life. When the main object dies (i.e., is deleted), all the objects that are associated with that object also die. This means that the referenced object is solely contained by the referring object.

There are a lot of real-life examples of composition in OOP. We are going to present the most used composition example here: the Vehicle example.

// Vehicle.js
class Vehicle {
constructor() {
this.wheels = Array(4).fill(new Wheel());
this.doors = Array(4).fill(new Door());
this.seats = Array(4).fill(new Seat());
}

    mode(a, b) {
        // Moving
    }

}

// index.js
const vehicle = new Vehicle();
// Do something with Vehicle
// The Wheel, Door, and seats will be garbage collected when they're no longer in use

Note that you cannot keep the Door or any other object alive after destroying the Vehicle object. This is why it's called composition: the Vehicle class/object is composed of Doors, Wheels, and Seats.

Composition is a stronger form of Aggregation, where the contained class has a strong lifecycle dependency on the container class. If the container is destroyed, the contained class is also destroyed.
Composition: This is a stronger form of association where a "whole" class owns its "part" classes. When the whole object is destroyed, its parts are also destroyed automatically. This represents a "has-a" relationship. For example, a car class might be composed of wheel, engine, and seat classes. The car owns these parts and manages their lifecycle.
Composition is a Has-A relationship between classes where both classes are dependent on each other. One object cannot exist without the existence of another object. For example, the relation between Laptop and its Processor. A laptop cannot exist without its processor.

Aggregation represents a "has-a" relationship where one class contains another class, but the contained class can exist independently. It's a weaker form of association.
Aggregation is a Has-A relationship between two objects where each object can exist without another object. In other words, these objects are independent
Aggregation: Similar to composition, but the "part" objects have their own independent lifecycles. They are simply used by the "whole" object but can exist without it. For example, a library class might aggregate various book objects. The library uses the books but they can exist and be used elsewhere as well.

Dependency represents a "uses-a" relationship where one class depends on another class, but there is no ownership or containment involved. Changes in one class may affect the other, but they are independent entities.

the term "dependency" implies that one component relies on another. It signifies a relationship where a change in one component can affect the behavior or state of another.

"Dependency injection" is a specific technique for implementing dependency relationships. It involves injecting dependencies into a class from the outside rather than letting the class create them internally. This can be achieved through constructor injection, method injection, or property injection.

"dependency relationship" is a general term referring to any situation where one piece of code relies on another, while "dependency injection" is a specific technique for managing dependencies by injecting them from the outside. Dependency injection is a means of implementing dependency relationships in a way that promotes flexibility and maintainability, especially in the context of Inversion of Control.

Inheritance is an Is-A relationship between classes where parent class is a general class and child class is a specific class. For example, the relation between cat, dog, and its general class, which is animal. An animal can be specified as a cat or dog. Cat and dog can be generalized as an animal.

This is an "is-a" relationship where a child class inherits properties and methods from its parent class. It's like saying "a dog is-a mammal". The child class can then specialize or override the inherited behavior to fulfill its specific needs. This promotes code reuse and eliminates the need to re-write common functionalities.

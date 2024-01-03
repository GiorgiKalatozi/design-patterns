# SOLID Principles and Design Patterns in Object-Oriented Programming

This repository is a comprehensive guide to understanding and applying both the SOLID principles and various design patterns in object-oriented programming (OOP). These principles and patterns serve as fundamental building blocks for creating maintainable, scalable, and flexible software architectures.

## Table of Contents

- [Introduction](#introduction)
- [SOLID Principles](#solid-principles)
  - [Single Responsibility Principle (SRP)](#single-responsibility-principle-srp)
  - [Open/Closed Principle (OCP)](#openclosed-principle-ocp)
  - [Liskov Substitution Principle (LSP)](#liskov-substitution-principle-lsp)
  - [Interface Segregation Principle (ISP)](#interface-segregation-principle-isp)
  - [Dependency Inversion Principle (DIP)](#dependency-inversion-principle-dip)
- [Design Patterns](#design-patterns)
  - [Creational Patterns](#creational-patterns)
  - [Structural Patterns](#structural-patterns)
  - [Behavioral Patterns](#behavioral-patterns)
- [Project Structure](#project-structure)
- [Examples](#examples)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Understanding and applying SOLID principles and design patterns are crucial aspects of building robust, scalable, and maintainable software systems. This repository provides practical examples and explanations for each principle and pattern, helping developers enhance their OOP skills.

## SOLID Principles

### Single Responsibility Principle (SRP)

The SRP states that a class should have only one reason to change, meaning it should have only one responsibility or job.In other words, a class should have a single, well-defined purpose.
This principle aims to enhance code maintainability, readability, and testability.

### Open/Closed Principle (OCP)

The OCP encourages classes to be open for extension but closed for modification. This means that new functionality can be added without altering existing code. In simpler terms, the behavior of a module can be extended without modifying its source code.

The Open/Closed Principle (OCP) lies at the heart of building adaptable and maintainable software. It states that software entities (such as classes, modules, functions) should be open for extension but closed for modification. In simpler terms, you should be able to add new functionalities without having to touch existing code.

The Open/Closed Principle encourages the use of abstraction, polymorphism, and interfaces to achieve flexibility and extensibility without altering existing code. It promotes a design where new functionalities can be introduced by adding new code, not by changing existing code.

#### How does it work?

Imagine your code as a building. OCP encourages a design where you can add new floors and features through extensions (like building upon the existing structure) without having to demolish and rebuild the entire foundation. This leads to several benefits:

- **Reduced risk of regressions:** Modifying existing code often introduces bugs and unintended consequences. OCP minimizes this risk by keeping the core code untouched.

- **Increased flexibility and adaptability:** New features can be easily added through extensions, making your code future-proof and responsive to changing needs.

- **Improved maintainability:** With extensions handling new functionalities, the core code remains clean and manageable, simplifying maintenance and updates.

#### Remember:

- **OCP doesn't mean no modifications ever**, but rather minimizing them to focus on core functionality.
- Choose appropriate abstraction mechanisms like interfaces and abstract classes to facilitate extensions.

- Embrace modularity and design your code with extensibility in mind.

By applying the Open/Closed Principle, you can write cleaner, more robust, and adaptable software that thrives in the face of change. Happy coding!

### Liskov Substitution Principle (LSP)

The LSP states that objects of a superclass should be able to replace objects of the subclass without affecting the correctness of the program. It ensures that inheritance is used appropriately.

### Interface Segregation Principle (ISP)

The ISP suggests that a class should not be forced to implement interfaces it does not use. It promotes the idea of having smaller, specific interfaces instead of large, general-purpose ones.

### Dependency Inversion Principle (DIP)

The DIP states that high-level modules should not depend on low-level modules, but both should depend on abstractions. It promotes the use of dependency injection and inversion of control to achieve decoupling.

## Design Patterns

### Creational Patterns

- **Singleton Pattern**: Ensures a class has only one instance and provides a global point of access to it.
- **Factory Method Pattern**: Defines an interface for creating an object but leaves the choice of its type to the subclasses, creating an instance of specific classes.
- **Abstract Factory Pattern**: Provides an interface for creating families of related or dependent objects without specifying their concrete classes.

### Structural Patterns

- **Adapter Pattern**: Allows the interface of an existing class to be used as another interface.
- **Decorator Pattern**: Attaches additional responsibilities to an object dynamically.
- **Composite Pattern**: Composes objects into tree structures to represent part-whole hierarchies.

### Behavioral Patterns

- **Observer Pattern**: Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
- **Strategy Pattern**: Defines a family of algorithms, encapsulates each one, and makes them interchangeable.
- **Command Pattern**: Encapsulates a request as an object, thereby allowing for parameterization of clients with different requests, queuing of requests, and logging of the parameters.

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

The OCP encourages classes to be open for extension but closed for modification. This means that new functionality can be added without altering existing code.

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

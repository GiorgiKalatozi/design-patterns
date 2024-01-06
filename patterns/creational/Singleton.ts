class DatabaseConnection {
  private static instance: DatabaseConnection;
  private isConnected: boolean = false;

  private constructor() {
    // Simulate database connection initialization
    // For a real-world scenario, you would establish a connection to a database here
    console.log("Database connection initialized");
  }

  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }

  public connect(): void {
    if (!this.isConnected) {
      // Simulate the process of establishing a connection
      console.log("Connecting to the database...");
      this.isConnected = true;
      console.log("Connected to the database");
    }
    console.log("Already connected to the database");
  }

  public disconnect(): void {
    if (this.isConnected) {
      // Simulate the process of disconnecting
      console.log("Disconnecting from the database...");
      // Set isConnected to false after successful disconnection
      this.isConnected = false;
      console.log("Disconnected from the database");
    }
    console.log("Not connected to the database");
  }

  // Other database-related methods can be added here
}

// Example usage
const dbConnection1 = DatabaseConnection.getInstance();
const dbConnection2 = DatabaseConnection.getInstance();

console.log(dbConnection1 === dbConnection2); // Output: true

dbConnection1.connect(); // Output: Connecting to the database...
dbConnection2.disconnect(); // Output: Not connected to the database

// Subsequent calls will use the existing instance
const dbConnection3 = DatabaseConnection.getInstance();
dbConnection3.connect(); // Output: Already connected to the database

// Implementation
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
